import React from 'react'
import { LibraryIcon } from '../../../../icon/LibraryIcon'

import './BlockIcon.css'

export const BlockIcon = ({onBlock, blockData}) => {
    const isBlockEnabled = blockData !== null && blockData !== undefined;
    const handleClick = (e) => {
        e.stopPropagation();
        onBlock();
    }

    return (
        <div className="BlockIconContainer" onClick={handleClick} title="Block website">
            <LibraryIcon
                iconName="SiAdblock"
                color={isBlockEnabled ? "red" : "lightgray"}
                className="BlockIcon"
                onClick={handleClick}
            />
        </div>
    )
}
