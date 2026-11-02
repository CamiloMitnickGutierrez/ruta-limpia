import { useState } from 'react';
import { Box, Button, Container, CssBaseline, TextField, Typography, Alert } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { loginUsuario } from '../../api/services/authService';
import { useAuthStore } from '../../store/authStore'

// 1. Esquema de Validación con Yup
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Ingresa un correo válido')
    .required('El correo es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria'),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [apiError, setApiError] = useState('');

  // 2. Configuración de Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setApiError('');
      try {
        const data = await loginUsuario(values.email, values.password);
        
        setAuth(data.token, data.usuario);
        
        const role = data.usuario.rol.toLowerCase();
        navigate(role === 'admin' ? '/dashboard' : '/rutalimpia');
      } catch (error: unknown) {
        setApiError(error instanceof Error ? error.message : 'Credenciales inválidas');
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs" sx={{ px: { xs: 2, sm: 3 } }}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          py: { xs: 2, sm: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontWeight: 300, mb: 2 }}>
          Iniciar Sesión
        </Typography>

        {apiError && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {apiError}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            mt: 1,
            width: '100%',
            maxWidth: 400,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Correo Electrónico"
            autoComplete="new-password"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            disabled={formik.isSubmitting}
            sx={{ 
              mt: 3, 
              mb: 2, 
              backgroundColor: '#4fd32b',
              '&:hover': { backgroundColor: '#45be25' }
            }}
          >
            {formik.isSubmitting ? 'Verificando...' : 'Iniciar Sesión'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};