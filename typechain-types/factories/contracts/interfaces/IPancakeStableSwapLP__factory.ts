/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPancakeStableSwapLP,
  IPancakeStableSwapLPInterface,
} from "../../../contracts/interfaces/IPancakeStableSwapLP";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newMinter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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

export class IPancakeStableSwapLP__factory {
  static readonly abi = _abi;
  static createInterface(): IPancakeStableSwapLPInterface {
    return new Interface(_abi) as IPancakeStableSwapLPInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPancakeStableSwapLP {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IPancakeStableSwapLP;
  }
}
