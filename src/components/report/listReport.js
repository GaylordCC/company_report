import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { reportList, deleteReport } from '../../controllers/reports';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red'

const theme = createTheme({
    palette: {
        primary: red,
    },
});

const handleClick = (param, event) => {    
};

const rows = [
    { id: 1, report_title: 'Análisis de Calidad de la Energía', report_subtitle: 'Planta Prime', connection_point: 'Caldera de Vapor', initial_day: '01/01/2023 12:00 AM', final_day: '01/01/2023 12:00 AM', total_days_service: '1', author: 'Gaylord Carrillo', reviewer: 'Mauricio Luque', client_responsible: 'Garyn Carrillo', equipment: 'Caldera de Vapor', equipment_model: 'Gemlsa800', working_voltage: '440', connection_type: 'trifasica', phase_number: '3', total_power: '1200', city: 'Barranquilla', department: 'Atlántico', year: '2023'},
];

const ListReport = () => {

    const handleUpdate = (event, param) => {
        window.location.href = '/report?edit='+param.id;
    };

    const handleDelete = async(event, param) => {
        const {succes, data, error} = await deleteReport(param.id)
        window.location.href = 'list_report';

        if (succes) {
            fetchReportList();
        }else if(error) {
            alert("No fue posible eliminar el reporte")
        }
    };

    const columns = [
        { field: 'id', headerName: 'Identificación', width: 50, align: 'center' },
        { field: 'report_title', headerName: 'Título', width: 150, align: 'center' },
        { field: 'report_subtitle', headerName: 'Subtítulo', width: 150, align: 'center' },
        { field: 'connection_point', headerName: 'Punto Conexión', width: 150, align: 'center' },
        { field: 'initial_day', headerName: 'Día Inicial', width: 150, align: 'center' },
        { field: 'final_day', headerName: 'Día FInal', width: 150, align: 'center' },
        { field: 'total_days_service', headerName: 'Total Días', width: 150, align: 'center' },
        { field: 'author', headerName: 'Autor', width: 150, align: 'center' },
        { field: 'reviewer', headerName: 'Revisor', width: 150, align: 'center' },
        { field: 'client_responsible', headerName: 'Cliente Responsable', width: 150, align: 'center' },
        { field: 'equipment', headerName: 'Equipo', width: 150, align: 'center' },
        { field: 'equipment_model', headerName: 'Modelo del Equipo', width: 150, align: 'center' },
        { field: 'working_voltage', headerName: 'Voltaje de Trabajo', width: 150, align: 'center' },
        { field: 'connection_type', headerName: 'Tipo de Conexión', width: 150, align: 'center' },
        { field: 'phase_number', headerName: 'Número de Fases', width: 150, align: 'center' },
        { field: 'total_power', headerName: 'Potencia Total', width: 150, align: 'center' },
        { field: 'city', headerName: 'Ciudad', width: 150, align: 'center' },
        { field: 'department', headerName: 'Departamento', width: 150, align: 'center' },
        { field: 'year', headerName: 'Año', width: 150, align: 'center' },
        { field: 'update', headerName: 'Actualizar', width: 150, align: 'center',
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant='outlined'
                        startIcon={<UpdateIcon/>}
                        onClick={(event) => {
                            handleUpdate(event, cellValues);
                        }}
                    > Actualizar
                    </Button>
                );
            }
         },
        { field: 'delete', headerName: 'Eliminar', width: 150, align: 'center',
            renderCell: (cellValues) => {
                return (
                    <Button
                    variant='outlined'
                    sx={{ color: red[400] }}
                    startIcon={<DeleteIcon />}
                    onClick={(event) => {
                        handleDelete(event, cellValues);
                    }}
                    > Eliminar
                    </Button>
                )
            }
         },
         { field: 'generateReport', headerName: 'Generar Informe', width: 250, align: 'center',
         renderCell: (cellValues) => {
             return (
                 <Button
                     variant='outlined'
                     startIcon={<MenuBookIcon/>}
                     onClick={(event) => {
                         handleUpdate(event, cellValues);
                     }}
                 > Generar Informe
                 </Button>
             );
         }
      },


    ];

    const [reports, setReports] = React.useState([]);

    const fetchReportList = async () => {
        const response = await reportList();

        if (response.succes) {
            setReports(response.data)
        }
    }

    useEffect(() => {
        fetchReportList();
    }, [])

    return (
        <div style ={{height: 400, width: '80%', marginTop: 90}}>
            <div className='ButtonContainer'>
                <Button variant="contained" component="a" href="/report">Crear Reporte</Button>
            </div>
            <DataGrid
                rows={reports}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[7]}
                checkboxSelection
                onCellClick={handleClick}
            />
        </div>
    );
}

export default ListReport;