import React from 'react';

interface IProps {
  pokemon: any;
  id?: number;
}

export const Pokemon: React.FC<IProps> = ({ pokemon, id }) => {
  console.log('pokemon', pokemon);

  return (
    <div className="flex justify-center shadow rounded p-4">
      <h2 className="text-center">{pokemon.name}</h2>
      <div>{pokemon.name}</div>
    </div>
  );
};
