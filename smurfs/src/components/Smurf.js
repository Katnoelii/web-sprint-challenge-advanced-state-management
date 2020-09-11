import React from 'react'
import './App.css'

const Smurf = (props) => {
    return (
        <div className='smurfContainer'>
            <h3>Name: <span>{props.smurf.name}</span></h3>
            <h5>Age: <span>{props.smurf.age}</span></h5>
            <h5>Height: <span>{props.smurf.height}</span></h5>
        </div>
    )
}

export default Smurf;