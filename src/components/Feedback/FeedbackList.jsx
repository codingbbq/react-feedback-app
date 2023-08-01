import FeedbackItem from './FeedbackItem';
function FeedbackList({feedback, handleDelete}) {
    return (
        <>
            { 
                feedback.map((item) => {
                    return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
                })
            }
        </>
    )
}

export default FeedbackList;