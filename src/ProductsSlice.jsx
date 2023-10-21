import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "necessarios",
        description: "Chinelo Havaianas Slim Feminina Opção de Cores Original Havaianas Slim Feminina. A Havaianas Slim é um clássico dos nossos tempos. Com tiras e solado mais fino, ela conquistou os pés de quem gosta de um visual delicado, sem abrir mão do conforto.",
        id: "-NYxjzLaJkqompeSzDU3",
        image: "https://images-americanas.b2w.io/produtos/3205081262/imagens/chinelo-havaianas-slim-feminina-opcao-de-cores-original/3205081692_1_xlarge.jpg",
        name: "Havaiana",
        price: 3490,
        qtd: 0,
        rating: 2,
        
    },
    {
        category: "moveis", 
        description: "Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito",
        id: "-NYxk1LAhTw0HchDaW9w",
        image: "https://images-americanas.b2w.io/produtos/32857830/imagens/armario-de-cozinha-12-portas-1-gaveta-clara-poliman-moveis-branco/32857831_1_xlarge.jpg",
        name: "Armário",
        price: 55990, 
        qtd: 0,
        rating: 3,
        
    },
    {
        category: "necessarios",
        description: "Bicicleta De Equilíbrio 4 Rodas",
        id: "-NYxnriKfiMQ57CEveUu",
        image: "https://images-americanas.b2w.io/produtos/6062369575/imagens/bicicleta-de-equilibrio-4-rodas-vermelha-10728-buba/6062369575_1_xlarge.jpg",
        name: "Bicicleta ",
        price: 21060,
        qtd: 0,
        rating: 4,
        
        
    },
    {
        category: "celular",
        description: "Smartphone Sansung",
        id: "-NYxnriO7RFX4lon7o3r",
        image: "https://images-americanas.b2w.io/produtos/01/00/img/5242830/2/5242830242_1SZ.jpg",
        name: "Smartphone",
        price: 99900,
        qtd: 0,
        rating: 3,
        
        
    },
    {
        category: "moveis",
        description: "Sofá bonito e confortável",
        id: "-NYxnriPDjXsdkH35U0R",
        image: "https://images-americanas.b2w.io/produtos/3072707478/imagens/sofa-3-lugares-retratil-e-reclinavel-cama-inbox-compact-1-80m-velusoft-cafe/3072707486_1_xlarge.jpg",
        name: "Sofá ",
        price: 98999,
        qtd: 0,
        rating: 2,
        
        
    }
]

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addQtd: (state, action) => {
            state.map((p) => {
                if (p.id === action.payload.id) {
                    p.qtd = action.payload.qtd;
                }
            });
        },
        removeQtd: (state, action) => {
            state.map((p) => {
                if (p.id === action.payload) {
                    p.qtd = 0;
                }
            });
        },
        addRating: (state, action) => {
            const { id, rating } = action.payload;
            const product = state.find((p) => p.id === id);
            if (product) {
                product.rating = rating;
            }
        },
    },
});

export const { addQtd, removeQtd, addRating } = productsSlice.actions


export default productsSlice.reducer