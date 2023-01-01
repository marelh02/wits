import { configureStore } from '@reduxjs/toolkit'
import descriptionReducer from './descriptionSlice'

export default configureStore({
  reducer: {
    descriptionSlice: descriptionReducer,
  },
})