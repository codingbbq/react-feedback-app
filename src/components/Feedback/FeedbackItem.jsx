function FeedbackItem({item}) {
    return (
        <div className='item'>
            <span>{item.rating}</span>
            <p>{item.feedback}</p>
        </div>
    )
}

export default FeedbackItem;