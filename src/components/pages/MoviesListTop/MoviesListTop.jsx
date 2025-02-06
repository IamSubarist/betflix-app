import React, { useState } from 'react';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi';
import { TOP_LIST } from '../../../constants';
import { useLocation } from 'react-router-dom';

export const MoviesListTop = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const movieType = TOP_LIST.find(el => el.url === location.pathname);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page,
  });
  console.log(data, error, isLoading);

  return <div>MoviesListTop</div>;
};
