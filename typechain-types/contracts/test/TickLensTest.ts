/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace ITickLens {
  export type PopulatedTickStruct = {
    tick: PromiseOrValue<BigNumberish>;
    liquidityNet: PromiseOrValue<BigNumberish>;
    liquidityGross: PromiseOrValue<BigNumberish>;
  };

  export type PopulatedTickStructOutput = [number, BigNumber, BigNumber] & {
    tick: number;
    liquidityNet: BigNumber;
    liquidityGross: BigNumber;
  };
}

export interface TickLensTestInterface extends utils.Interface {
  functions: {
    "getGasCostOfGetPopulatedTicksInWord(address,int16)": FunctionFragment;
    "getPopulatedTicksInWord(address,int16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getGasCostOfGetPopulatedTicksInWord"
      | "getPopulatedTicksInWord"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getGasCostOfGetPopulatedTicksInWord",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPopulatedTicksInWord",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getGasCostOfGetPopulatedTicksInWord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPopulatedTicksInWord",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TickLensTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TickLensTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getGasCostOfGetPopulatedTicksInWord(
      pool: PromiseOrValue<string>,
      tickBitmapIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPopulatedTicksInWord(
      pool: PromiseOrValue<string>,
      tickBitmapIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [ITickLens.PopulatedTickStructOutput[]] & {
        populatedTicks: ITickLens.PopulatedTickStructOutput[];
      }
    >;
  };

  getGasCostOfGetPopulatedTicksInWord(
    pool: PromiseOrValue<string>,
    tickBitmapIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPopulatedTicksInWord(
    pool: PromiseOrValue<string>,
    tickBitmapIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ITickLens.PopulatedTickStructOutput[]>;

  callStatic: {
    getGasCostOfGetPopulatedTicksInWord(
      pool: PromiseOrValue<string>,
      tickBitmapIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPopulatedTicksInWord(
      pool: PromiseOrValue<string>,
      tickBitmapIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ITickLens.PopulatedTickStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    getGasCostOfGetPopulatedTicksInWord(
      pool: PromiseOrValue<string>,
      tickBitmapIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPopulatedTicksInWord(
      pool: PromiseOrValue<string>,
      tickBitmapIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getGasCostOfGetPopulatedTicksInWord(
      pool: PromiseOrValue<string>,
      tickBitmapIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPopulatedTicksInWord(
      pool: PromiseOrValue<string>,
      tickBitmapIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
