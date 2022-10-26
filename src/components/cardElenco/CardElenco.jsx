import './CardElenco.css'
import {useState} from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export function CardElenco({ator}){
    let [like, setLike] = useState(0)

    function gostar(){
        setLike(like += 1)
    }

    return(
        <div className="cardElenco">
            <img src={ator.foto}/>
            <span className="ator">{ator.nome}</span>
            <span className="personagem">{ator.personagem}</span>
            <button onClick={gostar}>{like}<ThumbUpOffAltIcon  /></button>
        </div>
    )

}