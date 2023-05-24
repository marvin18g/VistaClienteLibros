
import React, { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";


function EditJ() {
   const {id} = useParams();
   const[data, setData] = useState([])
   const navigate = useNavigate()
   useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/libros/'+id)
    .then(res => setData(res.data))
    .catch(err =>console.log(err))
   },[])
   function handleSubmit(event){
    event.preventDefault()
    axios.put('http://127.0.0.1:8000/api/libros/'+id, data)
    .then(res =>{
        alert("El dato ha sido actualizado");
        navigate('/lista')
    })
    

}

    return (
    <div div className='d-flex w-200 vh-1s50 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-1'>
        <form onSubmit={handleSubmit}> 
        <h3>Create Libros</h3>

        <div className='mb-3'>
                <label className='form-label'>id</label>
                <input 
                    type='text'
                    className='form-control'
                    disabled
                    value={data.id}
                    />   
</div>
            <div className='mb-3'>
                <label className='form-label'>tituloLibro</label>
                <input 
                    type='text'
                    className='form-control'
                    value={data.tituloLibro}
                    onChange={e=>setData({...data, tituloLibro: e.target.value})}/>              
                               
            </div>
            <div className='mb-3'>
                <label className='form-label'>autor</label>
                <input 
                    type='text'
                    className='form-control'
                    value={data.autor}
                    onChange={e=>setData({...data, autor: e.target.value})}/>    
                     
            
            </div>
            <div className='mb-3'>
                <label className='form-label'>precio</label>
                <input 
                   
                    type='number'
                    className='form-control'
                    value={data.precio}
                    onChange={e=>setData({...data, precio: e.target.value})}/>    
                    
                
            </div>
           
            <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form> 
    </div>
    </div>
  )
}

export default EditJ