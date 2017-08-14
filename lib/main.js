"use strict";
function main(num){
    let loopLric=getLoopLric(num);
    return getFullLric(loopLric,num);
    
}
function getLoopLric(num)
{   
    let loopLric='';
    for(var i=num;i>=3;i--)
        {
            loopLric=loopLric+`${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottles of beer on the wall.\n`;

        }
        if(i===2)
           {loopLric=loopLric+`2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.\n`;} 
            return loopLric;
}
function getFullLric(loopLric,num)
{
        if(num)
            {
                return loopLric+`1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
            }
        else
            {
                return loopLric+`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
            }
}

module.exports = main;
