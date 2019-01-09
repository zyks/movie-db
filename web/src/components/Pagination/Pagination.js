import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageNumber from './PageNumber';
import './Pagination.css';


class Pagination extends Component {

    static propTypes = {
        pagesNumber: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
        callback: PropTypes.func.isRequired,
    }

    render() {
        const { pagesNumber, currentPage, callback } = this.props;

        return (
            <div className="pagination">
                {
                    _.range(1, pagesNumber + 1).map((number, i) =>
                        <PageNumber
                            key={ i }
                            number={ number }
                            isActive={ currentPage === number }
                            callback={ callback } />
                    )
                }
            </div>
        );
    }

}


export default Pagination;
