function Polaroid({ description, _class = "" }: { description: string, _class?: string }) {
	return (
		<section className={"hover:-translate-y-2 transition-all ease-in-out bg-red-500 w-full sm:max-w-[300px] lg:max-w-[400px] lg:h-[400px] h-[300px] flex flex-col " + _class}>
			<div className="bg-black h-0 flex-grow w-full sm:border-[15px] border-red-500" />
			<div className="py-4 px-2 bg-red-500 w-full uppercase text-green-500 text-center">{description}</div>
		</section>
	)
}

export default Polaroid;
