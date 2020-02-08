import ToastrService from '../service/ToastrService';

export const handleApiErrors = (title = 'Error', errors) => {
    const toastrObjs = errors.map(e => ({title, message: e.message}));
    ToastrService.error(...toastrObjs);
}