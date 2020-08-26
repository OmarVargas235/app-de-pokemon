import { useState } from 'react';

const useOpacity = () => {
	
	const [changeState, setChangeState] = useState(false);

	setTimeout(() => setChangeState(true), 10);

	const styleOpacity = {
		opacity: changeState ? 1 : 0,
		transition: "1s opacity ease-in-out", 
	}

	return [styleOpacity];
}

export default useOpacity;