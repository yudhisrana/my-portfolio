import { menuNavbar } from '@/data/data';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className="py-5 relative z-50">
			<div className="flex items-center justify-between border rounded-full py-3 px-4">
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
									className="text-sm font-semibold cursor-pointer"
								>
									{menu.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
