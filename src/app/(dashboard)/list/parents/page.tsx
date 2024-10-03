import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import TableSearch from "@/app/components/TableSearch"
import { parentsData, role } from "@/app/lib/data"
import { Parent } from "@/app/lib/type"
import Image from "next/image"
import Link from "next/link"

const columns = [
	{ header: "Info", accessor: "info", className: "pl-5" },
	{
		header: "Student Names",
		accessor: "students",
		className: "hidden md:table-cell",
	},
	{ header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
	{ header: "Address", accessor: "address", className: "hidden lg:table-cell" },
	{ header: "Actions", accessor: "actions" },
]

const ParentListPage = () => {
	const renderRow = (item: Parent) => {
		return (
			<tr
				key={item.id}
				className="border-b border-gray-200 pl- even:bg-slate-50 hover:bg-lamaPurpleLight"
			>
				<td className="flex gap-4 p-4 items-center">
					<div className="flex flex-col">
						<h3 className="font-semibold">{item.name}</h3>
						<p className="text-xs text-gray-500">{item?.email}</p>
					</div>
				</td>
				<td className="hidden md:table-cell text-xs">
					{item.students.join(",")}
				</td>
				<td className="hidden md:table-cell text-xs">{item.phone}</td>
				<td className="hidden lg:table-cell text-xs">{item.address}</td>
				<td>
					<div className="flex items-center gap-2">
						<Link href={`/list/teachers/${item.id}`}>
							<button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
								<Image src="/edit.png" alt="" width={16} height={16} />
							</button>
						</Link>
						{role == "admin" && (
							<button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
								<Image src="/delete.png" alt="" width={16} height={16} />
							</button>
						)}
					</div>
				</td>
			</tr>
		)
	}
	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			{/* top */}
			<div className="flex items-center justify-between">
				<h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
				<div className="flex items-center flex-col md:flex-row w-full md:w-auto gap-4 ">
					<TableSearch />
					<div className="flex self-end items-center gap-4">
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
							<Image src="/filter.png" alt="" width={14} height={14} />
						</button>
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
							<Image src="/sort.png" alt="" width={14} height={14} />
						</button>
						{role == "admin" && (
							<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
								<Image src="/plus.png" alt="" width={14} height={14} />
							</button>
						)}
					</div>
				</div>
			</div>
			{/* mid */}
			<Table columns={columns} renderRow={renderRow} data={parentsData} />

			{/* bottom */}
			<Pagination />
		</div>
	)
}

export default ParentListPage
