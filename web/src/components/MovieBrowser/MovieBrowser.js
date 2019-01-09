import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieService from '../../api/MovieService';
import MovieList from '../MovieList/MovieList';


 class MovieBrowser extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            isLoading: false,
        }
    }

    static propTypes = {
        service: PropTypes.instanceOf(MovieService).isRequired,
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = async () => {
        try {
            this.setState({ isLoading: true });
            const response = await this.props.service.getMovies('abc', 1);
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
            <div className="movieList">
                <MovieList movies={ this.state.movies } isLoading={ this.state.isLoading } />
            </div>
        );
    }

 }

 export default MovieBrowser;

