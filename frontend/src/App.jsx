import React from "react";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import CalendarGrid from "./components/calendar/CalendarGrid/CalendarGrid";
import CalendarHeader from "./components/calendar/CalendarHeader/CalendarHeader";

const App = () => {
  return (<div>

    {/* <Register/> */}
    {/* <Login/> */}

    <CalendarGrid
      date={new Date(2024, 10, 15)}
      isCurrentMonth={true}
      isToday={true}
      isWeekend={false}
      events={[
        { id: '1', title: 'Meeting', time: '10:00 AM', color: '#039be5' },
        { id: '2', title: 'Lunch', time: '12:00 PM' },
        { id: '1', title: 'Meeting', time: '10:00 AM', color: '#039be5' },
        { id: '1', title: 'Meeting', time: '10:00 AM', color: '#039be5' }
      ]}
      onDateClick={(date) => console.log('Date clicked:', date)}
      onEventClick={(event) => console.log('Event clicked:', event)}
    />

      {/* <CalendarHeader/> */}


  </div>);
};

export default App;
