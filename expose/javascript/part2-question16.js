let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};


for(const car in statistics) {
    let value = statistics[car];

    if(`${car}`[0] == 'r') {
        console.log(value);
    }
    else if(value % 2 == 1) {
        console.log(value);
    }
}