import { v4 as uuidv4 } from 'uuid';
import { useState, useContext, useEffect } from 'react';
import Card from '../Shared/Card';
import Button from '../Shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../../context/FeedbackContext';

function FeedbackForm() {
    const { addFeedbackFn, editFeedback, updateFeedbackFn } = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);

    useEffect(() => {
        if(editFeedback.edit === true) {
            setBtnDisabled(false);
            setText(editFeedback.item.feedback);
            setRating(editFeedback.item.rating);
        }
    }, [editFeedback])

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text should be more than 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 0) {
            const newFeedback = {
                feedback: text,
                rating
            };
            if(editFeedback.edit === true) {
                updateFeedbackFn(editFeedback.item.id, newFeedback);
            } else {
                newFeedback.id = uuidv4();
                addFeedbackFn(newFeedback);
            }
            
            setText('');
        }
    }
    return (
        <Card>
            <div className="form">
            <h3>Share your feedback with us</h3>
            <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" placeholder='Enter your feedback' onChange={handleTextChange} value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
                </div>
            </form>
            { message && <div className='message'>{message}</div>}
            </div>
        </Card>
    )
}

export default FeedbackForm;