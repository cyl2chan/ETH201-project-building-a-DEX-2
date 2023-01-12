pragma solidity 0.8.16;
//SPDX-License-Identifier: UNLICENSED
pragma experimental ABIEncoderV2;

import "./wallet.sol";

//market order always take out order from orderbook
//limit order is always added into orderbook

contract Dex is Wallet {
    //one order book for BUY , one for SELL
    enum Side {
        BUY,
        SELL
    }

    struct Order {
        uint id;
        address trader;
        bool buyOrder;
        bytes32 ticker;
        uint amount;
        uint price;
    }

    // order book hv bid n ask //1 orderbook for each asset
    mapping(bytes32 => mapping(uint => Order[])) public orderBook;  //bytes32 is the asset //Order[] is a list of orders

    function getOrderBook(bytes32 ticker, Side side) view public returns(Order[] memory) {
        return orderBook[ticker][uint(side)];
    }

   // getOrderBook(bytes32("LINK"), Side.BUY)

   //function createLimitOrder() {

   //}

}