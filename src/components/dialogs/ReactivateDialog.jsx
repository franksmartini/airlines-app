import React from 'react';
import { DialogContent, DialogTitle, FormControl, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledDialog } from '../styled/StyledDialog';
import { StyledFormLabel } from '../styled/StyledFormLabel';
import { StyledOutlinedInput } from '../styled/StyledOutlinedInput';
import { StyledPrimaryButton } from '../styled/StyledPrimaryButton';

function ReactivateDialog ({ open, onClose }) {
  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>
        Reactivate Account
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
        <Typography sx={{ mt: 3, mb: 2 }} variant='h6'>Reactivate Account</Typography>

        <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
          <StyledFormLabel>REASON FOR REACTIVATION</StyledFormLabel>
          <StyledOutlinedInput placeholder='Text input' size='small' />
        </FormControl>
        
        <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
          <StyledFormLabel>PROVIDE FURTHER DETAILS</StyledFormLabel>
          <textarea rows={10} placeholder='Text Area' style={{ resize: 'none', borderColor: '#bbb', p: 1 }}></textarea>
        </FormControl>

        <Typography sx={{ color: '#666', fontSize: 13, mt: 3, fontStyle: 'italic' }}>
          Please note: Reactivation can only be effective once the Findpro.ai Team has
          investigated and approved the request.
          Upon submission of request, standby for further directives from the Findpro.ai
          Team via your account email's inbox.
        </Typography>

        <StyledPrimaryButton sx={{ mt: 3 }} variant='contained'>
          Request Reactivation
        </StyledPrimaryButton>
      </DialogContent>
    </StyledDialog>
  )
};

export default ReactivateDialog;