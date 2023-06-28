import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledWarningButton = styled(Button)(() => ({
    width: '100%',
    background: '#fbecea',
    color: '#c42930',
    borderRadius: 0,
    padding: '14px 0',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#ebdcda',
    }
}));
