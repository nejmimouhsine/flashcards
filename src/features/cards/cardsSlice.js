import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {}
};

const options = {
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
};

const cardsSlice = createSlice(options);

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
