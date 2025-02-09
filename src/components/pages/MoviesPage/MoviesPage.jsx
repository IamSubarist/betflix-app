import React from 'react';
import { useMoviesQuery } from '../../../hooks/useMoviesQuery';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';

export const MoviesPage = () => {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  } = useMoviesQuery();

  if (isLoading) return <p>Loading...</p>;

  if (hasError) return <p>Error</p>;

  const serializeDataForCarousel = data => {
    data.map(row => <BearSlideImage key={row.id}>{row.name}</BearSlideImage>);
  };

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data.items),
    },
  ];

  return (
    <div>
      <BearCarousel data={carouselArr[0].data} />
    </div>
  );
};
