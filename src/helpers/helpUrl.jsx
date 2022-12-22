export const helpUrl = () => {
  const customFetch = (url,options) => {
    const defaultHeader = {
        accept : "application/json"
    }

    const controller = new AbortController();
    options.signal = controller.signal;

    //Asignando el valor del metodo de la peticion
    options.method = options.method || "GET" //si la peticion viene con un metodo las option toma el valor de ese
    //metodo sino toma el "GET" q es el metodo x default

    //Asignando el valor de los headers
    options.headers = options.headers //si viene con cabeceras entonces une las cabeceras con las cabeceras x defecto
    //sino solo las cabaceras x defecto
    ?{...defaultHeader,...options.headers}
    :defaultHeader;

    //Asignando el valor del body de la peticion
    options.body = JSON.stringify(options.body) || false;// si no viene con body se elimina esa options
    if(!options.body) delete options.body

    setTimeout(() => controller.abort(), 5000);

    return fetch(url,options).then(res=>
        res.ok
        ?res.json()
        :Promise.reject({
            err:true,
            status : res.status || "00",
            statusText : res.statusText || "Ha corrido un error"
        })).catch(err=>err)
  }

    const get = (url, options={}) => customFetch(url,options)

    const post = (url, options={}) => {
        options.method = "POST"
        return customFetch(url,options)
    }

    const put = (url, options={}) => {
        options.method = "PUT"
        return customFetch(url,options)
    }

    const del = (url, options={}) => {
        options.method = "DELETE"
        return customFetch(url,options)
    }
  

  return {
    get,
    post,
    put,
    del
  }
}
