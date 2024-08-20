import Technos from "@/components/Technos";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Ressources from "@/components/Ressources";
import Contact from "@/components/Contact";
import MsgList from "@/components/MsgList";

export default function Home() {
	//SCHEMA.ORG
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Jean-Philippe Herfeld",
		image:
			"https://projet-8-portfolio-gamma.vercel.app/_next/image?url=%2Fphotos%2Fmoi.webp&w=640&q=75",
		description:
			"Portfolio de Jphindev aka Jean-Philippe Herfeld, dévelopeur web NextJS, React, Typescript et TailwindCSS, basé à Metz ou full remote.",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Metz",
			addressRegion: "Lorraine",
			postalCode: "57000",
			addressCountry: "FR",
		},
		url: "https://jphindev.vercel.app/",
		keywords:
			"portfolio, dévelopeur web, next.js, react.js, typescript, tailwindcss, Metz, full remote",
	};
	return (
		<>
			<Technos />
			<About />
			<Projects />
			<Ressources />
			<Contact />
			<MsgList />
			<section>
				{/* Add JSON-LD to your page */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				{/* ... */}
			</section>
		</>
	);
}
