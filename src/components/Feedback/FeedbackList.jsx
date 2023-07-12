import FeedbackItem from './FeedbackItem';
function FeedbackList({feedback}) {
    return (
        <>
            { feedback.map((item) => {
                return <FeedbackItem key={item.id} item={item} />
            }) }
        </>
    )
}

export default FeedbackList;