import ReviewStar from "./ReviewStar";

function ReviewCard({reviewParam}) {

    return <>
            <div className="review-card" key={reviewParam.id} >
                <h4>{reviewParam.name}</h4>
                <p>{reviewParam.text}</p>
               <ReviewStar voteParam= {reviewParam.vote}></ReviewStar>
            </div>
    </>
}

export default ReviewCard;
