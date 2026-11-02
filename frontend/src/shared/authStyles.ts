import type { SxProps, Theme } from '@mui/material/styles';

export const authPageStyles = {
  minHeight: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  bgcolor: '#050508',
  boxSizing: 'border-box',
  px: { xs: 1.5, sm: 2 },
  pt: 'max(1.5rem, env(safe-area-inset-top))',
  pb: 'max(1.5rem, env(safe-area-inset-bottom))',
} satisfies SxProps<Theme>;

export const authOrbStyles = {
  position: 'absolute',
  width: '24rem',
  height: '24rem',
  borderRadius: '50%',
  filter: 'blur(80px)',
  pointerEvents: 'none',
} satisfies SxProps<Theme>;

export const authCardStyles = {
  width: '100%',
  boxSizing: 'border-box',
  p: { xs: 3, sm: 5 },
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: { xs: '20px', sm: '24px' },
  bgcolor: 'rgba(18, 20, 28, 0.75)',
  backdropFilter: 'blur(16px)',
  transition: 'transform 0.3s ease-in-out',
  '@media (hover: hover)': {
    '&:hover': { transform: 'translateY(-4px)' },
  },
} satisfies SxProps<Theme>;

export const authContainerStyles = {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: 420,
} satisfies SxProps<Theme>;

export const authIconWrapperStyles = {
  display: 'flex',
  justifyContent: 'center',
  mb: 3,
} satisfies SxProps<Theme>;

export const authIconStyles = {
  width: '3.5rem',
  height: '3.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid rgba(168, 85, 247, 0.2)',
  borderRadius: '16px',
  bgcolor: 'rgba(168, 85, 247, 0.1)',
  color: '#c084fc',
  boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.2)',
} satisfies SxProps<Theme>;

export const authWelcomeTextStyles = {
  mb: 4,
  textAlign: 'center',
} satisfies SxProps<Theme>;

export const authSubtitleStyles = {
  color: '#94a3b8',
} satisfies SxProps<Theme>;

export const authTitleStyles = {
  mb: 1,
  color: '#fff',
  fontSize: { xs: '1.45rem', sm: '1.5rem' },
  fontWeight: 600,
  letterSpacing: '-0.025em',
} satisfies SxProps<Theme>;

export const authActionsStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
} satisfies SxProps<Theme>;

export const authFieldStyles = {
  '& .MuiInputLabel-root': { color: '#94a3b8' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#c084fc' },
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': { borderColor: 'rgba(148, 163, 184, 0.35)' },
    '&:hover fieldset': { borderColor: 'rgba(192, 132, 252, 0.65)' },
    '&.Mui-focused fieldset': { borderColor: '#a855f7' },
  },
  '& .MuiFormHelperText-root': { color: '#fca5a5' },
} satisfies SxProps<Theme>;

export const authErrorStyles = {
  mb: 2,
  color: '#fecaca',
  bgcolor: 'rgba(127, 29, 29, 0.35)',
  '& .MuiAlert-icon': { color: '#f87171' },
} satisfies SxProps<Theme>;

export const authPrimaryButtonStyles = {
  minHeight: 52,
  borderRadius: '16px',
  textTransform: 'none',
  fontSize: '0.95rem',
  fontWeight: 500,
  background: 'linear-gradient(to right, #7c3aed, #9333ea)',
  boxShadow: '0 10px 20px -5px rgba(147, 51, 234, 0.4)',
  '&:hover': {
    background: 'linear-gradient(to right, #6d28d9, #7e22ce)',
    boxShadow: '0 15px 25px -5px rgba(147, 51, 234, 0.6)',
  },
} satisfies SxProps<Theme>;

export const authBackButtonStyles = {
  mt: 1,
  minHeight: 44,
  color: '#94a3b8',
  textTransform: 'none',
  '&:hover': {
    color: '#c084fc',
    bgcolor: 'rgba(168, 85, 247, 0.08)',
  },
} satisfies SxProps<Theme>;

export const authSecondaryButtonStyles = {
  minHeight: 52,
  borderRadius: '16px',
  textTransform: 'none',
  fontSize: '0.95rem',
  fontWeight: 500,
  color: '#fff',
  borderColor: 'rgba(168, 85, 247, 0.3)',
  bgcolor: 'rgba(15, 23, 42, 0.6)',
  '&:hover': {
    borderColor: 'rgba(168, 85, 247, 0.6)',
    bgcolor: 'rgba(30, 41, 59, 0.8)',
    boxShadow: '0 10px 20px -5px rgba(168, 85, 247, 0.2)',
  },
} satisfies SxProps<Theme>;
