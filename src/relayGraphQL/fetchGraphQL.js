import { flexhireApiKey } from '../utils/utilities';

async function fetchGraphQL(params, variables) {
  const apiKey = localStorage.getItem('flexhireApiKey') || flexhireApiKey;
  try{
      const response = await fetch('http://localhost:3000/flexhire-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'FLEXHIRE-API-KEY': apiKey,
        },
        body: JSON.stringify({
          query: params.text,
          variables,
        })
      });
      const json = await response.json();
      console.log('JSON', json);
      return json;
    }
    catch(err){
      throw new Error(err.message);
    }
  }
  
  export default fetchGraphQL;