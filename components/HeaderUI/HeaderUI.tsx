import React from 'react';

type Props = {
	children?: React.ReactNode;
	// props....
};

//?======================================================//
const HeaderUI = (props: Props) => {
	return (
		<div className='flex w-56 p-5 justify-center rounded-r-md bg-rp-secondary'>
			<p className='cursor-pointer hover:text-blue-300 text-xl'>RP100 UI</p>
		</div>
	);
};

export default HeaderUI;
