import { create } from 'zustand';

interface Usuario {
    id: string;
    email: string;
    nombre: string;
    rol: string;
}

interface AuthState {
    token: string | null;
    usuario: Usuario | null;
    setAuth: (token: string, usuario: Usuario) => void;
    logout: () => void;
}

const getStoredUser = (): Usuario | null => {
    const storedUser = localStorage.getItem('usuario');

    if (!storedUser) {
        return null;
    }

    try {
        return JSON.parse(storedUser) as Usuario;
    } catch {
        localStorage.removeItem('usuario');
        return null;
    }
};

export const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem('token'),
    usuario: getStoredUser(),

    setAuth: (token, usuario) => {
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));

        set({ token, usuario });
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');

        set({
            token: null,
            usuario: null
        });
    }
}));