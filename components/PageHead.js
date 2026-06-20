export default function PageHead({ eyebrow, title, children }) {
  return (
    <div className="page-head">
      <span className="hud">{eyebrow}</span>
      <h1>
        <span className="chroma" data-text={title}>
          {title}
        </span>
      </h1>
      {children && <p>{children}</p>}
    </div>
  );
}
