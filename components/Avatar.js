'use client';

import { avatarUrl } from '@/lib/members';

export default function Avatar({ member, size = 98, faculty = false }) {
  const initials = member.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  const fallback =
    'data:image/svg+xml,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#131737"/><text x="50" y="62" font-family="monospace" font-size="34" fill="#4DE8FF" text-anchor="middle">${initials}</text></svg>`
    );

  return (
    <div
      className={`photo-ring${faculty ? ' faculty-ring' : ''}`}
      style={{ width: size, height: size }}
    >
      {/* Plain <img> keeps the offline initials fallback simple; swap for next/image if you host real photos */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatarUrl(member)}
        alt={`Photo of ${member.name}`}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = fallback;
        }}
      />
    </div>
  );
}
