'use client';

export default function RegisterButton({ children, className = 'btn btn-ghost' }) {
  return (
    <button
      className={className}
      onClick={() =>
        alert('Registration form goes here — link your Google Form or campus portal.')
      }
    >
      {children}
    </button>
  );
}
