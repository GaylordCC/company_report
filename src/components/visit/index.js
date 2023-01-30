import React, {useState, state, useEffect, useMemo} from "react";
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
import { createVisit } from '../../controllers/visits';
import { companyList } from '../../controllers/companies';
import { ConstructionOutlined } from "@mui/icons-material";

const isWeekend = (date) => {
    const day = date.day();

    return day === 0 || day === 6;
};


const Visit = () => {

    const [companiesList, setCompaniesList] = React.useState(null);
    const [companyId, setCompanyId] = React.useState(null);
    const [fecha_visita, setFecha_visita] = React.useState(dayjs('2023-01-01'));
    const [profesion, setProfesion] = React.useState(null);
    const [coordinador, setCoordinador] = React.useState(null);
    const [numero_dias, setNumero_dias] = React.useState(null);
    const [descripcion, setDescripcion] = React.useState(null);
    const [email, setContacto] = React.useState(null);
    const [fase, setFase] = React.useState(null);
    const [fecha_ini, setFecha_ini] = React.useState(dayjs('2023-01-01'));
    const [fecha_fin, setFecha_fin] = React.useState(dayjs('2023-01-01'));
    const [options, setOptions] = React.useState([]);

    const handleCreateVisit = async() => {
        const {succes, data, errors} = await createVisit({ companyId: companyId, fecha_visita: fecha_visita, profesion: profesion,
                                                           coordinador: coordinador, numero_dias: numero_dias, descripcion: descripcion,
                                                           email: email, fase: fase, fecha_ini: fecha_ini, fecha_fin: fecha_fin
                                                        })

        if (succes) {
            alert("TODO OK");
        }else {
            alert(" :( " + errors);
        }
    }

    const fetchCompanyList = async() => {
        const response = await companyList();
        var array = [];
        if (response.succes) {
            response.data.forEach(element => {
                array.push({ id: element.id, label: element.name })
            });
        }
        setOptions(array);
    }

    useEffect(()=> {
        setCompaniesList(fetchCompanyList());
    }, [])

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
                                            value={fecha_visita}
                                            id={'fecha_visita'}
                                            name={'fecha_visita'}
                                            onChange={(newValue) => {setFecha_visita(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                <Autocomplete
                                    disablePortal
                                    id={'companyId'}
                                    name={'companyId'}
                                    options={options}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="description" />}
                                    onChange={(event, value) => setCompanyId(value.id)}
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
                                    label="email_contacto"
                                    placeholder="escribir email de contacto"
                                    id={'email'}
                                    name={'email'}
                                    onChange={(event) => setContacto(event.target.value)}
                                />
                                <TextField
                                    label="fase"
                                    id={'fase'}
                                    name={'fase'}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => setFase(event.target.value)}
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDateTimePicker
                                            label="Día y Hora de Inicio"
                                            id={'fecha_ini'}
                                            name={'fecha_ini'}
                                            value={fecha_ini}
                                            onChange={(newValue) => {
                                                setFecha_ini(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>                               
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDateTimePicker
                                            label="Día y Hora de Finalización"
                                            id={'fecha_fin'}
                                            name={'fecha_fin'}
                                            value={fecha_fin}
                                            onChange={(newValue) => {
                                                setFecha_fin(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                            <div className='sendButton'>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={handleCreateVisit}>
                                    Send
                                </Button>
                            </div>
                        </Box>
                    </div>
            </div>
        )
}


export default Visit;