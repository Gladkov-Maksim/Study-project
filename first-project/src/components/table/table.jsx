import './table.module.css'

function Table(props) {
  const {headers, content} = props

  return [
    <table>
      <thead>
        <tr>
          {headers.map((h, index) => <td key={index + h}>{h}</td>)}
        </tr>
      </thead>
      <tbody>
      {content.map((c, index) => {
        return (
          <tr key={c.id + index + 'строка'}>
            <td key={c.id}>{c.id}</td>
            <td key={c.name}>{c.name}</td>
            <td key={c.surname}>{c.surname}</td>
            <td key={c.age}>{c.age}</td>
          </tr>
        )
      })}
      </tbody>
    </table>,
    <div></div>
  ]
}

export default Table