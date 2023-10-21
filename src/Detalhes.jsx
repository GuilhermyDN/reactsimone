import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addQtd } from "./ProductsSlice";
import RatingComponent from "./RatingComponent";
import './style/Detalhes.css'
import { useState } from "react"; // Certifique-se de importar useState


export const Detalhes = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const params = useParams();
    const produtos = useSelector((state) => state.products);

    const prodExibido = produtos.find((produto) => produto.id === params.id);
    const qtdArray = Array.from(Array(10).keys()).slice(1);
    const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(""); // Defina o estado para a quantidade selecionada


    return (
        <div className="container">
            <img src={prodExibido.image} height={"80px"} />
            <div className="text-content">
                <h1>{prodExibido.name}</h1>
                <p>{prodExibido.description}</p>
                <div className="avaliacao-container">
                    <p>Classificação:{prodExibido.rating}</p>
                    <br />

                    <RatingComponent productId={prodExibido.id} />
                    
                        <select
                            value={quantidadeSelecionada}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setQuantidadeSelecionada(e.target.value);
                            }}
                        >   <option value="">Escolha a quantidade</option>
                            {qtdArray.map((qtdNumber, index) => (
                                <option key={index} value={qtdNumber} defaultValue={qtdNumber === 1 ? "1" : null}>
                                {qtdNumber}
                            </option>
                           ))}
                        </select>
                        <button
                            onClick={() => {
                                dispatch(addQtd({ id: prodExibido.id, qtd: quantidadeSelecionada }));
                                navigate("/carrinho");
                            }}
                        >
                            Comprar
                        </button>
                </div>
            </div>
        </div>

    );
};  
