const prompt = require('prompt-sync')()

function getUserInfo() {
    let velocity = prompt("Write your speed in km/h: ")

    return {userVelocity : velocity}
}

function ticketCalculator(userVelocity) {
    if (userVelocity <=60) {
        return 0
    }
    else {
        return (userVelocity - 60) * 20
    }

}

function main() {
    let userData = getUserInfo();
    let velocity = userData.userVelocity;
    let result = ticketCalculator(velocity)
    console.log(`Your ticket is $${result} dollars or R$${result*5} reais`)
}

main()