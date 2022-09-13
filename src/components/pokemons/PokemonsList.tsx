import React from 'react';
import { useRequestPokemonQuery } from './hooks/useRequestPokemonQuery';
import { Pokemon } from './Pokemon';

export const PokemonsList = () => {
  const [offset, setOffset] = React.useState(0);
  const { data, isFetching, isError } = useRequestPokemonQuery();

  if (isError) return <div>Error</div>;
  if (isFetching) return <div>Loading...</div>;

  const pokemons = data?.pages.reduce((acc, page) => [...acc, ...page.data.results], []);

  console.log('pokemons', pokemons);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {pokemons &&
          pokemons?.map((item: any, _index: any) => <Pokemon key={_index} pokemon={item} />)}
      </div>
      <div>
        <button type="button" onClick={() => {}}>
          nextPage + 10
        </button>
      </div>
    </>
  );
};
