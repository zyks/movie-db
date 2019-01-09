import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import MovieBrowser from './MovieBrowser';
import MovieService from '../../api/MovieService';


const props = {
    service: new MovieService("abc"),
};

const testMovies = [
    { Title: "Kung Fu Panda" },
    { Title: "Inside Out" },
]


beforeAll(() => {
    sinon
        .stub(props.service, 'getMovies')
        .returns({ data: testMovies });
});


it('renders without crashing', () => {
    mount(<MovieBrowser {...props} />);
});
