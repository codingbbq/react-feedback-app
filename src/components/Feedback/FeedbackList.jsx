import FeedbackItem from './FeedbackItem';
function FeedbackList({feedback}) {
    return (
        <>
            { 
                feedback.map((item) => {
                    return <FeedbackItem key={item.id} item={item} handleDelete={(id) => console.log(id)}/>
                })
            }
        </>
    )
}

export default FeedbackList;