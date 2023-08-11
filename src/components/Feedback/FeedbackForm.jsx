import { v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import Card from '../Shared/Card';
import Button from '../Shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

function FeedbackForm({ handleFeedback }) {
    const { addFeedback } = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);

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
                id: uuidv4(),
                feedback: text,
                rating
            };
            addFeedback(newFeedback);
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