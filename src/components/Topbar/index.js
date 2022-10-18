import './index.css';
import Display from '../Display/index.js';
import React, {useState} from 'react';

const Topbar = () => {

    const [title, setTitle] = useState("");
    const [page, setPage] = useState("");
    const [des, setDes] = useState("");
    const [id, setId] = useState(1);
    const [list, setList] = useState([]);

    function handleRem(id) {
        let pos = 0;
        //Find the position of the thing I want to remove.
        for(let i = 0; i < list.length; i++){
            if(list[i].id === id) {
                pos = i;
            }
        }

        list.splice(pos, 1);
        setList((oldList) => [...oldList]);
    }

    function exportClick(){
        console.log("test");
    }

    function importClick(){
        console.log("import");
    }

    function addClick(){

        if(title === '' || page === '' || des === ''){
            alert("Fill in all boxes.");
        } else if (page < 0){
            alert("Fill please give a positive number.")
        } else {
            try{

                setList((oldList) => [...oldList, {
                    id: id,
                    title: title,
                    page: page,
                    des: des
                }]);

                setTitle("");
                setPage("");
                setDes("");
                setId((id) => id + 1);
            } catch (err){
                console.log(err)
            }
            
        }

        
    }

    return (
        <div>
            <div className = 'topBar'>
                <div className = 'rightButtons'>
                    <button className = 'exportButton' onClick = {exportClick}>Export</button> 
                    <button className = 'importButton' onClick = {importClick}>Import</button>

                    {/* <button className = 'remButton' onClick = {removeClick}>Remove</button> */}
                    <button className = 'addButton' onClick = {addClick}>Add</button>

                    <input className = 'inputBox' type = "text" placeholder='Description' value = {des} onChange={(text) => setDes(text.target.value)}/>
                    <input className = 'inputBox' type = "number" placeholder='Page' value = {page} onChange={(text) => setPage(text.target.value)}/>
                    <input className = 'inputBox' type = "text" placeholder='Title' value = {title} onChange={(text) => setTitle(text.target.value)}/>
                    
                </div>
            </div>
            <Display books={list} handleRem={handleRem}></Display>
        </div>
        
        
    )
}

export default Topbar;