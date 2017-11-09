// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  console.log(drivers[0].split(" "))
  return drivers.map(driver => {firstName: driver[0]})
}

function attributesToPhrase() {

}
