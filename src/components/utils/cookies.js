import {parse} from 'nookies';
export const parseCookies = (req) =>{
    return parse(req?req.headers.cookie || "" : document.cookie);
}