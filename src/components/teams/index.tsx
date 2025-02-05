import NavBar from "../NavBar";

function TeamPage() {
	return (
		<div className="w-screen h-screen bg-cream font-gro uppercase">
			<div className="relative w-full flex flex-col items-center justify-center overflow-clip">
				<NavBar />
			</div>
			<div className="items-center justify-center flex lg:px-10 lg:pt-0 relative pb-10 flex-col">
				<h1 className="text-6xl lg:text-8xl lg:px-4 pb-6 lg:pb-0 font-black text-accent text-center my-8">(TEAM!)</h1>
				<section className="max-w-7xl grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
				</section>
			</div>
		</div>
	)
}

export default TeamPage;
