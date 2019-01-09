import axios from 'axios';


class MovieService {

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = `http://www.omdbapi.com/?apiKey=${apiKey}`;
    }

    getMovies = (pattern, page) => {
        const url = `${this.baseUrl}&s=${pattern}&page=${page}`;
        return axios.get(url);
    }

    getMovie = (imdbID) => {
        const url = `${this.baseUrl}&i=${imdbID}`;
        return axios.get(url);
    }

}


export default MovieService;
