import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BottomBarComponent(){
    const [value, setValue] = React.useState(0);
    return(
        <>
         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            <Stack direction="row" spacing={2}>
      <Button style={{width:'120px', height:'40px'}} variant="contained">Save</Button>
      <Button style={{width:'320px', height:'40px'}} variant="contained" href="#contained-buttons">
        Submit Report
      </Button>
    </Stack>
        </BottomNavigation>
      </Paper>
        </>
    )
}