import './CardElenco.css'
import {useState} from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export function CardElenco({ator}){
    let [like, setLike] = useState(0)

    function gostar(){
        setLike(like += 1)
    }

    return(
        <div className="cardElenco">
            <img alt="foto do ator" src={ator.foto}/>
            <span className="ator">{ator.nome}</span>
            <span className="personagem">{ator.personagem}</span>
            <button onClick={gostar}><FavoriteBorderOutlinedIcon /></button>
            <span>{like}</span>
        </div>
    )

}