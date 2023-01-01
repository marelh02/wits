import { createSlice } from "@reduxjs/toolkit";


export const descriptionSlice = createSlice({
  name: 'articleTopics',
  initialState: {
    topicList: [""],
    coverImg:""
  },
  reducers: {
    setTopics: (state, action) => {           
      state.topicList=[...(action.payload)]
    },
    setCoverImg:(state, action) => {           
      state.coverImg=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTopics,setCoverImg} = descriptionSlice.actions

export default descriptionSlice.reducer