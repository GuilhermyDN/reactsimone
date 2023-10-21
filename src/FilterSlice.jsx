import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        showCategoria: '',
        text: '',
        sortBy: 'price',
        sortDirection: 'asc' // Adiciona o campo de direção de ordenação com um valor padrão
    },
    reducers: {
        setShowCategoria: (state, action) => {
            state.showCategoria = action.payload || ''
        },
        setFilterText: (state, action) => {
            state.text = action.payload || ''
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        },
        setSortDirection: (state, action) => {
            state.sortDirection = action.payload
        }
    }
});

export const { setShowCategoria, setFilterText, setSortBy, setSortDirection } = filterSlice.actions;

export default filterSlice.reducer;