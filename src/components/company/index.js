import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './__styles__/index.css';
import { red } from '@mui/material/colors';
import axios from 'axios';
import { createCompany, getCompany, updateCompany } from '../../controllers/companies';
// import { URLSearchParams } from "url";
import { location } from "react-router-dom";

const Company = () => {
    const [name, setName] = React.useState("");
    const [city, setCity] = React.useState("");
    const [identification, setIdentification] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [helper, setHelper] = React.useState("");
    const [id, setId] = React.useState(null);

    const handleCreateCompany = async() => {
        console.log(name)

        if (id) {
            const { succes, data, errors } = await updateCompany(id, { name: name, city: city, 
                identification: identification, address: address, email: email, phone: phone });
            if (succes) {
                alert("Actualizado Correctamente")
                window.location.href = '/list_company';
            } else {
                alert(" :(" + errors);
            }
        }else {
            const { succes, data, errors } = await createCompany({ name: name, city: city, 
                identification: identification, address: address, email: email, phone: phone });
            
            if (succes) {
                alert("Creado Correctamente")
                window.location.href = '/list_company';
            } else {
                alert(" :(" + errors);
            }
        }  
    }

    const handlerPhone = (event)=> {
        setPhone(event.target.value)
    }

    const getParamId = () => {
        const queryParameters = new URLSearchParams(window.location.search)
        setId(queryParameters.get("edit"));
        return queryParameters.get("edit");
    }
    
    const fetchCompany = async(id) => {
        const {succes, data} = await getCompany(id);
        if (succes) {
            console.log(data)
            setName(data.name);
            setCity(data.city);
            setIdentification(data.identification);
            setAddress(data.adress);
            setEmail(data.email);
            setPhone(data.phone);
        }
    }
    useEffect(()=> {
        var id = getParamId();

        if (id) {
            fetchCompany(id);
        }   
    }, [])




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
                            value={name}
                        />
                        <TextField
                            label="city"
                            placeholder="Location"
                            id={'city'}
                            name={'city'}
                            onChange={(event) => setCity(event.target.value)}
                            value={city}
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
                            value={identification}
                        />
                        <TextField
                            label="adress"
                            placeholder="company_adress"
                            id={'address'}
                            name={'address'}
                            onChange={(event) => setAddress(event.target.value)}
                            value={address}
                        />
                        <TextField
                            label="email_contact"
                            placeholder="write email contact"
                            id={'email'}
                            name={'email'}
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
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
                            value={phone}
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