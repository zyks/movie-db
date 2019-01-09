import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieService from '../../api/MovieService';
import no_image from '../../img/no_image.png';
import './MovieDetails.css';


class MovieDetails extends Component {
    
    constructor() {
        super();
        this.state = {
            movieData: null,
            isLoading: false,
        }
    }

    static propTypes = {
        service: PropTypes.instanceOf(MovieService).isRequired,
    }
    
    componentDidMount() {
        const { imdbID } = this.props.match.params;
        this.loadMovieData(imdbID);
    }
    
    loadMovieData = async (imdbID) => {
        this.setState({ isLoading: true });
        const response = await this.props.service.getMovie(imdbID);
        const movieData = response.data.hasOwnProperty('Error') ? null : response.data;
        this.setState({
            movieData: movieData,
            isLoading: false,
        });
    }

    render() {
        if (this.state.isLoading) return ( <div>Loading movie...</div> );

        if (this.state.movieData === null) return ( <div>Movie not found</div> );

        const { 
            Title, Year, Runtime, Genre, Director,
            Actors, Plot, Language, BoxOffice, Poster
        } = this.state.movieData;

        return (
            <div className="detailsContainer">
                <div className="detailsPosterContainer">
                    <img 
                        src={ Poster !== 'N/A' ? Poster : no_image } 
                        className="detailsPoster" 
                        alt="movie detail poster"/>
                </div>
                <div className="descriptionContainer">
                    <div className="detailTitle">{ Title } ({ Year })</div>
                    <div>{ Plot }</div>
                    <hr/>
                    <div>directed by: { Director }</div>
                    <div>cast: { Actors }</div>
                    <div>language: { Language }</div>
                    <div>genre: { Genre }</div>
                    <div>time: { Runtime }</div>
                    <div>box office: { BoxOffice }</div>
                </div>
            </div>
        );
    }

}


export default MovieDetails;
