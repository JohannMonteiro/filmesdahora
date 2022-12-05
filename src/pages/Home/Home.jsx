import './Home.css'
import {Titulo} from "../../components/titulo/Titulo.jsx";
import {CardFilme} from "../../components/CardFilme/CardFilme.jsx";
import {CardElenco} from "../../components/cardElenco/CardElenco.jsx";
import useAxios from "axios-hooks";
import { CircularProgress} from "@mui/material";


function Home() {
    const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=98f7747213b8e38416100e1631189b6d"
    const[{data, loading}, error] =useAxios(url);

    if(loading){
        return(
            <>
                <CircularProgress/>
            <p>carregando...</p>
            </>
        )
    }

    //if(error) return( <p>Erro! - {error.message}</p>)

    const filmes = data.results

    return (
        <div className="App">
            <h1>Filmes da Hora</h1>
            <main>
                <Titulo texto="Filmes em alta" />

                <section className="filmes">
                    {filmes.map(filme => <CardFilme filme={filme}/>)}

                </section>


                <Titulo texto="series em alta" />



            </main>
        </div>
    )
}

export default Home
