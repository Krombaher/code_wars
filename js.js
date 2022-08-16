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