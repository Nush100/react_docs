import { render, screen } from '@testing-library/react';
import Game from '../Game';

describe('Game', () => {
    it('Game element renders correctly', () => {
        render(<Game/>);
        const testElement =  screen.getByText('Go to game start');
        expect(testElement).toBeInTheDocument();
    })
})
