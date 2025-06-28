function StarRating({ rating }) {
  const stars = Math.round(rating);
  return (
    <div className="flex text-yellow-500 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < stars ? "★" : "☆"}</span>
      ))}
    </div>
  );
}
export default StarRating;
