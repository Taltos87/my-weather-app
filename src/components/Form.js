import React  from 'react';
import { Button } from 'react-bootstrap';

const Form = ({ city, handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter City Name"
            value={city}
            onChange={handleInputChange} 
             />
             <Button className="btn btn-primary" type="submit">
                Get Weather</Button>
            </div>
     
       </form>
    );
};


export default Form;