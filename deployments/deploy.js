async function main() {
    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow_deployed = await Escrow.deploy();
    console.log("Contract Deployed to Address:", escrow_deployed.address);
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });