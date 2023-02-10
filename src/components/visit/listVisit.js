import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { visitList, deleteVisit } from '../../controllers/visits';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';

const theme = createTheme({
  palette: {
    primary: red,
  },
});

const handleClick = (param, event) => {
};

const rows = [
    { id: 1, visit_date: '01/01/2023 12:00 AM', number_day: '2', equimen_description: 'Caldera', contact_email: 'dissu123@tequieromucho.com', phase: 2, initial_day: '01/01/2023 12:00 AM' , final_day: '01/01/2023 12:00 AM'},
    { id: 2, visit_date: '01/02/2023 12:00 AM', number_day: '3', equimen_description: 'Caldera', contact_email: 'tafy@tequieromucho.com', phase: 1, initial_day: '01/02/2023 12:00 AM' , final_day: '01/02/2023 12:00 AM'},
];


const ListVisit = () => {


  const handleUpdate = (event, param) => {
    console.log(param)
    console.log(event)
    window.location.href = '/visit?edit='+param.id;
  };
  
  const handleDelete = async(event, param) => {
    console.log("********************************")
    console.log(param)
    const {success, data, error} = await deleteVisit(param.id)
    
    if (success) {
        fetchVisitList();
    } else if(error) {
      alert("No fue posible eliminar la visita")
    }
  };
    
    const columns = [
        { field: 'id', heeaderName: 'Identificación', width: 50, align: 'center' }, 
        { field: 'visit_date', headerName: 'Fecha de Visita', width: 130, align: 'center' }, 
        { field: 'number_day', headerName: 'Numero de Días', width: 120, align: 'center' }, 
        { field: 'equimen_description', headerName: 'Descrpción', width: 150, align: 'center' }, 
        { field: 'contact_email', headerName: 'Email de Contacto', width: 150, align: 'center' }, 
        { field: 'phase', headerName: 'Fase', type: 'number', width: 60, align: 'center' }, 
        { field: 'initial_day', headerName: 'Día Inicial', width: 150, align: 'center' }, 
        { field: 'final_day', headerName: 'Día Final', width: 150, align: 'center' }, 
        { field: 'update', headerName: 'Actualizar', width: 150, align: 'center',
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="outlined"
                        startIcon={<UpdateIcon />}
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
                        variant="outlined"
                        sx={{ color: red[400] }}
                        startIcon={<DeleteIcon />}
                        onClick={(event) => {
                            handleDelete(event, cellValues);
                        }}
                    > Eliminar
                    </Button>
                );
            }
        }, 
    ];

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
        <div style={{height: 400, width: '80%', marginTop: 90 }}>
            <div className='ButtonContainer'>
                <Button variant="contained" component="a" href="/visit">Crear Visita</Button>
            </div>
            <DataGrid
                rows={visits}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[7]}
                checkboxSelection
                onCellClick={handleClick}
            />
        </div>
    );
}

export default ListVisit;