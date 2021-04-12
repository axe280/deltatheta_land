import Vue from 'vue';
import Vuex from 'vuex';
import config from '../config';

import { ethers, provider } from '../modules/chain';

import { orders as OrdersProcessor } from '../modules/processor';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Client state
    account: null,
    clientProvider: null,
    chainId: 0,
    factory: config.factory,

    openedModal: null,

    // Ethers state
    provider,
    signer: null,

    // App state
    loadingState: 'waiting',
    timestamps: [],
    timestamp: 0,

    pairs: [],
    pair: {},
    pairData: {},
    orders: [],
    orderbook: {},
  },
  getters: {
    Account: (state) => state.account,
    ChainId: (state) => state.chainId,
    OpenedModal: (state) => state.openedModal,

    LoadingState: (state) => state.loadingState,
    Timestamps: (state) => state.timestamps,
    Timestamp: (state) => state.timestamp,
    Orders: (state) => state.orders,
    OrderBook: (state) => state.orderbook,
    Pairs: (state) => state.pairs,
    Pair: (state) => state.pair,
    PairData: (state) => state.pairData,
  },
  mutations: {
    OpenModal(state, value) {
      state.openedModal = value;
    },
    CloseModal(state) {
      state.openedModal = null;
    },
    SetLoadingState(state, value) {
      state.loadingState = value;
    },
    SetTimestamps(state, value) {
      state.timestamps = value;
    },
    SetTimestamp(state, value) {
      state.timestamp = value;
    },
    SetPairs(state, value) {
      state.pairs = value;
    },
    SetPair(state, value) {
      if (state.pair.contract) {
        state.pair.contract.removeAllListeners(['OrderAdded', 'OrderRemoved', 'OrderHistory']);
      }

      state.pair = value;
    },
    SetPairData(state, value) {
      state.pairData = value;
    },

    // Orders block
    SetOrders(state, value) {
      state.orders = value;
    },
    AddOrder(state, value) {
      state.orders.push(value);
    },
    RemoveOrder(state, id) {
      console.log('delete', id);
      const index = state.orders.findIndex((item) => Number(item.id) === Number(id));

      console.log('deleting', index);

      if (index !== -1) {
        state.orders.splice(index, 1);
      }
    },
    SetOrderBook(state, value) {
      state.orderbook = value;
    },

    SetAccount(state, value) {
      state.account = value;
    },
    SetClientProvider(state, value) {
      state.clientProvider = value;
    },
    SetChainId(state, value) {
      state.chainId = value;
    },

    SetSigner(state, value) {
      state.signer = value;
    },
  },
  actions: {
    async UpdateClientProvider({ commit }, clientProvider) {
      commit('SetClientProvider', clientProvider);

      if (!clientProvider) {
        commit('SetSigner', null);

        return;
      }

      const localProvider = new ethers.providers.Web3Provider(clientProvider);
      commit('SetSigner', localProvider.getSigner());
      commit('SetChainId', (await localProvider.getNetwork()).chainId);
    },
    async UpdateOrders({ commit, getters }, ordersList) {
      // Process orders
      if (ordersList) {
        commit('SetOrders', ordersList);
      }

      const orderbook = await OrdersProcessor.orderbook(getters);

      commit('SetOrderBook', orderbook);
      commit('SetLoadingState', 'finished');
    },
  },
  modules: {},
});
