import React, { useState } from 'react';
import { DialogContent, DialogTitle, FormControl, FormHelperText, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledDialog } from '../styled/StyledDialog';
import { StyledFormLabel } from '../styled/StyledFormLabel';
import { StyledOutlinedInput } from '../styled/StyledOutlinedInput';
import { StyledPrimaryButton } from '../styled/StyledPrimaryButton';
import { StyledLinkPrimaryButton } from '../styled/StyledLinkPrimaryButton';
import { StyledLinkSecondaryButton } from '../styled/StyledLinkSecondaryButton';

function EditLoginDialog ({ open, onClose }) {
  const [changingPassword, setChangingPassword] = useState(false);

  const handleClickShowChangePassword = () => {
    setChangingPassword(true);
  }

  const handleClickHideChangePassword = () => {
    setChangingPassword(false);
  }

  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>
        Edit Login Details
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
        <Typography sx={{ mt: 3, mb: 2, mx: -1 }} variant='h6'>Login Details</Typography>

        <FormControl variant="standard" fullWidth>
          <StyledFormLabel>EMAIL</StyledFormLabel>
          <StyledOutlinedInput defaultValue='kyla@company-abc.com' size='small' />
          <FormHelperText>
            Connected email address cannot be changed.
          </FormHelperText>
        </FormControl>

        {!changingPassword && (
          <>
            <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
              <StyledFormLabel>PASSWORD</StyledFormLabel>
              <StyledOutlinedInput type='password' size='small' />
            </FormControl>
            <StyledLinkPrimaryButton size="small" onClick={handleClickShowChangePassword}>
              Change Password
            </StyledLinkPrimaryButton>
          </>
        )}

        {changingPassword && (
          <>
            <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
              <StyledFormLabel>CURRENT PASSWORD</StyledFormLabel>
              <StyledOutlinedInput type='password' size='small' />
            </FormControl>
            <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
              <StyledFormLabel>NEW PASSWORD</StyledFormLabel>
              <StyledOutlinedInput type='password' size='small' placeholder='Input new password' />
            </FormControl>
            <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
              <StyledFormLabel>CONFIRM NEW PASSWORD</StyledFormLabel>
              <StyledOutlinedInput type='password' size='small' placeholder='Confirm new password' />
            </FormControl>
            <StyledLinkSecondaryButton size="small" onClick={handleClickHideChangePassword}>
              Cancel Change Password
            </StyledLinkSecondaryButton>
          </>
        )}

        <StyledFormLabel sx={{ mt: 3 }}>MOBILE NUMBER</StyledFormLabel>

        <Grid container columnSpacing={1}>
          <Grid item xs={3}>
            <FormControl variant="standard" fullWidth>
              <StyledOutlinedInput size='small' />
            </FormControl>
          </Grid>
          <Grid item xs={9}>
            <FormControl variant="standard" fullWidth>
              <StyledOutlinedInput size='small' />
            </FormControl>
          </Grid>
        </Grid>

        <StyledPrimaryButton sx={{ mt: 3}} variant='contained'>
          Save
        </StyledPrimaryButton>
      </DialogContent>
    </StyledDialog>
  )
};

export default EditLoginDialog;