import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact/>)
    });
    it('matches snapshot', () => {
        const {asFragment} = render(<Contact/>)
        expect(asFragment()).toMatchSnapshot()
    });
    it('match Contact me title', () => {
        const {getByTestId } = render(<Contact />);
        expect(getByTestId('contactMe')).toHaveTextContent('Contact me')
    });
    it('submit button text', () => {
        const {getByTestId} = render(<Contact />);
        expect(getByTestId('btn')).toHaveTextContent('Submit')
    })
})
