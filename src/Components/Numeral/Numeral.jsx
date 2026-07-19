import React from 'react'
import numeral from 'numeral'

function CurrencyFormat({amount}) {
    const numberFormating = numeral(amount).format('$0,0.00')
  return (
    <span>{numberFormating}</span>
  )
}

export default CurrencyFormat