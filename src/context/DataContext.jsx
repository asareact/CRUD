import { createContext, useEffect, useRef, useState } from "react";
import { helpUrl } from "../helpers/helpUrl";

const DataContext = createContext(),
      api = helpUrl(),
      url = "http://localhost:5000/santos",
      initialForm = {
        name: "",
        constellation: "",
        id: null,
      };


const DataProvider = ({children}) => {

    //////DECLARANDO VARIABLES DE ESTADO//////
    
    let flag = useRef(false);
    const [db, setDb] = useState([])
    const [form, setForm] = useState(initialForm)
    const [loading, setLoading] = useState(false)


    ////////FUNCION CREAR DATA PARA HACER EL POST////////

    const createData = (data) => {
        let options = {
            body:data,
            headers : {
                "content-type" : "application/json"
            }
        }
        data.id = Date.now();
        const getPost = async (url) => {
            let res = await api.post(url,options);
            console.log(res)
            if(!res.err){
                setDb([...db, res]);
            }
            else{
                setDb(db)
            }
            
          };

        getPost(url)
    };

    const handleChange = (e) => {
        setForm({
                ...form,
                [e.target.name]: e.target.value
            })
    }


    ///////FUNCIONES HANDLE FORM////////

    const handleReset = () => {
        setForm(initialForm);
        /*
        setDataToEdit(null); */
    };

    const handleSubmit = (e) => {

        if (!form.name || !form.constellation) {
          alert("Campos Vacíos");
          return;
        }
    
        if (form.id === null) {
          createData(form);
        } else {
          //updateData(form);
        }
    
        handleReset();
      };

    ////////////////////////////////////////

    ///////HOOK EFFECT PARA HACER EL GET MEDIANTE EL USO DEL HELPER////////

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            const getData = async (url) => {
                let res = await api.get(url);
                if(!res.err){
                    setDb(res)
                }
                else{
                    setDb([])
                    alert(res.statusText)
                }
                setLoading(false)
              };

            if(!flag.current) getData(url)
            
            return ()=>{
                clearTimeout(timer)
                flag.current=true
            }
            
        }, 3000);

    }, [])
    
    
    /////VARIABLES QUE SE MANDAN A TRAVES DEL CONTEXT API A LOS COMPONENTES///////
    const data = {
         db,
         setDb,
         form,
         handleChange,
         initialForm,
         setForm,
         handleSubmit,
         handleReset,
         loading
    }

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
    
}

export { DataProvider };
export default DataContext