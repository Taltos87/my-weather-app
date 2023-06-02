import React from 'react';

const Form = () => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Enter City" aria-label="Enter City" aria-describedby="button-addon2" 
                onChange={handleImputChange}/>
    </div>
    <button className="btn btn-primery" type="submit"> Get Weather</button>
    </form>);
};