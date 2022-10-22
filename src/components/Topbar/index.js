import './index.css';
import Display from '../Display/index.js';
import React, {useState} from 'react';

const Topbar = () => {

    const [title, setTitle] = useState("");
    const [page, setPage] = useState("");
    const [des, setDes] = useState("");
    const [id, setId] = useState(1);
    const [list, setList] = useState([]);

    function updateData(id, type, value) {

        console.log("ID: " + id + " Type: " + type + " Value: " + value);
        console.log(list)

        for(let i = 0; i < list.length; i++) {
            if(list[i].id === id) {
                if(type === "title") {
                    list[i].title = value;
                    i = list.length;
                } else if (type === "page") {
                    list[i].page = value;
                    i = list.length;
                } else{
                    list[i].des = value;
                    i = list.length;
                }
                setList((oldList) => [...oldList]);
            }
            
        }

    }

    function handleRem(id) {
        let pos = 0;
        //Find the position of the thing I want to remove.
        //Simplify. Perphas remove pos and put the list.splice in the if block.
        for(let i = 0; i < list.length; i++){
            if(list[i].id === id) {
                pos = i;

                //Stop the loop
                i = list.length;
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

    function sortClick(list){
        const strAscending = [...list].sort((a,b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1:-1);
        setList(strAscending)
    }

    function addClick(){

        if(title === '' || page === '' || des === ''){
            alert("Fill in all boxes.");
        } else if (page < 0){
            alert("Fill please give a positive number.")
        } else {

            //Incase it can't iterate through the list.
            try{
                setList((oldList) => [...oldList, {
                    "id": id,
                    "title": title,
                    "page": page,
                    "des": des
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
                    <button className= 'sortButton' onClick = {() => sortClick(list)}>Sort</button>

                    {/* <button className = 'remButton' onClick = {removeClick}>Remove</button> */}
                    <button className = 'addButton' onClick = {addClick}>Add</button>

                    <input className = 'inputBox' type = "text" placeholder='Description' value = {des} onChange={(text) => setDes(text.target.value)}/>
                    <input className = 'inputBox' type = "number" placeholder='Page' value = {page} onChange={(text) => setPage(text.target.value)}/>
                    <input className = 'inputBox' type = "text" placeholder='Title' value = {title} onChange={(text) => setTitle(text.target.value)}/>
                </div>
            </div>
            <Display books={list} handleRem={handleRem} updateData={updateData}></Display>
        </div>
        
        
    )
}

export default Topbar;