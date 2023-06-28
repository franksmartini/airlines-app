import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { AIRLINES_LIST_ENTITY_HEIGHT } from '../constants';
import AirlineDetailsDialog from './dialogs/AirlineDetailsDialog';
import EditAirlineDialog from './dialogs/EditAirlineDialog';

function AirlineRow({ airline, onViewDetails }) {
  const [opened, setOpened] = useState(false);
  const [editing, setEditing] = useState(false);

  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{height: AIRLINES_LIST_ENTITY_HEIGHT }}
        secondaryAction={
          <>
            <Tooltip title="Edit" disableInteractive>
              <IconButton size="small" onClick={() => setEditing(true)}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        }
      >
        <ListItemButton onClick={() => setOpened(true)}>
          <ListItemAvatar>
            <Avatar alt={airline.name} src={airline.logo} />
          </ListItemAvatar>
          <ListItemText
            primary={airline.name}
            secondary={airline.country}
          />
        </ListItemButton>
      </ListItem>
      {opened && (
        <AirlineDetailsDialog
          open={opened}
          onClose={() => setOpened(false)}
          airlineId={airline.id}
        />
      )}
      {editing && (
        <EditAirlineDialog
          open={editing}
          onClose={() => setEditing(false)}
          airlineId={airline.id}
        />
      )}
    </>
  )
};

export default AirlineRow;