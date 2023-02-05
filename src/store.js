import {createStore} from 'redux'
import userReducer from './reducer/userReducer'
import questionReducer from './reducer/questionReducer'

const store = createStore(userReducer)
const questionStore = createStore(questionReducer)

debugger
export default {store , questionStore};