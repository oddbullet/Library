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
                        <td className='title'>Title</td>
                        <td className='page'>Page</td>
                        <td className='des'>Description</td>
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