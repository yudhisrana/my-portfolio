import { useEffect, useState } from 'react';

type Props = {
	minSize: number;
	maxSize: number;
	width: number;
};

const useDetectSize = ({ minSize, maxSize, width }: Props) => {
	const [isSize, setIsSize] = useState(minSize);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < width) {
				setIsSize(minSize);
			} else {
				setIsSize(maxSize);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [minSize, maxSize, width]);

	return isSize;
};

export default useDetectSize;
