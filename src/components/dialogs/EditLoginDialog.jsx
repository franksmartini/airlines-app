import React, { useState } from 'react';
import { DialogContent, DialogTitle, FormControl, FormHelperText, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledDialog } from '../styled/StyledDialog';
import { StyledFormLabel } from '../styled/StyledFormLabel';
import { StyledOutlinedInput } from '../styled/StyledOutlinedInput';
import { StyledPrimaryButton } from '../styled/StyledPrimaryButton';
import { StyledLinkPrimaryButton } from '../styled/StyledLinkPrimaryButton';
import { StyledLinkSecondaryButton } from '../styled/StyledLinkSecondaryButton';
import { Controller, useForm } from 'react-hook-form';

function EditLoginDialog ({ open, onClose }) {
  const [changingPassword, setChangingPassword] = useState(false);

  const handleClickShowChangePassword = () => {
    setChangingPassword(true);
  }

  const handleClickHideChangePassword = () => {
    setChangingPassword(false);
  }

  const { handleSubmit, control, formState, watch } = useForm({
    defaultValues: {
      email: '',
      password: '',
      current_password: '',
      new_password: '',
      new_password_confirm: '',
    }
  });

  const handleFormSubmit = () => {
    // Todo
  }

  console.log(formState.errors);

  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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

          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl variant="standard" fullWidth error={!!formState.errors.email}>
                <StyledFormLabel>EMAIL</StyledFormLabel>
                <StyledOutlinedInput
                  {...field}
                  size='small'
                />
                <FormHelperText>
                  Connected email address cannot be changed.
                </FormHelperText>
              </FormControl>
            )}
          />

          {!changingPassword && (
            <>
              <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormControl variant="standard" fullWidth error={!!formState.errors.password} sx={{ mt: 3 }}>
                    <StyledFormLabel>PASSWORD</StyledFormLabel>
                    <StyledOutlinedInput {...field} type='password' size='small' />
                  </FormControl>
                )}
              />
              <StyledLinkPrimaryButton size="small" onClick={handleClickShowChangePassword}>
                Change Password
              </StyledLinkPrimaryButton>
            </>
          )}

          {changingPassword && (
            <>
              <Controller
                control={control}
                name="current_password"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormControl variant="standard" fullWidth error={!!formState.errors.current_password} sx={{ mt: 3 }}>
                    <StyledFormLabel>CURRENT PASSWORD</StyledFormLabel>
                    <StyledOutlinedInput {...field} type='password' size='small' />
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name="new_password"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormControl variant="standard" fullWidth error={!!formState.errors.new_password} sx={{ mt: 3 }}>
                    <StyledFormLabel>NEW PASSWORD</StyledFormLabel>
                    <StyledOutlinedInput {...field} type='password' size='small' placeholder='Input new password' />
                    {!!formState.errors.new_password_confirm && (
                      <FormHelperText error>Password should match</FormHelperText>
                    )}
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name="new_password_confirm"
                rules={{
                  validate: {
                    required: (value) => {
                      if (value === watch('new_password')) return true;
                      return false;
                    }
                  },
                }}
                render={({ field }) => (
                  <FormControl variant="standard" fullWidth error={!!formState.errors.new_password_confirm} sx={{ mt: 3 }}>
                    <StyledFormLabel>CONFIRM NEW PASSWORD</StyledFormLabel>
                    <StyledOutlinedInput {...field} type='password' size='small' placeholder='Confirm new password' />
                  </FormControl>
                )}
              />
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

          <StyledPrimaryButton type="submit" sx={{ mt: 3}} variant='contained'>
            Save
          </StyledPrimaryButton>
        </DialogContent>
      </form>
    </StyledDialog>
  )
};

export default EditLoginDialog;