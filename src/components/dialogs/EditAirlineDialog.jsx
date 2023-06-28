import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Skeleton, Slide, TextField } from '@mui/material';
import React, { forwardRef, useMemo } from 'react';
import { useAirlineEntity } from '../../queries/useAirlineEntity';
import { Controller, useForm } from 'react-hook-form';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditAirlineForm({ airline, onClose }) {
  const { handleSubmit, control, formState } = useForm({ defaultValues: {
    name: airline?.name ?? '',
    slogan: airline?.slogan ?? '',
    head_quaters: airline?.head_quaters ?? '',
    website: airline?.website ?? '',
  }});

  const handleFormSubmit = () => {
    // Todo: handle edit request

    onClose();
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <DialogContent>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} sx={{ mb: 2 }} variant="standard" error={!!formState.errors.name} label="Name:" fullWidth />}
        />
        <Controller
          control={control}
          name="slogan"
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} sx={{ mb: 2 }} variant="standard" error={!!formState.errors.slogan} label="Slogan:" fullWidth />}
        />
        <Controller
          control={control}
          name="head_quaters"
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} sx={{ mb: 2 }} variant="standard" error={!!formState.errors.head_quaters} label="Headquaters:" fullWidth />}
        />
        <Controller
          control={control}
          name="website"
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} variant="standard" error={!!formState.errors.website} label="Website:" fullWidth />}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type='submit'>Update</Button>
      </DialogActions>
    </form>
  )
}

function EditAirlineDialog({
  open,
  onClose,
  airlineId,
}) {
  const { data, isFetching } = useAirlineEntity(airlineId);

  const airline = useMemo(() => isFetching ? null : data.data, [data, isFetching]);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Edit Airline</DialogTitle>
      {!isFetching && airline && (
        <EditAirlineForm
          airline={airline}
          onClose={onClose}
        />
      )}
      {isFetching && (
        <DialogContent>
          <Skeleton variant="rectangular" height={48} sx={{ marginBottom: 2 }} />
          <Skeleton variant="rectangular" height={48} sx={{ marginBottom: 2 }} />
          <Skeleton variant="rectangular" height={48} sx={{ marginBottom: 2 }} />
          <Skeleton variant="rectangular" height={48} sx={{ marginBottom: 2 }} />
        </DialogContent>
      )}
    </Dialog>
  )
}

export default EditAirlineDialog;