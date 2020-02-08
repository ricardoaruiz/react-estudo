import { toastr } from 'react-redux-toastr';

export default class ToastrService {

    static success(...objToastr) {
        objToastr.forEach(obj => toastr.success(obj.title, obj.message))
    }

    static error(...objToastr) {
        objToastr.forEach(obj => toastr.error(obj.title, obj.message))
    }

}