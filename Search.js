import React, {useState} from 'react';
import { render } from 'react-dom';
import { useQuery, gql } from '@apollo/client';

const SEARCH_RESULT= gql`
query searchquery ($search : String!){
  getCompanyInformation(search:$search){
    _id
    companyName
    quickDescription
    fulldescription
  }
  
  }

`

function searchResult ({search}) {
const {loading, error , data} = useQuery(SEARCH_RESULT,{variables : { search },});
  console.log ( search )
    if (loading) return <p>Loading...</p>;
    if (error) return console.log (error);


    return( 
      
      <ul>
            {data.getCompanyInformation.map(queryResult => (
              <li key = {queryResult._id}> <h1>{queryResult.companyName}</h1>
              <br/>{queryResult.quickDescription}</li>
             ) )}
        </ul>)
       
    
}

export default searchResult


//https://medium.com/@nipunadilhara/passing-data-between-different-components-using-react-c8e27319ee69