import { createStore } from 'redux'
import reducer from './reducer'
export default () => {
	let store = createStore(reducer)
	return store
}