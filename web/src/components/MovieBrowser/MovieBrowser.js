import React, { Component } from 'react';
import MovieService from '../../api/MovieService';
import MovieList from '../MovieList/MovieList';


 class MovieBrowser extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            isLoading: false,
        }
        this.service = new MovieService('ee2d0533');
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = async () => {
        try {
            this.setState({ isLoading: true });
            const response = await this.service.getMovies('abc', 1);
            this.setState({
                isLoading: false,
                movies: response.data.Search,
            });
        } catch(error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div>
                <MovieList movies={ this.state.movies } isLoading={ this.state.isLoading } />
            </div>
        );
    }

 }

 export default MovieBrowser;

