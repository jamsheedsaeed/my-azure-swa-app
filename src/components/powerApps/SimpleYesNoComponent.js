import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function SimpleYesNoComponent() {
    const [value, setValue] = React.useState('');
    const [showTextField, setShowTextField] = React.useState(true);
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        if (event.target.value === 'N') {
            setShowTextField(false);
        } else {
            setShowTextField(true);
        }
    };
    return (
        <>
            <div class="container">
                <div class="row mb-3" style={{ backgroundColor: '#fff' }}>
                    <div class="col-md-auto">
                        <Typography></Typography>
                    </div>
                    <div class="col">
                        <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>Monitors ON and in good condition.</Typography>
                    </div>
                    <div class="col-md-auto">
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                            <FormControlLabel value="N" control={<Radio />} label="No" />

                        </RadioGroup>
                    </div>
                </div>
                <div class="row mb-3" style={{ backgroundColor: '#fff' }}>
                    <div class="col">
                        <TextField hidden={showTextField} style={{ width: '100%' }} id="outlined-basic" label="Enter Comments" variant="outlined" />
                    </div>
                </div>
            </div>
        </>
    )
}