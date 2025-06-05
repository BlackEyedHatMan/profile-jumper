import React from 'react'

import './BlockTime.css'

export const BlockTime = ({ time, setTime, label }) => {
    return (
        <div className="blockTimeContainer">
            {label && <span className="timeLabel">{label}</span>}
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="timeInput"
                title="Set time for blocking"
            />
        </div>
    )
}
