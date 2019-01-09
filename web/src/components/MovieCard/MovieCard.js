import React, { Component } from 'react';
import PropTypes from 'prop-types';
import no_image from '../../img/no_image.png';
import './MovieCard.css';


class MovieCard extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        year: PropTypes.string,
        type: PropTypes.string,
        poster: PropTypes.string,
        id: PropTypes.string,
    }

    render() {
        const { title, year, type, poster, id } = this.props;
        
        return (
            <div className="movieCard">
                <div className="posterContainer">
                    <img 
                        src={ poster ? poster : no_image } 
                        className="moviePoster" 
                        alt="movie poster"/>
                </div>
                <div className="descriptionContainer">
                    <div className="movieTitle">
                        <a href={ "/" + id }>{ title }</a>
                    </div>
                    <div>year: { year }</div>
                    <div>type: { type }</div>
                </div>
            </div>
        );
    }

}


export default MovieCard;
