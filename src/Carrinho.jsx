import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeQtd } from './ProductsSlice';
import numeral from 'numeral';
import './style/carrinho.scss';

export const Carrinho = () => {
  const [indexSelected, setIndexSelected] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [enderecoForm, setEnderecoForm] = useState({
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const enderecos = useSelector((state) => state.address);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let preco = 0;

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEnderecoChange = (e) => {
    const { name, value } = e.target;
    setEnderecoForm({ ...enderecoForm, [name]: value });
  };


  return (
    <div className="carrinho">
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
            {e.rua + ' ' + e.numero + ', ' + e.bairro + ', ' + e.cidade + ', ' + e.estado}
          </label>
        )}
        <button onClick={openModal}>Adicionar/Editar Endereço</button>
      </div>
      <div className="summary-section">
        <h3>Resumo do Pedido</h3>
        {products.map((p) =>
          p.qtd > 0 && (
            (preco += p.qtd * p.price),
            <div key={p.id} className="product-item">
              <p>Nome: {p.name}</p>
              <p>Quantidade: {p.qtd}</p>
              <p>Cor: {p.color}</p>
              <button onClick={() => dispatch(removeQtd(p.id))}>Remover</button>
            </div>
          )
        )}
        <h3 className="total">Total: R{numeral(preco / 100).format('$0,0.00')}</h3>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Adicionar/Editar Endereço</h2>
            <form>
              <input
                type="text"
                name="rua"
                placeholder="Rua"
                value={enderecoForm.rua}
                onChange={handleEnderecoChange}
              />
              <input
                type="text"
                name="numero"
                placeholder="Número"
                value={enderecoForm.numero}
                onChange={handleEnderecoChange}
              />
              <input
                type="text"
                name="bairro"
                placeholder="Bairro"
                value={enderecoForm.bairro}
                onChange={handleEnderecoChange}
              />
              <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={enderecoForm.cidade}
                onChange={handleEnderecoChange}
              />
              <input
                type="text"
                name="estado"
                placeholder="Estado"
                value={enderecoForm.estado}
                onChange={handleEnderecoChange}
              />
            </form>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};
