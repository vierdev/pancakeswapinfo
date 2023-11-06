/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PositionValueTest,
  PositionValueTestInterface,
} from "../../../contracts/test/PositionValueTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "fees",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "feesGas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
    ],
    name: "principal",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
    ],
    name: "principalGas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
    ],
    name: "total",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
    ],
    name: "totalGas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061120b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80635b6dc092116100505780635b6dc0921461015757806390594f911461019a578063ee4e9ba3146101dd57610072565b80632263539714610077578063263a5362146100d35780633803770c1461010c575b600080fd5b6100ba6004803603606081101561008d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359160409091013516610220565b6040805192835260208301919091528051918290030190f35b6100ba600480360360408110156100e957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561023a565b6101456004803603604081101561012257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610252565b60408051918252519081900360200190f35b6100ba6004803603606081101561016d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040909101351661026e565b610145600480360360608110156101b057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040909101351661027c565b610145600480360360608110156101f357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040909101351661029c565b60008061022e8585856102a9565b91509150935093915050565b6000806102478484610372565b915091509250929050565b6000805a90506102628484610372565b50505a90039392505050565b60008061022e858585610567565b6000805a905061028d858585610567565b50505a900390505b9392505050565b6000805a905061028d8585855b60008060008060008773ffffffffffffffffffffffffffffffffffffffff166399fbab88886040518263ffffffff1660e01b8152600401808281526020019150506101806040518083038186803b15801561030357600080fd5b505afa158015610317573d6000803e3d6000fd5b505050506040513d61018081101561032e57600080fd5b5060a081015160c082015160e0909201519094509092509050610363866103548561059a565b61035d8561059a565b8461092d565b94509450505050935093915050565b6000806000806000806000806000806000808d73ffffffffffffffffffffffffffffffffffffffff166399fbab888e6040518263ffffffff1660e01b8152600401808281526020019150506101806040518083038186803b1580156103d657600080fd5b505afa1580156103ea573d6000803e3d6000fd5b505050506040513d61018081101561040157600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050506fffffffffffffffffffffffffffffffff169b506fffffffffffffffffffffffffffffffff169b509b509b509b509b509b509b509b509b5050506105528e6040518061014001604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018b62ffffff1681526020018a60020b81526020018960020b8152602001886fffffffffffffffffffffffffffffffff16815260200187815260200186815260200185815260200184815250610a17565b9b509b50505050505050505050509250929050565b6000806000806105788787876102a9565b915091506000806105898989610372565b940195505050019050935093915050565b60008060008360020b126105b1578260020b6105b9565b8260020b6000035b9050620d89e881111561062d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f5400000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001821661064e57700100000000000000000000000000000000610660565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615610694576ffff97272373d413259a46990580e213a0260801c5b60048216156106b3576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156106d2576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156106f1576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615610710576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561072f576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561074e576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561076e576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b61020082161561078e576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156107ae576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156107ce576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156107ee576fd097f3bdfd2022b8845ad8f792aa58250260801c5b61200082161561080e576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161561082e576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561084e576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561086f576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561088f576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156108ae576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156108cb576b048a170391f7dc42444e8fa20260801c5b60008460020b131561090457807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8161090057fe5b0490505b64010000000081061561091857600161091b565b60005b60ff16602082901c0192505050919050565b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161115610968579293925b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16116109ad576109a6858585610b7b565b9150610a0e565b8373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161015610a00576109ec868585610b7b565b91506109f9858785610c2e565b9050610a0e565b610a0b858585610c2e565b90505b94509492505050565b600080600080610aec610add8773ffffffffffffffffffffffffffffffffffffffff1663d5f394886040518163ffffffff1660e01b815260040160206040518083038186803b158015610a6957600080fd5b505afa158015610a7d573d6000803e3d6000fd5b505050506040513d6020811015610a9357600080fd5b505160408051606081018252895173ffffffffffffffffffffffffffffffffffffffff908116825260208b810151909116908201528982015162ffffff1691810191909152610cb2565b86606001518760800151610de8565b91509150846101000151610b2e8660c0015184038760a001516fffffffffffffffffffffffffffffffff16700100000000000000000000000000000000611131565b019350846101200151610b6f8660e0015183038760a001516fffffffffffffffffffffffffffffffff16700100000000000000000000000000000000611131565b01925050509250929050565b60008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115610bb5579192915b8373ffffffffffffffffffffffffffffffffffffffff16610c1e606060ff16846fffffffffffffffffffffffffffffffff16901b86860373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16611131565b81610c2557fe5b04949350505050565b60008273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115610c68579192915b610caa826fffffffffffffffffffffffffffffffff1685850373ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000611131565b949350505050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610610cf457600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527f6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e260d5808301919091528251808303909101815260f5909101909152805191012090565b60008060008573ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b158015610e3357600080fd5b505afa158015610e47573d6000803e3d6000fd5b505050506040513d60e0811015610e5d57600080fd5b5060200151604080517ff30dba93000000000000000000000000000000000000000000000000000000008152600288900b60048201529051919250600091829173ffffffffffffffffffffffffffffffffffffffff8a169163f30dba939160248082019261010092909190829003018186803b158015610edc57600080fd5b505afa158015610ef0573d6000803e3d6000fd5b505050506040513d610100811015610f0757600080fd5b5060408082015160609092015181517ff30dba9300000000000000000000000000000000000000000000000000000000815260028a900b600482015291519294509250600091829173ffffffffffffffffffffffffffffffffffffffff8c169163f30dba939160248082019261010092909190829003018186803b158015610f8e57600080fd5b505afa158015610fa2573d6000803e3d6000fd5b505050506040513d610100811015610fb957600080fd5b5060408101516060909101519092509050600289810b9086900b1215610fe85781840396508083039550611124565b8760020b8560020b12156111195760008a73ffffffffffffffffffffffffffffffffffffffff1663f30583996040518163ffffffff1660e01b815260040160206040518083038186803b15801561103e57600080fd5b505afa158015611052573d6000803e3d6000fd5b505050506040513d602081101561106857600080fd5b5051604080517f46141319000000000000000000000000000000000000000000000000000000008152905191925060009173ffffffffffffffffffffffffffffffffffffffff8e16916346141319916004808301926020929190829003018186803b1580156110d657600080fd5b505afa1580156110ea573d6000803e3d6000fd5b505050506040513d602081101561110057600080fd5b5051918690038490039850508390038190039550611124565b838203965082810395505b5050505050935093915050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870986860292508281109083900303905080611185576000841161117a57600080fd5b508290049050610295565b80841161119157600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a0290910302918190038190046001018684119095039490940291909403929092049190911791909102915050939250505056fea164736f6c6343000706000a";

type PositionValueTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PositionValueTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PositionValueTest__factory extends ContractFactory {
  constructor(...args: PositionValueTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PositionValueTest> {
    return super.deploy(overrides || {}) as Promise<PositionValueTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PositionValueTest {
    return super.attach(address) as PositionValueTest;
  }
  override connect(signer: Signer): PositionValueTest__factory {
    return super.connect(signer) as PositionValueTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionValueTestInterface {
    return new utils.Interface(_abi) as PositionValueTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PositionValueTest {
    return new Contract(address, _abi, signerOrProvider) as PositionValueTest;
  }
}
