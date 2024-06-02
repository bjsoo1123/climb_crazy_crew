"use client";

import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { getDayName } from "@/utils";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };

  return (
    <main className="">
      <Calendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => dayjs(date).format("D")}
        formatYear={(locale, date) => dayjs(date).format("YYYY")}
        formatMonthYear={(locale, date) => dayjs(date).format("YYYY. MM")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        view="month"
        tileClassName={({
          activeStartDate,
          date,
          view,
        }: {
          activeStartDate: Date;
          date: Date;
          view: string;
        }) => {
          const currentDateName = getDayName(date);
          return `react-calendar__tile__${currentDateName} flex flex-col-reverse items-center`;
        }}
        tileContent={({ date, view }) => {
          return <FontAwesomeIcon icon={faSquare} size="lg" />;
        }}
        // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
        // activeStartDate={activeStartDate === null ? undefined : activeStartDate}
        // onActiveStartDateChange={({ activeStartDate }) =>
        //   setActiveStartDate(activeStartDate)
        // }
        // 오늘 날짜에 '오늘' 텍스트 삽입하고 출석한 날짜에 점 표시를 위한 설정
        // tileContent={({ date, view }) => {
        //   let html = [];
        //   if (
        //     view === "month" &&
        //     date.getMonth() === today.getMonth() &&
        //     date.getDate() === today.getDate()
        //   ) {
        //     html.push(<StyledToday key={"today"}>오늘</StyledToday>);
        //   }
        //   if (attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
        //     html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
        //   }
        //   return <>{html}</>;
        // }}
      />
      <button
        type="button"
        className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        일정 등록
      </button>
    </main>
  );
}
