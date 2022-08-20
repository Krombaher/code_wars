// Summation

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }

    return result;
}

//The Feast of Many Beasts

const feast = (beast, dish) =>
    beast[0] === dish[0]
    && beast.slice(-1) === dish.slice(-1)

//Total amount of points


function points(games) {
    let sum = 0;
    for (let i = 0; i < games.length; ++i) {
        if (games[i][0] > games[i][2])
            sum += 3;
        if (games[i][0] == games[i][2])
            sum += 1;
    }
    return sum;
}

//Quarter of the year

const quarterOf = (month) => {
    // Your code here
    if (month >= 1 && month <= 3) {
        return 1;
    } else if (month >= 4 && month <= 6) {
        return 2;
    } else if (month >= 7 && month <= 9) {
        return 3;
    } else {
        return 4;
    }

}

const quarterOf = m => Math.ceil(m / 3);


//Convert number to reversed array of digits

function digitize(n) {
    //code here

    return n.toString().split('').reverse().map(Number)
}

// Sum Numbers
function sum(numbers) {
    "use strict";
    return numbers.reduce(function (t, n) {
        return t + n;
    }, 0);

};

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// Build a pile of Cubes


function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n ** 3
    return m ? -1 : n
}

//Get the Middle Character

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}