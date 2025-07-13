import React, { useState, useEffect } from 'react'
import { BlockTime } from './BlockTime'
import { BlockSwitch } from './BlockSwitch'
import { DaySelector } from './DaySelector'

import './BlockSetting.css'

export const BlockSetting = ({ onBlockSettingChange, initialBlockData }) => {
    const [isEnabled, setIsEnabled] = useState(initialBlockData !== null && initialBlockData !== undefined)
    const [startTime, setStartTime] = useState(initialBlockData?.startTime || '06:00')
    const [endTime, setEndTime] = useState(initialBlockData?.endTime || '22:00')
    const [selectedDays, setSelectedDays] = useState(initialBlockData?.selectedDays || [1, 2, 3, 4, 5]) // Default: Monday to Friday

    useEffect(() => {
        if (initialBlockData) {
            setIsEnabled(true);
            setStartTime(initialBlockData.startTime || '06:00');
            setEndTime(initialBlockData.endTime || '22:00');
            setSelectedDays(initialBlockData.selectedDays || [1, 2, 3, 4, 5]);
        } else {
            setIsEnabled(false);
        }
    }, [initialBlockData]);

    const isFirstRender = React.useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (isEnabled) {
            const timeoutId = setTimeout(() => {
                onBlockSettingChange({
                    startTime,
                    endTime,
                    selectedDays
                });
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [startTime, endTime, selectedDays, onBlockSettingChange, isEnabled]);

    const handleToggle = (newState) => {
        const newEnabled = typeof newState === 'boolean' ? newState : !isEnabled;

        setIsEnabled(newEnabled);

        if (newEnabled) {
            onBlockSettingChange({
                startTime,
                endTime,
                selectedDays
            });
        } else {
            onBlockSettingChange(null);
        }
    }

    const handleDayToggle = (dayIndex) => {
        setSelectedDays(prev => {
            if (prev.includes(dayIndex)) {
                return prev.filter(day => day !== dayIndex);
            } else {
                return [...prev, dayIndex];
            }
        });
    }

    return (
        <div className="BlockSettingWrapper">
            <div className="BlockSetting">
                <div className="timeRangeContainer">
                    <BlockTime
                        time={startTime}
                        setTime={(newTime) => {
                            setStartTime(newTime);
                        }}
                    />
                    <span className="toText">to</span>
                    <BlockTime
                        time={endTime}
                        setTime={(newTime) => {
                            setEndTime(newTime);
                        }}
                    />
                    <DaySelector
                        selectedDays={selectedDays}
                        onDayToggle={handleDayToggle}
                    />
                    <BlockSwitch
                        isEnabled={isEnabled}
                        handleToggle={handleToggle}
                    />
                </div>
            </div>
            <div className="spacer-element"></div>
        </div>
    )
}
