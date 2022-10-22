import { useState } from 'react';
import './index.css';

const Display = (props) => {
    const books = props.books;
    const handleRem = props.handleRem;
    const updateData = props.updateData;

    const [editID, setEditID] = useState(-1);
    const [editTitle, setTitle] = useState("Hey");
    const [editPage, setPage] = useState();
    const [editDes, setDes] = useState("");

    function handleUpdate(id, title, page, des){
        updateData(id, "title", title);
        updateData(id, "page", page);
        updateData(id, "des", des);
        setEditID(-1);
    }

    function handleEdit(id, title, page, des){
        setEditID(id);
        setTitle(title);
        setPage(page);
        setDes(des);
    }

    const listItem = books.map((book) => {
        if(editID === book.id){
            //Edit Display
            return (
                <tr key={book.id}>
                    <td><input type='text' value={editTitle} onChange={(text) => setTitle(text.target.value)}/></td>
                    <td><input type='number' value={editPage} onChange={(text) => setPage(text.target.value)}/></td>
                    <td><input type='text' value={editDes} onChange={(text) => setDes(text.target.value)}/></td>
                    <td className='zpad'><button className='editButton' onClick={()=>handleUpdate(book.id, editTitle, editPage, editDes)}>Done</button></td>
                </tr>
            )
        } 
        else{
            return(
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.page}</td>
                    <td>{book.des}</td>
                    <td className='zpad'>
                        <button className='remButton' onClick={() => handleRem(book.id)}>Remove</button>
                        <button className='editButton' onClick={() => handleEdit(book.id, book.title, book.page, book.des)}>Edit</button>
                    </td>
                </tr>
            )
        }
    });

    return (
        <table>
            <thead>
                <tr>
                    <th className='title'>Title</th>
                    <th className='page'>Page</th>
                    <th className='des'>Description</th>
                    <td className='zpad'><button className='editButton'>Tada</button></td>
                </tr>
            </thead>
            <tbody>
                {listItem}
            </tbody>
        </table>
    );     
}

export default Display