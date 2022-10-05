import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Add } from "@material-ui/icons";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center'}));

export default function AddToDoComponent() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
    <Paper style={{marginTop:'-36px'}} elevation={3}>
      <div class="container text-center">
        <div class="row mb-3">
          <div class="col-12">
          <Typography className="MuiCardHeader-title" gutterBottom>
          IF MONITOR ARE NOT WORKING, PLEASE CONTACT ENGINEERING / MAINTENANCE TEAM
      </Typography>
          </div>
        </div>
        <div class="row mb-3">
        <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              MONITORS ARE ON AND IN GOOD CONDITION
            </Grid>
            <Grid item xs={6} md={4}>
              <FormControl>
                <RadioGroup
                  className="rdotop"
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
            </Grid>
        </Grid>
        <TextField fullWidth label="Enter Comments" id="fullWidth" />
        </div>
      </div>
      </Paper>
    </>
  )
}