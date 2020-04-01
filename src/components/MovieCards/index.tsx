import React from 'react';
import { FlatList, View, Text } from 'react-native';
import MovieItem from '../MovieItem';
import { MovieList } from '../../model/MoviesModel/Movie';

interface MovieListProps {
  movieList: MovieList;
  height: number;
  width: number;
  borderRadius: number;
}

export default function MovieCards({
  movieList,
  height,
  width,
  borderRadius
}: MovieListProps) {
  console.log('movieList', movieList);
  return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.imdbID}
        data={movieList}
        renderItem={(movie) => ( <MovieItem movie={movie} height={height} width={width} borderRadius={borderRadius} /> )}
      />
  );
}