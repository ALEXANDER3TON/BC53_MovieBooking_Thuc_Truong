import {combineReducers} from 'redux'
import { BookingPageReducer } from './BookingPagesSlice/slice'

export const rootReducer = combineReducers({
    BookingPage: BookingPageReducer
})