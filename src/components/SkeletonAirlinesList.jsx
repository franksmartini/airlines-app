import React from 'react';
import { AIRLINES_LIST_ENTITY_HEIGHT, AIRLINES_LIST_ROWS } from '../constants';
import { Skeleton } from '@mui/material';

function SkeletonAirlinesList () {
  return (
    <>
      {Array.from({ length: AIRLINES_LIST_ROWS }, (_, k) => k + 1).map((_, index) => (
        <Skeleton key={index} variant="rectangular" height={AIRLINES_LIST_ENTITY_HEIGHT - 4} sx={{marginTop: 2, marginBottom: 2}} />
      ))}
    </>
  )
}

export default SkeletonAirlinesList;