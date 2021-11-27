import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

const options = {
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    },

    addQuizIds: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
};

const topicsSlice = createSlice(options);

export const { addTopic, addQuizIds } = topicsSlice.actions;
export const selectAllTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
