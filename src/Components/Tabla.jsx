import  { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import axios from 'axios';

const Tabla = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const datos = await axios.get('http://localhost:8080/api/games');
        setData(datos.data);
        console.log(datos.data);
      } catch (error) {
        console.error('Hubo un error al cargar los datos:', error);
      }
    };
    loadData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'nombre', 
        header: 'Nombre',
        size: 150,
      },
      {
        accessorKey: 'tipo',
        header: 'Tipo Juego',
        size: 150,
      },
      {
        accessorKey: 'fechaLanzamiento', 
        header: 'Fecha Lanzamiento',
        size: 200,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: true,
      variant: 'outlined',
      labelRowsPerPage:'Pagina'
    },
  });

  return (
    <MaterialReactTable  table={table} 
    />
  );
};

export default Tabla;
