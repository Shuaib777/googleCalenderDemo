import './CalendarGrid.scss';

const CalendarGrid = ({ 
  date, 
  isCurrentMonth, 
  isToday, 
  events = [],
  onDateClick,
  onEventClick 
}) => {
  const handleClick = () => {
    if (onDateClick) {
      onDateClick(date);
    }
  };

  const handleEventClick = (e, event) => {
    e.stopPropagation();
    if (onEventClick) {
      onEventClick(event);
    }
  };

  // Get day number from date
  const dayNumber = date.getDate();

  // Show only first 3 events, rest are "+X more"
  const visibleEvents = events.slice(0, 3);
  const remainingCount = events.length - 3;

  return (
    <div 
      className={`calendar-grid-cell ${!isCurrentMonth ? 'other-month' : ''} ${isToday ? 'today' : ''}`}
      onClick={handleClick}
    >
      {/* Date Number */}
      <div className="date-number">
        <span className={isToday ? 'today-badge' : ''}>{dayNumber}</span>
      </div>

      {/* Events List */}
      <div className="events-container">
        {visibleEvents.map((event, index) => (
          <div
            key={event.id || index}
            className="event-item"
            style={{ 
              backgroundColor: event.color || 'var(--event-blue)',
              borderLeft: `0.25rem solid ${event.color || 'var(--event-blue)'}`
            }}
            onClick={(e) => handleEventClick(e, event)}
          >
            <span className="event-time">
              {event.time && `${event.time} `}
            </span>
            <span className="event-title">{event.title}</span>
          </div>
        ))}

        {/* Show remaining count */}
        {remainingCount > 0 && (
          <div className="more-events">
            {remainingCount} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarGrid;