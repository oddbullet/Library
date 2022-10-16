import './index.css';

const Display = (props) => {
    const data = props.data;
    
    try{
        const strAscending = [...data].sort((a,b) => a.title > b.title ? 1:-1,);
        // console.log(strAscending)
        
        return (
            <table>
                <tbody>
                    {strAscending.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.page}</td>
                            <td>{book.des}</td>
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