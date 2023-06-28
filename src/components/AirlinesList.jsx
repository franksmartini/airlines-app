import React, { useMemo, useState } from 'react';
import { Container, FormControl, Input, InputAdornment, InputLabel, List, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAirlinesList } from '../queries/useAirlinesList';
import { AIRLINES_LIST_ENTITY_HEIGHT, AIRLINES_LIST_ROWS } from '../constants';
import { useVirtualizer } from '@tanstack/react-virtual';
import AirlineRow from './AirlineRow';
import SkeletonAirlinesList from './SkeletonAirlinesList';

function Airlines() {
  const { data, isFetching } = useAirlinesList();

  const [searchValue, setSearchValue] = useState('');

  const filteredAirlines = useMemo(() => isFetching ? [] :
    data.data.filter(airline => 
      airline.id &&
      (
        (airline.name && airline.name.toLowerCase().includes(searchValue.toLowerCase())) ||
        (airline.country && airline.country.toLowerCase().includes(searchValue.toLowerCase()))
      )
    ),
    [
      data,
      isFetching,
      searchValue,
    ]
  );

  const parentRef = React.useRef()
  const virtualizer = useVirtualizer({
    count: filteredAirlines.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => AIRLINES_LIST_ENTITY_HEIGHT,
  })

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <Container maxWidth="sm" sx={{ p: 4 }}>
      <FormControl variant="standard" fullWidth>
        <InputLabel>
          Search airlines by name and country
        </InputLabel>
        <Input
          startAdornment={
            <InputAdornment position="start">
            <SearchIcon />
            </InputAdornment>
          }
          disabled={isFetching}
          value={searchValue}
          onChange={handleSearchValueChange}
          autoComplete='off'
        />
      </FormControl>
      {!isFetching && (
        filteredAirlines.length > 0 ? (
          <List ref={parentRef} sx={{maxHeight: AIRLINES_LIST_ENTITY_HEIGHT * AIRLINES_LIST_ROWS, overflow: 'scroll', p: 0}}>
            <div
              style={{
                height: virtualizer.getTotalSize(),
                width: '100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transform: `translateY(${virtualizer.getVirtualItems()[0].start}px)`,
                }}
              >
                {virtualizer.getVirtualItems().map((virtualRow) => {
                  const airline = filteredAirlines[virtualRow.index]
                  return (
                    <AirlineRow
                      key={`airline-row-${virtualRow.index}`}
                      airline={airline}
                    />
                  )
                })}
              </div>
            </div>
          </List>
        ) : (
          <Typography sx={{mt: 2}}>No airlines found for search value.</Typography>
        )
      )}
      {isFetching && (
        <SkeletonAirlinesList />
      )}
    </Container>
  )
}

export default Airlines;
