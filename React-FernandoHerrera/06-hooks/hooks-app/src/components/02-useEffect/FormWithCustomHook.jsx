import React from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css';

const FormWithCustomHook = () => {

    const [formState, handleInputChange] = useForm({
        name: '',
        password: ''
    });

    const {name, password} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <form onSubmit={handleSubmit}>
           <h1>Form with custom hook</h1> 
           <hr />
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    className="form-control" 
                    placeholder="Your name" 
                    autoComplete="off" 
                    onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    className="form-control" 
                    placeholder="*********" 
                    autoComplete="off" 
                    onChange={handleInputChange} />
            </div>

            <button className="btn btn-primary">
                guardar
            </button>
        </form>
    )
}
export default FormWithCustomHook;