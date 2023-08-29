import React, { useState } from 'react';
import axios from 'axios';

function ApiCallComponent() {
  const [clientMessage, setClientMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setClientMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://i2eqjixn7llpkm6laquc47zxhu0yzfyw.lambda-url.eu-west-1.on.aws/ ',
        { clientmessage: clientMessage }
      );
      
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Client Message:
          <input type="text" value={clientMessage} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiCallComponent;
