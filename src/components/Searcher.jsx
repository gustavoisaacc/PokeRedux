import { Input } from "antd";
import logo from '../static/logo.svg'

import '../styles/Header.css'

const Searcher = () => {
    return ( 
        <div className="Header">
            <img src={logo} alt="logo" />
            <Input.Search placeholder="Buscar..."/>
        </div>
     );
}
 
export default Searcher;