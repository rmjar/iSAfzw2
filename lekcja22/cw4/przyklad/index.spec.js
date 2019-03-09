import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { CountingMachine } from './index';

afterEach(cleanup);

describe('CountingMachine', () => {
    test('should decrease the counter after "--" click', () => {
        // given
        const { getByTestId } = render(
            <CountingMachine />
        );

        // when
        fireEvent.click(getByTestId('dec'));
        fireEvent.click(getByTestId('dec'));

        // then
        expect(getByTestId('counterMessage').textContent).toContain('-10');
        expect(document.title).toContain('-10');
    });

    test('should increase the counter after "++" click', () => {
        // given
        const { getByTestId } = render(
            <CountingMachine />
        );

        // when
        fireEvent.click(getByTestId('inc'));

        // then
        expect(getByTestId('counterMessage').textContent).not.toContain('-5');
        expect(getByTestId('counterMessage').textContent).toContain('5');
        expect(document.title).toContain('5');
    });
});
