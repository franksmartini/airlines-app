import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, Grid, Skeleton, Slide, Typography } from '@mui/material';
import React, { forwardRef, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { useAirlineEntity } from '../../queries/useAirlineEntity';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledAttribute = styled(Typography)(() => ({
  fontWeight: 'bold',
  textAlign: 'right',
}));

function AirlineDetailsDialog({
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
    >
      <DialogContent>
        {!isFetching && (
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar src={airline.logo} sx={{ width: 60, height: 60 }} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Name:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Typography>{airline.name}</Typography>
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Country:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Typography>{airline.country}</Typography>
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Slogan:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Typography>{airline.slogan}</Typography>
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Headquarters:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Typography>{airline.head_quaters}</Typography>
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Website:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Typography>{airline.website}</Typography>
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Established:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Typography>{airline.established}</Typography>
            </Grid>
          </Grid>
        )}
        {isFetching && (
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Skeleton variant="circular" height={60} width={60} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Name:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={24} width={240} />
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Country:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={24} width={240} />
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Slogan:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={24} width={240} />
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Headquarters:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={24} width={240} />
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Website:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={24} width={240} />
            </Grid>
            <Grid item xs={4}>
              <StyledAttribute>Established:</StyledAttribute>
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={24} width={240} />
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AirlineDetailsDialog;