import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLinkSecondaryButton = styled(Button)(() => ({
  textDecoration: 'underline',
  color: 'black',
  textDecorationColor: '#bbb',
  textTransform: 'none',
  paddingBottom: '3px',

  '&:hover': {
    backgroundColor: 'transparent',
  }
}));
