import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { visitList } from '../../controllers/visits';

const columns = [
    { field: 'id', heeaderName: 'Identificación', width: 150, align: 'center' }, 
    { field: 'visit_date', headerName: 'Fecha de Visita', width: 150, align: 'center' }, 
    { field: 'coordinator', headerName: 'Cordinador Visita', width: 150, align: 'center' }, 
    { field: 'profesion', headerName: 'Profesión', width: 150, align: 'center' }, 
    { field: 'number_day', headerName: 'Numero de Días', width: 150, align: 'center' }, 
    { field: 'equimen_description', headerName: 'Descrpción', width: 150, align: 'center' }, 
    { field: 'contact_email', headerName: 'Email de Contacto', width: 150, align: 'center' }, 
    { field: 'phase', headerName: 'Fase', type: 'number', width: 150, align: 'center' }, 
    { field: 'initial_day', headerName: 'Día Inicial', width: 150, align: 'center' }, 
    { field: 'final_day', headerName: 'Día Final', width: 150, align: 'center' }, 
];

const rows = [
    { id: 1, visit_date: '01/01/2023 12:00 AM', coordinator: 'Jacob Carrillo Montero', profesion: 'Administrador Poetico', number_day: '2', equimen_description: 'Caldera', contact_email: 'dissu123@tequieromucho.com', phase: 2, initial_day: '01/01/2023 12:00 AM' , final_day: '01/01/2023 12:00 AM'},
];

const ListV = () => {

    const [visits, setVisits] = React.useState([]);
    console.log(visits)
    const fetchVisitList = async () => {
        const response = await visitList();

        if (response.succes) {
            setVisits(response.data)
        }
    }

    useEffect(() => {
        fetchVisitList();

    }, [])

    return (
        <div style={{height: 400, width: '100%' }}>
            <DataGrid
                rows={visits}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default ListV;