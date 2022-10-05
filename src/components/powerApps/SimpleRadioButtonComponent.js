import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function SimpleRadioButtonComponent() {

    const names = [
        '1st Round (Power Walk/Hand off)',
        '2nd Round-1st hour',
        '3rd Round-3rd hour',
        '4th Round-5th hour',
        '5th Round-7th hour',
    ];

    return (
        <>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    {names.map((name) => (
                        <FormControlLabel value={name} control={<Radio />} label={name} />
                    ))}
                </RadioGroup>
            </FormControl>
        </>
    )
}