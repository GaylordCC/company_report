import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import UploadIcon from '@mui/icons-material/Upload';
import 'react-datepicker/dist/react-datepicker.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import Stack from '@mui/system/Stack';
import './__style__/index.css';
import Autocomplete from '@mui/material/Autocomplete';
import { createReport, updateReport, getReport, sendDetailReport } from '../../controllers/reports';

import { visitList } from '../../controllers/visits';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6
};

const Report = () => {

    const [visitsList, setVisitstList] = React.useState("");
    const [visitId, setVisitId] = React.useState([]);
    const [report_title, setReport_title] = React.useState("");
    const [report_subtitle, setReport_subtitle] = React.useState("");
    const [connection_point, setConnection_point] = React.useState("");
    const [initial_day, setInitial_day] = React.useState(dayjs('2023-01-01'));
    const [final_day, setFinal_day] = React.useState(dayjs('2023-01-01'));
    const [total_days, setTotal_days] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [reviewer, setReviewer] = React.useState("");
    const [client_responsible, setClient_responsible] = React.useState("");
    const [equipment, setEquipment] = React.useState("");
    const [equipment_model, setEquipment_model] = React.useState("");
    const [working_voltage, setWorking_voltage] = React.useState("");
    const [connection_type, setConnection_type] = React.useState("");
    const [phase_number, setPhase_number] = React.useState("");
    const [total_power, setTotal_power] = React.useState("");
    const [city, setCity] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [year, setYear] = React.useState("");
    const [id, setId] = React.useState(null);
    const [options, setOptions] = React.useState([]);
    const [companyPhotoFile, setCompanyPhotoFile] = React.useState(null);
    const [connectionPointPhotoFile, setConnectionPointPhotoFile] = React.useState(null);
    const [csvFile, setCsvFile] = React.useState(null);
    const [disable, setDisable] = React.useState(false);


    const handleCreateReport = async() => {

        if (id) {
            const { succes, data, errors } = await updateReport(id, {visitId: visitId, report_title: report_title, report_subtitle: report_subtitle, 
                connection_point: connection_point, initial_day: initial_day, final_day: final_day, total_days: total_days, 
                author: author, reviewer: reviewer, client_responsible: client_responsible, equipment: equipment, 
                equipment_model: equipment_model, working_voltage: working_voltage, connection_type: connection_type, 
                phase_number: phase_number, total_power: total_power, city: city, department: department, year: year,
                companyPhotoFile: companyPhotoFile, connectionPointPhotoFile: connectionPointPhotoFile 
            });

            if (succes) {
                alert("El reporte se actualizo correctamente");
                // window.location.href = '/list_report';
            }else {
                alert(" :(" + errors)
            }

        }else {
            const { succes, data, errors } = await createReport({
                visitId: visitId, report_title: report_title, report_subtitle: report_subtitle, 
                connection_point: connection_point, initial_day: initial_day, final_day: final_day, total_days: total_days, 
                author: author, reviewer: reviewer, client_responsible: client_responsible, equipment: equipment, 
                equipment_model: equipment_model, working_voltage: working_voltage, connection_type: connection_type, 
                phase_number: phase_number, total_power: total_power, city: city, department: department, year: year,
                companyPhotoFile: companyPhotoFile, connectionPointPhotoFile: connectionPointPhotoFile, csv_file: csvFile
            });
    
            if (succes) {
                alert("El reporte se creo correctamente");
            }else {
                alert("EORRRR  " + errors)
            }            
        }
    }

    const fetchVisitList = async() => {
        const response = await visitList();
        console.log(visitList)
        var array = [];
        if (response.succes) {
            response.data.forEach(element => {
                array.push({ id: element.id, label: element.equimen_description })
            });
        }
        setOptions(array);  
    }


    const getParamId = () => {
        const queryParameters = new URLSearchParams(window.location.search)
        setId(queryParameters.get("edit"));
        return queryParameters.get("edit");
    }

    const fetchReport = async (id) => {
        const {succes, data} = await getReport(id);
        if (succes) {
            console.log(data)
            console.log("***********************")
            setVisitId(data.visit_id)
            setReport_title(data.report_title)
            setReport_subtitle(data.report_subtitle)
            setConnection_point(data.connection_point)
            setInitial_day(data.initial_day)
            setFinal_day(data.final_day)
            setTotal_days(data.total_days_service)
            setAuthor(data.author)
            setReviewer(data.reviewer)
            setClient_responsible(data.client_responsible)
            setEquipment(data.equipment)
            setEquipment_model(data.equipment_model)
            setWorking_voltage(data.working_voltage)
            setConnection_type(data.connection_type)
            setPhase_number(data.phase_number)
            setTotal_power(data.total_power)
            setCity(data.city)
            setDepartment(data.department)
            setYear(data.year)
        }
    }


    useEffect(()=> {
        setVisitstList(fetchVisitList());

        var id = getParamId();

        if (id) {
            fetchReport(id);
        }   
    }, [])


    const handlesendDetailReport = async() => {
        
        if (id) {
            setDisable(true);
            const { succes, data, errors } = await sendDetailReport(id, { reportId: id, csvFile: csvFile
            });
            setDisable(false);
            if (succes) {
                alert("El archivo se envio correctamente");
            }else {
                alert(" No fue posible enviar el archivo" + errors)
            }
        }else {
            setDisable(true);
        }
    }
    console.log(csvFile)
    console.log(id)


    return (
        <div className='root-report' >
            <h1 className='title-main' > Reporte T??cnico de la Visita</h1>
                <div className='form-wrapper'>
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
    
                        <div className='report-buttons'>
                            <Autocomplete
                                disablePortal
                                id={'visitId'}
                                name={'visitId'}
                                options={options}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="description" />}
                                onChange={(event, value) => setVisitId(value.id)}
                            />
                            <TextField
                                label="T??tulo del Informe"
                                id={'report_title'}
                                name={'report_title'}
                                placeholder="t??tulo del informe"
                                onChange={(event) => setReport_title(event.target.value)}
                                value={report_title}
                            /> 
                            <TextField
                                label="Subt??tulo del Informe"
                                id={'report_subtitle'}
                                name={'report_subtitle'}
                                placeholder="subt??tulo del informe"
                                onChange={(event) => setReport_subtitle(event.target.value)}
                                value={report_subtitle}
                            /> 
                            <TextField
                                label="Punto de Conexi??n"
                                id={'connection_point'}
                                name={'connection_point'}
                                placeholder="punto de conexi??n"
                                onChange={(event) => setConnection_point(event.target.value)}
                                value={connection_point}
                            />
                            <TextField
                                label="Autor del Informe"
                                id={'author'}
                                name={'author'}
                                placeholder="autor del informe"
                                onChange={(event) => setAuthor(event.target.value)}
                                value={author}
                            />
                            <TextField
                                label="Revisor del Informe"
                                id={'reviewer'}
                                name={'reviewer'}
                                placeholder="revisor del informe"
                                onChange={(event) => setReviewer(event.target.value)}
                                value={reviewer}
                            />
                            <TextField
                                label="Responsable del Cliente"
                                id={'client_responsible'}
                                name={'client_responsible'}
                                placeholder="responsable del cliente"
                                onChange={(event) => setClient_responsible(event.target.value)}
                                value={client_responsible}
                            />
                            <TextField
                                label="Equipo a Analizar"
                                id={'equipment'}
                                name={'equipment'}
                                placeholder="equipo analizar"
                                onChange={(event) => setEquipment(event.target.value)}
                                value={equipment}
                            />
                            <TextField
                                label="Modelo del Equipo"
                                id={'equipment_model'}
                                name={'equipment_model'}
                                placeholder="modelo del equipo"
                                onChange={(event) => setEquipment_model(event.target.value)}
                                value={equipment_model}
                            />
                            <TextField
                                label="Tipo de Conexi??n"
                                id={'connection_type'}
                                name={'connection_type'}
                                placeholder="tipo de conexi??n"
                                onChange={(event) => setConnection_type(event.target.value)}
                                value={connection_type}
                            />
                            <TextField
                                label="Ciudad de la Empresa"
                                id={'city'}
                                name={'city'}
                                placeholder="ciudad del pa??s"
                                onChange={(event) => setCity(event.target.value)}
                                value={city}
                            />
                            <TextField
                                label="Departamento de la Ciudad"
                                id={'department'}
                                name={'department'}
                                placeholder="departamento del pa??s"
                                onChange={(event) => setDepartment(event.target.value)}
                                value={department}
                            />
                            <TextField
                                label="N??mero de Fase"
                                id={'phase_number'}
                                name={'phase_number'}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => setPhase_number(event.target.value)}
                                value={phase_number}
                            />
                            <TextField
                                label="Potencia Total del Sistema (kVA)"
                                id={'total_power'}
                                name={'total_power'}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => setTotal_power(event.target.value)}
                                value={total_power}
                            />
                            <TextField
                                label="Tensi??n de Trabajo (V)"
                                id={'working_voltage'}
                                name={'working_voltage'}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => setWorking_voltage(event.target.value)}
                                value={working_voltage}
                            />
                            <TextField
                                label="A??o del An??lisis"
                                id={'year'}
                                name={'year'}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => setYear(event.target.value)}
                                value={year}
                            />
                            <TextField
                                label="Total de D??as del An??lisis"
                                id={'total_days'}
                                name={'total_days'}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => setTotal_days(event.target.value)}
                                value={total_days}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDateTimePicker
                                        label="D??a Inicial del An??lisis"
                                        value={initial_day}
                                        id={'initial_day'}
                                        name={'initial_day'}
                                        onChange={(newValue) => {setInitial_day(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDateTimePicker
                                        label="D??a Final del An??lisis"
                                        value={final_day}
                                        id={'final_day'}
                                        name={'final_day'}
                                        onChange={(newValue) => {setFinal_day(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </div>
                        <div className='addIcon'>
                            <div className='fotoEmpresa'>
                                <Button variant="outlined" component="label" color="error" endIcon={<UploadIcon />}>
                                        {" "}
                                        Escoger Foto Empresa
                                        <input
                                            type="file"
                                            hidden
                                            onChange={(event)=> setCompanyPhotoFile(event.target.files[0])}
                                            accept="image/png, image/gif, image/jpeg" 
                                        />
                                </Button>
                            </div>
                            <div className='fotoPuntoConexion'>
                                <Button variant="outlined" component="label" color="error"  endIcon={<UploadIcon />}>
                                        {" "}
                                        Escoger Foto Punto Conexi??n
                                        <input 
                                        type="file" 
                                        hidden
                                        onChange={(event)=> setConnectionPointPhotoFile(event.target.files[0])}
                                        accept="image/png, image/gif, image/jpeg"
                                        />
                                </Button>
                            </div>
                        </div>
                        {
                            id  && (
                                <div className='attachefile'>
                                    <div className="csvbfile">
                                        <Button variant="outlined" component="label" color="error" endIcon={<UploadIcon />}>
                                                {" "}
                                                Escoger Archivo en Formato CSV
                                                <input
                                                    type={"file"}
                                                    hidden
                                                    onChange={(event)=> setCsvFile(event.target.files[0])}
                                                    accept={".csv"} 
                                                />
                                        </Button>
                                    </div>
                                    <div className="subirbutton">
                                            <Button disabled={disable} variant="contained" color="error" onClick={handlesendDetailReport}>
                                                    Subir Archivo
                                            </Button>
                                    </div>
                                </div>
                            )
                        }
                        <div className='sendButton'>
                                <Button disabled={disable} variant='contained' endIcon={<SendIcon />} onClick={handleCreateReport}>
                                    Send
                                </Button>
                        </div>
                    </Box>
                </div>
        </div>
    )
}

export default Report;