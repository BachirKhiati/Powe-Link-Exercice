import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from '../App';

test('Renders App', () => {
	render(<App />);
});

test('App render Loading indicator', () => {
	const { getByTestId } = render(<App />);
	expect(getByTestId('loading')).toBeVisible();
});

test('App render power and wait for power links result', async () => {
	const { getByTestId, getAllByText } = render(<App />);
	expect(getByTestId('loading')).toBeVisible();

	await waitForElement(() => getByTestId('graph-data'));

	const foundLinks = getAllByText('Best link station', { exact: false });
	expect(foundLinks.length).toEqual(3);

	const noLinks = getAllByText('No link station', { exact: false });
	expect(noLinks.length).toEqual(1);
});
