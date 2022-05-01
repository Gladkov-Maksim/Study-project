import './table.module.css'

function Table(props) {
  const {headers, content} = props

  return [
    <table>
      <thead>
      <tr>
        {headers.map((h, key) => <td key={key + h}>{h}</td>)}
      </tr>
      </thead>
      <tbody>
      {content.map((c, key) => {
        return (
          <tr key={c.id + key}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.surname}</td>
            <td>{c.age}</td>
          </tr>
        )
      })}
      </tbody>
    </table>,
    <div></div>
  ]
}

export default Table