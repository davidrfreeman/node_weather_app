function tempConversion(temp, initTempType) {
  function fToC (a) {
    return Number.parseFloat(((a - 32) * 9/5).toFixed(2))
  }

  function cToF (b) {
    return Number.parseFloat((9 / 5 * b + 32).toFixed(2))
  }

  return initTempType === 'F' ? fToC(temp) : cToF(temp)
}

// tempConversion(32, 'C')

module.exports = tempConversion
