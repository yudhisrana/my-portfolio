import CardSkills from '@/components/CardSkills';
import CodeBlockJson from '@/components/CodeBlockJson';
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
			<section className="hero-section flex flex-col gap-10 md:flex-row md:max-w-5xl md:py-5 md:items-center md:justify-center md:mx-auto">
				{/* Left Content */}
				<div className="space-y-4 md:max-w-md lg:max-w-lg">
					<h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
						Hi 👋🏼, Perkenalkan
					</h1>
					<FlipWords
						words={words}
						className="text-xl lg:text-2xl font-bold text-neutral-400 bg-neutral-800 rounded-md p-2"
					/>
					<CodeBlockJson />
					<div className="flex text-center gap-4 justify-center md:justify-start">
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
				<div className="flex justify-center rounded-md w-full md:justify-end">
					<Image
						src={image.HeroImage}
						alt="hero-img"
						width={350}
						height={350}
						className="rounded-md h-auto"
					/>
				</div>
			</section>

			<section
				id="about"
				className="about-section max-w-5xl mx-auto pb-5 pt-28 flex justify-center items-center"
			>
				<div className="flex flex-col items-center gap-10">
					<h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
						ABOUT
					</h1>
					<p className="text-neutral-400 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						hic veritatis sequi vero commodi aliquam iure perferendis quis omnis
						tempora dicta pariatur quae blanditiis totam ut dolore quidem iste
						consequuntur quibusdam cumque, modi obcaecati unde corporis enim.
						Quibusdam neque saepe deserunt blanditiis dolor dolorem a labore,
						earum molestiae ipsum ad?
					</p>
				</div>
			</section>

			<section
				id="skills"
				className="about-section pb-5 pt-28 max-w-5xl mx-auto"
			>
				<div className="flex flex-col gap-10 items-center">
					<h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
						SKILLS
					</h1>
					<CardSkills />
				</div>
			</section>
		</>
	);
}
