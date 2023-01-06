import React, {useState, state} from "react";
import Box from '@mui/material/Box'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Visit = () => {
    const [fecha, setFecha]  = useState(new Date("2022", "06","22"));
    const [profession, setProfession] = useState(null)
    
    const onChange = (event)=>{
        setFecha(event)
    }
        return (
            <div className= 'root' >
                <h1 className= 'title-main' > Información de la Visita</h1>
                    <div className= 'form-wrapper'>
                        <Box
                            component="form"
                            sx={{
                                    '& .MuiTextField-root': {marginTop: '10px', marginLeft: '20px' , },
                                    '& .MuiOutlinedInput-input': {width: '200px', height: '10px'},
                                    '& .react-datepicker__input-container': {marginTop: '50px', marginBottom: '5px',marginLeft: '20px' , },

                                }}
                                noValidate
                                autoComplete="off"
                        >
                            <div className='register-button'>
                                <DatePicker 
                                    selected={fecha} 
                                    onChange={(event) => onChange(event)}
                                />
                                <TextField
                                    id="outlined-disabled"
                                    label="profesión"
                                    placeholder="profesion del responsable"
                                    onChange={(event) => {setProfession(event.target.value)}}
                                />
                                <TextField
                                    id="outlined-disabled"
                                    label="coordinador"
                                    placeholder="encargado de la visita"
                                />
                                <TextField
                                    id="outlined-number"
                                    label="id_empresa"
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
                                    label="Conexión"
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
                            </div>
                            {/* <div>
                                <TextField
                                    id="filled-multiline-static"
                                    label="Helper text"
                                    multiline
                                    rows={6}
                                    placeholder="Add some aditional information"
                                />
                            </div> */}
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