import './App.css'
import {Titulo} from "./components/titulo/Titulo.jsx";
import {CardElenco} from "./components/cardElenco/CardElenco";
import {CardFilme} from "./components/CardFilme/CardFilme";

function App() {

    const ryan ={
        foto: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
        nome: "Ryan Raynolds",
        personagem: "Deadpool"
    }

    const morena ={
        foto:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kIL3zOqiC0xSXuCED6tB3KJWnSh.jpg",
        nome:"Morena Baccarin",
        personagem:"Vanessa"
    }

    const deadpool ={
        poster:"https://image.tmdb.org/t/p/w200/zq8Cl3PNIDGU3iWNRoc5nEZ6pCe.jpg",
        titulo:"Deadpool",
        nota:7.6
    }

  return (
    <div className="App">
      <h1>Filmes da Hora</h1>
        <main>
            <Titulo texto="Filmes em alta" />

            <section className="filmes">
            <CardFilme filme={deadpool} />
            <CardFilme filme={deadpool} />
            <CardFilme filme={deadpool} />
            <CardFilme filme={deadpool} />
            <CardFilme filme={deadpool} />
            </section>
            <Titulo texto="series em alta" />

            <CardElenco ator={ryan}/>
            <CardElenco ator={morena}/>

        </main>
    </div>
  )
}

export default App
