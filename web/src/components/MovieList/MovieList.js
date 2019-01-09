import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
                        <div key={ i }>
                            { movie.Title }
                        </div>
                    )
                }
            </div>
        );
    }

}


export default MovieList;
