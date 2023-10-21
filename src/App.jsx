import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { setFilterText } from "./FilterSlice";
import { Page } from "./Page";
import { Carrinho } from "./Carrinho";
import { Header } from "./Header";
import { Detalhes } from "./Detalhes";
import './style/app.css'

function App() {
    const Navbar = () => {
        return (
            <div className="navbar">
                <NavLink to='/' activeClassName="selected">Todos</NavLink>
                <NavLink to='/necessarios' activeClassName="selected">Necessarios</NavLink>
                <NavLink to='/moveis' activeClassName="selected">Móveis</NavLink>
                <NavLink to='/celular' activeClassName="selected">Celular</NavLink>
            </div>
        )
    }

    const HeaderLayout = () => {
        return (
            <div>
                <Navbar/>
                <Outlet/> 
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            element: 
                <div>
                    <Header/>
                    <HeaderLayout/>
                </div>,
            children: [
                {path: '/', element: <Page/>},
                {path: '/:categoria', element: <Page/>},
                {path: '/carrinho', element: <Carrinho/>},
                {path: '/:categoria/:id', element: <Detalhes/>}
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;