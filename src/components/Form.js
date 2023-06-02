import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Form = (props) => {
    const { city, setCity } = useState('');
    const handleInputChange  = (event) => {
        setCity(event.target.value);
    }
    
    return (
        <div className="Form">
            <div className="input-group mb-3">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter City Name"
            value={city}
            onChange={handleInputChange} 
             />
             <Button className="btn btn-primary" type="submit">Get Weather</Button>
            </div>
     
        </div>
    )
};


export default Form;