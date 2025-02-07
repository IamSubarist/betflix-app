import React from 'react';
import { useGetFilmsTopQuery } from '../services/kinopoiskApi';
import { TOP_LIST } from '../constants';
import { useSelector } from 'react-redux';

export const useMoviesQuery = () => {
  const { page } = useSelector(state => state.currentQuerySlice);

  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LIST[0].value,
    page,
  });

  const responseBest = useGetFilmsTopQuery({
    type: TOP_LIST[1].value,
    page,
  });

  const responseFilms;
  const responseSerials;
  const responseCartoons;
  const isLoading = responsePopular.isFetching || responseBest.isFetching || responseFilms.isFetching || responseSerials.isFetching || responseCartoons.isFetching


  return {};
};
