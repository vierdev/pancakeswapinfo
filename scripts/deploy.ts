import bn from 'bignumber.js'
import { Contract, ContractFactory, utils, BigNumber } from 'ethers'
import { ethers, waffle } from 'hardhat'

const WBNB = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd' // BSC TESTNET

type ContractJson = { abi: any; bytecode: string }
const artifacts: { [name: string]: ContractJson } = {
  // eslint-disable-next-line global-require
  PancakeStableSwapTwoPoolInfo: require('../artifacts/contracts/utils/PancakeStableSwapTwoPoolInfo.sol/PancakeStableSwapTwoPoolInfo.json'),
}

async function main() {
  const [owner] = await ethers.getSigners()
  const provider = waffle.provider
  console.log('owner', owner.address)

  // console.log("abi: ", artifacts.PancakeStableswapFactory);

  const PancakeStableSwapTwoPoolInfo = new ContractFactory(
    artifacts.PancakeStableSwapTwoPoolInfo.abi,
    artifacts.PancakeStableSwapTwoPoolInfo.bytecode,
    owner
  )

  const PancakeStableSwapTwoPoolInfoDeploy = await PancakeStableSwapTwoPoolInfo.deploy()

  console.log('PancakeStableSwapTwoPoolInfoDeploy: ', PancakeStableSwapTwoPoolInfoDeploy.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
