import { bindActionCreators } from 'redux'

export const INCREASE = 'INCREASE'
export const increase = () => ({ type: INCREASE})

export const DECREASE = 'DECREASE'
export const decrease = () => ({ type: DECREASE})

export const containerActions = dispatch => bindActionCreators({
  increase,
  decrease
}, dispatch)