import React, {useState, state} from "react";
import dayjs  from "dayjs";
import Box from '@mui/material/Box'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import './__style__/index.css';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';


const isWeekend = (date) => {
    const day = date.day();
  
    return day === 0 || day === 6;
};


const Visit = () => {
    // const top100Films = [ 
    //     { label: 'Prime' },
    //     { label: 'Ecopetrol' },
    //     { label: 'Procaps' }
    // ];
    const [empresas, setEmpresas] = React.useState(null);
    const [value, setValue] = React.useState(dayjs('2022-04-15'));
    const [profesion, setProfesion] = React.useState(null);
    const [coordinador, setCoordinador] = React.useState(null);
    const [id_empresa, setId_empresa] = React.useState(null);
    const [numero_dias, setNumero_dias] = React.useState(null);
    const [descripcion, setDescripcion] = React.useState(null);
    const [contacto, setContacto] = React.useState(null);
    const [fase, setFase] = React.useState(null);

        return (
            <div className= 'root' >
                <h1 className= 'title-main' > Información de la Visita Técnica</h1>
                    <div className= 'form-wrapper'>
                        <Box
                            component="form"
                            sx={{
                                    '& .MuiTextField-root': {marginTop: '10px', marginLeft: '20px' , },
                                    '& .MuiOutlinedInput-input': {width: '200px', height: '10px'},
                                    '& .react-datepicker__input-container': {marginTop: '50px', marginBottom: '5px',marginLeft: '20px' },
                                    '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {width: '230px', height: '50px'},
                                    '& .css-1hbyad5-MuiTypography-root': {width: '200px', height: '50px'},
                                    '& .css-d59b2q-MuiGrid-root-MuiPickersToolbar-content': {width: '200px', height: '50px'},
                                }}
                                noValidate
                                autoComplete="off"
                        >
                            <div className='register-button'>
                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDateTimePicker
                                            label="Seleccione: Fecha Visita"
                                            value={value}
                                            id={'fecha_visita'}
                                            name={'fecha_visita'}
                                            onChange={(newValue) => {setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                <Autocomplete
                                    disablePortal
                                    id={'empresas'}
                                    name={'empresas'}
                                    options={empresas}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Lista de Empresas" />}
                                    onChange={(event) => setEmpresas(event.target.value)}
                                />
                                <TextField
                                    label="profesión"
                                    id={'profesion'}
                                    name={'profesion'}
                                    placeholder="profesion del responsable"
                                    onChange={(event) => setProfesion(event.target.value)}
                                />
                                <TextField
                                    label="coordinador"
                                    id={'coordinador'}
                                    name={'coordinador'}
                                    placeholder="encargado de la visita"
                                    onChange={(event) => setCoordinador(event.target.value)}
                                />
                                <TextField
                                    label="id_empresa a visitar"
                                    id={'id_empresa'}
                                    name={'id_empresa'}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => setId_empresa(event.target.value)}
                                />
                                <TextField
                                    label="numero de días visita"
                                    id={'numero_dias'}
                                    name={'numero_dias'}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => setNumero_dias(event.target.value)}
                                />
                                <TextField
                                    label="descripción del equipo"
                                    id={'descripcion'}
                                    name={'descripcion'}
                                    placeholder="información del equipo"
                                    onChange={(event) => setDescripcion(event.target.value)}
                                />
                                <TextField
                                    label="Contacto"
                                    id={'Contacto'}
                                    name={'Contacto'}
                                    placeholder="escribir email de contacto"
                                    onChange={(event) => setContacto(event.target.event)}
                                />
                                <TextField
                                    label="Fase"
                                    id={'fase'}
                                    name={'fase'}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => setFase(event.target.event)}
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDateTimePicker
                                            label="Día y Hora de Inicio"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>                               
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDateTimePicker
                                            label="Día y Hora de Finalización"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
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


export default Visit;