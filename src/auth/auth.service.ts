import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
   
    signup() {
        return {message: 'Signup End Point'}
    }

    login() {
        return {message: 'Login End Point'}
    }

 }