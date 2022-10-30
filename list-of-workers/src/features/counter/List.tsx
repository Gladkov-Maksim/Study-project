import React, { useState, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    add,
    ListSlice
} from './listSlice';
import './List.scss';
import {createInterface} from "readline";

export function List() {

  const list = useAppSelector(ListSlice);
  const dispatch = useAppDispatch();
  const nameInput = useRef<HTMLInputElement>(null)
  const surnameInput = useRef<HTMLInputElement>(null)
  const yearInput = useRef<HTMLInputElement>(null)
  const postInput = useRef<HTMLInputElement>(null)
  const handleAdd = () => {
      interface payload {
          name: string,
          surname: string,
          year: string,
          post: string,
      }
      const payload: payload= {
          name: '',
          surname: '',
          year: '',
          post: '',
      }
    if (nameInput?.current?.value && surnameInput?.current?.value && yearInput?.current?.value && postInput?.current?.value) {
        dispatch(add({name: nameInput.current.value, surname: surnameInput.current.value, year: yearInput.current.value, post: postInput.current.value}))
        console.log(list)
    }
  }

  return (
    <div className="wrapper">
      <div>Список сотрудников</div>
      <div>
          <input
            placeholder="Имя"
            ref={nameInput}
          />
          <input
              placeholder="Фамилия"
              ref={surnameInput}
          />
          <input
              placeholder="год рождения"
              ref={yearInput}
          />
          <input
              placeholder="должность"
              ref={postInput}
          />
          <div
              className="button"
              onClick={handleAdd}
          >
              <span>Добавить</span>
              <div className="arrow">
                  <div className="insert"></div>
              </div>
          </div>
          {/*<div id="container">*/}
          {/*    <div className="arrow-left"></div>*/}
          {/*</div>*/}
      </div>
    </div>
  );
}
