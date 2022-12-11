import {Auth, RegisterData} from "./Types";
import axios from "axios";

export function authenticate(data: Auth) {
    return axios.post('/api/sign-in', data);
}

export function registration(data: RegisterData) {
    return axios.post('/api/sign-up', data);
}
