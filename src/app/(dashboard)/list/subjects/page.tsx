import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import TableSearch from "@/app/components/TableSearch"
import { parentsData, role, subjectsData } from "@/app/lib/data"
import { Parent, Subject } from "@/app/lib/type"
import Image from "next/image"
import Link from "next/link"

const columns = [
	{
		header: "Subject Name",
		accessor: "name",
		className: "hidden md:table-cell",
	},
	{
		header: "Teachers",
		accessor: "teachers",
		className: "hidden md:table-cell",
	},
	{ header: "Actions", accessor: "actions" },
]

const SubjectListPage = () => {
	const renderRow = (item: Subject) => {
		return (
			<tr
				key={item.id}
				className="border-b border-gray-200 pl- even:bg-slate-50 hover:bg-lamaPurpleLight"
			>
				<td className="flex gap-4 p-4 items-center">{item.name}</td>
				<td className="hidden md:table-cell text-xs">
					{item.teachers.join(",")}
				</td>
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
				<h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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
			<Table columns={columns} renderRow={renderRow} data={subjectsData} />

			{/* bottom */}
			<Pagination />
		</div>
	)
}

export default SubjectListPage
