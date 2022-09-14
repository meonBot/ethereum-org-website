---
title: Development Networks
description: An overview of development networks and the tools available to help build Ethereum applications.
lang: en
sidebar: true
---

When building an Ethereum application with smart contracts, you'll want to run it on a local network to see how it works before deploying it.

Similar to how you might run a local server on your computer for web development, you can use a development network to create a local blockchain instance to test your dapp. These Ethereum development networks provide features that allow for much faster iteration than a public testnet (for instance you don’t need to deal with acquiring ETH from a testnet faucet).

## Prerequisites {#prerequisites}

You should understand the [basics of the Ethereum stack](/developers/docs/ethereum-stack/) and [Ethereum networks](/developers/docs/networks/) before diving into development networks.

## What is a development network? {#what-is-a-development-network}

Development networks are essentially Ethereum clients (implementations of Ethereum) designed specifically for local development.

**Why not just run a standard Ethereum node locally?**

You _could_ [run a node](/developers/docs/nodes-and-clients/#running-your-own-node) but since development networks are purpose-built for development, they often come packed with convenient features like:

- Deterministically seeding your local blockchain with data (e.g. accounts with ETH balances)
- Instantly mining blocks with each transaction it receives, in order and with no delay
- Enhanced debugging and logging functionality

## Available tools {#available-projects}

**Note**: Most [development frameworks](/developers/docs/frameworks/) include a built-in development network. We recommend starting with a framework to [set up your local development environment](/developers/local-environment/).

### Ganache {#ganache}

Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.

Ganache provides both a desktop application (Ganache UI), as well as a command-line tool (`ganache-cli`). It is part of the Truffle suite of tools.

- [Website](https://www.trufflesuite.com/ganache)
- [GitHub](https://github.com/trufflesuite/ganache)
- [Documentation](https://www.trufflesuite.com/docs/ganache/overview)

### Hardhat Network {#hardhat-network}

A local Ethereum network designed for development. It allows you to deploy your contracts, run your tests and debug your code.

Hardhat Network comes built-in with Hardhat, an Ethereum development environment for professionals.

- [Website](https://hardhat.org/)
- [GitHub](https://github.com/nomiclabs/hardhat)

### Local Beacon Chains {#local-beacon-chains}

Some consensus clients have built-in tools for spinning up local Beacon chains for testing purposes. Instructions for Lighthouse, Nimbus and Lodestar are available:

- [Local testnet using Lodestar](https://chainsafe.github.io/lodestar/usage/local/)
- [Local testnet using Lighthouse](https://lighthouse-book.sigmaprime.io/setup.html#local-testnets)
- [Local testnet using Nimbus](https://github.com/status-im/nimbus-eth1/blob/master/fluffy/docs/local_testnet.md)

### Public Ethereum Test-chains {#public-beacon-testchains}

There are also three current public test implementations of Ethereum. The recommended testnet with long-term support is Goerli. Sepolia is also expected to be maintained for the foreseeable future, but the validator set is permissioned meaning there is no general access to new validators on this testnet. The Ropsten chain is expected to be deprecated.

- [Goerli Staking Launchpad](https://goerli.launchpad.ethereum.org/)
- [Ropsten Staking Launchpad](https://ropsten.launchpad.ethereum.org/)

## Further reading {#further-reading}

_Know of a community resource that helped you? Edit this page and add it!_

## Related topics {#related-topics}

- [Development frameworks](/developers/docs/frameworks/)
- [Set up a local development environment](/developers/local-environment/)
