import { BackgroundBeams } from '@/components/ui/background-beams';
import { FlipWords } from '@/components/ui/flip-words';
import { words } from '@/data/data';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<BackgroundBeams />

			{/* hero section */}
			<section className="hero-section h-[40rem] max-w-5xl flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between mx-auto">
				{/* Left Content */}
				<div className="space-y-4 max-w-md">
					<div className="flex text-4xl font-bold gap-2">
						<h1 className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
							Hi
						</h1>
						<span>👋🏼</span>
					</div>
					<FlipWords
						words={words}
						className="text-3xl font-bold text-neutral-500 bg-neutral-800 rounded-md p-2"
					/>
					<p className="text-neutral-500 text-base font-semibold text-justify">
						Saya memiliki ketertarikan yang kuat di bidang programming,
						khususnya dalam membangun website personal dan web aplikasi yang
						fungsional, modern, dan user-friendly. Dengan mengutamakan kualitas
						dan performa, saya berkomitmen untuk membantu individu maupun bisnis
						menciptakan solusi digital yang efektif dan berdampak.
					</p>
				</div>

				{/* Right Content */}
				<div className="border rounded-md shadow-lg w-fit">
					<Image
						src="/assets/hero.jpeg"
						alt="Foto Hero"
						width={350}
						height={350}
						className="rounded-md shadow-lg"
					/>
				</div>
			</section>
		</>
	);
}
