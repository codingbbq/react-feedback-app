import Card from '../Shared/Card';
function FeedbackItem({item, handleDelete}) {
    return (
        <Card>
            <div className='item'>
                <span>{item.rating}</span>
                <p>{item.feedback}</p>
                <button onClick={() => handleDelete(item.id)}>X</button>
            </div>
        </Card>
    )
}

export default FeedbackItem;