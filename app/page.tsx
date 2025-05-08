import { BackgroundBeams } from '@/components/ui/background-beams';
import { FlipWords } from '@/components/ui/flip-words';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { image, words } from '@/data';
import { ArrowDown, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<BackgroundBeams />

			{/* hero section */}
			<section className="hero-section max-w-4xl flex flex-col py-5 md:py-10 md:flex-row gap-10 md:gap-0 items-center justify-between mx-auto">
				{/* Left Content */}
				<div className="space-y-4 max-w-sm lg:max-w-md">
					<h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
						Hi 👋🏼, Perkenalkan
					</h1>
					<FlipWords
						words={words}
						className="text-xl lg:text-2xl font-bold text-neutral-400 bg-neutral-800 rounded-md p-2"
					/>
					<p className="text-neutral-400 text-base font-semibold text-justify">
						Saya memiliki ketertarikan yang kuat di bidang programming,
						khususnya dalam membangun website personal dan web aplikasi yang
						fungsional, modern, dan user-friendly. Dengan mengutamakan kualitas
						dan performa, saya berkomitmen untuk membantu individu maupun bisnis
						dalam menciptakan solusi digital yang efektif dan berdampak.
					</p>
					<div className="flex text-center gap-4">
						<HoverBorderGradient
							containerClassName="rounded-full"
							as="button"
							className="dark:bg-black bg-white text-black dark:text-white"
						>
							<Link href="#" className="flex items-center space-x-2">
								<span className="text-neutral-400">Download CV</span>
								<FileText className="h-4 w-4 text-neutral-400" />
							</Link>
						</HoverBorderGradient>

						<HoverBorderGradient
							containerClassName="rounded-full"
							as="button"
							className="dark:bg-black bg-white text-black dark:text-white"
						>
							<Link href="#" className="flex items-center space-x-2">
								<span className="text-neutral-400">Lihat Proyek</span>
								<ArrowDown className="h-4 w-4 text-neutral-400" />
							</Link>
						</HoverBorderGradient>
					</div>
				</div>

				{/* Right Content */}
				<div className="border rounded-md w-fit">
					<Image
						src={image.HeroImage}
						alt="hero-img"
						width={350}
						height={350}
						sizes="(max-width: 768px) 300px, 350px"
						className="rounded-md w-[300px] lg:w-[350px] h-auto"
					/>
				</div>
			</section>
		</>
	);
}
