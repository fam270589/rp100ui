import React from 'react';
import HeaderUI from '../components/HeaderUI/HeaderUI';
import SideMenu from '../components/SideMenu/SideMenu';
import Button from '../components/Button/Button';

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen'>
			<HeaderUI />
			<div className='flex mt-12'>
				<SideMenu />
				<Button />
			</div>
		</main>
	);
}
