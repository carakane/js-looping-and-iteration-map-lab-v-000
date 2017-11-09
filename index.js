// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  console.log(drivers[0].split(" ")[0])
  return drivers.map(driver => Object.assign{{firstName: driver.split(" ")[0]}, {lastName: driver.split(" ")[1]}})
}

function attributesToPhrase() {

}
