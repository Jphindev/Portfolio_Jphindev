import Image from 'next/image'

export default function About () {
	return (
		<section className="hidden px-4 mt-32 md:flex flex-col lg:flex-row-reverse md:justify-between">

			{/* BIO */}
			<article className="mt-10 w-3/4 mx-auto lg:w-1/2 lg:px-20 lg:self-center">
				<h2>Qui suis-je ?</h2>
				<p className="mt-5">Je m’appelle</p>
				<p className="text-highlight text-4xl font-bold my-2">Jean-Philippe Herfeld</p>
				<p>et je suis développeur web junior.</p>
				<p>J’ai étudié chez OpenClassrooms et j’y ai aimé l’importance accordée à la <span className="text-highlight">pratique</span> et à l’<span className="text-highlight">autonomie</span>.</p>
				<p>J’aime les distributions <span className="text-highlight">Linux</span>, la logique <span className="text-highlight">React</span> et les <span className="text-highlight">animations CSS</span>.</p>
				<p>Je suis curieux de tout et aime les challenges qu’offre la vie.</p>
				<p className="mt-4">Ma maxime du moment: </p>
				<blockquote className="italic">C’est dans la contrainte que nait l’inspiration.</blockquote>
			</article>
			
			{/* PHOTOS */}
			<div className="mx-auto relative mt-10 w-[400px] h-[375px] animate-wiggle hover:animate-none">
				<p className="italic absolute left-4 top-5 w-1/2">Amateur de randonnées et de tourisme, j’aime explorer le monde qui m’entoure.</p>
				<p className="italic absolute left-4 bottom-5 w-1/2">J’écris, anime et enregistre des sessions JDR, la dernière en date se déroule dans l’univers des backrooms.</p>
				<p className="italic absolute top-28 right-0 w-1/3">À dix ans, j’écrivais mon premier code en basic sur un Amstrad cpc 464 à cassette.</p>
				<div className="frametl absolute">
					<Image className="object-cover h-full" src="/photos/paysage.webp" alt="Template" width={400} height={225}/>
				</div>
				<div className="framer absolute top-3 right-0 ">
					<Image className="object-cover h-full" src="/photos/moi.webp" alt="Template" width={250} height={350}/>
				</div>
				<div className="framebl absolute bottom-0 ">
					<Image className="object-cover h-full" src="/photos/jdr.webp" alt="Template" width={400} height={225}/>
				</div>
			</div>
		</section>
	)
}