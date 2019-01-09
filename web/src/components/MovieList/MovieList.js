import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';


class MovieList extends Component {

    static propTypes = {
        movies: PropTypes.arrayOf(PropTypes.object),
        isLoading: PropTypes.bool,
    }

    static defaultProps = {
        movies: [],
        isLoading: false,
    }

    render() {
        const { movies, isLoading } = this.props;

        if (movies.length === 0) return ( <div>No movies found...</div> );

        if (isLoading) return ( <div>Loading movies...</div> );

        return (
            <div>
                {
                    movies.map((movie, i) => 
                        <div key={ i } className="movieListItem">
                            <MovieCard 
                                title={ movie.Title }
                                year={ movie.Year }
                                type={ movie.Type }
                                poster={ movie.Poster !== 'N/A' ? movie.Poster : null }
                                id={ movie.imdbID }
                            />
                        </div>
                    )
                }
            </div>
        );
    }

}


export default MovieList;
