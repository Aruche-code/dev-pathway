//トップレベルの予約ページコンポーネント
//import Days from "../features/booking/BookingForm";
// import BookingForm from "../features/booking";
import React, { useState } from 'react'
import Layout from '../components/layouts';

export default function booking() {
    const [date, setDate] = useState(new Date());

    const daysInMonth = () => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const days = new Date(year, month + 1, 0).getDate();
      return Array.from({ length: days }, (_, i) => i + 1);
    };
  
    const prevMonth = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };
  
    const nextMonth = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    return (
    <Layout>
    <div className="container mx-auto mt-0 w-4/5">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth}>&lt;</button>
        <h2 className="text-xl font-bold">
          {date.getFullYear()}年{date.getMonth() + 1}月
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {Array.from({ length: date.getDay() }, (_, i) => (
          <div key={`empty-${i}`} className="text-center text-gray-400 border-2 h-16">{''}</div>
        ))}
        {daysInMonth().map(day => (
          <div key={day} className="text-center border-2 h-16">
            {day}
          </div>
        ))}
      </div>
    </div>
    </Layout>
    )
}
