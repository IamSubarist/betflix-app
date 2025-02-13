import React, { useEffect, useState } from 'react';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi';
import { TOP_LIST } from '../../../constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { MoviesList } from '../../ui/MoviesList/MoviesList';
import { ArrowBack } from '@mui/icons-material';
import { MoviesListSkeleton } from '../../ui/MoviesListSkeleton/MoviesListSkeleton';

export const MoviesListTop = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const movieType = TOP_LIST.find(el => el.url === location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(1);
  }, [location]);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page,
  });
  console.log(data, error, isLoading);

  if (error) return <p>Error</p>;
  if (isLoading) return <MoviesListSkeleton />;

  return (
    <>
      <Stack flexDirection="row" sx={{ mt: 2, mb: 2 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} />
        <Typography variant="h4">{movieType.title}</Typography>
      </Stack>
      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
