function Polaroid({ description, _class = "" }: { description: string, _class?: string }) {
	return (
		<div className={"hover:mb-4 transition-all ease-in-out bg-red-500 w-[450px] h-[500px] p-4 " + _class}>
			<div className="bg-black w-full h-5/6" />
			<div className="pt-8 px-2 bg-red-500 h-1/6 uppercase text-green-500">{description}</div>
		</div>
	)
}

export default Polaroid;
