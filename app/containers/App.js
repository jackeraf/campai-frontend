import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/SearchBar'
import ShadowResults from '../components/ShadowResults/ShadowResults'
import Spinner from "../components/Spinner"
import {Grid } from "react-bootstrap"
import { connect } from "react-redux"
import {MONGO_SEARCHED_TERM} from "../store/actions/actions"
import { searchTermInMongoDB } from "../store/reducers/reducer"

class App extends Component{

  render(){
    if(this.props.state.showSpinner){
      return(<Spinner/>)
    }else{
      return(
        <div>
            <Grid>
              <SearchBar
              inputChanged={this.handleInputChange.bind(this)}
              inputText={this.props.state.inputText}
              />
              <ShadowResults
              results={this.props.state.mongo}/>
          
            </Grid>
        </div>
        )
    }
    
  }

  handleInputChange(event){
    if(event.target.value !== ""){
      this.props.onSearchTerm(event.target.value);
    }
   
  }

}

const mapStateToProps = state=>{
  return{
    state,
    showSpinner: state.showSpinner
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    onSearchTerm:(inputText="")=> dispatch(searchTermInMongoDB(inputText)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
