import React from 'react';

import { Icon as IconifyIcon, InlineIcon as IconifyInlineIcon } from '@iconify/react';
import mongodbIcon from '@iconify-icons/logos/mongodb';
import expressIcon from '@iconify-icons/logos/express';
import nodejsIcon from '@iconify-icons/logos/nodejs';
import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import reactRouter from '@iconify-icons/logos/react-router';
import sassIcon from '@iconify-icons/logos/sass';
import nodeRed from '@iconify-icons/cib/node-red';
import html5Icon from '@iconify-icons/cib/html5';
import css3Shiled from '@iconify-icons/cib/css3-shiled';
import javascriptIcon from '@iconify-icons/logos/javascript';


const IconifyIcons = ({IconifyIconsProps}) => {

    const itemsList = IconifyIconsProps.map((item) => {
        return (
            <IconifyInlineIcon icon={item} className='iconifyIcon' height='6vh' />
    )
  });

    return ( 
        <>
        {itemsList}
    </>
    )
}
export default IconifyIcons;