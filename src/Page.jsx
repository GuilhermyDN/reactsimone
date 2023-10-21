import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { visible } from "./Visible"
import { setShowCategoria, setSortBy, setSortDirection } from "./FilterSlice"
import numeral from "numeral"
import './style/page.css'

export const Page = () => {
    const navigate = useNavigate();
    const filtros = useSelector((state) => state.filter);
    const produtos = useSelector((state) => state.products);

    const params = useParams();
    const dispatch = useDispatch();
    dispatch(setShowCategoria(params.categoria));
    const produtosVisiveis = visible(produtos, filtros.showCategoria, filtros.text, filtros.sortBy);
    return (
        <div className="page-container">
            <div className="sort-select">
                <label>Ordenar por:</label>
                <select
                    value={filtros.sortBy}
                    onChange={(e) => {
                        dispatch(setSortBy(e.target.value));
                    }}
                >
                    <option value="price">Preço</option>
                    <option value="alphabetical">A-Z</option>
                </select>
            </div>
            <div className="product-list">
                {produtosVisiveis.map((produto) => {
                    return (
                        <Link  className="product-link" key={produto.id} onClick={() => navigate(`/${produto.category}/${produto.id}`)}>
                            <img src={produto.image} alt={produto.name} className="product-image" />
                            <h3 className="product-name">{produto.name}</h3>
                            <p className="product-price">R{numeral(produto.price / 100).format('$0,0.00')}</p>
                            <p className="product-color">Cor: {produto.color}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};