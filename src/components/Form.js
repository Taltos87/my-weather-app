import { Button } from 'bootstrap';
import React from 'react';

const Form = (props) => {
    return (
        <div className="Form">
         <div className="input-group mb-3">
            <input type="text" 
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