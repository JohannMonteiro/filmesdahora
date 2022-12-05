import './CardFilme.css'
import {useState} from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export function CardFilme({filme}){
    const[favorito,setFavorito] = useState(false)
    const poster ="https://image.tmdb.org/t/p/w200/" + filme.poster_patch

    function favoritar(){
        setFavorito(!favorito)
    }


    return(
        <div className="card">
            <BookmarkBorderIcon  onClick={favoritar}/>
            <img src={poster} alt="" />
            <span>{filme.title}</span>
            <span>{filme.vote_average.toFixed(1)}</span>
            <a className="button" href="#">detalhes</a>
        </div>
    )

}