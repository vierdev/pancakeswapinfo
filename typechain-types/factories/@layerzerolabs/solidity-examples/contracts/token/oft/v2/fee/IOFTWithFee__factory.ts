/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IOFTWithFee,
  IOFTWithFeeInterface,
} from "../../../../../../../../@layerzerolabs/solidity-examples/contracts/token/oft/v2/fee/IOFTWithFee";

const _abi = [
  {
    inputs: [],
    name: "circulatingSupply",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes",
      },
    ],
    name: "estimateSendAndCallFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes",
      },
    ],
    name: "estimateSendFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes",
          },
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple",
      },
    ],
    name: "sendAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes",
          },
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple",
      },
    ],
    name: "sendFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IOFTWithFee__factory {
  static readonly abi = _abi;
  static createInterface(): IOFTWithFeeInterface {
    return new Interface(_abi) as IOFTWithFeeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IOFTWithFee {
    return new Contract(address, _abi, runner) as unknown as IOFTWithFee;
  }
}
