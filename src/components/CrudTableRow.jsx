import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const CrudTableRow = ({el}) => {
  
  const {name,constellation} = el

  return (
    <TableRow className="fade">
      <TableCell>{name}</TableCell>
      <TableCell align="right">{constellation}</TableCell>
      <TableCell align="right">
        <IconButton size="small"><EditIcon fontSize='small' color="primary"/></IconButton>
        <IconButton size="small"><DeleteIcon fontSize='small' color="error"/></IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CrudTableRow;