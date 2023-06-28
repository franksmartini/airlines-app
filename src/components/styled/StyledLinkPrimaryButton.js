import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLinkPrimaryButton = styled(Button)(() => ({
  textDecoration: 'underline',
  textTransform: 'none',
  color: '#2e60f5',
  textDecorationColor: '#adc1fa',

  '&:hover': {
    backgroundColor: 'transparent',
  }
}));
