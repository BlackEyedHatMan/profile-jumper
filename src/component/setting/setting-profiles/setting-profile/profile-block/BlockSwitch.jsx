import React from 'react'

import './BlockSwitch.css'

export const BlockSwitch = ({ isEnabled, handleToggle }) => {
    const onChange = (e) => {
        // Call the toggle handler with the new checked state
        handleToggle(e.target.checked);
    };

    return (
        <label className="switch" title={isEnabled ? "Block enabled" : "Block disabled"}>
            <input
                type="checkbox"
                checked={isEnabled}
                onChange={onChange}
            />
            <span className="slider round"></span>
        </label>
    )
}
