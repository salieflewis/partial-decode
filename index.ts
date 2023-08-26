import {
  type Block,
  decodeAbiParameters,
  parseAbiParameters,
  parseAbiParameter,
  type Hash,
} from 'viem';
import { client } from './viem/client';
import { routerAbi } from './abi';

// struct Listing {
//   uint128 chainId;
//   uint128 tokenId;
//   address listingAddress;
//   bool hasTokenId;
// }

const values = decodeAbiParameters(
  parseAbiParameters([
    'bytes32[] merkleProof',
    'struct Listing { uint128 chainId; uint128 tokenId; address listingAddress; bool hasTokenId; }',
  ]),
  '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000076adf1000000000000000000000000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000000000000077777770000000000000000000000000000000000000000000000000000000000000001'
);

console.log(values[0][0]);

// const doubleDecodedValues = decodeAbiParameters(
//   parseAbiParameters(
//     'struct Listing { uint128 chainId; uint128 tokenId; address listingAddress; bool hasTokenId; }',
//   ),
//   values[0][0]
// );

// console.log(doubleDecodedValues);
