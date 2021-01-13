import React, { useState, useEffect } from 'react';

const Character = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setCharacter(data.results));
  }, [])

  return (
    <div className='character'>
      {characters.map(character => (<h2 key={character.id}>{character.name}</h2>))}
    </div>
  )
}

export default Character;
