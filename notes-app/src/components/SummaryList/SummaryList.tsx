import React from 'react';
import { useSelector } from 'react-redux';
import { Note } from '../../types';
import './SummaryList.css';

const SummaryList = () => {

  let state: any = useSelector((state) => state);
  let notes = state.noteReducer;

  let activeInTasks = notes.filter((note: Note) => note.category === 'Task' && note.isActive === true).length;
  let archivedInTasks = notes.filter((note: Note) => note.category === 'Task' && note.isActive === false).length;
  let activeInIdeas = notes.filter((note: Note) => note.category === 'Idea' && note.isActive === true).length;
  let archivedInIdeas = notes.filter((note: Note) => note.category === 'Idea' && note.isActive === false).length;
  let activeInThought = notes.filter((note: Note) => note.category === 'Random Thought' && note.isActive === true).length;
  let archivedInThought = notes.filter((note: Note) => note.category === 'Random Thought' && note.isActive === false).length;

  const noteCategory = {
    task: 'Task',
    idea: 'Idea',
    thought: 'Random Thought'
  }
  return (
    <div className="summary-table-wrapper">
      <div className="summary-table-title">Summary List</div>
      <div className="summary-table-header">
        <div className="summary-col">Note Category</div>
        <div className="summary-col">Active</div>
        <div className="summary-col">Archived</div>
      </div>
      <div className="summary-table-body">
        <div className="sum-row">
          <div className="colom">{noteCategory.task}</div>
          <div className="coloms">{activeInTasks}</div>
          <div className="coloms">{archivedInTasks}</div>
        </div>
        <div className='sum-row'>
          <div className="colom">{noteCategory.idea}</div>
          <div className="coloms">{activeInIdeas}</div>
          <div className="coloms">{archivedInIdeas}</div>
        </div>
        <div className='sum-row'>
          <div className="colom">{noteCategory.thought}</div>
          <div className="coloms">{activeInThought}</div>
          <div className="coloms">{archivedInThought}</div>
        </div>
      </div>
    </div>
  );
}

export default SummaryList;
