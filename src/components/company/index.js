import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './__styles__/index.css';

const Company = () => {
    return (
        <div className='main-wrapper'>
            <h1 className='title-main'>Registro de Empresas</h1>
            <div className='form-wrapper'>
                <Box
                    component="form"
                    sx={{
                            '& .MuiTextField-root': { m: 1, width: '35ch' },
                        }}
                        noValidate
                        autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-required"
                            label="company"
                            placeholder="write company name"
                        />
                        <TextField
                            id="outlined-disabled"
                            label="city"
                            placeholder="Location"
                        />
                        <TextField
                            id="outlined-number"
                            label="identification_number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-required"
                            label="adress"
                            placeholder="company_adress"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-disabled"
                            label="email_contact"
                            placeholder="write email contact"
                        />
                        <TextField
                            id="standard-number"
                            label="phone_number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Helper text"
                            multiline
                            rows={6}
                            placeholder="Add some aditional information"
                        />
                    </div>
                    <div className='sendButton'>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Company;