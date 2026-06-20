// Single source of truth for all club members.
// To add or edit a member, change this object — the Members grid and every
// individual profile page read from here automatically.
//
// `id` is the URL slug (e.g. /members/aarav-rao).
// Replace the `seed`-based avatar with a real photo by editing avatarUrl() below.

export const MEMBERS = {
  'faculty-advisor': {
    name: 'Dr. Faculty Advisor',
    faculty: true,
    role: 'Faculty Coordinator',
    age: '—',
    branch: 'Dept. of Computer Science & IT',
    year: 'Faculty',
    seed: 'FacultyAdvisor',
    bio: 'Guides club strategy, lab access, and academic tie-ins. Research interests in HCI and computer graphics.',
    quote: 'Students learn engines fast. What a club teaches is how to finish.',
    skills: ['HCI', 'Computer Graphics', 'Research Mentorship'],
    projects: [
      { g: '🫀', t: 'AnatomyVR', d: 'Academic advisor — liaison with the Biosciences department.' },
      { g: '🏛️', t: 'XR Lab Setup', d: 'Secured funding and lab hours for the club hardware lab.' },
    ],
  },
  'aarav-rao': {
    name: 'Aarav Rao',
    role: 'President',
    age: 21,
    branch: 'Computer Science',
    year: 'Final year',
    seed: 'AaravRao',
    bio: "Unity generalist who joined as a fresher in the club's first batch. Led the Campus AR Navigator from prototype to campus-wide pilot, and now runs club strategy, partnerships, and the mentorship program.",
    quote: 'Ship the ugly version first. Polish is a reward, not a starting point.',
    skills: ['Unity', 'C#', 'ARCore', 'Project Leadership'],
    projects: [
      { g: '🧭', t: 'Campus AR Navigator', d: 'Project lead — markerless AR wayfinding for SIT Lavale.' },
      { g: '🛰️', t: 'Orbital Decay', d: 'Gameplay programming during RealityJam 2025.' },
      { g: '🏎️', t: 'Velocity LAN', d: 'Producer — scoping, milestones, and playtest nights.' },
    ],
  },
  'ishita-sharma': {
    name: 'Ishita Sharma',
    role: 'Vice President',
    age: 20,
    branch: 'AI & ML',
    year: 'Third year',
    seed: 'IshitaSharma',
    bio: "Technical artist working in Unreal Engine 5. Runs the weekly shader study group and owns the club's rendering pipeline knowledge base. Bridges the art and programming teams on every major project.",
    quote: 'A good shader is just math wearing makeup.',
    skills: ['Unreal 5', 'HLSL', 'Shader Graph', 'Niagara VFX'],
    projects: [
      { g: '🏎️', t: 'Velocity LAN', d: 'Technical art lead — materials, VFX, and track lighting.' },
      { g: '🧪', t: 'Shader Bootcamp', d: 'Designed and taught the two-day workshop curriculum.' },
    ],
  },
  'vihaan-kulkarni': {
    name: 'Vihaan Kulkarni',
    role: 'Tech Lead — VR',
    age: 21,
    branch: 'Computer Science',
    year: 'Third year',
    seed: 'VihaanKulkarni',
    bio: "Quest developer obsessed with hand-tracking UX and comfort design. Maintains the club's shared VR interaction toolkit so every team starts with solid locomotion and grabbing out of the box.",
    quote: "If the player notices the locomotion, you've already lost them.",
    skills: ['Unity XR', 'Quest SDK', 'Hand Tracking', 'Spatial Audio'],
    projects: [
      { g: '🫀', t: 'AnatomyVR', d: 'Lead developer — interaction system and dissection mechanics.' },
      { g: '🧪', t: 'GestureForge', d: 'Co-author of the gesture-to-event mapping toolkit.' },
    ],
  },
  'naina-mehta': {
    name: 'Naina Mehta',
    role: 'Tech Lead — AR',
    age: 20,
    branch: 'E&TC',
    year: 'Third year',
    seed: 'NainaMehta',
    bio: "WebXR and ARCore specialist who believes the best AR needs no app install. Built the AR campus treasure-hunt that onboarded 200+ freshers, and keeps the club's web demos running.",
    quote: 'The browser is the most underrated game console ever made.',
    skills: ['WebXR', 'three.js', 'ARCore', '8th Wall'],
    projects: [
      { g: '🃏', t: 'HoloDeck Cards', d: 'Project lead — WebAR card battler, browser-only.' },
      { g: '🧭', t: 'Campus AR Navigator', d: 'Geospatial anchoring and localisation.' },
      { g: '🗺️', t: 'AR Treasure Hunt', d: "Creator — freshers' orientation AR game." },
    ],
  },
  'reyansh-desai': {
    name: 'Reyansh Desai',
    role: 'Game Dev Lead',
    age: 19,
    branch: 'Computer Science',
    year: 'Second year',
    seed: 'ReyanshDesai',
    bio: "Gameplay programmer and jam veteran — 9 jams entered, 9 games shipped. Runs the game development track's weekly build sessions and the post-jam polish pipeline that gets jam games onto itch.io.",
    quote: 'Scope small, then cut that in half. Now you have a game.',
    skills: ['Godot', 'GDScript', 'Game Feel', 'Level Design'],
    projects: [
      { g: '🛰️', t: 'Orbital Decay', d: 'Lead programmer — RealityJam 2025 winner, published on itch.io.' },
      { g: '🏎️', t: 'Velocity LAN', d: 'Drift physics and item system.' },
    ],
  },
  'sara-patil': {
    name: 'Sara Patil',
    role: 'Design & Art Lead',
    age: 19,
    branch: 'Computer Science',
    year: 'Second year',
    seed: 'SaraPatil',
    bio: "3D artist and UI designer who owns the club's visual identity — from this website's look to every jam poster. Teaches the Blender pipeline and keeps the shared asset library organised.",
    quote: 'Players forgive simple art. They never forgive unclear art.',
    skills: ['Blender', 'Substance', 'UI/UX', 'Pixel Art'],
    projects: [
      { g: '🛰️', t: 'Orbital Decay', d: "All environment art and the station's pixel tileset." },
      { g: '🫀', t: 'AnatomyVR', d: '3D anatomical model optimisation and texturing.' },
      { g: '🎨', t: 'Club Identity', d: "Designed the XRGD brand, posters, and this website's look." },
    ],
  },
  'kabir-joshi': {
    name: 'Kabir Joshi',
    role: 'Events Head',
    age: 20,
    branch: 'Mechanical',
    year: 'Third year',
    seed: 'KabirJoshi',
    bio: 'The logistics engine behind RealityJam — venues, sponsors, food, judges, and the 3 AM coffee run. Handles inter-college outreach and got the club its first external sponsorships.',
    quote: 'A jam runs on three things: pizza, power strips, and panic.',
    skills: ['Event Ops', 'Sponsorships', 'Outreach', 'Budgeting'],
    projects: [
      { g: '🏆', t: 'RealityJam 2025', d: 'Event director — 24 teams, 96 participants, zero outages.' },
      { g: '🎤', t: 'Industry Talk Series', d: 'Sourced and hosted guest speakers from VR studios.' },
    ],
  },
  'tara-nair': {
    name: 'Tara Nair',
    role: 'PR & Media Head',
    age: 19,
    branch: 'AI & ML',
    year: 'Second year',
    seed: 'TaraNair',
    bio: "Runs the club's devlogs, socials, and event coverage, and maintains the YouTube channel where member projects get their trailers. If you saw the club somewhere, that was her doing.",
    quote: 'A project without a devlog is a tree falling in an empty forest.',
    skills: ['Video Editing', 'Devlogs', 'Social Media', 'Photography'],
    projects: [
      { g: '🎬', t: 'Club YouTube', d: 'Produces trailers and devlogs for every shipped project.' },
      { g: '🏆', t: 'RealityJam 2025', d: 'Full event coverage — recap film hit 40k views.' },
    ],
  },
};

// Helpers --------------------------------------------------------------

export function getMember(id) {
  return MEMBERS[id] || null;
}

export function memberList() {
  return Object.entries(MEMBERS).map(([id, m]) => ({ id, ...m }));
}

// Swap this for a real photo URL (e.g. `/photos/${m.seed}.jpg`) when you have them.
export function avatarUrl(m) {
  return (
    'https://api.dicebear.com/9.x/notionists/svg?seed=' +
    encodeURIComponent(m.seed) +
    '&backgroundColor=131737'
  );
}
