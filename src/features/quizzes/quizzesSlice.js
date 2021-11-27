import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/topicsSlice";

const initialState = {
  quizzes: {}
};

const options = {
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const quiz = {
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          topicId: action.payload.topicId,
          cardIds: []
        }
      };
      Object.assign(state.quizzes, quiz);
    }
  }
};

const quizzesSlice = createSlice(options);

export const newQuiz = (payload) => (dispatch) => {
  dispatch(addQuiz(payload));
  dispatch(addQuizIds(payload));
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

const { actions, reducer } = quizzesSlice;

export const { addQuiz } = actions;

export default reducer;
