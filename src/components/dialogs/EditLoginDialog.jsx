import React from 'react';
import { DialogContent, DialogTitle, FormControl, FormHelperText, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledDialog } from '../styled/StyledDialog';
import { StyledFormLabel } from '../styled/StyledFormLabel';
import { StyledOutlinedInput } from '../styled/StyledOutlinedInput';
import { StyledPrimaryButton } from '../styled/StyledPrimaryButton';

function EditLoginDialog ({ open, onClose }) {
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

        <FormControl variant="standard" fullWidth sx={{ mt: 3 }}>
          <StyledFormLabel>PASSWORD</StyledFormLabel>
          <StyledOutlinedInput type='password' size='small' />
        </FormControl>

        <StyledFormLabel sx={{ mt: 3 }}>MOBILE NUMBER</StyledFormLabel>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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