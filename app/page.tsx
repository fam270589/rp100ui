import React from 'react';
import HeaderUI from '../components/HeaderUI/HeaderUI';
import SideMenu from '../components/SideMenu/SideMenu';

export default function Home() {
	return (
		<main className='flex min-h-screen'>
			<div>
				<HeaderUI />
				<SideMenu />
			</div>
      <div className='p-5'>
        <button className='bg-blue-700 px-3 py-1 rounded-md'>Small Button</button>
      </div>
		</main>
	);
}
