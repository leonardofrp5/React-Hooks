import React, { useState, useEffect, useReducer } from 'react';

const initialState ={
  favorites: []
};

const favoriteReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.paylod]
      }
    default:
      return state;
  }
}

const Character = () => {
  const [characters, setCharacter] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setCharacter(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', paylod: favorite})
  }

  return (
    <>
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

    <div className='character'>
      {characters.map(character => (
        <div key={character.id} className='setionName'>
          <span className='titleCharacter'>{character.name}</span>
          <button type='button' onClick={() => handleClick(character)}>Like</button>
        </div>
        ))}
    </div>
    </>
  )
}

export default Character;
