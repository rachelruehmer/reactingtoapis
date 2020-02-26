import React from "react";
import './App.css';
// import * as studioghiblilogo from '../images/studioghiblilogo.png';
import 'isomorphic-fetch';
import 'es6-promises';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            films: [],
            people: [],
            loadFilms: false,
            loadPeople: false
        }
    }

loadPeople() {
    fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => this.setState({
            people: people,
            loadPeople: true
        }))
        .catch(err => console.log(err));
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
            <div className='card'key = {film.id}>
            <h1>{film.title}</h1>
            <p>{film.description}</p>
            </div>
        )
        
      })}
      </div>
        )

    }
    
    else if (this.state.loadPeople) {
        return (
            <div>
            {this.state.people.map(people =>  {
        return (
        <div className='card'key = {people.id}>
            <h1>{people.name}</h1>
           <p>{people.gender}</p> 
           <p>{people.age}</p>
            </div>
        )
    })}
        </div>
            )
}

    else {
        return (
       <div> <button onClick = {() => this.loadFilms()}>Load Films</button> 
        <button onClick = {() => this.loadPeople()}>Load People</button>
   </div>
       ) 
    } 
    


      
    }
};


export default App;