import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { useNavigate } from 'react-router-dom';
import {
  authCardStyles,
  authActionsStyles,
  authContainerStyles,
  authIconStyles,
  authIconWrapperStyles,
  authOrbStyles,
  authPageStyles,
  authPrimaryButtonStyles,
  authSecondaryButtonStyles,
  authSubtitleStyles,
  authTitleStyles,
  authWelcomeTextStyles,
} from '../shared';

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={authPageStyles}
    >
      <Box
        aria-hidden="true"
        sx={{ ...authOrbStyles, top: '-10rem', left: '-10rem', bgcolor: 'rgba(147, 51, 234, 0.15)' }}
      />
      <Box
        aria-hidden="true"
        sx={{ ...authOrbStyles, right: '-10rem', bottom: '-10rem', bgcolor: 'rgba(59, 130, 246, 0.1)' }}
      />

      <Container
        maxWidth={false}
        disableGutters
        sx={authContainerStyles}
      >
        <Paper
          elevation={24}
          sx={{ ...authCardStyles, textAlign: 'center' }}
        >
          <Box sx={authIconWrapperStyles}>
            <Box
              sx={{
                ...authIconStyles,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05) rotate(10deg)' },
              }}
            >
              <CleaningServicesRoundedIcon fontSize="large" />
            </Box>
          </Box>

          <Box sx={authWelcomeTextStyles}>
            <Typography
              component="h1"
              variant="h5"
              sx={authTitleStyles}
            >
              Ruta Limpia
            </Typography>
            <Typography variant="body2" sx={authSubtitleStyles}>
              Selecciona una opción para continuar con tu acceso
            </Typography>
          </Box>

          <Box sx={authActionsStyles}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              startIcon={<LoginRoundedIcon />}
              onClick={() => navigate('/login')}
              sx={{ py: 1.5, ...authPrimaryButtonStyles }}
            >
              Iniciar Sesión
            </Button>

            <Button
              fullWidth
              size="large"
              variant="outlined"
              startIcon={<PersonAddAltRoundedIcon />}
              onClick={() => navigate('/login')}
              sx={{ py: 1.5, ...authSecondaryButtonStyles }}
            >
              Regístrate
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};