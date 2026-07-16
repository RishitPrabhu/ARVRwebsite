export default function MembersPage(){
    return (
<section className="page" id="page-members">
  <div className="wrap">
    <div className="page-head">
      <span className="hud">Members</span>
      <h1><span className="chroma" data-text="The crew">The crew</span></h1>
      <p>Core team for the 2025–26 academic year. Click any member to view their full profile. Names and photos are placeholders — swap in your real team.</p>
    </div>

    <div className="member-section">
      <span className="hud [--c:var(--amber)]">Faculty In-Charge</span>
      <div className="grid-4" id="facultyGrid"></div>
    </div>

    <div className="member-section">
      <span className="hud">Core Committee</span>
      <div className="grid-4" id="coreGrid"></div>
    </div>

    <div className="member-section pb-[60px]">
      <span className="hud">Join Us</span>
      <div className="card mt-[24px] flex items-center justify-between gap-5 flex-wrap" >
        <div>
          <h3>Want your name on this page?</h3>
          <p>Recruitment opens at the start of every semester — and jam participation counts as a tryout.</p>
        </div>
        <a className="btn btn-primary" href="#join" data-nav="join">Apply Now →</a>
      </div>
    </div>
  </div>
</section>

    );
}