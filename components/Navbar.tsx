'use client';

import { menuNavbar } from '@/data';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.addEventListener('scroll', handleScroll);
	});

	return (
		<nav className="sticky top-0 z-50 py-5">
			<div
				className={`flex items-center justify-between border rounded-full py-3 px-4 ${
					isScrolled ? 'bg-neutral-950' : ''
				}`}
			>
				<div className="logo">
					<h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
						DYR
					</h1>
				</div>
				<div className="listMenu">
					<ul className="flex items-center gap-2">
						{menuNavbar.map((menu) => (
							<li key={menu.id}>
								<Link
									href={menu.link}
									className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 cursor-pointer"
								>
									{menu.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
