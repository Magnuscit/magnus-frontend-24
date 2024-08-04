import Link from 'next/link'

export default function NotFound() {
	return (
		<main className={`h-screen w-full bg-purple-100 flex relative flex-col items-center justify-center select-none md:p-0 p-10`} >
			<h2 className="text-[100px] font-bold">Page Not Found :(</h2>
			<Link className="bg-black text-white py-2 px-4" href="/">Return Home</Link>
		</main>
	)
}
