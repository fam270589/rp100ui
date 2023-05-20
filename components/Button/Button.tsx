import React from 'react';

type Props = {
	children?: React.ReactNode;
	// props....
};

//?======================================================//
const Button = (props: Props) => {
	return (
		<div className='mx-16 p-5'>
			<div className='py-5'>
				<p className='text-2xl font-bold'>Button</p>
			</div>
			<div className='flex flex-col py-5 gap-5'>
				<div className='flex gap-5 items-center'>
					<button className='bg-blue-800 hover:bg-blue-700 px-3 py-1 rounded-md text-sm'>
						Small Button
					</button>
					<p>|</p>
					<pre>
						<code>{`<RPButton size='small' />`}</code>
					</pre>
				</div>

				<div className='flex gap-5 items-center'>
					<button className='bg-blue-800 hover:bg-blue-700 px-3 py-1 rounded-md text-base'>
						Medium Button
					</button>
					<p>|</p>
					<pre>
						<code>{`<RPButton size='medium' />`}</code>
					</pre>
				</div>

				<div className='flex gap-5 items-center'>
					<button className='bg-blue-800 hover:bg-blue-700 px-3 py-1 rounded-md text-lg'>
						Large Button
					</button>
					<p>|</p>
					<pre>
						<code>{`<RPButton size='large' />`}</code>
					</pre>
				</div>
			</div>
		</div>
	);
};

export default Button;
