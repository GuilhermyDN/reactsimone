import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilterText } from "./FilterSlice";
import './style/Header.css'

export const Header = () => {
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    return (
        <div className="header">
    <h1>TWIST</h1>
    <div className="search-bar">
        <input
            type="text"
            value={filter.text}
            onChange={(e) => dispatch(setFilterText(e.target.value))}
            placeholder="Busque aqui seu produto"
        />
        <img
            src="../images/carrinho2.png"
            alt="carrinho"
            height={"30px"}
            className="cart-icon"
            onClick={() => navigate('/carrinho')}
        />
    </div>
</div>
)}