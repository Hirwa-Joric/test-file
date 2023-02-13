const name = (name,age) => {
    return console.log("the name you entered is ", name)
    if (age>18) {
        console.log("you are an adult")
    } else {
        console.log("you steal have many years to go")
    }
}

module.exports = name;