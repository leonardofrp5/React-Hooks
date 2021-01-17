import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search';

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
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setCharacter(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', paylod: favorite})
  }

  // const hangleSearch = () => {
  //   setSearch(searchInput.current.value);
  // }

  const hangleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

  // const filterUser = characters.filter((user) => {
  //   // console.log(user);
  //   // console.log(user.name.toLowerCase().includes(search.toLocaleLowerCase()));
  //   return user.name.toLowerCase().includes(search.toLocaleLowerCase());
  // });

  const filterUser = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLocaleLowerCase());
    }), [characters, search]
  );

  return (
    <>
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

      <Search search={search} searchInput={searchInput} hangleSearch={hangleSearch}/>

    <div className='character'>
      {filterUser.length > 0 ?
        filterUser.map(character => (
          <div key={character.id} className='setionName'>
            <span className='titleCharacter'>{character.name}</span>
            <button type='button' onClick={() => handleClick(character)}>Like</button>
          </div>
        ))
      : <h1>No se encuentran considencias</h1>
      }
    </div>
    </>
  )
}

export default Character;
