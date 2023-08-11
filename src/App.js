import Header from './components/Header';
import FeedbackList from './components/Feedback/FeedbackList';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackStats from './components/Feedback/FeedbackStats';
import FeedbackForm from './components/Feedback/FeedbackForm';
import AboutPage from './components/About/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm handleFeedback={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }>
            </Route>
            
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
