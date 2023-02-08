import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { companyList } from '../../controllers/companies';
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

const columns = [
  { field: 'id', headerName: 'ID', width: 50, align: 'center' },
  { field: 'name', headerName: 'Nombre Empresa', width: 150, align: 'center' },
  { field: 'city', headerName: 'Ciudad', width: 120, align: 'center' },
  { field: 'adress', headerName: 'Direcciónde la Empresa', width: 180, align: 'center' },
  { field: 'email', headerName: 'Email de Contacto', width: 200, align: 'center' },
  { field: 'phone', headerName: 'Numero de Telefono', width: 150, align: 'center' },
  { field: 'update', headerName: 'Editar', width: 150, align: 'center',
      renderCell: (cellValues) => {
        return (
            <Button
                variant="outlined"
                startIcon={<UpdateIcon />}
                onClick={(event) => {
                    handleClick(event, cellValues);
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
                    handleClick(event, cellValues);
                }}
            > Eliminar
            </Button>
        );
      }
  },
];

const rows = [
  { id: 1, city: 'Snow', name: 'Jon', identification: 35, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974},
  { id: 2, city: 'Lannister', name: 'Cersei', identification: 42, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974 },
  { id: 3, city: 'Lannister', name: 'Jaime', identification: 45, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974 },
  { id: 4, city: 'Stark', name: 'Arya', identification: 16, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974 },
  { id: 5, city: 'Targaryen', name: 'Daenerys', identification: null, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974 },
  { id: 6, city: 'Melisandre', name: null, identification: 150, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974 },
  { id: 7, city: 'Clifford', name: 'Ferrara', identification: 44, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974 },
  { id: 8, city: 'Frances', name: 'Rossini', identification: 36, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974 },
  { id: 9, city: 'Roxie', name: 'Harvey', identification: 65, adress: 'Via 40 con 80', email: 'gameofThrones@hbo.com', phone: 3568974 },
];






const ListCompany = () => {


  const [companies, setCompanies] = React.useState([]);

  const fetchCompanyList = async() => {
    const response = await companyList();
    console.log(response)

    if (response.succes) {
      setCompanies(response.data);
    }
  }

  useEffect(()=> {
    fetchCompanyList();
  }, [])

  return (
    <div style={{ height: 400, width: '80%', marginTop: 20 }}>
      <div className='ButtonContainer'>
        <Button variant="contained" component="a" href="/company">Crear Compañia</Button>
      </div>
      <DataGrid
        rows={companies}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default ListCompany;