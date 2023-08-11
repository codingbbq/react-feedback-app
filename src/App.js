import Header from './components/Header';
import FeedbackList from './components/Feedback/FeedbackList';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackStats from './components/Feedback/FeedbackStats';
import FeedbackForm from './components/Feedback/FeedbackForm';
function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
