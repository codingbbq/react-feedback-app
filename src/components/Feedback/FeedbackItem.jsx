import Card from '../Shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

function FeedbackItem({ item }) {
    const { deleteFeedbackFn, editFeedbackFn } = useContext(FeedbackContext);
    return (
        <Card>
            <div className='item'>
                <span>{item.rating}</span>
                <p>{item.feedback}</p>
                <ul>
                    <li><button onClick={() => deleteFeedbackFn(item.id)}>X</button></li>
                    <li><button onClick={() => editFeedbackFn(item)}>Edit</button></li>
                </ul>
            </div>
        </Card>
    )
}

export default FeedbackItem;