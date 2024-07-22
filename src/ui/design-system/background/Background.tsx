export const Background = () => {
  const elements = Array(15).fill(null);

  return (
    <div className="background dark:bg-gray">
      {elements.map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
};
