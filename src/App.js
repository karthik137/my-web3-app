import './App.css';
import connectToMetamask from './MyWeb3';
import { useEffect, useState } from 'react';

function App() {

  const [account, setAccount] = useState('');

  useEffect(() => {

    // Get the user's account
    console.log("Connecting to metamask");
    async function getAccount() {
      await connectToMetamask();
      const accounts = await window.web3.eth.getAccounts();
      setAccount(accounts[0]);
      console.log("Account is set ", account);
    }
    getAccount();
  }, []);

  return (
    <div className="App">
      <p>Connected account: {account}</p>
    </div>
  );
}

export default App;
