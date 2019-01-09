import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieService from '../../api/MovieService';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';
import './MovieBrowser.css';


 class MovieBrowser extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            isLoading: false,
            currentPage: 1,
            pagesNumber: 1,
            searchPattern: 'abc',
        }
    }

    static propTypes = {
        service: PropTypes.instanceOf(MovieService).isRequired,
    }

    componentDidMount() {
        this.getMovies();
    }

    onPageChange = (newNumber) => {
        this.setState({ currentPage: newNumber}, this.getMovies);
    }

    getMovies = async () => {
        try {
            this.setState({ isLoading: true });
            const response = await this.props.service.getMovies(
                this.state.searchPattern, 
                this.state.currentPage,
            );
            const resultsPerPage = 10; // API constant
            this.setState({
                isLoading: false,
                movies: response.data.Search,
                pagesNumber: Math.ceil(response.data.totalResults / resultsPerPage),
            });
        } catch(error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div>
                <div className="movieList">
                    <MovieList movies={ this.state.movies } isLoading={ this.state.isLoading } />
                </div>
                <Pagination
                    currentPage={ this.state.currentPage }
                    pagesNumber={ this.state.pagesNumber }
                    callback={ this.onPageChange }
                />
            </div>
        );
    }

 }

 export default MovieBrowser;

