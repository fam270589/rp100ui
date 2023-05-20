import React from 'react';

type Props = {
	children?: React.ReactNode;
	// props....
};

//?======================================================//
const SideMenu = (props: Props) => {
	return (
		<div className='flex flex-col bg-rp-secondary mt-2 w-56 rounded-r-md py-5 px-12 gap-5 text-sm h-screen shadow-md'>
			<div className='cursor-pointer flex gap-3 text-gray-500 hover:text-white items-center'>
				<p className='flex justify-center border border-gray-500 w-12 rounded-md p-1'>
					Btn
				</p>
				<p>Button</p>
			</div>
			<div className='cursor-pointer flex gap-3 text-gray-500 hover:text-white items-center'>
				<p className='flex justify-center border border-gray-500 w-12 rounded-md p-1'>
					Crd
				</p>
				<p>Card</p>
			</div>
			<div className='cursor-pointer flex gap-3 text-gray-500 hover:text-white items-center'>
				<p className='flex justify-center border border-gray-500 w-12 rounded-md p-1'>
					Inp
				</p>
				<p>Input</p>
			</div>
			<div className='cursor-pointer flex gap-3 text-gray-500 hover:text-white items-center'>
				<p className='flex justify-center border border-gray-500 w-12 rounded-md p-1'>
					Mod
				</p>
				<p>Modal</p>
			</div>
			<div className='cursor-pointer flex gap-3 text-gray-500 hover:text-white items-center'>
				<p className='flex justify-center border border-gray-500 w-12 rounded-md p-1'>
					Tgl
				</p>
				<p>Toggle</p>
			</div>
			<div className='cursor-pointer flex gap-3 text-gray-500 hover:text-white items-center'>
				<p className='flex justify-center border border-gray-500 w-12 rounded-md p-1'>
					Tip
				</p>
				<p>Tooltip</p>
			</div>
		</div>
	);
};

export default SideMenu;
