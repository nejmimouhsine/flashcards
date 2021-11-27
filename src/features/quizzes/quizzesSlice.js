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
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
};

const quizzesSlice = createSlice(options);

export const newQuiz = (quiz) => {
  const { topicId, id } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizIds({ topicId: topicId, quizId: id }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
