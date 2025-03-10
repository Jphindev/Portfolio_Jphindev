"use client";

import MenuItem from "./MenuItem";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ToggleDarkMode from "./ToggleDarkMode";

export default function Navbar() {
	// Display burger menu by changing nav style
	const defaultNavStyle =
		"hidden fixed bg-dark dark:bg-light rounded-full shadow-lg shadow-light/50 dark:shadow-dark/50 md:shadow-none z-50 top-11 right-0 md:static md:flex flex-col md:flex-row items-center justify-center gap-3 p-2";
	const [navStyle, setNavStyle] = useState(defaultNavStyle);

	const burgerRef = useRef<HTMLImageElement | null>(null);

	const displayBurger = () => {
		if (navStyle === defaultNavStyle)
			setNavStyle(defaultNavStyle.replace("hidden", "flex"));
		else setNavStyle(defaultNavStyle);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			burgerRef.current &&
			!burgerRef.current.contains(event.target as Node)
		) {
			setNavStyle(defaultNavStyle);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [navStyle]);

	return (
		<>
			<nav className={navStyle}>
				<MenuItem
					title="Accueil"
					href="/#home"
					target="_self"
					src="/photos/home.svg"
					width={24}
					height={24}
				/>
				<MenuItem
					title="Projets"
					href="/#projects"
					target="_self"
					src="/photos/project.svg"
					width={24}
					height={24}
				/>
				<MenuItem
					title="Contact"
					href="/#contact"
					target="_self"
					src="/photos/mail.svg"
					width={24}
					height={24}
				/>
				<MenuItem
					title="Avis"
					href="/#testimonials"
					target="_self"
					src="/photos/testimonial.svg"
					width={24}
					height={24}
				/>
				<MenuItem
					title="CV"
					href="/docs/JP_HERFELD_CV_Developpeur_web.pdf"
					target="_blank"
					src="/photos/cv.svg"
					width={24}
					height={24}
				/>
				<MenuItem
					title="LinkedIn"
					href="https://www.linkedin.com/in/jp-herfeld/"
					target="_blank"
					src="/photos/linkedin.svg"
					width={24}
					height={27}
				/>
				<ToggleDarkMode />
			</nav>
			<Image
				ref={burgerRef}
				src="/photos/burger-menu.svg"
				alt="Menu Burger"
				width={40}
				height={40}
				className="fixed right-2 top-0 z-10 bg-dark rounded-b-lg  md:static md:hidden"
				onClick={displayBurger}
			/>
		</>
	);
}
