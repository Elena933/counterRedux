
import {reducers} from "./Reducers";
import { legacy_createStore as createStore} from 'redux'

export const store = createStore(reducers)