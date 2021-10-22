import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Mole from './Mole.component';

describe('Mole', () => {
    it('renders', () => {
        render(
            <Mole />,
        );
    });
});