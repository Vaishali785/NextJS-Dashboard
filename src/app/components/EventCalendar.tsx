"use client"
import "react-calendar/dist/Calendar.css"

import { useState } from "react"
import Calendar from "react-calendar"
import Image from "next/image"

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

// TEMPORARY
const events = [
	{
		id: 1,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit consectetur adipiscing elit.",
	},
	{
		id: 2,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: 3,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
]

const EventCalendar = () => {
	const [value, onChange] = useState<Value>(new Date())

	return (
		<div className="bg-white  p-4 rounded-md">
			<Calendar onChange={onChange} value={value} />

			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold my-4">Events</h1>
				<Image src="/moreDark.png" alt="" width={20} height={20} />
			</div>
			<div className="flex gap-4 flex-col">
				{events.map((event) => (
					<div
						className="rounded-md p-5 border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
						key={event.id}
					>
						<div className="flex items-center justify-between lg:max-xl:flex-col lg:max-xl:items-start lg:max-xl:gap-2 max-[450px]:flex-col max-[450px]:items-start max-[450px]:gap-2">
							<h1 className="font-semibold text-gray-600">{event.title}</h1>
							<span className="text-gray-300 text-xs">{event.time}</span>
						</div>
						<p className="text-sm mt-2 text-gray-400">{event.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default EventCalendar
