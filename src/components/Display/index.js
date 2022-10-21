import { useState } from 'react';
import './index.css';

const Display = (props) => {
    const books = props.books;
    const handleRem = props.handleRem;
    const updateData = props.updateData;

    const [displayState, setState] = useState(true);

    try{

        const strAscending = [...books].sort((a,b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1:-1);
        
        if(displayState){
            

            // Normal Display
            return (
                <table>
                    <tbody>
                        <tr className='tableName'>
                            <th className='title'>Title</th>
                            <th className='page'>Page</th>
                            <th className='des'>Description</th>
                            <td className='zpad'><button className='editButton' onClick={() => setState(!displayState)}>Edit</button></td>
                        </tr>
                        {strAscending.map((book, index) => (
                            <tr key={index} className = "diplayRow">
                                {/* <td>Index: {book.id}</td> */}
                                <td className='titleCol'>{book.title}</td>
                                <td className='pageCol'>{book.page}</td>
                                <td className='bookCol'>{book.des}</td>
                                <td className='zpad'><button className = 'remButton' onClick = {() => handleRem(book.id)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        } else {
            // Input Diplay
            return(
                <table>
                    <tbody>
                        <tr className='tableName'>
                            <th className='title'>Title</th>
                            <th className='page'>Page</th>
                            <th className='des'>Description</th>
                            <td className='zpad'><button className='editButton' onClick={() => setState(!displayState)}>Done</button></td>
                        </tr>
                        {strAscending.map((book, index) => (
                                <tr key={index} className = "diplayRow">
                                    {/* <td>Index: {book.id}</td> */}
                                    <td className='titleCol'><input type="text" value={book.title} onChange={(text) => updateData(book.id, "title" ,text.target.value)}/></td>
                                    <td className='pageCol'><input type="number" value={book.page} onChange={(text) => updateData(book.id, "page", text.target.value)}/></td>
                                    <td className='bookCol'><input type="text" value={book.des} onChange={(text) => updateData(book.id, "des", text.target.value)}/></td>
                                    <td className='zpad'><button className = 'remButton' onClick = {() => handleRem(book.id)}>Remove</button></td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )
        }
        

    } catch (err){
        console.log(err);
    }
}

export default Display