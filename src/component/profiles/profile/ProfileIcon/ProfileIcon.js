import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon, largeIconSize } from '../../../../utility/profile/profileIcon';

import './ProfileIcon.css';

const profileIcon = (props) => (
  <FontAwesomeIcon icon={getIcon(props.icon)} size={largeIconSize} className="ProfileIcon" />
);

export default profileIcon;
