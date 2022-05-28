import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {

    constructor (private prisma: PrismaService) {}
   
    signup() {
        return {message: 'Signup End Point'}
    }

    login() {
        return {message: 'Login End Point'}
    }

 }