const prompt = require('prompt-sync')()

function getUserInfo() {
    let weight = prompt("Write your weight: ")
    let height = prompt("Write your height: ")

    return {
        userWeight: weight,
        userHeight: height
    }
}

function imcCalculator(informedWeight, informedHeight){
    return informedWeight/informedHeight**2
}

function main(){
    let userData = getUserInfo();
    let weight = userData.userWeight;
    let height = userData.userHeight;
    let result = imcCalculator(weight,height)
    if (result < 18) {
        console.log(`Your IMC is ${result}, and you are under the ideal weight`)
    }
    else if (result > 18 && result < 23.9) {
        console.log(`Your IMC is ${result}, and you are in the ideal weight`)
    }
}

main()