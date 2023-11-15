//機能コンポーネント
import React, { useState } from 'react';

// icons/ArrowLeftIcon.js
// export const ArrowLeftIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//     </svg>
// );

// // icons/ArrowRightIcon.js
// export const ArrowRightIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//     </svg>
// );

//import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

// const BookingForm = () => {
//     const [date, setDate] = useState(new Date())

//     // 月の初日
//     const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate() 

//     // 月の最終日
//     const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

//     // 月と年を表示するstate
//     const [currentDate, setCurrentDate] = useState(new Date());

//     // 月を移動する関数
//     const prevMonth = () => {
//         setCurrentDate(date => date.subtractMonths(1)); 
//     }

//     const nextMonth = () => {
//         setCurrentDate(date => date.addMonths(1));
//     }

//     const days = []

//     for (let i = firstDay; i <= lastDay; i++) {
//         days.push(
//             <div 
//                 key={i}
//                 className="flex items-center justify-center h-10 w-10 rounded-full"
//             >
//             {i}
//             </div>
//         )
//     }

//     return (
//         <div className="flex flex-col items-center">
//             <header className="flex justify-between px-2 py-4 text-xl">
//             <button onClick={prevMonth}>
//                 <ArrowLeftIcon />  
//             </button>
//             <span>
//                 {currentDate.format('YYYY年MM月')}  
//             </span>
//             <button onClick={nextMonth}>
//                 <ArrowRightIcon />
//             </button>
//             </header>

//             <div className="grid grid-cols-7 grid-rows-auto gap-0.25rem">
//                 {days}
//             </div>
//         </div>
//     );
// }

// export default BookingForm;