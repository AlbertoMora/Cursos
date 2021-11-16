import React, { useEffect, useState } from 'react'

import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });

    const {name, email} = formState;

    useEffect(() => {
        console.log("Con un [] vacio se ejecuta sólo cuando el componente se monta");
    }, []);

    
    useEffect(() => {
        console.log("De esta forma, se ejecuta cada que el formState cambie");
    }, [formState]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
           <h1>Use Effect</h1> 
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
                    type="text" 
                    name="email" 
                    value={email} 
                    className="form-control" 
                    placeholder="Your email" 
                    autoComplete="off" 
                    onChange={handleInputChange} />
            </div>

            {(name === "123") && <Message name={name} />}
        </>
    )
}
export default SimpleForm;