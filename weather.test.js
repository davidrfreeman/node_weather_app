const { getIpInfo, getLatLon, getWeatherData } = require('./weather')

console.log(getIpInfo, getLatLon, getWeatherData)

describe('Tests for ip location functions', () =>{
  test('Returns array with length of two', async () => {
    const data = await getIpInfo()
    const locArr = data.loc.split(',')
    expect(locArr).toHaveLength(2)
  })
})
