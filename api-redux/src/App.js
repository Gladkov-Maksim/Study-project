import React, {useCallback, useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import { getUser, deleteUser } from './redux/slise'

function App() {

    const data = useSelector(store => store.response)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getUser())
    }, [])

    const deleteHandler = useCallback((userID) => {
        dispatch(deleteUser(userID))
    }, [])
  return (
    <div className='wrapper'>
      <div>{
          // data && !data.pending ? data.map(item => {
          //     return (
          //         <div key={item.id}>
          //             <div>{item.id}</div>
          //             <div>{item.name}</div>
          //             <div>{item.phone}</div>
          //         </div>)
          //
          // }) : 'грузится'
          (() => {
              if (data.getPending) {
                  return (
                      <div className='loader'>
                          <div></div>
                      </div>
                  )
              }
              else if (data.error) {
                  return (
                      <div className='error'>Произошла ошибка!</div>
                  )
              }
              else if (data.data) {
                  return (
                      // <table>
                      //     <tbody>
                      //     {
                              data.data.map((item, i) => {
                                  return (
                                      <div key={item.id} className='listItem'>
                                          <div className='id'>{item.id}</div>
                                          <div className='name'>{item.name}</div>
                                          <div className='email'>{item.email}</div>
                                          <div className='button'>
                                              <span>✎</span>
                                          </div>
                                          <div className='button' onClick={() => deleteHandler(item.id)}>
                                              <span>X</span>
                                          </div>
                                      </div>)
                              })
                  )
              }
                       {/*    </tbody>*/}
                       {/*</table>*/}
          })()
      }</div>
    </div>
  );
}

export default App;
