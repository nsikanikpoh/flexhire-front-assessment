import { isEmpty } from "../utils/utilities";
import { mockData } from "./mockData";

async function fetchGraphQL(params, variables) {
  console.log('flexhireApiKey', variables.flexhireApiKey)
  try{
      // Fetch data from GitHub's GraphQL API:
      const response = await fetch('https://api.flexhire.com/api/v2', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'FLEXHIRE-API-KEY': variables.flexhireApiKey,
        },
        body: JSON.stringify({
          query: params.text
        })
      });
      console.log('RESPONSE', response)
      
      const json = await response.json();
      console.log('JSON', json);
      return json;
    }
    catch(err){
      //Access to fetch at 'https://api.flexhire.com/api/v2' from origin 'http://localhost:3000' 
      //has been blocked by CORS policy: Response to preflight request doesn't pass access control check: 
      //No 'Access-Control-Allow-Origin' header is present on the requested resource.
      //Due to CORS issue we return mock-data
      //throw new Error(err.message)
      return mockData
    }
    // Get the response as JSON
    // Otherwise, return the full payload.
  }
  
  export default fetchGraphQL;