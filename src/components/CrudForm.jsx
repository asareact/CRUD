import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";



const CrudForm = ({dataToEdit}) => {
  const {form, handleChange, handleReset, handleSubmit} = useContext(DataContext);

  console.log(form)

  useEffect(() => {
    /* if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    } */
  }, [dataToEdit]);
  

  return (
    <>
      <Grid container spacing={2} xs={6} sm={12} >
      <Grid item xs={12}> 
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      </Grid>
        <Grid item >
          <TextField
          size="small"
          type="text"
          name="name"
          label="Nombre"
          autoComplete="given-name"
          variant="standard"
          onChange={handleChange}
          />
        </Grid>
        <Grid item>
        <TextField
          size="small"
          type="text"
          name="constellation"
          label="Constelación"
          autoComplete="given-name"
          variant="standard"
          onChange={handleChange}
        />
        </Grid>
        <Grid item >
        <Button variant='contained' color='primary' onClick={handleSubmit}>Enviar</Button>
        <Button variant='contained' color='primary' onClick={handleReset}>Limpiar</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CrudForm;