import Image from "next/image";

function Polaroid({ description, _class = "", image = "" }: { description: string, _class?: string, image: string }) {
	return (
		<section className={"hover:-translate-y-2 transition-all ease-in-out bg-red-500 w-full sm:max-w-[300px] lg:max-w-[400px] lg:h-[450px] h-[300px] flex flex-col " + _class}>
			{!!!image ? <div className="bg-black h-0 flex-grow w-full sm:border-[15px] border-red-500" /> : <Image className="bg-black h-0 flex-grow w-full sm:border-[15px] border-red-500" src={image} alt="" fill style={{ objectFit: "contain" }} />}
			<div className="py-4 px-2 bg-red-500 w-full uppercase text-green-500 text-center absolute z-10 bottom-0">{description}</div>
		</section>
	)
}

export default Polaroid;
