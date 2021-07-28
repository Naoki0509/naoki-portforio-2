import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div>
				<Image src={} alt=""  />
			</div>
			<main className="flex flex-col items-center w-full flex-1">
				<div className="flex flex-col w-full">
					<div className=" bg-red-200  ">
						<h1>Profile</h1>
						<p>Hayashida Naoki</p>
						<p>2002.05.09</p>
						<p>Yokohama,Japan</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
