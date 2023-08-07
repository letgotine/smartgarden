// Generated by @wagmi/cli@1.3.0 on 8/7/2023 at 1:47:44 AM
import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
  useNetwork,
  Address,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AttestationStation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const attestationStationABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'about',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'AttestationCreated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_attestations',
        internalType: 'struct AttestationStation.AttestationData[]',
        type: 'tuple[]',
        components: [
          { name: 'about', internalType: 'address', type: 'address' },
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'val', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'attest',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_about', internalType: 'address', type: 'address' },
      { name: '_key', internalType: 'bytes32', type: 'bytes32' },
      { name: '_val', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'attest',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'attestations',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DummyModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dummyModuleABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_vault', internalType: 'address', type: 'address' },
      { name: '_cadence', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'cadence',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'vault',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ModuleFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export const moduleFactoryABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'vault',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ModuleDeployed',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_vault', internalType: 'address', type: 'address' },
      { name: '_timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createModule',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'deployedModules',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

/**
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export const moduleFactoryAddress = {
  10: '0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96',
  420: '0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96',
  31337: '0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96',
} as const

/**
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export const moduleFactoryConfig = {
  address: moduleFactoryAddress,
  abi: moduleFactoryABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Semver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const semverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_major', internalType: 'uint256', type: 'uint256' },
      { name: '_minor', internalType: 'uint256', type: 'uint256' },
      { name: '_patch', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__.
 */
export function useAttestationStationRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof attestationStationABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof attestationStationABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: attestationStationABI,
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attestations"`.
 */
export function useAttestationStationAttestations<
  TFunctionName extends 'attestations',
  TSelectData = ReadContractResult<typeof attestationStationABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof attestationStationABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: attestationStationABI,
    functionName: 'attestations',
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"version"`.
 */
export function useAttestationStationVersion<
  TFunctionName extends 'version',
  TSelectData = ReadContractResult<typeof attestationStationABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof attestationStationABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: attestationStationABI,
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link attestationStationABI}__.
 */
export function useAttestationStationWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof attestationStationABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof attestationStationABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof attestationStationABI, TFunctionName, TMode>({
    abi: attestationStationABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attest"`.
 */
export function useAttestationStationAttest<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof attestationStationABI,
          'attest'
        >['request']['abi'],
        'attest',
        TMode
      > & { functionName?: 'attest' }
    : UseContractWriteConfig<typeof attestationStationABI, 'attest', TMode> & {
        abi?: never
        functionName?: 'attest'
      } = {} as any,
) {
  return useContractWrite<typeof attestationStationABI, 'attest', TMode>({
    abi: attestationStationABI,
    functionName: 'attest',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link attestationStationABI}__.
 */
export function usePrepareAttestationStationWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof attestationStationABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: attestationStationABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof attestationStationABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attest"`.
 */
export function usePrepareAttestationStationAttest(
  config: Omit<
    UsePrepareContractWriteConfig<typeof attestationStationABI, 'attest'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: attestationStationABI,
    functionName: 'attest',
    ...config,
  } as UsePrepareContractWriteConfig<typeof attestationStationABI, 'attest'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link attestationStationABI}__.
 */
export function useAttestationStationEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof attestationStationABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: attestationStationABI,
    ...config,
  } as UseContractEventConfig<typeof attestationStationABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link attestationStationABI}__ and `eventName` set to `"AttestationCreated"`.
 */
export function useAttestationStationAttestationCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof attestationStationABI, 'AttestationCreated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: attestationStationABI,
    eventName: 'AttestationCreated',
    ...config,
  } as UseContractEventConfig<
    typeof attestationStationABI,
    'AttestationCreated'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: counterABI,
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"number"`.
 */
export function useCounterNumber<
  TFunctionName extends 'number',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: counterABI,
    functionName: 'number',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof counterABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, TFunctionName, TMode>({
    abi: counterABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function useCounterIncrement<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'increment'
        >['request']['abi'],
        'increment',
        TMode
      > & { functionName?: 'increment' }
    : UseContractWriteConfig<typeof counterABI, 'increment', TMode> & {
        abi?: never
        functionName?: 'increment'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'increment', TMode>({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function useCounterSetNumber<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'setNumber'
        >['request']['abi'],
        'setNumber',
        TMode
      > & { functionName?: 'setNumber' }
    : UseContractWriteConfig<typeof counterABI, 'setNumber', TMode> & {
        abi?: never
        functionName?: 'setNumber'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'setNumber', TMode>({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function usePrepareCounterWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function usePrepareCounterIncrement(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'increment'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'increment'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function usePrepareCounterSetNumber(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof counterABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: counterABI,
    ...config,
  } as UseContractEventConfig<typeof counterABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__ and `eventName` set to `"Transfer"`.
 */
export function useCounterTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof counterABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: counterABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof counterABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link dummyModuleABI}__.
 */
export function useDummyModuleRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof dummyModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof dummyModuleABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: dummyModuleABI,
    ...config,
  } as UseContractReadConfig<typeof dummyModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link dummyModuleABI}__ and `functionName` set to `"cadence"`.
 */
export function useDummyModuleCadence<
  TFunctionName extends 'cadence',
  TSelectData = ReadContractResult<typeof dummyModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof dummyModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: dummyModuleABI,
    functionName: 'cadence',
    ...config,
  } as UseContractReadConfig<typeof dummyModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link dummyModuleABI}__ and `functionName` set to `"vault"`.
 */
export function useDummyModuleVault<
  TFunctionName extends 'vault',
  TSelectData = ReadContractResult<typeof dummyModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof dummyModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: dummyModuleABI,
    functionName: 'vault',
    ...config,
  } as UseContractReadConfig<typeof dummyModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link moduleFactoryABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export function useModuleFactoryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof moduleFactoryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof moduleFactoryABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof moduleFactoryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: moduleFactoryABI,
    address: moduleFactoryAddress[chainId as keyof typeof moduleFactoryAddress],
    ...config,
  } as UseContractReadConfig<
    typeof moduleFactoryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link moduleFactoryABI}__ and `functionName` set to `"deployedModules"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export function useModuleFactoryDeployedModules<
  TFunctionName extends 'deployedModules',
  TSelectData = ReadContractResult<typeof moduleFactoryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof moduleFactoryABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof moduleFactoryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: moduleFactoryABI,
    address: moduleFactoryAddress[chainId as keyof typeof moduleFactoryAddress],
    functionName: 'deployedModules',
    ...config,
  } as UseContractReadConfig<
    typeof moduleFactoryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link moduleFactoryABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export function useModuleFactoryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof moduleFactoryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof moduleFactoryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof moduleFactoryABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<typeof moduleFactoryABI, TFunctionName, TMode>({
    abi: moduleFactoryABI,
    address: moduleFactoryAddress[chainId as keyof typeof moduleFactoryAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link moduleFactoryABI}__ and `functionName` set to `"createModule"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export function useModuleFactoryCreateModule<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof moduleFactoryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof moduleFactoryABI,
          'createModule'
        >['request']['abi'],
        'createModule',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createModule'
      }
    : UseContractWriteConfig<typeof moduleFactoryABI, 'createModule', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createModule'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<typeof moduleFactoryABI, 'createModule', TMode>({
    abi: moduleFactoryABI,
    address: moduleFactoryAddress[chainId as keyof typeof moduleFactoryAddress],
    functionName: 'createModule',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link moduleFactoryABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export function usePrepareModuleFactoryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof moduleFactoryABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof moduleFactoryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: moduleFactoryABI,
    address: moduleFactoryAddress[chainId as keyof typeof moduleFactoryAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof moduleFactoryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link moduleFactoryABI}__ and `functionName` set to `"createModule"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export function usePrepareModuleFactoryCreateModule(
  config: Omit<
    UsePrepareContractWriteConfig<typeof moduleFactoryABI, 'createModule'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof moduleFactoryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: moduleFactoryABI,
    address: moduleFactoryAddress[chainId as keyof typeof moduleFactoryAddress],
    functionName: 'createModule',
    ...config,
  } as UsePrepareContractWriteConfig<typeof moduleFactoryABI, 'createModule'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link moduleFactoryABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export function useModuleFactoryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof moduleFactoryABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof moduleFactoryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: moduleFactoryABI,
    address: moduleFactoryAddress[chainId as keyof typeof moduleFactoryAddress],
    ...config,
  } as UseContractEventConfig<typeof moduleFactoryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link moduleFactoryABI}__ and `eventName` set to `"ModuleDeployed"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96)
 * -
 */
export function useModuleFactoryModuleDeployedEvent(
  config: Omit<
    UseContractEventConfig<typeof moduleFactoryABI, 'ModuleDeployed'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof moduleFactoryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: moduleFactoryABI,
    address: moduleFactoryAddress[chainId as keyof typeof moduleFactoryAddress],
    eventName: 'ModuleDeployed',
    ...config,
  } as UseContractEventConfig<typeof moduleFactoryABI, 'ModuleDeployed'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link semverABI}__.
 */
export function useSemverRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof semverABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof semverABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: semverABI, ...config } as UseContractReadConfig<
    typeof semverABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link semverABI}__ and `functionName` set to `"version"`.
 */
export function useSemverVersion<
  TFunctionName extends 'version',
  TSelectData = ReadContractResult<typeof semverABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof semverABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: semverABI,
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<typeof semverABI, TFunctionName, TSelectData>)
}
