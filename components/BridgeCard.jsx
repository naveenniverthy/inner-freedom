export default function BridgeCard({ onBegin }) {
  return (
    <section className="surface px-6 py-8 sm:px-8 sm:py-10">
      <p className="eyebrow">Find Your Next Step</p>
      <h1 className="section-title mt-3 max-w-[10ch]">A gentle place to begin</h1>
      <p className="body-copy mt-5">
        This is a short reflection, not a test. It helps you see where you are and
        what may support you next.
      </p>
      <button type="button" onClick={onBegin} className="btn-primary mt-8">
        Begin
      </button>
    </section>
  );
}
