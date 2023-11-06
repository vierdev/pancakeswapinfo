/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Base64Test,
  Base64TestInterface,
} from "../../../contracts/test/Base64Test";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "encode",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getGasCostOfEncode",
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
  "0x608060405234801561001057600080fd5b50610448806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806312496a1b1461003b57806374b86d1e14610156575b600080fd5b6100e16004803603602081101561005157600080fd5b81019060208101813564010000000081111561006c57600080fd5b82018360208201111561007e57600080fd5b803590602001918460018302840111640100000000831117156100a057600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061020e945050505050565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011b578181015183820152602001610103565b50505050905090810190601f1680156101485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101fc6004803603602081101561016c57600080fd5b81019060208101813564010000000081111561018757600080fd5b82018360208201111561019957600080fd5b803590602001918460018302840111640100000000831117156101bb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610221945050505050565b60408051918252519081900360200190f35b60606102198261023a565b90505b919050565b6000805a90506102308361023a565b505a900392915050565b606081516000141561025b575060408051602081019091526000815261021c565b60006040518060600160405280604081526020016103fc6040913990506000600384516002018161028857fe5b04600402905060008160200167ffffffffffffffff811180156102aa57600080fd5b506040519080825280601f01601f1916602001820160405280156102d5576020820181803683370190505b509050818152600183018586518101602084015b818310156103435760039283018051603f601282901c811687015160f890811b8552600c83901c8216880151811b6001860152600683901c8216880151811b60028601529116860151901b938201939093526004016102e9565b60038951066001811461035d57600281146103a7576103ed565b7f3d3d0000000000000000000000000000000000000000000000000000000000007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe8301526103ed565b7f3d000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301525b50939897505050505050505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa164736f6c6343000706000a";

type Base64TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Base64TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Base64Test__factory extends ContractFactory {
  constructor(...args: Base64TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Base64Test> {
    return super.deploy(overrides || {}) as Promise<Base64Test>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Base64Test {
    return super.attach(address) as Base64Test;
  }
  override connect(signer: Signer): Base64Test__factory {
    return super.connect(signer) as Base64Test__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Base64TestInterface {
    return new utils.Interface(_abi) as Base64TestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Base64Test {
    return new Contract(address, _abi, signerOrProvider) as Base64Test;
  }
}
