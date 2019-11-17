const { getIpInfo, getLatLon, getWeatherData } = require('./weather')

describe('Tests for getIpInfo API', () =>{
  test('Test that ip object has expected keys', async () => {
    const data = await getIpInfo()
    expect(Object.keys(data)).toEqual(['ip', 'hostname', 'city', 'region', 'country', 'loc', 'org', 'postal', 'timezone', 'readme'])
  })
})

describe('Tests for getLatLon API', () => {
  test('Test that return object has length of 2', async () => {
    const data = await getLatLon()
    expect(data).toHaveLength(2)
  })
})

describe('Tests for getWeatherData API', () => {
  test('Test that the weather object has expected keys', async () => {
    const data = await getWeatherData()
    expect(Object.keys(data)).toEqual(['coord', 'weather', 'base', 'main', 'visibility', 'wind', 'clouds', 'dt', 'sys', 'timezone', 'id', 'name', 'cod'])
  })
})
