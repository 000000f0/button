import abi from '../utils/BuyMeACoffee.json';
import { ethers } from 'ethers';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ApiCallComponent from './ApiCallComponent';

export default function Home() {
  // Contract Address & ABI
  const contractAddress = '0x6968E861b047b4524b1d16Cb30e2F9707B03020E';
  const contractABI = abi.abi;

  // Component state
  const [currentAccount, setCurrentAccount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);


  const [currentpagenumber, setCurrentPageNumber] = useState(1);


  const [imageIndex, setImageIndex] = useState(0);
  const [isStrobing, setIsStrobing] = useState(false);

  const imageSources = [
    'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/clubsw.png',
    'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/clubsb.png',
    'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/diamondsw.png',
    'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/diamondsb.png',
    'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/spadesw.png',
    'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/spadesb.png',
    'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/heartsw.png',
    'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/heartsb.png'
    // Add more image sources here
  ];

  const startStrobe = () => {
    setIsStrobing(true);
    let counter = 0;
    const interval = setInterval(() => {
      setImageIndex(counter);
      counter = (counter + 1) % imageSources.length;
    }, 200); // Change the interval as desired

    setTimeout(() => {
      clearInterval(interval);
      setIsStrobing(false);
    }, 2000); // Set the duration for the strobe effect
  };

  const handlePageChange1 = () => {
    setCurrentPageNumber(1);
  };




  const handlePageChange2 = () => {
    setCurrentPageNumber(2);
  };


  const handlePageChange3 = () => {
    setCurrentPageNumber(3);
  };


  const handlePageChange4 = () => {
    setCurrentPageNumber(4);
  };


  const handlePageChange5 = () => {
    setCurrentPageNumber(5);
  };



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
      console.log('accounts: ', accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log('wallet is connected! ' + account);
      } else {
        console.log('make sure MetaMask is connected');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('please install MetaMask');
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
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

        console.log('buying coffee..');
        const coffeeTxn = await buyMeACoffee.buyCoffee(
          name ? name : 'anon',
          message ? message : 'Enjoy your coffee!',
          { value: ethers.utils.parseEther('0.001') }
        );

        await coffeeTxn.wait();

        console.log('mined ', coffeeTxn.hash);

        console.log('coffee purchased!');

        // Clear the form fields.
        setName('');
        setMessage('');
      }
    } catch (error) {
      console.log(error);
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



  const [rouletteResult, setRouletteResult] = useState(null);

  const spinRoulette = () => {
    // Generate a random result (0 or 1)
    const randomResult = Math.floor(Math.random() * 2);
    // Set the roulette result
    setRouletteResult(randomResult === 0 ? 'black' : 'white');
  };





































































































































































  return (
    
<center>

    <div
  className={`container ${isDarkMode ? 'darkMode' : ''}`}
  style={{
    border: isDarkMode ? '1px solid white' : '1px solid black',
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
    margin: 0,

  }}
>
<div
      className="nav-header"
      style={{
        zIndex: '2',

        backgroundColor: isDarkMode ? 'black' : 'white',
        borderBottom: isDarkMode ? '1px solid white' : '1px solid black',
      }}    >     
      
         <img
          style={{ width: '50px' }}
          src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/betlogowhite.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/betlogoblack.png'}
          alt="Logo"
        />
      <div className="wallet-address" style={{ textAlign: 'left', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: isDarkMode ? 'white' : 'black' }}>
  {currentAccount && (
    <>
      {currentAccount.substring(0, 6)}...{currentAccount.substring(currentAccount.length - 4)}
    </>
  )}
</div>

<div className="nav-header" style={{ backgroundColor: isDarkMode ? 'black' : 'white', display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
  <img
    style={{ width: '50px' }}
    src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/betlogowhite.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/betlogoblack.png'}
    alt="Logo"
  />



  <div className="wallet-address" style={{ textAlign: 'left', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: isDarkMode ? 'white' : 'black', marginLeft: '10px' }}>
    {currentAccount && (
      <>
        {currentAccount.substring(0, 6)}...{currentAccount.substring(currentAccount.length - 4)}
      </>
    )}
  </div>




  <div className="toggle-darkmode" style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}>
    <label className="switch">
      <input type="checkbox" onChange={toggleDarkMode} />
      <span className="slider"></span>
    </label>
  </div>
</div>



      </div>
      <Head>
        <title>Bit_Bet</title>
        <meta name="description" content="Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className="main">
        <br />
        <br />
        <br />
        <br />
  
  <div>


  <><img
      style={{
        zIndex: '-1',
        width: '150px',
      }}
      src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/betlogowhite.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/betlogoblack.png'}
      alt="Logo"
    />
    <style jsx>{`
      
      `}</style>
</>
<br />

  </div>
        {currentAccount ? (
          <><div>
                <form>


                  <div>
                    <button className="connect-button" type="button" onClick={buyCoffee}>
                      mint token
                    </button>
                  </div>
                </form>
              </div>
              
              
              
              
              </>
        ) : (


                <><>

                  <button className="connect-button" onClick={connectWallet}>
                    Connect your wallet
                  </button></><br /></>




        )}
       
       <div>
      <h1>chat</h1>
      <ApiCallComponent />
    </div>



<br />



      
      </main>
  
      <footer style={{marginBottom: '30px', width: '100%', borderTop: `1px solid ${!isDarkMode ? 'black' : 'white'}`, backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
    </center>

  );
            }
      
      
      
      
      
      

























