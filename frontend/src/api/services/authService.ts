import axios from 'axios';
import { api } from './api';

interface Usuario {
    id: string;
    email: string;
    nombre: string;
    rol: string;
}

interface LoginResponse {
    message: string;
    usuario: Usuario;
    token: string;
}

export const loginUsuario = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    try {
        const response = await api.post<LoginResponse>(
            '/auth/login',
            { email, password }
        );

        return response.data;

    } catch (error: unknown) {
        throw new Error(
            axios.isAxiosError(error)
                ? error.response?.data?.message || 'Error al iniciar sesión'
                : 'Error al iniciar sesión'
        );
    }
};