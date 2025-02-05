import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandMeta,
	IconBrandX,
} from "@tabler/icons-react";
function Footer() {
	return (
		<div className="w-screen flex flex-col items-start justify-start pt-4 bg-cream2 relative font-gro mix-blend-screen">
			<div className="w-full text-center text-black overflow-hidden h-full">
				<div className="text-xl sm:text-2xl md:text-3xl flex flex-row items-center justify-between px-8 p-3 font-bold w-full bg-black text-cream py-5 shadow-lg">
					<h1 className="text-cream text-2xl font-glb font-bold">&copy; MAGNUS</h1>
					<div className="flex space-x-1">
						<a href="https://www.instagram.com/magnus.cit/"><IconBrandInstagram
							className="cursor-pointer text-cream p-3 rounded-full"
							size={44}
						/></a>
						<a href="http://github.com/magnuscit/"><IconBrandGithub
							className="cursor-pointer text-cream p-3 rounded-full"
							size={44}
						/></a>
						<a href="https://www.linkedin.com/in/magnus-cit-7158a2287/?originalSubdomain=in"><IconBrandLinkedin
							className="cursor-pointer text-cream p-3 rounded-full"
							size={44}
						/></a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;
