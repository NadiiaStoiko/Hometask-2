
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_NOTE, EDIT_NOTE } from '../../actions/actionsTypes';
import { Note } from '../../types';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './AddNoteForm.css';

interface addFormProps {
  isOpen: boolean;
  setValueIsOpen: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean,
  setEdit: Dispatch<SetStateAction<boolean>>,
  setIdForEdit: Dispatch<SetStateAction<string>>,
  id?: string
}


const AddNoteForm: FC<addFormProps> = ({ id, setIdForEdit, isOpen, setValueIsOpen, isEdit, setEdit }: addFormProps) => {
  let state: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isNameFieldValid, setNameFieldValid] = useState(true);
  const [isDateFieldValid, setDateFieldValid] = useState(true);
  const [isContentFieldValid, setContentFieldValid] = useState(true);
  const [formValid, setformValid] = useState(true);
  const rootRef = React.createRef<HTMLSelectElement>();


  useEffect(() => {
    const getEditedNoteDetails = () => {
      if (isEdit) {
        let notes = state.noteReducer;
        let noteForEdit: Note = notes.find((note: Note) => note.id === id);
        setName(noteForEdit.name);
        setDate(noteForEdit.creationDate);
        setContent(noteForEdit.content);
        setCategory(noteForEdit.category)
      }
    }
    getEditedNoteDetails();
  }, [id, isEdit, state.noteReducer])


  let formTitle = "";
  isOpen === true ? formTitle = 'Please, add new note' : formTitle = 'Please, edit note';
  let saveBtnText = "";
  isOpen === true ? saveBtnText = 'Save Note' : saveBtnText = 'Save Changes';
  let errorMessage = "Field is reguared";

  const addFormHandler = (): void => {
    setValueIsOpen(false);
    setEdit(false);
    setNameFieldValid(true);
    setDateFieldValid(true);
    setContentFieldValid(true);
    setformValid(true);
  }

  const handleInputNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  }

  const handleInputDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDate(e.target.value);
  }
  const handleContentTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value);
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCategory(e.target.value);
  }

  const isFormValid = () => {
    // console.log('name,date,content', name, date, content)
    if (name === '') {
      console.log('name', name);
      setNameFieldValid(false);
      console.log('isNameFieldValid',isNameFieldValid)
    }
    if (date === '') {
      console.log('date', date);
      setDateFieldValid(false);
      console.log('isDateFieldValid',isDateFieldValid)
    }
    if (content === '') {
      console.log('content', content);
      setContentFieldValid(false);
      console.log('isContentFieldValid',isContentFieldValid)
    }
  }


  const handleAddNewNote = (e: React.MouseEvent<HTMLButtonElement>): void => {
    isFormValid();
    console.log(isNameFieldValid, isDateFieldValid, isContentFieldValid)
    if (isNameFieldValid === false || isDateFieldValid === false ||isContentFieldValid === false) setformValid(false);
    console.log('formValid', formValid)
    if (isEdit && formValid) {
      dispatch({
        type: EDIT_NOTE,
        payload: {
          id: id,
          name,
          creationDate: date,
          category,
          content,
          dates: '',
          isActive: true
        }
      });
      setEdit(false);
      setName('');
      setDate('');
      setContent('');
      setCategory('')
      setValueIsOpen(false);
    } else if (!isEdit && formValid) {
      dispatch({
        type: ADD_NOTE,
        payload: {
          id: Math.ceil(Math.random() * 100),
          name,
          creationDate: date,
          category,
          content,
          dates: '',
          isActive: true
        }
      });
      setName('');
      setDate('');
      setContent('');
      setCategory('')
      setValueIsOpen(false);
    }
  }

  return (
    <div>
      {(isOpen || isEdit) && (
        <div>
          <h4>{formTitle}</h4>
          <form className="note-form" id="new-note" action="/">
            <label className="form-row">Name
              <input onChange={handleInputNameChange} className="form-part name" type="text" name="name" value={name} />
            </label>
            {isNameFieldValid ? '' : <ErrorMessage content={errorMessage} />}
            <label className="form-row-date">Date of create
              <input onChange={handleInputDateChange} className="form-part creation-date" type="date" value={date} name="creationDate" />
            </label>
            {isDateFieldValid ? '' : <ErrorMessage content={errorMessage} />}

            <label className="form-row">Category
              <select ref={rootRef} onChange={handleSelectChange} className="form-part category" name="category" id="task-type">Choose category
                <option value="Task">Task</option>
                <option value="Idea">Idea</option>
                <option value="Random Thought">Random Thought</option>
              </select>
            </label>
            <label className="form-row" id="content">Content
              <textarea onChange={handleContentTextAreaChange} className="content-aria" name="content" value={content}></textarea>
            </label>
            {isContentFieldValid ? "" : <ErrorMessage content={errorMessage} />}
            <div className="action-btns">
              <button onClick={handleAddNewNote} className='save' type='button'>{saveBtnText}</button>
              <Button onClick={addFormHandler} classN='cancel' content='Cancel' butonType='button' />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddNoteForm;
