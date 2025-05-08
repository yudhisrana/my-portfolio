import { useEffect, useState } from 'react';

const useDetecScrolled = (initialValue = 10) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > initialValue);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [initialValue]);

	return isScrolled;
};

export default useDetecScrolled;
