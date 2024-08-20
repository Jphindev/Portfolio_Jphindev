import MenuItem from "./MenuItem";
// import ContactForm from "./ContactForm";
import Link from "next/link";

export default function Contact() {
	return (
		<section id="contact" className="flex flex-col items-center">
			<div className="divbar"></div>
			<h2>Contact</h2>
			<p className="text-center">
				Mes compétences vous intéressent et vous souhaitez me contacter ?
			</p>
			<p className="text-center mb-5">
				Vous pouvez le faire via ma page LinkedIn ou tout simplement par mail.
			</p>
			<p className="mb-5">
				<span>
					<Link href="mailto:jphindev@gmail.com">jphindev@gmail.com</Link>
				</span>
			</p>
			<MenuItem
				title="LinkedIn"
				href="https://www.linkedin.com/in/jp-herfeld/"
				target="_blank"
				src="/photos/linkedin.svg"
				width={24}
				height={27}
			/>
			{/* <ContactForm /> */}
		</section>
	);
}
