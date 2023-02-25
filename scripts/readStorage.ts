import { ethers } from "hardhat";
const Web3 = require("web3");
const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/Z3fhnS-rtbXvUck31_58ooWa-ApUzHbo")

async function main() {
    const contractAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    for (let index = 0; index < 10; index++) {
        console.log(`[${index}]`);
        const info = await web3.eth.getStorageAt(contractAddress, index);
        console.log(info);

    }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
