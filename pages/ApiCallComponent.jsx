import React, { useState } from 'react';
import axios from 'axios';

function ApiCallComponent() {
  const [clientMessage, setClientMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setClientMessage(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("Submitting " + clientMessage);
    try {
      const lambdaEndpoint = 'http://54.77.216.40:5000'; // Replace with your Lambda endpoint URL
      const lambdaResponse = await axios.post(
        lambdaEndpoint,
        { clientmessage: clientMessage }
      );

      setResponse(lambdaResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <label>
        Client Message:
        <input type="text" value={clientMessage} onChange={handleInputChange} />
      </label>
      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiCallComponent;
