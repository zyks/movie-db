import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PageNumber extends Component {

    static propTypes = {
        number: PropTypes.number.isRequired,
        callback: PropTypes.func.isRequired,
        isActive: PropTypes.bool,
    }

    static defaultProps = {
        isActive: false,
    }

    onPageClicked = (event) => {
        event.preventDefault();
        this.props.callback(this.props.number);
    }

    render() {
        const { number, isActive } = this.props;

        return (
            <a
                href="#"
                onClick={ this.onPageClicked }
                className={ isActive ? 'active' : '' }>
                { number }
            </a>
        )
    }

}


export default PageNumber;
