import { createSlice } from "@reduxjs/toolkit";

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: [],
  reducers: {
    adicionarAoCarrinho: (state, action) => {
      const { produto, quantidade, color } = action.payload;
      
      state.push({ produto, quantidade, color });
    },
  },
});

export const { adicionarAoCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
