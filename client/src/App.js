import React from 'react';
import axios from 'axios';

function App() {
  let [responseData, setResponseData] = React.useState('');
  const data = (e) => {
    e.preventDefault();
    console.log(123);
    axios({
      method: 'GET',
      url: '/covid/',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      },
    })
      .then((response) => {
        setResponseData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>{responseData.title}</h1>
      <button onClick={(e) => data(e)} type="button">
        Click Me For Data
      </button>
    </div>
  );
}

export default App;
