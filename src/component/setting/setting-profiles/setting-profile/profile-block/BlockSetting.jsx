import React, { useState, useEffect } from 'react'
import { BlockTime } from './BlockTime'
import { BlockSwitch } from './BlockSwitch'

import './BlockSetting.css'

export const BlockSetting = ({ onBlockSettingChange, initialBlockData }) => {
    const [isEnabled, setIsEnabled] = useState(initialBlockData !== null && initialBlockData !== undefined)
    const [startTime, setStartTime] = useState(initialBlockData?.startTime || '06:00')
    const [endTime, setEndTime] = useState(initialBlockData?.endTime || '22:00')

    useEffect(() => {
        if (initialBlockData) {
            setIsEnabled(true);
            setStartTime(initialBlockData.startTime || '06:00');
            setEndTime(initialBlockData.endTime || '22:00');
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
                    endTime
                });
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [startTime, endTime, onBlockSettingChange, isEnabled]);

    const handleToggle = (newState) => {
        const newEnabled = typeof newState === 'boolean' ? newState : !isEnabled;

        setIsEnabled(newEnabled);

        if (newEnabled) {
            onBlockSettingChange({
                startTime,
                endTime
            });
        } else {
            onBlockSettingChange(null);
        }
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
