"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("beerbottle liric test", function(){
    sinon.spy(console, 'log');

    it("测试用例1:有零瓶啤酒的情况", function(){

        var result = main(0);
        var expect_string = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
        
        expect(expect_string).to.equal(result);
    });


    it("测试用例1:有1瓶啤酒的情况", function(){

        var result = main(1);
        var expect_string = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        
        expect(expect_string).to.equal(result);
    });
    
    it("测试用例3:有5瓶啤酒的情况", function(){

        var result = main(5);
        var expect_string =`5 bottles of beer on the wall, 5 bottles of beer.
Take one down and pass it around, 4 bottles of beer on the wall.
4 bottles of beer on the wall, 4 bottles of beer.
Take one down and pass it around, 3 bottles of beer on the wall.
3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        
        expect(expect_string).to.equal(result);
    });

       
   
});