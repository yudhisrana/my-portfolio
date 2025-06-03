'use client';

import { menuNavbar } from '@/data';
import Link from 'next/link';
import { useState } from 'react';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { VscListSelection } from 'react-icons/vsc';
import { LiaTimesSolid } from 'react-icons/lia';
import useDetecScrolled from '@/hooks/detect-scrolled';
import useDetectSize from '@/hooks/detect-size';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const isScrolled = useDetecScrolled();
	const sizeIcon = useDetectSize({
		minSize: 20,
		maxSize: 25,
		width: 768,
	});

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleMenuClose = () => {
		setIsOpen(false);
	};

	return (
		<nav className="sticky top-0 z-50 py-5">
			<div
				className={`flex items-center justify-between border rounded-full py-3 px-4 ${
					isScrolled ? 'bg-neutral-950' : ''
				}`}
			>
				{/* logo */}
				<div className="logo">
					<h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
						DYR
					</h1>
				</div>

				{/* list menu */}
				<div
					className={`listMenu fixed top-[80px] bg-background w-full py-6 px-4 transition-all duration-500 ease-in-out md:static md:top-auto md:left-auto md:bg-transparent md:p-0 ${
						isOpen ? 'left-0' : '-left-full'
					}`}
				>
					<ul className="flex items-center justify-center gap-4">
						{menuNavbar.map((menu) => (
							<li key={menu.id}>
								<Link
									onClick={handleMenuClose}
									href={menu.link}
									className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 lg:text-lg"
								>
									{menu.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* icon socialmedia */}
				<div className="social-media flex items-center gap-2">
					<Link href="#">
						<FaSquareFacebook size={sizeIcon} className="text-neutral-400" />
					</Link>
					<Link href="#">
						<FaSquareGithub size={sizeIcon} className="text-neutral-400" />
					</Link>
					<Link href="#">
						<FaLinkedin size={sizeIcon} className="text-neutral-400" />
					</Link>

					{/* toggle mobile */}
					<button onClick={handleToggle} className="menu-toggle ml-4 md:hidden">
						{isOpen ? (
							<LiaTimesSolid size={20} className="text-neutral-400" />
						) : (
							<VscListSelection size={20} className="text-neutral-400" />
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
