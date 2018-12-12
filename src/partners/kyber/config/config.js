// TODO: look into only using kyberTokenInfoList for ETH and parsing results differently if ROP?
const kyberTokenList = {
  ETH: 'https://tracker.kyber.network/api/tokens/supported',
  ROP: 'https://tracker.kyber.network/api/tokens/supported?chain=ropsten'
};

const kyberTokenInfoList = {
  ETH: 'https://tracker.kyber.network/api/tokens/pairs'
};

const kyberAddressFallback = {
  ETH: '0x818e6fecd516ecc3849daf6845e3ec868087b755',
  ROP: '0x818E6FECD516Ecc3849DAf6845e3EC868087B755'
};

import { KyberCurrenciesETH } from './currenciesETH';
import { KyberCurrenciesROP } from './currenciesROP';

const KyberCurrencies = { ETH: KyberCurrenciesETH, ROP: KyberCurrenciesROP };

const walletDepositeAddress = '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D'; // i.e. where payments go
const kyberNetworkENS = 'kybernetwork.eth';
const kyberValidNetworks = ['ETH', 'ROP'];

const defaultValues = {
  gasLimit: 300000,
  tokenApprovalGasLimit: 40205,
  maxGasPrice: 30000000000, // 30 Gwei
  gasPrice: 2000000000 // 2 Gwei
};

const PROVIDER_NAME = 'kybernetwork';
const kyberBaseCurrency = 'ETH';

export {
  kyberBaseCurrency,
  PROVIDER_NAME,
  defaultValues,
  kyberTokenList,
  kyberTokenInfoList,
  kyberValidNetworks,
  kyberNetworkENS,
  walletDepositeAddress,
  KyberCurrencies,
  kyberAddressFallback
};
