import React from 'react';  
import './SidebarRight.css';

const SidebarRight=()=>{
 return(
 	<div className="sidebarRight">
 		<div className="sidebarRight__languages"> 
 			<p className="sidebarRight__selected"> English (UK) . </p>
 			<p> English (US) . </p>
 			<p> हिन्दी . </p>
 			<p> ਪੰਜਾਬੀ . </p>
 		</div>
 		<div className="sidebarRight__policies"> 
 			<p> Privacy . </p>
 			<p> Terms . </p>
 			<p> Advertising . </p>
 			<p> AdChoices. </p>
 			<p> Cookies. </p>
 			<p> More </p>
 		</div> 
 		<p className = "copyright">Facebook 2020 </p>
 	</div>
 	)
 }

export default SidebarRight;