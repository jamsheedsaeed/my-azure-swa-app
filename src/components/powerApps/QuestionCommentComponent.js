import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function QuestionCommentComponent() {
    const questions = [
        "Verify Crewing Level/Production - Ensure People are available, Any Calls Offs?",
        "Verify Crewing Level/Production - Ensure People are available, Any Calls Offs?",
        "Verify Crewing Level/Production - Ensure People are available, Any Calls Offs?",
        "Verify Crewing Level/Production - Ensure People are available, Any Calls Offs?",
        "Verify Crewing Level/Production - Ensure People are available, Any Calls Offs?"
    ]
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {questions.map((question,index) => (
                    <>
                        {index%2 == 0 ?  <div class="row mb-3" style={{backgroundColor:'#fff'}}>
                            <div class="col-auto">
                                <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>A.</Typography>
                            </div>
                            <div class="col-6">
                                <Typography style={{ width: '70%', marginLeft: '10%',color: '#005A84', fontWeight: 'bold' }} >{question}</Typography>

                            </div>
                            <div class="col">
                                <TextField style={{ width: '100%' }} id="outlined-basic" label="Enter Comments" variant="outlined" />
                            </div>
                        </div> : <div class="row mb-3" style={{backgroundColor:''}}>
                            <div class="col-auto">
                                <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>A.</Typography>
                            </div>
                            <div class="col-6">
                                <Typography style={{ width: '70%', marginLeft: '10%',color: '#005A84', fontWeight: 'bold' }}>{question}</Typography>

                            </div>
                            <div class="col">
                                <TextField style={{ width: '100%' }} id="outlined-basic" label="Enter Comments" variant="outlined" />
                            </div>
                        </div>}

                    </>
                ))}

            </Box>

        </>
    )
}