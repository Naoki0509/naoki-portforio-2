import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center font-serif	 min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="box-content">
				<Image
					src={"/sea-ocean_00160.jpg"}
					alt="風景写真"
					width={360}
					height={360}
					layout={"responsive"}
				/>
			</div>
			<main className="flex flex-col items-center w-full flex-1">
				<div className="flex flex-col w-full">
					<h1 className="text-center text-7xl">Profile</h1>
					<div className="bg-gray-100 text-3xl w-">
						<p>Name</p>
						<p>Hayashida Naoki</p>
						<p>Barth</p>
						<p>2002.05.09</p>
						<p>From</p>
						<p>Yokohama,Japan</p>
					</div>
				</div>
				<div className="flex flex-col">
					<h1 className="text-7xl">SkillSet</h1>
				</div>
			</main>
			<Footer />
		</div>
	);
}
