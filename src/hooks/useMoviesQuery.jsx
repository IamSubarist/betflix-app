import React from 'react';
import {
  useGetFilmsQuery,
  useGetFilmsTopQuery,
} from '../services/kinopoiskApi';
import { TOP_LIST } from '../constants';
import { useSelector } from 'react-redux';

export const useMoviesQuery = () => {
  const { countries, order, year, page } = useSelector(
    state => state.currentQuery,
  );

  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LIST[0].value,
    page,
  });

  const responseBest = useGetFilmsTopQuery({
    type: TOP_LIST[1].value,
    page,
  });

  const responseFilms = useGetFilmsQuery({
    countries,
    genreId: '1',
    order,
    type: 'FILM',
    year,
    page,
  });

  const responseSerials = useGetFilmsQuery({
    countries,
    genreId: '1',
    order,
    type: 'TV_SERIES',
    year,
    page,
  });

  const responseCartoons = useGetFilmsQuery({
    countries,
    genreId: '18',
    order,
    type: 'FILM',
    year,
    page,
  });

  const isLoading =
    responsePopular.isFetching ||
    responseBest.isFetching ||
    responseFilms.isFetching ||
    responseSerials.isFetching ||
    responseCartoons.isFetching;

  const hasError =
    responsePopular.isFetching ||
    responseBest.isFetching ||
    responseFilms.isFetching ||
    responseSerials.isFetching ||
    responseCartoons.isFetching;

  return {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  };
};
