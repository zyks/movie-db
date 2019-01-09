import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';


class SearchBar extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: '',
        }
    }

    static propTypes = {
        callback: PropTypes.func.isRequired,
    }

    updateInputValue = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    onSearchClicked = (event) => {
        this.props.callback(this.state.inputValue);
    }

    render() {
        return (
            <div className="searchBar">
                <div className="searchInputContainer">
                    <input
                        type="text"
                        placeholder="insert movie title..."
                        onChange={ this.updateInputValue }/>
                </div>
                <div className="searchButtonContainer">
                    <button
                        className="searchButton"
                        onClick={ this.onSearchClicked }>
                        Search
                    </button>
                </div>
            </div>
        );
    }

}


export default SearchBar;
