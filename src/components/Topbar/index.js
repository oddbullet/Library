import './index.css';
import Display from '../Display/index.js'

const Topbar = () => {

    let dataList = [{
        name: "Bill"
    }]

    function exportClick(){
        console.log("test")
    }

    function addClick(){
        console.log("add");
    }

    function removeClick(){
        console.log("Hello World");
    }

    return (
        <div>
            <div className = 'topBar'>
                <div className = 'rightButtons'>
                    <button className = 'exportButton' onClick = {exportClick}>Export</button> 
                    <button className = 'remButton' onClick = {removeClick}>Remove</button>
                    <button className = 'addButton' onClick = {addClick}>Add</button>
                </div>
            </div>
            <Display dataList = {dataList}></Display>
        </div>
        
        
    )
}

export default Topbar;