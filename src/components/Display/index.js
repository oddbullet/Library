import './index.css';

const Display = (props) => {
    const books = props.books;
    const handleRem = props.handleRem;

    try{
        const strAscending = [...books].sort((a,b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1:-1);

        return (
            <table>
                <tbody>
                    <tr className='tableName'>
                        <th className='title'>Title</th>
                        <th className='page'>Page</th>
                        <th className='des'>Description</th>
                        <th className='editButton'><button className='editButton'>Edit</button></th>
                    </tr>
                    {strAscending.map((book, index) => (
                        <tr key={index} className = "diplayRow">
                            {/* <td>Index: {book.id}</td> */}
                            <td className='titleCol'>{book.title}</td>
                            <td className='pageCol'>{book.page}</td>
                            <td className='bookCol'>{book.des}</td>
                            <td><button className = 'remButton' onClick = {event => handleRem(book.id)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )

    } catch (err){
        console.log(err);
    }
}

export default Display