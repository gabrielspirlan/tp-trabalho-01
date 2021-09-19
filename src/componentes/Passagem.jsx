import React from "react";
import './Passagens.css'

export default function Passagem (props) {
    let ocupacao = (props.lugares_totais - props.lugares_disponiveis) / props.lugares_totais * 100

    let estado = "Reservar";
    
    if (props.lugares_disponiveis == 0) {
        estado = "Indisponível"
    }

    return (
        <div className="passagem">
            <div className="superior"> 
                <div className="origem-destino">{props.origem} &#x2708; {props.destino} </div>
                <div className="numero"> N°: {props.numero}</div>
            </div>
            <div className="lugares"> 
                {props.lugares_disponiveis} assentos disponíveis / {props.lugares_totais} assentos totais 
            </div>
            
            <div className="ocupacao">Ocupação: {ocupacao}%</div>
            <div className="botao"><button className={estado}>{estado}</button></div>
        </div>
    )
}