import React from 'react';
import { DialogContent, DialogTitle, FormControl, IconButton, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledDialog } from '../styled/StyledDialog';
import { StyledFormLabel } from '../styled/StyledFormLabel';
import { StyledOutlinedInput } from '../styled/StyledOutlinedInput';
import { StyledPrimaryButton } from '../styled/StyledPrimaryButton';
import { StyledWarningButton } from '../styled/StyledWarningButton';

function DeactivateDialog ({ open, onClose }) {
  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>
        Deactivate Account
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 10,
            color: '#363636',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ mt: 3, mb: 2 }} variant='h6'>Deactivate Account</Typography>

        <Paper elevation={0} square sx={{ backgroundColor: '#f5f8fe', p: 3 }} >
          <Typography sx={{ color: '#2e60f5', fontSize: '17px', fontWeight: 500 }}>
            Verification
          </Typography>
          <Typography sx={{ color: '#666', fontSize: 13, mt: 1 }}>
            Verify your identity by logging in your account details again.
          </Typography>

          <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
            <StyledFormLabel>EMAIL</StyledFormLabel>
            <StyledOutlinedInput defaultValue='kyla@company-abc.com' size='small' />
          </FormControl>

          <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
            <StyledFormLabel>PASSWORD</StyledFormLabel>
            <StyledOutlinedInput type='password' size='small' />
          </FormControl>

          <StyledPrimaryButton sx={{ mt: 3}} variant='contained'>
            Submit
          </StyledPrimaryButton>
        </Paper>

        <Typography sx={{ color: '#666', fontSize: 13, mt: 3, fontStyle: 'italic' }}>
          Please note: Deactivation will be effective immediately Upon deactivation,
          you may only reactivate your account by getting int touch with the Findpro Team.
        </Typography>

        <StyledWarningButton sx={{ mt: 3 }}>
          Deactivate Account
        </StyledWarningButton>
      </DialogContent>
    </StyledDialog>
  )
};

export default DeactivateDialog;