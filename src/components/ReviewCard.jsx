function ReviewCard({reviewParam}) {

    return <>
            <div key={reviewParam.id} >
                <h4>{reviewParam.name}</h4>
                <p>{reviewParam.text}</p>
                <p>Vote: {reviewParam.vote}/5</p>
            </div>
    </>
}

export default ReviewCard;