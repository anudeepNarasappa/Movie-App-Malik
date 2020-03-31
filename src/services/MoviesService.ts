import CommonService from './CommonService';
import Movie from '../model/MoviesModel/Movie';
import {apiHost} from '../utils'

class MoviesService extends CommonService<Movie> {
  constructor() {
    super();
    this.rootURL = apiHost;
  }
}

export const moviesService = new MoviesService();