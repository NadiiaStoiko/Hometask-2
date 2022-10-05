import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, ARCHIVED_NOTE } from './actionsTypes';
import { NoteActionTypes, Note, addNoteAction } from '../types';

export const addNote = ( note: Note): addNoteAction => ({
  type: ADD_NOTE,
  payload: {
    ...note,
  }
})

export const deleteNote = (id: string): NoteActionTypes => ({
  type: DELETE_NOTE,
  payload: {
    id
  }
})

export const editNote = (id: string, note: Note): NoteActionTypes => ({
  type: EDIT_NOTE,
  payload: {
    ...note,
    id
  }

})

export const archivedNote = (id: string): NoteActionTypes => ({
  type: ARCHIVED_NOTE,
  payload: {
    id
  }
})
