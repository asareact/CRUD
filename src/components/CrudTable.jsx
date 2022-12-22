import React, { useContext } from "react";
import CrudTableRow from "./CrudTableRow";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DataContext from "../context/DataContext";
import { Typography } from "@mui/material";



const CrudTable = () => {

  const {db} = useContext(DataContext)
  

  return (
    <>
      <h3>Tabla de Datos</h3>
      <TableContainer>
        <Table sx={{ width: "40rem" }} aria-label="simple table">  
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">
                Nombre
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">
                Constelación
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">
                Acciones
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {db.map((el) =>
            <CrudTableRow key={el.id} el={el}/>)}
        </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};


export default CrudTable;