import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from '../../../axiosInstance';
import React from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { queryKeys } from '../../../react-query/constants';

interface RequestPokemonParams {
  params: { limit: number; offset: number };
  config?: AxiosRequestConfig;
}

interface useRequestPokemonQueryParams {
  offset: number;
  id: string;
}

export const requestPokemons = ({ params, config }: RequestPokemonParams) => {
  return axiosInstance.get('pokemon', { params, ...config });
};

export const useRequestPokemonQuery = ({ offset }: useRequestPokemonQueryParams) =>
  useQuery<any>([queryKeys.pokemon, offset], () =>
    requestPokemons({ params: { limit: 20, offset } })
  );
