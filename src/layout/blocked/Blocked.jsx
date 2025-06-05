import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import './Blocked.css'

export const Blocked = () => {
    const location = useLocation()
    const [blockData, setBlockData] = useState(null)

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        setBlockData({
            profileTitle: params.get('profileTitle'),
            originalUrl: params.get('originalUrl'),
            startTime: params.get('startTime'),
            endTime: params.get('endTime'),
            profileId: params.get('profileId')
        })
    }, [location])

    if (!blockData) return <div>Loading...</div>

    return (
        <div className="Blocked">
            <div>
                <h1>Website Blocked</h1>
                <p>Access to <strong>{blockData.profileTitle}</strong> is currently blocked.</p>
                <p>Blocking Period: {blockData.startTime} - {blockData.endTime}</p>
                <p>Current Time: {new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    )
}
