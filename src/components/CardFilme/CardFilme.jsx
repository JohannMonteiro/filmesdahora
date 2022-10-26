import './CardFilme.css'
import {useState} from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export function CardFilme({filme}){
    const[favorito,setFavorito] = useState(false)

    function favoritar(){
        setFavorito(!favorito)
    }


    return(
        <div className="card">
            <BookmarkBorderIcon  onClick={favoritar}/>
            <img src={filme.poster} alt="" />
            <span>{filme.titulo}</span>
            <span>{filme.nota}</span>
            <a className="button" href="#">detalhes</a>
        </div>
    )

}