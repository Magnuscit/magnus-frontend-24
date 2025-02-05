import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
} from "@tabler/icons-react";

function Footer() {
	return (
		<div className="w-screen flex flex-col items-start justify-start pt-4 bg-cream2 relative font-space mix-blend-screen">
			<div className="w-full text-center text-black overflow-hidden h-full">
				<div className="text-xl sm:text-2xl md:text-3xl flex flex-row items-center justify-between px-8 p-3 font-bold w-full bg-black text-cream py-5 shadow-lg">
					<div className="w-1/3 text-left flex flex-row gap-2 text-[13px] ">
						<a href="/term-and-condition" className="hover:underline"><div >TERMS & CONDITIONS</div></a>
						*
						<a href="/shipping-policy" className="hover:underline"><div >SHIPPING POLICY</div></a>
						*
						<a href="/cancellation-policy" className="hover:underline"><div >CANCELLATION POLICY</div></a>
					</div>
					<h1 className="text-cream w-1/3 text-2x text-center font-glb font-bold">&copy; MAGNUS</h1>
					<div className="flex w-1/3 space-x-1 flex-row items-center justify-end">
						<a href="https://www.instagram.com/magnus.cit/"><IconBrandInstagram
							className="cursor-pointer text-cream p-3 rounded-full"
							size={44}
						/></a>
						<a href="http://github.com/magnuscit/"><IconBrandGithub
							className="cursor-pointer text-cream p-3 rounded-full"
							size={44}
						/></a>
						<a href="https://www.linkedin.com/in/magnus-cit-7158a2287/?originalsubdomain=in"><IconBrandLinkedin
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
