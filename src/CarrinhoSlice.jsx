import { createSlice } from "@reduxjs/toolkit";

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: [],
  reducers: {
    adicionarAoCarrinho: (state, action) => {
      const { produto, quantidade, cor } = action.payload;
      // Adicione a cor ao item do carrinho
      state.push({ produto, quantidade, cor });
    },
  },
});

// Exporte as ações geradas automaticamente pelo createSlice
export const { adicionarAoCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
