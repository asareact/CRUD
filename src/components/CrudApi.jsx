import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";



const CrudApi = () => {
  const [db2, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null); 

  const {loading,db} = useContext(DataContext)

  console.log(loading)

  

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={12}>
          <CrudForm
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </Grid>
        {loading && <Loader/>}
        {db && (<Grid item xs={12} sm={12}>
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </Grid>)}
        
      </Grid>
      
    </div>
  );
};

export default CrudApi;