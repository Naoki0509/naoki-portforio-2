import Link from "next/link";

export function Header() {
	return (
		<nav className="w-full bg-gray-100 h-8">
			<ul className="justify-center flex flex-row">
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
