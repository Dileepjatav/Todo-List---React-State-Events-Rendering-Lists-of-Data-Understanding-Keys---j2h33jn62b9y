import React, { useEffect, useState } from "react";
import "./../styles/App.css";

function App() {

	const [text,settext]=useState("");
	const [list,setlist]=useState([]);

	useEffect(()=>{
		console.log(list)
		

	},[list])

	var num=0;
	const addbtn=(e)=>{
		if(text.length!=0){
			setlist([...list,{id:list.length,text:text}])

		}
	}
	const remove=(e)=>{
		
		const updatearr=list.filter((element)=>{
			return	element.id!=e.target.id
		})
		setlist(updatearr)
	
		
		
		
		
	}
	const edit=(e)=>{
		
		
		
		
	}


	return (
	<div id="main">
	
		<input id="task" onChange={(e)=>{settext(e.target.value)}} type="text"></input>
		<button id="button" onClick={(e)=>{addbtn(e)}}>Add</button>

		<ul>{
				list.map((ele)=>{
					return (<>
					<li key={ele.id} className="list" >{ele.text}</li>
					<button id={ele.id} onClick={(e)=>{edit(e)}}	type="button">Edit</button>
					<button id={ele.id} onClick={(e)=>{remove(e)}}	type="button">Delete</button>
					</>
					)
				})

			}

		</ul>
	
	
	</div>
	);
}


export default App;
