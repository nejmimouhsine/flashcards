import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

const options = {
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const topic = {
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          icon: action.payload.icon,
          quizIds: []
        }
      };
      Object.assign(state.topics, topic);
    }
  }
};

const topicsSlice = createSlice(options);

export const selectAllTopics = (state) => state.topics.topics;

const { actions, reducer } = topicsSlice;

export const { addTopic } = actions;

export default reducer;
