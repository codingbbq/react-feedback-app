import Card from '../Shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

function FeedbackItem({ item }) {
    const {deleteFeedback} = useContext(FeedbackContext);
    return (
        <Card>
            <div className='item'>
                <span>{item.rating}</span>
                <p>{item.feedback}</p>
                <button onClick={() => deleteFeedback(item.id)}>X</button>
            </div>
        </Card>
    )
}

export default FeedbackItem;