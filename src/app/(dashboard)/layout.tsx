import Image from "next/image"
import Link from "next/link"
import Menu from "../components/Menu"
import Navbar from "../components/Navbar"

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex h-screen">
			{/* left */}
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
				<Link
					href="/"
					className="flex gap-2 justify-center lg:justify-start items-center"
				>
					<Image src="/logo.png" alt="" className="" width={32} height={32} />
					<span className="hidden lg:block">SchooLama</span>
				</Link>
				<Menu />
			</div>

			{/* right */}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
				<Navbar />
				{children}
			</div>
		</div>
	)
}
