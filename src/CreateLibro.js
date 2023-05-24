import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'



function CreateLibro() {
    const [inputData, setInputData] = useState( {
        tituloLibro:'', autor:'',precio:''
    })

    const navigat = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://127.0.0.1:8000/api/libros', inputData)
        .then(res =>{
            alert("El dato ha sido guardado");
            navigat('/lista');
        }).catch(err => console.log(err));

    }
    
  return (
    <div div className='d-flex w-200 vh-1s50 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-1'>
        <form onSubmit={handleSubmit}> 
        <h3>Create Cliente</h3>

            <div className='mb-3'>
                <label className='form-label'>tituloLibro</label>
                <input 
                    type='text'
                    className='form-control'
                    onChange={e=>setInputData({...inputData, tituloLibro: e.target.value})}/>               
            </div>
            <div className='mb-3'>
                <label className='form-label'>autor</label>
                <input 
                    type='texts'
                    className='form-control'
                    onChange={e=>setInputData({...inputData, autor: e.target.value})}/> 
            
            </div>
            <div className='mb-3'>
                <label className='form-label'>precio</label>
                <input 
                   
                    type='number'
                    className='form-control'
                    onChange={e=>setInputData({...inputData, precio: e.target.value})}/> 
                
            </div>
            
            <button type='submit' className='btn btn-primary'>Store</button>
            </form> 
    </div>
    </div>
  )
}

export default CreateLibro