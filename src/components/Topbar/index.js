import './index.css';
import Display from '../Display/index.js';
import React, {useState} from 'react';

const Topbar = () => {

    const [title, setTitle] = useState([""]);
    const [page, setPage] = useState([""]);
    const [des, setDes] = useState([""]);
    const [list, setList] = useState([{
        title:"",
        page:"",
        des:""
    }]);

    function exportClick(){
        console.log("test");
    }

    function importClick(){
        console.log("import");
    }

    function addClick(){

        if(title === '' || page === '' || des === ''){
            alert("Fill in all boxes.");
        } else {
            try{
                setList((...list) => [...title, ...page, ...des,{
                    title: title,
                    page: page,
                    des: des
                }]);
                setTitle("");
                setPage("");
                setDes("");
                console.log(list.toString)
            } catch (err){
                console.log(err)
            }
            
        }

        
    }

    function removeClick(){
        console.log("Hello World");
    }

    return (
        <div>
            <div className = 'topBar'>
                <div className = 'rightButtons'>
                    <button className = 'exportButton' onClick = {exportClick}>Export</button> 
                    <button className = 'importButton' onClick = {importClick}>Import</button>

                    <button className = 'remButton' onClick = {removeClick}>Remove</button>
                    <button className = 'addButton' onClick = {addClick}>Add</button>

                    <input className = 'inputBox' type = "text" placeholder='Description' value = {des} onChange={(text) => setDes(text.target.value)}/>
                    <input className = 'inputBox' type = "text" placeholder='Page' value = {page} onChange={(text) => setPage(text.target.value)}/>
                    <input className = 'inputBox' type = "text" placeholder='Title' value = {title} onChange={(text) => setTitle(text.target.value)}/>
                    
                </div>
            </div>
            <Display data = {list}></Display>
        </div>
        
        
    )
}

export default Topbar;