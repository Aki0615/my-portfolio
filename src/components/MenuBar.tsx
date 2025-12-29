import React from 'react';

const sections = [
  { id: 'hero', label: 'ホーム' },
  { id: 'about', label: '自己紹介' },
  { id: 'skills', label: 'スキル' },
  { id: 'history', label: '履歴' },
  { id: 'interests', label: '好きなこと' },
];

export function MenuBar() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm">
      <ul className="flex justify-center gap-6 py-3">
        {sections.map(section => (
          <li key={section.id}>
            <button
              className="text-blue-700 hover:text-blue-900 font-semibold px-2 py-1 rounded transition"
              onClick={() => handleClick(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
