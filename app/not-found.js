import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page">
      <div className="wrap">
        <div className="page-head">
          <span className="hud">404</span>
          <h1>
            <span className="chroma" data-text="Page not found">
              Page not found
            </span>
          </h1>
          <p>That route doesn&apos;t exist — it may have been moved, or the link was mistyped.</p>
        </div>
        <Link className="btn btn-primary" href="/">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
