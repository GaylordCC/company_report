import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './__styles__/index.css';
import { red } from '@mui/material/colors';
import axios from 'axios';
import { createCompany } from '../../controllers/companies';

const Company = () => {
    const [name, setName] = React.useState(null);
    const [city, setCity] = React.useState(null);
    const [identification, setIdentification] = React.useState(null);
    const [address, setAddress] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const [helper, setHelper] = React.useState(null);

    const handleCreateCompany = async() => {
        console.log(name)
        const { succes, data, errors } = await createCompany({ name: name, city: city, 
            identification: identification, address: address, email: email, phone: phone });
        
        if (succes) {
            alert("TODO OK")
        } else {
            alert(" :(" + errors);
        }
    }

    const handlerPhone = (event)=> {
        setPhone(event.target.value)
    }

    return (
        <div className='root'>
            <h1 className='title-main'>Registro de Empresas</h1>
            <div className='form-wrapper'>
                <Box
                    component="form"
                    sx={{
                            '& .MuiTextField-root': {marginTop: '10px', marginLeft: '20px' , },
                            '& .MuiOutlinedInput-input': {width: '200px', height: '10px'},

                        }}
                        noValidate
                        autoComplete="off"
                >
                    <div className='register-button'>
                        <TextField 
                            style={{color: "red"}}
                            label="company"
                            placeholder="write company name"
                            id={'name'}
                            name={'name'}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            label="city"
                            placeholder="Location"
                            id={'city'}
                            name={'city'}
                            onChange={(event) => setCity(event.target.value)}
                        />
                        <TextField
                            label="identification_number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            id={'identification'}
                            name={'identification'}
                            onChange={(event) => setIdentification(event.target.value)}
                        />
                        <TextField
                            label="adress"
                            placeholder="company_adress"
                            id={'address'}
                            name={'address'}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                        <TextField
                            label="email_contact"
                            placeholder="write email contact"
                            id={'email'}
                            name={'email'}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            label="phone_number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            id={'phone'}
                            name={'phone'}
                            onChange={handlerPhone}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Helper text"
                            multiline
                            rows={6}
                            placeholder="Add some aditional information"
                            id={'helper'}
                            name={'helper'}
                            onChange={(event) => setHelper(event.target.value)}
                        />
                    </div>
                    <div className='sendButton'>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={handleCreateCompany}>
                            Send
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Company;