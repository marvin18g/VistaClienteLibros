import React , {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';



const ListaLibros = () => {
    const [libros, setLibros] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
        obtenerLibros();
    }, []);
  
    const obtenerLibros = () => {
      axios
        .get('http://127.0.0.1:8000/api/libros')
        .then(response => {
            setLibros(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    const handleSubmit = id => {
      const conf = window.confirm('¿Quieres eliminarlo?');
      if (conf) {
        axios
          .delete(`http://127.0.0.1:8000/api/libros/${id}`)
          .then(res => {
            alert('Ha sido eliminado');
            navigate('/lista');
            obtenerLibros(); // Actualizar la lista de clientes
          })
          .catch(err => console.log(err));
      }
    };
    return (
        <div className='mb-3'>

<table className="table table-hover">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">Titulo</th>
<th scope="col">Autor</th>
<th scope="col">Precio</th>
<th scope="col">Opciones</th>

</tr>
</thead>
<tbody>
    {libros.map(libros =>(
        <tr key={libros.id}>
            <th scope="row">{libros.id}</th>
            <td>{libros.tituloLibro}</td>
            <td>{libros.autor}</td>
            <td>{libros.precio}</td>
            <td>
                {/**/}
                <Link to={`/edit/${libros.id}`}>
                  <button className="btn btn-success">Editar</button>
                </Link>
                <button onClick={() => handleSubmit(libros.id)}
                  className="btn btn-danger">Eliminar</button>
                </td>
                </tr>

    ) )}
    </tbody>
    </table>
    </div>
    
    );

};
export default ListaLibros;


