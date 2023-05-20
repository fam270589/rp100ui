import React from 'react';

type Props = {
	children?: React.ReactNode;
	// props....
};

//?======================================================//
const HeaderUI = (props: Props) => {
	return (
		<div className='flex w-full px-16 py-3 rounded-b-lg bg-rp-secondary justify-between items-center fixed shadow-md'>
			<p className='cursor-pointer hover:text-blue-300 text-xl'>RP100 UI</p>
			<div className='flex gap-5 text-sm'>
				<p className='cursor-pointer hover:text-blue-300'>Register</p>
				<p className='cursor-pointer hover:text-blue-300'>Settings</p>
			</div>
		</div>
	);
};

export default HeaderUI;
