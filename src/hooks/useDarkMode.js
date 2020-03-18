import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (key, initialValue) => {
	// setting state from user input using useLocalStorage
	// custom hook that uses useState hook

	const [value, setValue] = useLocalStorage(key, initialValue);

	useEffect(() => {
		value
			? document.body.classList.add('dark-mode')
			: document.body.classList.remove('dark-mode');
	}, [value]);
	return [value, setValue];
};

export default useDarkMode;
