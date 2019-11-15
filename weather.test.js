// const weatherFuncs = require('./weather')
const location = require('./weather')
// test('Converts celsius to farenheight', () => {
//   expect(tempConversion(0, 'C')).toBe(32)
// })

describe('Tests for ip location functions', () =>{
  test('Returns array with length of two', async () => {
    const data = await location()
    const locArr = data.loc.split(',')
    expect(locArr).toHaveLength(2)
  })
})