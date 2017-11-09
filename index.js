// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  console.log(drivers[0].split(" ")[0])
  let driverArr = []
  drivers.map(driver => driverArr.push({firstName: driver.split(" ")[0]}, {firstName: driver.split(" ")[1]}))
  console.log(driverArr)
  return driverArr
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
