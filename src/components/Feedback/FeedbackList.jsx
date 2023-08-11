import FeedbackItem from './FeedbackItem';
function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <div className='no-data'>No feedback data available</div>;
  }

  return (
    <>
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </>
  );
}

export default FeedbackList;
