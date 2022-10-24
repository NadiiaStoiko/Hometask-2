import { Reducer } from 'redux';
import { ADD_NOTE, DELETE_NOTE, ARCHIVED_NOTE, EDIT_NOTE } from '../actions/actionsTypes';
import { stateNote } from '../types'

export const initialState: stateNote = [
  {
    id: 'bbl8ldksy',
    name: 'Shopping List',
    creationDate: '2022-09-12',
    category: 'Task',
    content: 'Cheese, tea, fruits',
    dates: '',
    isActive: true
  },
  {
    id: 'bal83dksi',
    name: 'New Feature',
    creationDate: '2022-09-01',
    category: 'Idea',
    content: 'Create new feature',
    dates: '',
    isActive: false
  },
  {
    id: 'wbl87dksq',
    name: 'This day',
    creationDate: '2022-09-05',
    category: 'Random Thought',
    content: 'Beauty of this day',
    dates: '',
    isActive: true
  },
  {
    id: 'bdl5ldksd',
    name: 'Books list',
    creationDate: '2022-09-07',
    category: 'Task',
    content: 'Andrew Matthews - Goodreads,Jen Sincero - You Are a Badass',
    dates: '',
    isActive: true
  },
  {
    id: 'ebl84dksr',
    name: 'Dantist visit',
    creationDate: '2022-09-03',
    category: 'Task',
    content: 'change Dantist visit from 04.09.2022 to 06.09.2022',
    dates: '04.09.2022, 06.09.2022',
    isActive: false
  },
  {
    id: 'bbl87dksi',
    name: 'Сelebration organization',
    creationDate: '2022-09-09',
    category: 'Idea',
    content: 'Nice place for Сelebration',
    dates: '',
    isActive: true
  },
  {
    id: 'cbl2ldksk',
    name: 'What if',
    creationDate: '2022-09-11',
    category: 'Random Thought',
    content: 'What if...',
    dates: '',
    isActive: true
  }
]


export const noteReducer: Reducer<typeof initialState> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          creationDate: action.payload.creationDate,
          category: action.payload.category,
          content: action.payload.content,
          dates: action.payload.dates,
          isActive: action.payload.isActive
        }
      ]
    case EDIT_NOTE:
      return [
        ...state.filter(note => note.id !== action.payload.id),
        {
          id: action.payload.id,
          name: action.payload.name,
          creationDate: action.payload.creationDate,
          category: action.payload.category,
          content: action.payload.content,
          dates: action.payload.dates,
          isActive: action.payload.isActive
        }
      ]
    case DELETE_NOTE:
      return [...state].filter(note => note.id !== action.payload.id)
    case ARCHIVED_NOTE:
      return [...state].map(note => {
        if (note.id === action.payload.id) {
          note.isActive = !note.isActive
        }
        return note
      })
    default: return state;
  }
}
