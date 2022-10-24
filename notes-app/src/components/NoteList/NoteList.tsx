import React, { Dispatch, FC, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ARCHIVED_NOTE, DELETE_NOTE } from '../../actions/actionsTypes';
import { Note } from '../../types';
import './NoteList.css';

interface noteListProps {
  isShow?: boolean,
  isActiveList: boolean,
  title: string,
  isEdit: boolean,
  setEdit:Dispatch<SetStateAction<boolean>>,
  setIdForEdit: Dispatch<SetStateAction<string>>
}

const NoteList: FC<noteListProps> = ({setIdForEdit, isShow, isActiveList, title, isEdit, setEdit }) => {
  const dispatch = useDispatch();
  const handleDeleteNote = (id:string) => {
    dispatch({
      type: DELETE_NOTE,
      payload: {
        id
      }
    });

  }

  const handleArchivedNote = (id:string) => {
    dispatch({
      type: ARCHIVED_NOTE,
      payload: {
        id
      }
    });
  }
  const handleEditNote = (id:string) => {
  setEdit(true);
  setIdForEdit(id);
  }

  let notes: any = useSelector((state) => state);
  if (isActiveList === true) (isShow = true);
  let ar = notes.noteReducer;
  isActiveList ?
    ar = ar.filter((item: Note) => item.isActive === true) :
    ar = ar.filter((item: Note) => item.isActive === false);
  let isListEmpty = true;
  if (ar.length > 0) (isListEmpty = false);

  return (
    <div>
      {isShow &&
        (<div className="container">
          <div className='table-title'>{title}</div>
          <div className="notes-list-header">
            <div className="header-col">№</div>
            <div className="header-col">Name</div>
            <div className="header-col">Created</div>
            <div className="header-col">Category</div>
            <div className="header-col">Content</div>
            <div className="header-col">Dates</div>
            <div className="header-icons">
              <img className="dir" src="./icons/edit.svg" alt="directory" />
              <img className="bin" src="./icons/white-bin.svg" alt="bin" />
            </div>
          </div>
          {isListEmpty &&
            <div className='banner'>List is empty</div>
          }
          <ul className='notes-list'>
            {ar.map((note: Note) =>
              <li className='list-row' key={note.id}>
                <div className='col id'>{note.id}</div>
                <div className='col name'>{note.name}</div>
                <div className='col creation-date'>{note.creationDate}</div>
                <div className='col category'>{note.category}</div>
                <div className='col content'>{note.content}</div>
                <div className='col dates'>{note.dates}</div>
                <div className='action-icons'>
                  <img onClick={()=>handleEditNote(note.id)} className="editNote" src="./icons/edit.svg" alt="edit" />
                  <img onClick={()=>handleArchivedNote(note.id)}className="dir" src="./icons/archived.svg" alt="directory" />
                  <img onClick={()=>handleDeleteNote(note.id)} className="bin" src="./icons/white-bin.svg" alt="bin" />
                </div>

              </li>)}
          </ul>
        </div>
        )}
    </div>
  );
}

export default NoteList;
