import React from 'react'
import { motion } from 'framer-motion';

// Notepad card with editable title and body + delete button
const Cards = ({ note, onChange, onDelete, dragConstraintsRef }) => {
  const handleTitleChange = (e) => {
    onChange({ ...note, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    onChange({ ...note, body: e.target.value });
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <div>
      <motion.div
        drag
        dragConstraints={dragConstraintsRef}
        whileDrag={{ scale: 1.05 }}
        className='relative w-64 sm:w-72 rounded-2xl bg-zinc-900 text-white p-3 sm:p-4 overflow-hidden shadow-lg'
      >
        {/* Delete Button */}
        <button
          onClick={handleDelete}
          aria-label='Delete note'
          className='absolute top-1 sm:top-2 right-1 sm:right-2 px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded bg-red-600 hover:bg-red-500 active:scale-95'
        >
          Delete
        </button>

        {/* Title */}
        <input
          type='text'
          value={note.title}
          onChange={handleTitleChange}
          placeholder='Title'
          className='w-full bg-transparent border-b border-zinc-700 outline-none text-base sm:text-lg font-semibold pb-2 pr-12 placeholder:text-zinc-500'
        />

        {/* Body */}
        <textarea
          value={note.body}
          onChange={handleBodyChange}
          placeholder='Write your note...'
          className='mt-3 w-full h-32 sm:h-40 bg-transparent outline-none text-xs sm:text-sm leading-relaxed placeholder:text-zinc-500'
        />
      </motion.div>
    </div>
  )
}

export default Cards