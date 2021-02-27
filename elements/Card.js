export const Card = ({ data }) => {
  return (
    <div className="card">
      <p className="card-content">{data.content}</p>
      <time className="card-date">{data.dateOfReceiving}</time>
    </div>
  );
};
