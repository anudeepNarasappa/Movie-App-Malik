import  { Movie } from '../../model/MoviesModel/Movie';
import IState from './IState';

export default interface AppState extends IState {
  movies: Movie;
}