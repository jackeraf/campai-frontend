import React from 'react'
import ShadowResults from "./ShadowResults/ShadowResults"
import {DebounceInput} from 'react-debounce-input';
import {Button, Grid, Row, Col, Image } from "react-bootstrap"

const SearchBar = (props)=>{
    
    return(
    <div >

        <form onSubmit={props.handleSearch}>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          value={props.inputText}
          onChange={props.inputChanged} />
 
            <Button bsStyle="success" 
            bsSize="small"
            onClick={props.handleSearch}>Search</Button>
        </form>
      
    </div>
    )
}

export default SearchBar;