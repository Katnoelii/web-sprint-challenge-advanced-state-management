import React, { useEffect } from "react";
import "./App.css";
import {connect} from 'react-redux'
import {fetchData, addSmurf, handleChanges} from '../actions/index'
import Form from './Form'
import SmurfList from './SmurfList'

const App = props => {

  useEffect(() => {
    props.fetchData();
  },[])


    return (
      <div className="App">
        <h1>::Welcome to the Village::</h1>
        {props.isLoading && <h2>Grabbing the villagers...</h2>}
        {props.error && <p className='error'>Woah! Hang on...it looks like there was an error, see? {props.error}</p>}
        <Form 
         addSmurf={addSmurf}
         handleChanges={handleChanges}
         values={props.values}
         />
         <SmurfList
         smurfs={props.smurfs}
         />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error,
    values: {
      name: state.smurfs.name,
      age: state.smurfs.age,
      height: state.smurfs.height
    },
  }
}
//met MVP
export default connect(mapStateToProps,{fetchData, addSmurf, handleChanges})(App);
