import React, { FC, useState } from 'react';
import './App.css';
import AddNoteForm from './components/AddNoteForm/AddNoteForm';
import Button from './components/Button/Button';
import NoteList from './components/NoteList/NoteList';
import SummaryList from './components/SummaryList/SummaryList';



const App: FC = () => {
  const [isOpen, setValueIsOpenForm] = useState(false);
  const [isShowArchive, setIsShowArchive] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [id, setIdForEdit] = useState('');
  const addFormHandler = () => {
    setValueIsOpenForm(true)
  }

  const archiveListHandler = () => {
    setIsShowArchive(!isShowArchive);
  }

  return (
    <div className="container">
      <NoteList setIdForEdit={setIdForEdit} isEdit={false} setEdit={setEdit} isActiveList={true} title='Active notes' />
      {!isEdit &&
        <Button onClick={addFormHandler} classN='create-btn' content='Add Note' butonType='button' />
      }
      <AddNoteForm id={id} setIdForEdit={setIdForEdit} isOpen={isOpen} setValueIsOpen={setValueIsOpenForm} isEdit={isEdit} setEdit={setEdit} />
      <Button onClick={archiveListHandler} classN='show-archive-btn' content={isShowArchive ? 'Hide Archive' : 'Show Archive'} butonType='button' />
      <NoteList setIdForEdit={setIdForEdit} isEdit={isEdit} setEdit={setEdit} isShow={isShowArchive} isActiveList={false} title='Archived notes' />
      <SummaryList />
    </div>
  );
}

export default App;
