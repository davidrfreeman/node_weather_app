const tempConversion = require('./weather')

test('Converts celsius to farenheight', () => {
  expect(tempConversion(0, 'C')).toBe(32)
})

test('Convert celsius to Farenheight', () => {
  expect(tempConversion(32, 'F')).toBe(0)
})