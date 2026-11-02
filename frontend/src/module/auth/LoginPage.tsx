import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { loginUsuario } from '../../api/services';
import { useAuthStore } from '../../store';
import {
  authCardStyles,
  authBackButtonStyles,
  authContainerStyles,
  authErrorStyles,
  authFieldStyles,
  authIconStyles,
  authIconWrapperStyles,
  authOrbStyles,
  authPageStyles,
  authPrimaryButtonStyles,
  authSubtitleStyles,
  authTitleStyles,
} from '../../shared';
import {
  loginInitialValues,
  loginValidationSchema,
} from './loginValidation';

export const LoginPage = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [apiError, setApiError] = useState('');

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
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
    <>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          ...authPageStyles,
        }}
      >
        <Box
          aria-hidden="true"
          sx={{ ...authOrbStyles, top: '-10rem', left: '-10rem', bgcolor: 'rgba(147, 51, 234, 0.15)' }}
        />
        <Box
          aria-hidden="true"
          sx={{ ...authOrbStyles, right: '-10rem', bottom: '-10rem', bgcolor: 'rgba(59, 130, 246, 0.1)' }}
        />

        <Container maxWidth={false} disableGutters sx={authContainerStyles}>
          <Paper
            elevation={24}
            sx={authCardStyles}
          >
            <Box sx={authIconWrapperStyles}>
              <Box
                sx={authIconStyles}
              >
                <CleaningServicesRoundedIcon fontSize="large" />
              </Box>
            </Box>

            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Typography
                component="h1"
                variant="h5"
                sx={authTitleStyles}
              >
                Iniciar Sesión
              </Typography>
              <Typography variant="body2" sx={authSubtitleStyles}>
                Ingresa tus datos para continuar
              </Typography>
            </Box>

            {apiError && (
              <Alert
                severity="error"
                sx={authErrorStyles}
              >
                {apiError}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              autoComplete="off"
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
                sx={authFieldStyles}
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
                sx={authFieldStyles}
              />

              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                startIcon={<LoginRoundedIcon />}
                disabled={formik.isSubmitting}
                sx={{ mt: 3, ...authPrimaryButtonStyles }}
              >
                {formik.isSubmitting ? 'Verificando...' : 'Iniciar Sesión'}
              </Button>

              <Button
                fullWidth
                startIcon={<ArrowBackRoundedIcon />}
                onClick={() => navigate('/')}
                sx={authBackButtonStyles}
              >
                Volver
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};