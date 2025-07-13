import React from 'react'

import './DaySelector.css'

export const DaySelector = ({ selectedDays, onDayToggle }) => {
    const days = [
        { index: 0, label: 'S', title: 'Sunday' },
        { index: 1, label: 'M', title: 'Monday' },
        { index: 2, label: 'T', title: 'Tuesday' },
        { index: 3, label: 'W', title: 'Wednesday' },
        { index: 4, label: 'T', title: 'Thursday' },
        { index: 5, label: 'F', title: 'Friday' },
        { index: 6, label: 'S', title: 'Saturday' }
    ];

    return (
        <div className="day-selector">
            {days.map(day => (
                <button
                    key={day.index}
                    className={`day-circle ${selectedDays.includes(day.index) ? 'selected' : ''}`}
                    onClick={() => onDayToggle(day.index)}
                    title={day.title}
                    type="button"
                >
                    {day.label}
                </button>
            ))}
        </div>
    )
}
