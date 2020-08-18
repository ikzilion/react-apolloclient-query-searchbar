import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Search from './Search'
import SearchBar from './SearchBar'

const client = new ApolloClient({
  uri: 'https://graphql-test-server-morales.herokuapp.com/graphql',
  cache: new InMemoryCache()
});





class App extends Component {
 constructor(props) {
    super(props);
this.state = {
  search :'   '
}}

handleAppSearch = (searchIn) => {
  this.setState({
    search: searchIn
  })

}




  render() {
   // console.log(`this is app ${this.state.search}`)
    return (
      <ApolloProvider client = {client}>
      <div>
      <SearchBar searchOutput = {this.handleAppSearch.bind(this)} />
      <Search search = {this.state.search}/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
