import {
  useCallback,
  useState,
  ChangeEvent,
  useEffect,
  FormEvent,
  SyntheticEvent,
  MouseEvent
} from 'react';
import { ObjectSchema, ValidationError } from 'yup';

interface IValues {
  [key: string]: any;
}

interface IErrors {
  [key: string]: string;
}

interface IToucheds {
  [key: string]: boolean;
}

interface IValidations {
  [key: string]: (data: any) => string;
}

function useFormValidation(initialData: IValues, validations: IValidations | null, yupValidations: ObjectSchema | null) {

  const [data, setData] = useState<IValues>(initialData);

  const initErrors = useCallback(() => {
    const initialErrors: IErrors = {};
    Object.keys(initialData).forEach(key => {
      initialErrors[key] = '';
    });
    return initialErrors;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initToucheds = useCallback(() => {
    const initialToucheds: IToucheds = {};
    Object.keys(initialData).forEach(key => {
      initialToucheds[key] = false;
    });
    return initialToucheds;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState<IErrors>(() => initErrors());
  const [toucheds, setToucheds] = useState<IToucheds>(() => initToucheds());

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData(state => ({ ...state, [name]: value }));
  }, []);

  const onBlur = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    const { name } = event.currentTarget;

    setToucheds(state => ({ ...state, [name]: true }));
  }, []);

  const validate = useCallback(async (data: IValues) => {
    if (yupValidations) {
      try {
        await yupValidations.validate(data, { abortEarly: false });
        setErrors(initErrors());
      } catch (yupErrors) {
        if (yupErrors instanceof ValidationError) {
          Object.keys(errors).forEach(error => {
            const foundError = yupErrors.inner.find((yupError: ValidationError) => yupError.path === error);
            if (!foundError) {
              setErrors(state => ({ ...state, [error]: '' }));
            } else {
              yupErrors.inner.forEach((validationError: ValidationError) => {
                const { path, message } = validationError;
                setErrors(state => ({ ...state, [path]: message }));
              })
            }
          });
        }
      }
    }
    if (validations) {
      Object.keys(validations).forEach(field => {
        const error = validations[field](data);
        setErrors(state => ({ ...state, [field]: error }));
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const touchAllFields = useCallback((data: IValues) => {
    const allTouched = { ...toucheds };
    Object.keys(allTouched).forEach(field => {
      allTouched[field] = true;
    });
    setToucheds(allTouched);
  }, [toucheds]);

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validate(data);
    touchAllFields(data);
  }, [data, touchAllFields, validate])

  const onReset = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const resetData = { ...data };
    Object.keys(resetData).forEach(field => {
      resetData[field] = ''
    });
    setData(resetData);
    setErrors(initErrors());
    setToucheds(initToucheds());
  }, [data, initErrors, initToucheds])

  useEffect(() => {
    validate(data);
  }, [data, toucheds, validate]);


  useEffect(() => {
    const hasErrors = Object.keys(errors).some(field => errors[field] !== '')
    setIsValid(!hasErrors);
  }, [errors]);

  return { data, errors, toucheds, onChange, onBlur, onSubmit, onReset, isValid };
}

export default useFormValidation;
