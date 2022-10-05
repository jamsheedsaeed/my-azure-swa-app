import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SimpleSelectComponent from "./SimpleSelectComponent";
import SimpleRadioButtonComponent from "./SimpleRadioButtonComponent";
import QuestionCommentComponent from "./QuestionCommentComponent";
import SimpleYesNoComponent from "./SimpleYesNoComponent";

export default function HeaderComponent() {
    return (
        <>
            <Box
                sx={{
                    display: 'block',
                    '& > :not(style)': {
                        m: 0,
                        width: 1100,
                        height: '100%',
                    },
                }}
            >
                <div class="card shadow-sm">
                    <div class="card-header" style={{ backgroundColor: '#fff', height: '20%' }}>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%' }}  >
                                <Typography style={{ color: '#444444', fontSize: '22' }}>The survey will take approximately 12 minutes to complete.</Typography>
                                <Typography> Rounds takes place four (4) times per 12 hour shifts and three (3) per 8 hour shift</Typography>
                            </Paper>
                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-sm" style={{ height: '30%' }}>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%' }}  >
                                <Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>Line Walk through.</Typography>
                                <Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>Identify Which Line the walk through take place.</Typography>
                            </Paper>
                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-sm" style={{ bgcolor: '#eeeee4', border: 'none' }}>
                    <div class="card-header" style={{ backgroundColor: '#fff' }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar variant="circular" sx={{ bgcolor: '#fff', border: '1px solid #005A84 !important', borderWidth: 'medium !important' }} style={{ height: '25px' }}><Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>1</Typography></Avatar>
                            <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>NAME:</Typography>
                        </Stack>
                    </div>
                    <div class="card-body" style={{ backgroundColor: '#f8f8f8' }}>
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%', backgroundColor: '#f8f8f8' }}  >
                                <Typography style={{ marginLeft: '5%', fontWeight: 'bold' }}>John Doe</Typography>
                            </Paper>
                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-sm" style={{ bgcolor: '#eeeee4', border: 'none' }}>
                    <div class="card-header" style={{ backgroundColor: '#fff' }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar variant="circular" sx={{ bgcolor: '#fff', border: '1px solid #005A84 !important', borderWidth: 'medium !important' }} style={{ height: '25px' }}><Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>2</Typography></Avatar>
                            <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>DATE:</Typography>
                        </Stack>
                    </div>
                    <div class="card-body" style={{ backgroundColor: '#f8f8f8' }}>
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%', backgroundColor: '#f8f8f8' }}  >
                                <Typography style={{ marginLeft: '5%', fontWeight: 'bold' }}>08/09/2022</Typography>
                            </Paper>
                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-sm" style={{ bgcolor: '#eeeee4', border: 'none' }}>
                    <div class="card-header" style={{ backgroundColor: '#fff' }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar variant="circular" sx={{ bgcolor: '#fff', border: '1px solid #005A84 !important', borderWidth: 'medium !important' }} style={{ height: '25px' }}><Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>3</Typography></Avatar>
                            <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>WHATS YOUR PLANT NUMBER:</Typography>
                        </Stack>
                    </div>
                    <div class="card-body" style={{ backgroundColor: '#f8f8f8' }}>
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%', backgroundColor: '#f8f8f8' }}  >
                                <Typography style={{ marginLeft: '5%', fontWeight: 'bold' }}>Select Plant Company Code</Typography>
                            </Paper>
                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-sm" style={{ bgcolor: '#eeeee4', border: 'none' }}>
                    <div class="card-header" style={{ backgroundColor: '#fff' }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar variant="circular" sx={{ bgcolor: '#fff', border: '1px solid #005A84 !important', borderWidth: 'medium !important' }} style={{ height: '25px' }}><Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>4</Typography></Avatar>
                            <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>WHATS YOUR PLANT NUMBER:</Typography>
                        </Stack>
                    </div>
                    <div class="card-body" style={{ backgroundColor: '#f8f8f8' }}>
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%', backgroundColor: '#f8f8f8' }}  >
                                <SimpleSelectComponent />
                            </Paper>
                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-sm" style={{ bgcolor: '#eeeee4', border: 'none' }}>
                    <div class="card-header" style={{ backgroundColor: '#fff' }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar variant="circular" sx={{ bgcolor: '#fff', border: '1px solid #005A84 !important', borderWidth: 'medium !important' }} style={{ height: '25px' }}><Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>5</Typography></Avatar>
                            <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>PERFORMANCE WALK ROUND:</Typography>
                        </Stack>
                    </div>
                    <div class="card-body" style={{ backgroundColor: '#f8f8f8' }}>
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%', backgroundColor: '#f8f8f8' }}  >
                                <SimpleRadioButtonComponent />
                            </Paper>
                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-sm" style={{ bgcolor: '#eeeee4', border: 'none' }}>
                    <div class="card-header" style={{ backgroundColor: '#fff' }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar variant="circular" sx={{ bgcolor: '#fff', border: '1px solid #005A84 !important', borderWidth: 'medium !important' }} style={{ height: '25px' }}><Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>6</Typography></Avatar>
                            <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>PRE SHIFT / POWER WALK:</Typography>
                        </Stack>
                    </div>
                    <div class="card-body" style={{ backgroundColor: '#f8f8f8' }}>
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%', backgroundColor: '#f8f8f8' }}  >
                                <QuestionCommentComponent />
                            </Paper>
                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-sm" style={{ bgcolor: '#eeeee4', border: 'none' }}>
                    <div class="card-header" style={{ backgroundColor: '#fff' }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar variant="circular" sx={{ bgcolor: '#fff', border: '1px solid #005A84 !important', borderWidth: 'medium !important' }} style={{ height: '25px' }}><Typography style={{ color: '#005A84', fontFamily: 'Segoe UI SemiBold' }}>7</Typography></Avatar>
                            <Typography style={{ color: '#005A84', fontWeight: 'bold' }}>PRE SHIFT / POWER WALK:</Typography>
                        </Stack>
                    </div>
                    <div class="card-body" style={{ backgroundColor: '#f8f8f8' }}>
                        <blockquote class="blockquote mb-0">
                            <Paper elevation={0} style={{ width: '100%', backgroundColor: '#f8f8f8' }}  >
                                <SimpleYesNoComponent />
                            </Paper>
                        </blockquote>
                    </div>
                </div>
            </Box>
        </>
    )
}