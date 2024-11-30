let connectWalletButton = document.querySelector('.connect-wallet');

let walletAddress;

const switchToBnbChain = async () => {
  const bnbChainParams = {
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  };

  try {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [bnbChainParams],
      });
      console.log('Switched to Binance Smart Chain!');
    } else {
      console.error('MetaMask or similar wallet not found!');
    }
  } catch (error) {
    console.error('Error switching to Binance Smart Chain:', error);
  }
};


async function connectWallet() {

  let account;

  try {
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed!');
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    account = accounts[0];

    const firstFour = account.substring(0, 4);
    const lastFour = account.substring(account.length - 4);
    const result = `${firstFour}...${lastFour}`;
    connectWalletButton.innerHTML = result;

    switchToBnbChain();

    return account;
  } catch (error) {
    console.error('Error connecting wallet:', error);
    throw error;
  }

}


if (typeof window.ethereum !== 'undefined') {
  window.ethereum.on('chainChanged', (chainId) => {
    connectWallet();
  });
} else {
  console.error('MetaMask or similar wallet not found!');
}



connectWalletButton.addEventListener('click', async function () {
  walletAddress = await connectWallet();
  console.log(walletAddress);
});

connectWallet();
