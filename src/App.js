import React, { useState, useEffect} from "react";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard';
import Welcome from './components/WelcomePage';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SearchForm from "./components/SearchForm.js";


export default function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setResults] = useState ([]);
  const [character, setCharacter] = useState('');

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res);  
      res.data.results.map(char => {
        console.log(char);
        setCharacter(char)
      })   
      const results = res.data.results.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(results);
    })
    .catch(err => console.log(err));
  }, [search])

  const handleChange = event => {
    setSearch(event.target.value)
  };

  return (
    <main>
      <Header />
      <Route exact path = '/'>
        <Welcome />
      </Route>
      <Route exact path = '/characters'>
        <div>
          <SearchForm onChange = {handleChange} search = {search} />
            {searchResults.map(character => (
              <>
                
                <div key={character.id}>
                <img  src = {character.image}  alt = {character.name} />
                </div>
                <div>
                  <h2>{character.name}</h2>
                </div>
                </>
            ))}
        </div>
        {/* <div>
          {character.map (char => {
            return <CharacterCard onChange = {handleChange} name = {char.name} search = {search} gender = {char.gender} status = {char.status} img = {char.image}  alt = {char.name} />
            })}
        </div> */}
      </Route>
        
    </main>
  );
}
