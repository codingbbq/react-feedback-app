function FeedbackItem({item, handleDelete}) {
    return (
        <div className='item'>
            <span>{item.rating}</span>
            <p>{item.feedback}</p>
            <button onClick={() => handleDelete(item.id)}>X</button>
        </div>
    )
}

export default FeedbackItem;