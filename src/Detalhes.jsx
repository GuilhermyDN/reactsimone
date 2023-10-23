import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addQtd } from "./ProductsSlice";
import RatingComponent from "./RatingComponent";
import './style/Detalhes.scss';
import { useState } from "react";
import { visible } from "./Visible";
import numeral from "numeral";

export const Detalhes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  const produtos = useSelector((state) => state.products);
  const filtros = useSelector((state) => state.filter);

  const prodExibido = produtos.find((produto) => produto.id === params.id);
  const qtdArray = Array.from(Array(10).keys()).slice(1);
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const colorOptions = ["Vermelho", "Azul", "Verde"];
  const produtosVisiveis = visible(produtos, filtros.showCategoria, filtros.text, filtros.sortBy);
  const precoProduto = prodExibido.price;

  return (
    <div className="container">
      <img src={prodExibido.image} height={"80px"} />
      <div className="text-content">
        <h1>{prodExibido.name}</h1>
        <p>{prodExibido.description}</p>
        <div className="avaliacao-container">
          <p>Classificação: {prodExibido.rating}</p>
          <br />
          <RatingComponent productId={prodExibido.id} />
          <select
            value={quantidadeSelecionada}
            onChange={(e) => {
              setQuantidadeSelecionada(e.target.value);
            }}
          >
            <option value="">Escolha a quantidade</option>
            {qtdArray.map((qtdNumber, index) => (
              <option key={index} value={qtdNumber} defaultValue={qtdNumber === 1 ? "1" : null}>
                {qtdNumber}
              </option>
            ))}
          </select>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="">Escolha a cor</option>
            {colorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
          <p className="product-price">R{numeral(precoProduto / 100).format('$0,0.00')}</p>
          <button
            className="buy-button"
            onClick={() => {
              dispatch(addQtd({ id: prodExibido.id, qtd: quantidadeSelecionada, color: selectedColor }));
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
