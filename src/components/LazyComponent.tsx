export default function LazyComponent() {
  return (
    <h2>
      Lazy Component
      <span className="date">({new Date().toString()})</span>
    </h2>
  );
}
