import {listSelector} from '../../redux/models/list'
import {useSelector} from "react-redux";

const Table = () => {

  const list = useSelector(listSelector)

  return <table>
    <thead>
      <tr>
        <th>id</th>
        <th>login</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
    {list.map(item => <tr key={item.id}><td>{item.id}</td><td>{item.login}</td><td>{item.status}</td></tr>)}
    </tbody>
  </table>
}

export default Table