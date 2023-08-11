import { createContext, useState } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            feedback: 'This is feedback',
            rating: 10
        }
    ]);

    const [editFeedback, setEditFeedback] = useState({
        item: {},
        edit: false
    });

    const deleteFeedbackFn = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    const addFeedbackFn = (newFeedback) => {
        setFeedback([newFeedback, ...feedback]);
    }

    const editFeedbackFn = (item) => {
        setEditFeedback({
            item,
            edit: true
        });
    }

    const updateFeedbackFn = (id, updatedItem) => {
       setFeedback(feedback.map((item) => {
        return item.id === id ? {...item, ...updatedItem} : item;
       }));
       setEditFeedback({
        item: {},
        edit: false
       });
    }

    return <FeedbackContext.Provider value={{
        feedback,
        editFeedback,
        deleteFeedbackFn,
        addFeedbackFn,
        editFeedbackFn,
        updateFeedbackFn
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;