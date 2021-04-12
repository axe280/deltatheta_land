export default {
  rpc: 'http://127.0.0.1:9545',
  factory: '0x3C56BB02196B0e2792d2ce4Ad88fEE6A4eca9aF3',
  allowedChains: [1337],
  chains: {
    1337: 'Mainnet',
  },

  app: {
    batchSize: 10,
    coinsIds: {
      WBNB: 'wbnb',
      BUSD: 'binance-usd',
    },
  },
};
