import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPrimaryButton = styled(Button)(() => ({
    width: '100%',
    background: 'black',
    borderRadius: 0,
    padding: '14px 0',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#333',
    }
}));
