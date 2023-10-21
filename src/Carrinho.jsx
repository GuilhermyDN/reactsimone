import { useDispatch, useSelector } from "react-redux"
import { removeQtd } from "./ProductsSlice"
import numeral from "numeral"
import { useState } from "react";
import { adicionarAoCarrinho } from "./CarrinhoSlice";


export const Carrinho = () => {
    const [indexSelected, setIndexSelected] = useState("");
    const [selectedColor, setSelectedColor] = useState(""); // Defina o estado da cor selecionada
    const colorOptions = ["Vermelho", "Azul", "Verde"]; // Defina as opções de cores
  
    const enderecos = useSelector((state) => state.address);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    let preco = 0;
  
    return (
        <div>
          <h1>Carrinho</h1>
          <div className="address-section">
            <h3>Endereço</h3>
            {enderecos.map((e) => 
              <label key={e.id}>
                <input
                  type="radio"
                  value={e.id}
                  checked={e.id === indexSelected}
                  onChange={() => setIndexSelected(e.id)}
                />
                {e.rua + " " + e.numero + ", " + e.bairro + ", " + e.cidade + ", " + e.estado}
              </label>
            )}
          </div>
          <div className="summary-section">
            <h3>Resumo do Pedido</h3>
            {products.map((p) =>
              p.qtd > 0 && (
                (preco += p.qtd * p.price),
                <div key={p.id}>
                  <p>{p.name}</p>
                  <p>{p.qtd}</p>
                  <p>Cor: {p.color}</p>
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
                  <button onClick={() => dispatch(removeQtd(p.id))}>Cancelar</button>
                  <button
                    onClick={() =>
                      dispatch(
                        adicionarAoCarrinho({
                          produto: p,
                          quantidade: p.qtd,
                          cor: selectedColor,
                        })
                      )
                    }
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              )
            )}
            <h3>Total: R{numeral(preco / 100).format("$0,0.00")}</h3>
          </div>
        </div>
      );
};