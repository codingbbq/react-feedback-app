import Header from './components/Header';
import FeedbackList from './components/Feedback/FeedbackList';
import FeedbackStats from './components/Feedback/FeedbackStats';
import FeedbackForm from './components/Feedback/FeedbackForm';
import AboutPage from './components/About/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
function App() {

  return (
    <>
      <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>
            
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </div>
      </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;
