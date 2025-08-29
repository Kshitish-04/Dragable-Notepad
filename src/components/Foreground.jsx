import React, { useEffect, useRef, useState } from 'react';
import Cards from './Cards'

const STORAGE_KEY = 'notes:v1';

const Foreground = () => {
  const ref = useRef(null);
  const [notes, setNotes] = useState(() => {
    // Load from localStorage, fallback to one default note
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return [
      { id: crypto.randomUUID?.() || String(Date.now()), title: 'Untitled', body: '' },
    ];
  });

  // Persist to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (_) {}
  }, [notes]);

  // Update a single note by id
  const handleChangeNote = (updated) => {
    setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
  };

  // Add a new note
  const handleAddNote = () => {
    const newNote = {
      id: crypto.randomUUID?.() || String(Date.now()),
      title: 'Untitled',
      body: '',
    };
    setNotes((prev) => [...prev, newNote]);
  };

  // Delete a note by id
  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div>
      {/* Add Note Button */}
      <div className='fixed top-4 left-4 z-[4]'>
        <button
          onClick={handleAddNote}
          className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 active:scale-95 transition'
        >
          Add Note
        </button>
      </div>

      {/* Notes Area */}
      <div ref={ref} className='flex p-5 gap-6 flex-wrap h-full w-full fixed top-0 left-0 z-[3]'>
        {notes.map((note) => (
          <Cards
            key={note.id}
            note={note}
            onChange={handleChangeNote}
            onDelete={handleDeleteNote}
            dragConstraintsRef={ref}
          />
        ))}
      </div>
    </div>
  )
}

export default Foreground