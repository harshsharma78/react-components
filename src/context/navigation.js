import { useEffect, useState } from 'react';
import { createContext } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		// handling the link change in address bar when user go back and forward
		const handler = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener('popstate', handler);

		/*  "popstate" event --> whenever a user clicks on the forward and the backward button on the browser it occurs. We handle this to change the address path when user navigates. */

		return () => {
			window.removeEventListener('popstate', handler);
		};
	}, []);

	const navigate = to => {
		window.history.pushState({}, '', to);
		setCurrentPath(to);
	};
	/*
    "pushState" function which used to "change the address path" whenever user navigates through different pages "without full page refresh". */

	return (
		<NavigationContext.Provider value={{ currentPath, navigate }}>
			{children}
		</NavigationContext.Provider>
	);
}

export { NavigationProvider };
export default NavigationContext;
