import abi from '../utils/BuyMeACoffee.json';
import { ethers } from 'ethers';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ApiCallComponent from './ApiCallComponent';
import ChatModal from './ChatModal';

export default function Home() {
  // Contract Address & ABI
  const contractAddress = '0xD0Ee1C301ECe6c950E16423D37F1f97B4475E6af';
  const contractABI = abi.abi;

  // Component state
  const [currentAccount, setCurrentAccount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentpagenumber, setCurrentPageNumber] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const [isStrobing, setIsStrobing] = useState(false);

  // Add your image sources here
  const imageSources = [
    // Add your image URLs here
  ];




  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  
    // Function to open the chat modal
    const openChatModal = () => {
      setIsChatModalOpen(true);
    };
  
    // Function to close the chat modal
    const closeChatModal = () => {
      setIsChatModalOpen(false);
    };
  






  // Define your handlePageChange functions here

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length > 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      } else {
        console.log('Make sure MetaMask is connected');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
  
      if (!ethereum) {
        console.error('Please install MetaMask');
        return; // Exit early if MetaMask is not available
      }
  
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
  
      if (accounts && accounts.length > 0) {
        // Wallet is connected
        setIsWalletConnected(true);
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const buyCoffee = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, 'any');
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log('Buying coffee...');
        const coffeeTxn = await buyMeACoffee.buyCoffee(
          name ? name : 'anon',
          message ? message : 'Enjoy your coffee!',
          { value: ethers.utils.parseEther('0.001') }
        );

        await coffeeTxn.wait();

        console.log('Mined:', coffeeTxn.hash);
        console.log('Coffee purchased!');

        // Clear the form fields.
        setName('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

  // Sample data for the e-sports events
  const esportsEvents = [
    { event: 'ESL One Cologne 2023', game: 'Counter-Strike: Global Offensive', startDate: 'August 20-26, 2023', prizePool: '$1,000,000' },
    { event: 'The International 2023', game: 'Dota 2', startDate: 'TBD', prizePool: '$TBD' },
    // Add more events
  ];




const handleSubmit = () => {
  // Handle form submission logic here
  // You can send the form data to your server or perform any other action
  console.log('Form submitted');
};




  const handlePageChange1 = () => {//home
    setCurrentPageNumber(1);
  };

  const handlePageChange2 = () => {//about
    setCurrentPageNumber(2);
  };

  const handlePageChange3 = () => {//mint
    setCurrentPageNumber(3);
  };


  const handlePageChange4 = () => {//contact
    setCurrentPageNumber(4);
  };



  const toggleChatModal = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };




  const buttonStyle = {
    backgroundColor: isDarkMode ?  '#985b00':'#fff',     // Background color
    color: 'white',             // Text color
padding:'15px',
    border: 'none',             // No border
    borderRadius: '50px',        // Rounded corners
    cursor: 'pointer',          // Cursor style on hover
    border: isDarkMode ? '3px solid white' : '3px solid #704214',

  };









  if (currentpagenumber === 1) {
    return (
      <div style={{
        backgroundColor: isDarkMode ? '#704214' : 'white' ,
        width:'101vw',
marginLeft:'-10px',
      }}>
        <Head>
          <title>Ark4</title>
          <meta name="description" content="Lottery" />
          <link rel="icon" href="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logoi.ico" />
        </Head>
  
        <div style={{ backgroundColor: isDarkMode ? '#704214' : 'white' }}>
          {/* Navbar */}
          <div className={`container ${isDarkMode ? 'darkMode' : ''}`}>
            <div
              className="nav-header"
              style={{
                zIndex: '2',
                backgroundColor: isDarkMode ? '#704214' : 'white',
                borderBottom: isDarkMode ? '1px solid white' : '1px solid #704214',
              }}
            >
              <img
                onClick={handlePageChange1}
                style={{ width: '100px' }}
                src={
                  !isDarkMode
                    ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light2.png'
                    : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark2.png'
                }
                alt="Logo"
              />
              <div style={{ color: !isDarkMode ? '#704214' : 'white' }}>
                {isWalletConnected ? (
                  currentAccount && (
                    <>
                      {currentAccount.substring(0, 6)}...
                      
                    </>
                  )
                ) : (
                  <button className="connect-button" onClick={connectWallet}>
                    Connect Wallet
                  </button>
                )}
              </div>
              <button
                className="connect-button"
                onClick={handlePageChange1}
                style={{ border: '0', color: isDarkMode ? '#fff' : '#704214', backgroundColor: !isDarkMode ? '#fff' : '#704214' }}
              >
                Home
              </button>
              <button
                className="connect-button"
                onClick={handlePageChange2}
                style={{ border: '0', color: isDarkMode ? '#fff' : '#704214', backgroundColor: !isDarkMode ? '#fff' : '#704214' }}
              >
                About
              </button>
              <button
                className="connect-button"
                onClick={handlePageChange3}
                style={{ border: '0', color: isDarkMode ? '#fff' : '#704214', backgroundColor: !isDarkMode ? '#fff' : '#704214' }}
              >
                Mint
              </button>
              <button
                className="connect-button"
                onClick={handlePageChange4}
                style={{ border: '0', color: isDarkMode ? '#fff' : '#704214', backgroundColor: !isDarkMode ? '#fff' : '#704214' }}
              >
                Contact_Us
              </button>
              <div
                className="toggle-darkmode"
                style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}
              >
                <label className="switch">
                  <input type="checkbox" onChange={toggleDarkMode} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
  
        {/* Contact Form */}
        <main style={{
          backgroundColor: '#ffffff',
          opacity: 1,
  height:'100vh',



backgroundImage: !isDarkMode ?
 'linear-gradient(#704214 2px, transparent 2px), linear-gradient(90deg, #704214 2px, transparent 2px), linear-gradient(#704214 1px, transparent 1px), linear-gradient(90deg, #704214 1px, #ffffff 1px)':
 
 ' linear-gradient(#ffffff 2px, transparent 2px), linear-gradient(90deg, #ffffff 2px, transparent 2px), linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, #704214 1px)',
 

 backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
}}>
          <div>
            <center>
              <div
                style={{
paddingTop:'20vh'
                }}
              >
                

                <table
                  style={{ backgroundColor: isDarkMode? '#704214' : '#fff', border: isDarkMode? '2px solid white' : '2px solid #704214', padding:'60px',width: '400px'}}
                >
                  <tbody>
                    <tr>
                      <td>
                        <center>
                      <img
                onClick={handlePageChange1}
                style={{ width: '100px' }}
                src={
                  !isDarkMode
                    ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light2.png'
                    : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark2.png'
                }
                alt="Logo"
              /></center>
                        <br />
                        <input
                          style={{
                            backgroundColor: isDarkMode? '#704214' : '#fff',
                            color: isDarkMode? '#fff' : '#704214',
                            border: isDarkMode? '1px solid white' : '1px solid #704214',
                            padding: '10px',
                            margin: '10px',
                            width: '300px'
                          }}
                          type='text'
                          placeholder='Name'
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          style={{
                            backgroundColor: isDarkMode? '#704214' : '#fff',
                            color: isDarkMode? '#fff' : '#704214',
                            border: isDarkMode? '1px solid white' : '1px solid #704214',
                            padding: '10px',
                            margin: '10px',
                            width: '300px'
                          }}
                          type='email'
                          placeholder='Email'
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <textarea
                         style={{
                          backgroundColor: isDarkMode? '#704214' : '#fff',
                          color: isDarkMode? '#fff' : '#704214',
                          border: isDarkMode? '1px solid white' : '1px solid #704214',
                          padding: '10px',
                          margin: '10px',
                          width: '300px'
                        }}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder='Message'
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button onClick={handleSubmit} style={{ backgroundColor: isDarkMode? '#fff' : '#704214', color: isDarkMode? '#704214' : '#fff', padding: '10px',                          border: isDarkMode? '1px solid white' : '1px solid #704214',

                            margin: '10px',
                            width: '322px' }}>

                          Contact Us
                        </button>
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              



            </center>


            







          </div>
        </main>
  
        {/* Footer */}
        <footer style={{ marginBottom: '30px', width: '100%', border: `1px solid ${!isDarkMode ? '#704214' : 'white'}`, backgroundColor: isDarkMode ? '#704214' : 'white', color: isDarkMode ? 'white' : '#704214', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{ width: '20px', padding: '15px' }}
              src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fd1.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fw1.png'}
              alt="Facebook Icon"
            />
            <img
              style={{ width: '20px', padding: '15px' }}
              src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/td1.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tw1.png'}
              alt="Twitter Icon"
            />
            <img
              style={{ width: '20px', padding: '15px' }}
              src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/id1.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/iw1.png'}
              alt="Instagram Icon"
            />
            <img
              style={{ width: '20px', padding: '15px' }}
              src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yd1.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yw1.png'}
              alt="Google Icon"
            />
            <img
              style={{ width: '20px', padding: '15px' }}
              src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gd1.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gw1.png'}
              alt="GitHub Icon"
            />
          </div>
        </footer>
        <div>
      {/* Container div for positioning */}
      <div 
       style={{
        position: 'fixed',
        bottom: '60px',
        left: '60px',
      }}>
        {/* Button to open the chat modal */}
        <div>
      {/* Button to open the chat modal with inline CSS */}
      <button
        onClick={openChatModal}
        style={buttonStyle} // Apply the buttonStyle
      >
        
        
        <img
              style={{ width: '40px', padding: '0px' }}
              src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/modald.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/modall.png'}
              alt="Chat"
            />


      </button>

      {/* Conditionally render the ChatModal */}
      {isChatModalOpen && (
        <ChatModal
          isDarkMode // You can set the mode as needed
          onClose={closeChatModal}
        />
      )}
    </div>
      </div>

      {/* Conditionally render the ChatModal */}
      {isChatModalOpen && (
        <ChatModal
          isDarkMode={false} // You can set the mode as needed
          onClose={closeChatModal}
        />
      )}
    </div>
      </div>
    );
  }
  







if(currentpagenumber==2){


  return (
      <div style={{
        backgroundColor: isDarkMode ? '#704214' : 'white' ,
        width:'101vw',
marginLeft:'-10px',
      }}><Head>
        <title>Ark4</title>
        <meta name="description" content="Lottery" />
        <link rel="icon" href="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logoi.ico" />
      </Head>

      <div style={{ backgroundColor: isDarkMode ? '#704214' : 'white' }}>
        {/* Navbar */}
        <div className={`container ${isDarkMode ? 'darkMode' : ''}`}>
          <div
            className="nav-header"
            style={{
              zIndex: '2',
              backgroundColor: isDarkMode ? '#704214' : 'white',
              borderBottom: isDarkMode ? '1px solid white' : '1px solid #704214',
            }}
          >
            <img
             onClick={handlePageChange1} 
              style={{ width: '100px' }}
              src={
                !isDarkMode
                  ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light2.png'
                  : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark2.png'
              }
              alt="Logo"
            />
            <div style={{ color: !isDarkMode ? '#704214' : 'white',}}>
              {isWalletConnected ? (


                currentAccount && (
                  <>
                    {currentAccount.substring(0, 6)}...
                    
                  </>
                )




              ) : (
                <button className="connect-button" onClick={connectWallet}>
                  Connect Wallet
                </button>
              )}

</div>


            <button className="connect-button" onClick={handlePageChange1} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Home
                </button>

                <button className="connect-button" onClick={handlePageChange2} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  About
                </button>

                <button className="connect-button" onClick={handlePageChange3} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Mint
                </button>

                <button className="connect-button" onClick={handlePageChange4} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Contact_Us
                </button>






            <div
              className="toggle-darkmode"
              style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}
            >
              <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>


        <main style={{
        backgroundColor: !isDarkMode ? '#fff' : '#704214',
        opacity: 1,
  paddingTop: '60px',



  
}}>
    <div>
    <center>
    {/* Logo */}
    <img
      style={{
        zIndex: '-1',
        width: '150px',
        backgroundColor: isDarkMode ? '#fff' : '#704214',
      }}
      src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light2.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark2.png'}
      alt="Logo"
    />
    {/* Add more content here */}


    {/* Home Sections */}
    <div style={{ backgroundColor: !isDarkMode ? '#fff' : '#704214' }}>
      <div
        className="home1"
        style={{
          color: isDarkMode ? '#fff' : '#704214',
          padding: '60px',
          opacity: '1',
          background: isDarkMode
            ? 'repeating-radial-gradient(circle at 0 0, transparent 0, #704214 11px), repeating-linear-gradient(#704214, #ffffff)'
            : 'repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 11px), repeating-linear-gradient(#ffffff, #704214)',
        }}
      >
        <div>
          <h1 style={{ color: !isDarkMode ? '#704214' : '#fff' }}>The Energy Company<br />You Own</h1>
          <button style={{ backgroundColor: isDarkMode ? '#fff' : '#704214', color: isDarkMode ? '#704214' : '#fff', border: isDarkMode ? '1px solid #704214' : '1px solid white' }}>About</button>
        </div>
      </div>
    </div>

    <table style={{  border: !isDarkMode ? '1px solid #704214' : '1px solid white', borderCollapse: '', width: '100%', borderSpacing: '5px',color: isDarkMode ? '#fff' : '#704214', }}>
  <tbody>
    <tr>
      <td style={{  border: !isDarkMode ? '1px solid #704214' : '1px solid white', padding: '10px', textAlign: 'center' }}>
        24 Jun<br />
        Taking Charge of Our Economic Future: Exploring the Power of Ark4.
      </td>
      <td style={{  border: !isDarkMode ? '1px solid #704214' : '1px solid white',  padding: '10px', textAlign: 'center' }}>
        1 Jun<br />
        Understanding NFTs and Blockchain: Beyond the Hype
      </td>
      <td style={{  border: !isDarkMode ? '1px solid #704214' : '1px solid white',  padding: '10px', textAlign: 'center' }}>
        13 May<br />
        Ignite the Crypto Wildfire: Redefining Ownership, Leaving a Legacy
      </td>
    </tr>
  </tbody>
</table>


















<div style={{ backgroundColor: !isDarkMode ? '#fff' : '#704214' }}>
      <div
        className="home1"
        style={{
          color: isDarkMode ? '#fff' : '#704214',
          padding: '60px',
          opacity: '1',
          background: !isDarkMode ? '#fff' : '#704214',
        
        
        
        
        }}
      >
        <div>
          <h1 style={{ color: !isDarkMode ? '#704214' : '#fff' }}>Announcements</h1>
          <button style={{ backgroundColor: isDarkMode ? '#fff' : '#704214', color: isDarkMode ? '#704214' : '#fff', border: isDarkMode ? '1px solid #704214' : '1px solid white' }}>i</button>
        </div>
      </div>
    </div>


















    
    </center>
  </div>
</main>


      {/* Footer */}
      <footer style={{ marginBottom: '30px', width: '100%', border: `1px solid ${!isDarkMode ? '#704214' : 'white'}`, backgroundColor: isDarkMode ? '#704214' : 'white', color: isDarkMode ? 'white' : '#704214', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fw.png'}
            alt="Facebook Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tw.png'}
            alt="Twitter Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/ib.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/iw.png'}
            alt="Instagram Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yw.png'}
            alt="Google Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gw.png'}
            alt="GitHub Icon"
          />
        </div>
      </footer>

      </div>





      <div 
       style={{
        position: 'fixed',
        bottom: '60px',
        left: '60px',
      }}>
        {/* Button to open the chat modal */}
        <div>
      {/* Button to open the chat modal with inline CSS */}
      <button
        onClick={openChatModal}
        style={buttonStyle} // Apply the buttonStyle
      >
        
        
        <img
              style={{ width: '40px', padding: '0px' }}
              src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/modald.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/modall.png'}
              alt="Chat"
            />


      </button>

      {/* Conditionally render the ChatModal */}
      {isChatModalOpen && (
        <ChatModal
          isDarkMode // You can set the mode as needed
          onClose={closeChatModal}
        />
      )}
    </div>
      </div>

      {/* Conditionally render the ChatModal */}
      {isChatModalOpen && (
        <ChatModal
          isDarkMode={false} // You can set the mode as needed
          onClose={closeChatModal}
        />
      )}
    </div>









  );
}



































if(currentpagenumber==3){


  return (
      <div style={{
        backgroundColor: isDarkMode ? '#704214' : 'white' ,
        width:'101vw',
marginLeft:'-10px',
      }}><Head>
        <title>Ark4</title>
        <meta name="description" content="Lottery" />
        <link rel="icon" href="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logoi.ico" />
      </Head>





      <div style={{ backgroundColor: isDarkMode ? '#704214' : 'white' }}>
        {/* Navbar */}
        <div className={`container ${isDarkMode ? 'darkMode' : ''}`}>
          <div
            className="nav-header"
            style={{
              zIndex: '2',
              backgroundColor: isDarkMode ? '#704214' : 'white',
              borderBottom: isDarkMode ? '1px solid white' : '1px solid #704214',
            }}
          >
            <img
             onClick={handlePageChange1} 
              style={{ width: '100px' }}
              src={
                !isDarkMode
                  ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light2.png'
                  : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark2.png'
              }
              alt="Logo"
            />
            <div style={{ color: !isDarkMode ? '#704214' : 'white',}}>
              {isWalletConnected ? (


                currentAccount && (
                  <>
                    {currentAccount.substring(0, 6)}...
                    
                  </>
                )




              ) : (
                <button className="connect-button" onClick={connectWallet}>
                  Connect Wallet
                </button>
              )}

</div>


            <button className="connect-button" onClick={handlePageChange1} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Home
                </button>

                <button className="connect-button" onClick={handlePageChange2} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  About
                </button>

                <button className="connect-button" onClick={handlePageChange3} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Mint
                </button>

                <button className="connect-button" onClick={handlePageChange4} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Contact_Us
                </button>






            <div
              className="toggle-darkmode"
              style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}
            >
              <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>


        <main style={{
        backgroundColor: !isDarkMode ? '#fff' : '#704214',
        opacity: 1,
  paddingTop: '60px',


  
}}>
    <div>
    <center>
    {/* Logo */}
    <img
      style={{
        zIndex: '-1',
        width: '150px',
        backgroundColor: isDarkMode ? '#fff' : '#704214',
      }}
      src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light2.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark2.png'}
      alt="Logo"
    />
    {/* Add more content here */}

    {/* Connect Wallet or Chat */}
    
    

    {/* Chat */}
    <div style={{ backgroundColor: !isDarkMode ? '#fff' : '#704214' }}>
      <h1>Chat</h1>
      <ApiCallComponent />
    </div>
<br />

    {/* Chat Modal */}
    <div style={{ backgroundColor: !isDarkMode ? '#fff' : '#704214' }}>
      <h1>Chat</h1>
      <button onClick={toggleChatModal}>Open Chat</button>
      {isChatModalOpen && (
        <ChatModal
          isDarkMode={isDarkMode}
          onClose={toggleChatModal}
        />
      )}
    </div>
    </center>
  </div>
</main>


      {/* Footer */}
      <footer style={{ marginBottom: '30px', width: '100%', border: `1px solid ${!isDarkMode ? '#704214' : 'white'}`, backgroundColor: isDarkMode ? '#704214' : 'white', color: isDarkMode ? 'white' : '#704214', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fw.png'}
            alt="Facebook Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tw.png'}
            alt="Twitter Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/ib.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/iw.png'}
            alt="Instagram Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yw.png'}
            alt="Google Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gw.png'}
            alt="GitHub Icon"
          />
        </div>
      </footer>

      </div>

    </div>
  );
}















if(currentpagenumber==4){


  return (
      <div style={{
        backgroundColor: isDarkMode ? '#704214' : 'white' ,
        width:'101vw',
marginLeft:'-10px',
      }}><Head>
        <title>Ark4</title>
        <meta name="description" content="Lottery" />
        <link rel="icon" href="https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logoi.ico" />
      </Head>

      <div style={{ backgroundColor: isDarkMode ? '#704214' : 'white' }}>
        {/* Navbar */}
        <div className={`container ${isDarkMode ? 'darkMode' : ''}`}>
          <div
            className="nav-header"
            style={{
              zIndex: '2',
              backgroundColor: isDarkMode ? '#704214' : 'white',
              borderBottom: isDarkMode ? '1px solid white' : '1px solid #704214',
            }}
          >
            <img
             onClick={handlePageChange1} 
              style={{ width: '100px' }}
              src={
                !isDarkMode
                  ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light2.png'
                  : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark2.png'
              }
              alt="Logo"
            />
            <div style={{ color: !isDarkMode ? '#704214' : 'white',}}>
              {isWalletConnected ? (


                currentAccount && (
                  <>
                    {currentAccount.substring(0, 6)}...
                    
                  </>
                )




              ) : (
                <button className="connect-button" onClick={connectWallet}>
                  Connect Wallet
                </button>
              )}

</div>


            <button className="connect-button" onClick={handlePageChange1} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Home
                </button>

                <button className="connect-button" onClick={handlePageChange2} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  About
                </button>

                <button className="connect-button" onClick={handlePageChange3} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Mint
                </button>

                <button className="connect-button" onClick={handlePageChange4} style={{border:'0',color: isDarkMode ? '#fff' : '#704214',backgroundColor: !isDarkMode ? '#fff' : '#704214'}}>
                  Contact_Us
                </button>






            <div
              className="toggle-darkmode"
              style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}
            >
              <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>


        <main style={{
          backgroundColor: '#ffffff',
          opacity: 1,
  paddingTop: '195px',
  paddingBottom: '150px',



backgroundImage: !isDarkMode ?
 'linear-gradient(#704214 2px, transparent 2px), linear-gradient(90deg, #704214 2px, transparent 2px), linear-gradient(#704214 1px, transparent 1px), linear-gradient(90deg, #704214 1px, #ffffff 1px)':
 
 ' linear-gradient(#ffffff 2px, transparent 2px), linear-gradient(90deg, #ffffff 2px, transparent 2px), linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, #704214 1px)',
 

 backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
}}>
          <div>
            <center>
              <div
                style={{

                }}
              >
                

                <table
                  style={{ backgroundColor: isDarkMode? '#704214' : '#fff', border: isDarkMode? '2px solid white' : '2px solid #704214', padding:'60px',width: '400px'}}
                >
                  <tbody>
                    <tr>
                      <td>
                        <center>
                      <img
                onClick={handlePageChange1}
                style={{ width: '100px' }}
                src={
                  !isDarkMode
                    ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light2.png'
                    : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark2.png'
                }
                alt="Logo"
              /></center>
                        <br />
                        
                        
                        
                        
                      </td>
                    </tr>
                    <tr>
                      <td>
                        
                        



                      </td>
                    </tr>
                    <tr>
                      <td>
                        
                        
                      <center>
                      <img
                onClick={handlePageChange1}
                style={{ width: '300px' }}
                src={
                   'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/nft.gif'
                }
                alt="Logo"
              /></center>


                      </td>
                    </tr>
                    <tr>
                      <td>
                        
                      {currentAccount ? (
    <form>
      <button
        className="connect-button"
        type="button"
        onClick={buyCoffee}
        style={{
          backgroundColor: isDarkMode ? '#fff' : '#704214',
          color: isDarkMode ? '#704214' : '#fff',
          padding: '10px',
          border: isDarkMode ? '1px solid white' : '1px solid #704214',
          margin: '10px',
          width: '322px'
        }}
      >
        Mint Token
      </button>
    </form>
  ) : (
    <button
      className="connect-button"
      onClick={connectWallet}
      style={{
        backgroundColor: isDarkMode ? '#fff' : '#704214',
        color: isDarkMode ? '#704214' : '#fff',
        padding: '10px',
        border: isDarkMode ? '1px solid white' : '1px solid #704214',
        margin: '10px',
        width: '322px'
      }}
    >
      Connect your wallet
    </button>
  )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </center>
          </div>
        </main>








    


      {/* Footer */}
      <footer style={{ marginBottom: '30px', width: '100%', border: `1px solid ${!isDarkMode ? '#704214' : 'white'}`, backgroundColor: isDarkMode ? '#704214' : 'white', color: isDarkMode ? 'white' : '#704214', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fw.png'}
            alt="Facebook Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tw.png'}
            alt="Twitter Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/ib.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/iw.png'}
            alt="Instagram Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yw.png'}
            alt="Google Icon"
          />
          <img
            style={{ width: '20px', padding: '15px' }}
            src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gw.png'}
            alt="GitHub Icon"
          />
        </div>
      </footer>

      </div>






      <div 
       style={{
        position: 'fixed',
        bottom: '60px',
        left: '60px',
      }}>
        {/* Button to open the chat modal */}
        <div>
      {/* Button to open the chat modal with inline CSS */}
      <button
        onClick={openChatModal}
        style={buttonStyle} // Apply the buttonStyle
      >
        
        
        <img
              style={{ width: '40px', padding: '0px' }}
              src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/modald.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/modall.png'}
              alt="Chat"
            />


      </button>

      {/* Conditionally render the ChatModal */}
      {isChatModalOpen && (
        <ChatModal
          isDarkMode // You can set the mode as needed
          onClose={closeChatModal}
        />
      )}
    </div>
      </div>

      {/* Conditionally render the ChatModal */}
      {isChatModalOpen && (
        <ChatModal
          isDarkMode={false} // You can set the mode as needed
          onClose={closeChatModal}
        />
      )}
    </div>
      






  );
}
















}