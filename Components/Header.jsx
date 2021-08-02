import Link from "next/link";

export function Header() {
	return (
		<nav className="w-full bg-black h-11">
			<ul className="justify-center flex flex-row text-white text-4xl">
				<li className="px-6">
					<Link href="/">
						<p className="">Home</p>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<p>About</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
