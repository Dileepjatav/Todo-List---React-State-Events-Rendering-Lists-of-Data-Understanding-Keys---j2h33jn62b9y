import React, { useEffect, useState } from "react";
import "./../styles/App.css";

function App() {

	const [text,settext]=useState("");
	const [list,setlist]=useState([]);
	const [edittext,setedittext]=useState("");

	
	useEffect(()=>{
		const entertext=document.querySelector('#task');
		entertext.value="";
		
		
		

	},[list,edittext])
	
	


	const addbtn=(e)=>{
		if(text.length!=0){
			setlist([...list,{id:list.length,text:text,showedit:false}])
			settext("");
		

		}
	}
	const remove=(e)=>{
		
		const updatearr=list.filter((element)=>{
			return	element.id!=e.target.id
		})
		setlist(updatearr)
	
		
	}

	const edit=(e)=>{
		
		// let newarr=list.map(ele=>(ele.id==e.target.id?{...ele,showedit:true}:ele));
		let newarr=list.map((ele)=>{
			if(ele.id==e.target.id){
				return {...ele,showedit:true}
			}
			return ele;
		})
		setlist(newarr);
	
	}

	const textedit=(e)=>{
		if(edittext.length!=0){
			let newarr=list.map((ele)=>{
				if(ele.id==e.target.id){
					return {...ele,text:edittext,showedit:false}
				}
				return ele;
			})
	
			setlist(newarr);
			setedittext("");
			
		}
		
		

	}


	return (
	<div id="main">
	
		<input id="task" onChange={(e)=>{settext(e.target.value)}} type="text"></input>
		<button id="button" onClick={(e)=>{addbtn(e)}}>Add</button>

		<ul>{
				list.map((ele)=>{
					return (<>
					<li key={ele.id} className="list" >
						{ele.text}<br></br>
						<button id={ele.id} className="edit" onClick={(e)=>{edit(e)}}	type="button">Edit</button>
						<button id={ele.id} className="delete" onClick={(e)=>{remove(e)}}	type="button">Delete</button>
					
						{ele.showedit &&
							(	<>
									<input id={ele.id} className="editTask" onChange={(e)=>{setedittext(e.target.value)}} type="text"></input>
									<button id={ele.id} className="saveTask  " onClick={(e)=>{textedit(e)}} >Save</button>
								</>
							)
						}
					</li>
					
					</>
					)
				})

			}

		</ul>
	
	
	</div>
	);
}


export default App;
