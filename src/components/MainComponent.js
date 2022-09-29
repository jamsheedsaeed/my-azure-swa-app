import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddToDoComponent from './AddToDoComponent';
import ToDoListComponent from './ToDoListComponent';
import SurveyComponent from './SurveyComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainComponent() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:'5%', marginLeft:'10%'}}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Item>
            <p style={{fontSize:'30px', fontFamily:'monospace', color:'red'}}>The survey will take approximately 12 minutes to complete.
Rounds takes place four (4) times per 12 hour shifts and three (3) per 8 hour shift</p>
            {/* <AddToDoComponent /> */}
            <SurveyComponent />
            {/* <ToDoListComponent /> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
