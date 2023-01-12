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


const isWeekend = (date) => {
    const day = date.day();
  
    return day === 0 || day === 6;
};


const Visit = () => {
    // const [profession, setProfession] = useState(null);
    const [value, setValue] = React.useState(dayjs('2022-04-15'));
    const [value1, setValue1] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));

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
                                    <StaticDatePicker
                                    label="Seleccione: fecha visita"
                                    orientation="landscape"
                                    openTo="day"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params}/>}
                                    />
                                 </LocalizationProvider>
                                <TextField
                                    id="outlined-disabled"
                                    label="profesión"
                                    placeholder="profesion del responsable"
                                    // onChange={(event) => {setProfession(event.target.value)}}
                                />
                                <TextField
                                    id="outlined-disabled"
                                    label="coordinador"
                                    placeholder="encargado de la visita"
                                />
                                <TextField
                                    id="outlined-number"
                                    label="id_empresa a visitar"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="outlined-number"
                                    label="numero de días visita"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="standard-required"
                                    label="Descripción del equipo"
                                    placeholder="información del equipo"
                                />
                                <TextField
                                    id="standard-disabled"
                                    label="Contacto"
                                    placeholder="write email contact"
                                />
                                <TextField
                                    id="standard-number"
                                    label="Fase"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
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