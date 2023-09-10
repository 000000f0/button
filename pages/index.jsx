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

  const startStrobe = () => {
    setIsStrobing(true);
    let counter = 0;
    const interval = setInterval(() => {
      setImageIndex(counter);
      counter = (counter + 1) % imageSources.length;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      setIsStrobing(false);
    }, 2000);
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

  const [rouletteResult, setRouletteResult] = useState(null);

  const spinRoulette = () => {
    // Generate a random result (0 or 1)
    const randomResult = Math.floor(Math.random() * 2);
    // Set the roulette result
    setRouletteResult(randomResult === 0 ? '#704214' : 'white');
  };

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const toggleChatModal = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };



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

    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #704214', padding: '20px',  color: !isDarkMode ? '#704214' : '#fff' }}>
        <h2>ARK4: The Energy Company You Own</h2>
        <p>
          Welcome to ARK4, the innovative energy company where you, the consumer, are also the owner. At ARK4, we believe in revolutionizing the way you interact with and benefit from the energy sector. Gone are the days of being a passive customer; with ARK4, you become an integral part of the solution to a cleaner, more sustainable future.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ border: isDarkMode ?  '1px solid #704214':'1px solid #fff', padding: '20px', color: !isDarkMode ? '#704214' : '#fff' }}>
        <h2>Our Vision</h2>
        <p>
          We envision a world where energy production is not just the domain of a few large corporations but a collective effort that empowers individuals and communities. ARK4 was born from the idea that everyone should have a stake in the energy they consume. When you join ARK4, you're not just signing up for electricity or fuel; you're investing in a better tomorrow.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #704214', padding: '20px', color: '#704214' }}>
        <h2>Clean and Sustainable Energy</h2>
        <p>
          As stewards of the environment, we are committed to harnessing the power of clean and sustainable energy sources. ARK4 is at the forefront of the renewable energy revolution. We're not only reducing our carbon footprint but also helping you reduce yours. Solar, wind, hydro, and other renewable sources are the backbone of our energy generation.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #704214', padding: '20px', color: '#704214' }}>
        <h2>The ARK4 Difference</h2>
        <p>
          What sets ARK4 apart from traditional energy companies? It's our cooperative approach. When you become a member, you gain a say in how the company operates. We hold regular meetings where members can voice their opinions and vote on important decisions. This isn't just a utility; it's a community.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #704214', padding: '20px', color: '#704214' }}>
        <h2>Benefits of Joining ARK4</h2>
        <ul>
          <li><strong>Ownership:</strong> As an owner, you're entitled to a share of ARK4's profits. When we do well, you do too.</li>
          <li><strong>Sustainability:</strong> Enjoy clean, green energy with a clear conscience, knowing you're contributing to a sustainable future.</li>
          <li><strong>Affordability:</strong> Our cooperative model often translates to cost savings for our members.</li>
          <li><strong>Transparency:</strong> We believe in open books. You'll have access to financial statements, performance reports, and more.</li>
          <li><strong>Community:</strong> Join a like-minded community of individuals passionate about clean energy and environmental stewardship.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #704214', padding: '20px', color: '#704214' }}>
        <h2>Our Commitment to You</h2>
        <p>
          At ARK4, our commitment extends beyond providing energy. We're here to educate, advocate, and drive positive change in the energy sector. We believe in transparency, accountability, and empowering our members to make informed choices about their energy consumption.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #704214', padding: '20px', color: '#704214' }}>
        <h2>Join Us Today</h2>
        <p>
          Ready to take control of your energy future? Join ARK4, the energy company you own. Together, we can build a cleaner, more sustainable world while benefiting from the rewards of ownership. Get started today and become a part of the ARK4 community. Together, we're powering change.
        </p>
      </td>
    </tr>
  </tbody>
</table>


    
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

    </div>
  );
}
















}