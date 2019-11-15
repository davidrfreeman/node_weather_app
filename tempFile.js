const weatherFuncs = require('./weather')

async function location() {
  const loc = await weatherFuncs.getIpInfo()
  console.log(loc)
  const locArr = loc.loc.split(',')
  console.log(locArr)
  // const lat = locArr[0],
  //       lon = locArr[1]
  console.log(typeof(locArr[0]))

}

location()

// console.log(weatherFuncs)