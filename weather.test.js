const { getIpInfo, getWeatherData } = require('./weather')

console.log(getIpInfo, getWeatherData)

describe('Tests for ip location functions', () =>{
  test('Returns array with length of two', async () => {
    const data = await getIpInfo()
    const locArr = data.loc.split(',')
    expect(locArr).toHaveLength(2)
  })
})

describe('Test weather data object', () => {
  test('Check that ')
})