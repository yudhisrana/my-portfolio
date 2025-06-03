import React from 'react';
import { Card, CardContent } from './ui/card';
import { skills } from '@/data';
import Image from 'next/image';

const CardSkills = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			{skills.map((skill) => (
				<Card key={skill.id} className="w-full max-w-xs hover:bg-neutral-800">
					<CardContent className="flex flex-col gap-5 items-center">
						<Image
							src={skill.img}
							height={75}
							width={75}
							alt={skill.name}
							className=""
						/>
						<p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
							{skill.name}
						</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default CardSkills;
