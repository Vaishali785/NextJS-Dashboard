import Announcements from "@/app/components/Announcements"
import BigCalendar from "@/app/components/BigCalendar"
import EventCalendar from "@/app/components/EventCalendar"

const StudentPage = () => {
	return (
		<div className="flex flex-col xl:flex-row gap-4 p-4">
			{/* left */}
			<div className="w-full xl:w-2/3 ">
				<div className="h-full bg-white p-4 rounded-md">
					<h1 className="text-xl font-semibold"> Schedule (4A)</h1>
					<BigCalendar />
				</div>
			</div>
			{/* right */}
			<div className="w-full xl:w-1/3 flex flex-col gap-8 ">
				<EventCalendar />
				<Announcements />
			</div>
		</div>
	)
}

export default StudentPage
