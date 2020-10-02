import React from 'react';  
import './SidebarLeft.css';
import SidebarRow from './SidebarRow.js';


const SidebarLeft=({user})=>{
 return(
 	<div className="sidebar">
		 			
 		<SidebarRow avatar ImageLink="https://www.flaticon.com/svg/static/icons/svg/929/929422.svg" title={user?.displayName} />
 		<SidebarRow selected ImageLink="https://www.flaticon.com/premium-icon/icons/svg/1674/1674711.svg" title="News Feed" />
 		<SidebarRow ImageLink="https://image.flaticon.com/icons/svg/733/733548.svg" title="Messenger" />
 		<SidebarRow ImageLink="https://image.flaticon.com/icons/svg/2991/2991552.svg" title="Watch" />
 		<h3>Explore</h3>
 		<SidebarRow ImageLink="https://image.flaticon.com/icons/svg/889/889102.svg" title="Welcome" />
 		<SidebarRow ImageLink="https://image.flaticon.com/icons/svg/2750/2750767.svg" title="COVID-19 Information" />
 		<SidebarRow ImageLink="https://www.flaticon.com/premium-icon/icons/svg/277/277658.svg" title="Pages" />
 		<SidebarRow ImageLink="https://image.flaticon.com/icons/svg/3076/3076753.svg" title="Events" />
 		<SidebarRow ImageLink="https://image.flaticon.com/icons/svg/681/681392.svg" title="Groups" />
 	</div>
 	)
 }

export default SidebarLeft;