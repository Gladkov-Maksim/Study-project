import './table.module.css'

function Table(props) {
    return (
        <table>
            <thead>
                {props.headers.map(h => <td>{h}</td>)}
            </thead>
            <tbody>
                {props.content.map(c => {
                    return (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.surname}</td>
                            <td>{c.age}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table