import React from "react";
import 'isomorphic-fetch';
import 'es6-promises';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            films: [],
            loadFilms: false
        }
    }


loadFilms() {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => this.setState({ 
            films: films,
            loadFilms: true }))
        .catch(err => console.log(err));
}
    render() {
        if (this.state.loadFilms) {
        return (
            <div>
            {this.state.films.map(film =>  {
        return (
            <div key = {film.id}>
            <h1>{film.title}</h1>
            <p>{film.description}</p>
            </div>
        )
        
      })}
      </div>
        )

    } else {
        return (
        <button onClick = {() => this.loadFilms()}>Load Films</button>
       ) 
    }
    }
};


export default App;