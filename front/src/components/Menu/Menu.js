import React from 'react'
import Styles from './menu.module.css'
import {Link} from 'react-router-dom'

function Menu({projectPath}) {
    return (
        <div className={Styles.wrapper}>
            <ul className={Styles.sidebar}>
                <li>
                    <Link to={`${projectPath}/players`}>Jogadores</Link>
                </li>
                <li>
                    <Link to={`${projectPath}/itens`}>Itens</Link>
                </li>
                <li>
                    <Link to={`${projectPath}/rules`}>Regras</Link>
                </li>
                <li>
                    <Link to={`${projectPath}/events`}>Eventos</Link>
                </li>
                <li>
                    <Link to={`${projectPath}/stats`}>Estatísticas</Link>
                </li>
            </ul>
        </div>
    );
  }
  
export default Menu;