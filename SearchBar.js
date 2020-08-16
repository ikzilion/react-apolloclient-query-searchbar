import React,  {Component} from "react";
import ReactDOM from "react-dom";
import Search from'./Search'

class SearchBar extends Component{
   constructor(props) {
    super(props);
this.state = {
  searchvalue :'',
}}



handleSearch = (event) => {
  this.setState({
    searchvalue : event.target.value
})}

handlesubmit = (event) => {
  event.preventDefault()
  this.setState({
    searchvalue : this.state.searchvalue
  },  this.props.searchOutput(this.state.searchvalue)
  //,console.log (`this is form searchbar  ${this.state.searchvalue}`)
  )}


render() {
  return (
<form onSubmit = {this.handlesubmit}>
<div>
<h1> The Search </h1>
<input 
      type= 'text'  
      value = {this.state.searchvalue} 
      onChange = {this.handleSearch} />
<button type ='submit' >Search </button>

</div>
</form>
)}
    
}


    export default SearchBar 