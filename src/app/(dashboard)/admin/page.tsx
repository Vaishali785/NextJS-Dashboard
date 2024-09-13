import AttendanceChart from "@/app/components/AttendanceChart"
import CountChart from "@/app/components/CountChart"
import FinanceChart from "@/app/components/FinanceChart"
import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
	return (
		<div className="flex flex-col md:flex-row gap-4 p-4">
			{/* left */}
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				{/* user card */}
				<div className="flex flex-wrap gap-4 justify-between">
					<UserCard type="student" />
					<UserCard type="teacher" />
					<UserCard type="parent" />
					<UserCard type="staff" />
				</div>

				{/* mid charts */}
				<div className="flex gap-4 flex-col lg:flex-row">
					<div className="w-full lg:w-1/3 h-[400px]">
						{/* radial chart */}
						<CountChart />
					</div>
					<div className="w-full lg:w-2/3 h-[400px]">
						{/* bar chart */}
						<AttendanceChart />
					</div>
				</div>

				{/* bottom chart */}
				<div className="w-full h-[450px]">
					<FinanceChart />
				</div>
			</div>
			{/* right */}
			<div className="w-full lg:w-1/3">test</div>
		</div>
	)
}

export default AdminPage
