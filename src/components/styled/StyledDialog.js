import { Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper.MuiPaper-root': {
    borderRadius: '12px',
  },
  '& .MuiDialogTitle-root': {
    textAlign: 'center',
    borderBottom: 'solid 1px #ddd',
    fontSize: '18px',
    color: '#363636',
    padding: '15px 0',
	},
  '& .MuiDialogContent-root': {
    paddingLeft: '40px',
    paddingRight: '40px',
  }
}));
