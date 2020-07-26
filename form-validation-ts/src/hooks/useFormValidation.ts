import { useCallback, useState, ChangeEvent, useEffect, FormEvent, SyntheticEvent } from 'react';

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

function useFormValidation(initialData: IValues, validations: IValidations) {

  const [data, setData] = useState<IValues>(initialData);

  const [errors, setErrors] = useState<IErrors>(() => {
    const initialErrors: IErrors = {};
    Object.keys(initialData).forEach(key => {
      initialErrors[key] = '';
    });
    return initialErrors;
  });

  const [toucheds, setToucheds] = useState<IToucheds>(() => {
    const initialToucheds: IToucheds = {};
    Object.keys(initialData).forEach(key => {
      initialToucheds[key] = false;
    });
    return initialToucheds;
  });

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData(state => ({ ...state, [name]: value }));
  }, []);

  const onBlur = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    const { name } = event.currentTarget;

    setToucheds(state => ({ ...state, [name]: true }));
  }, []);

  const validate = useCallback((data: IValues) => {
    Object.keys(validations).forEach(field => {
      const error = validations[field](data);
      setErrors(state => ({ ...state, [field]: error }));
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const touchAllFields = useCallback((data: IValues) => {
    Object.keys(toucheds).forEach(field => toucheds[field] = true);
  }, [toucheds]);

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('data', data, 'errors', errors);
    validate(data);
    touchAllFields(data);
  }, [data, errors, touchAllFields, validate])

  useEffect(() => {
    validate(data);
  }, [data, validate]);

  return { data, errors, toucheds, onChange, onBlur, onSubmit };
}

export default useFormValidation;
