
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, ARCHIVED_NOTE } from './actions/actionsTypes';


// store

export interface storeType {
  active: stateNote,
  archive: stateNote
}

export interface Note {
  id: string,
  name: string,
  creationDate: string,
  category: string,
  content: string,
  dates?: string,
  isActive: boolean
}

// actions

export interface addNoteAction {
  type: typeof ADD_NOTE,
  payload: Note

}

export interface deleteNoteAction {
  type: typeof DELETE_NOTE,
  payload: {
    id: string
  }
}

export interface editNoteAction {
  type: typeof EDIT_NOTE,
  payload: {
    id: string
  }
}

export interface archiveNoteAction {
  type: typeof ARCHIVED_NOTE,
  payload: {
    id: string
  }
}

export type NoteActionTypes = addNoteAction | deleteNoteAction | archiveNoteAction
  | editNoteAction;

export type stateNote = Note[];
