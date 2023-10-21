import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "-NZ707--8BxAGaASgmb_",
        bairro: "Jardim São Cristóvão",
        cidade: "São Luís",
        estado: "MA",
        numero: "611",
        rua: "Travessa 14 do Engenho"
    },
    {
        id: "-NZ707-1bpTzbY3FJfbx",
        bairro: "Lírio do Vale",
        cidade: "Manaus",
        estado: "AM",
        numero: "131",
        rua: "Rua Princesa Isabel"
    },
    {
        id: "-NalhfzUD_DYKKq_3qpy",
        bairro: "Barreto",
        cidade: "Niterói",
        estado: "RJ",
        numero: "134",
        rua: "Rua Prefeito Vila Nova Machado"
    }
]

export const addressSlice = createSlice({
    name: 'address',
    initialState: initialState,
    reducers: {}
})

export default addressSlice.reducer