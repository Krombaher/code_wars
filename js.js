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