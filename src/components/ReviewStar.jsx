function ReviewStar({voteParam}) {

    return <div className="vote" >
        {voteParam >= 1 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
        {voteParam >= 2 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
        {voteParam >= 3 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
        {voteParam >= 4 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
        {voteParam >= 5 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
    </div>
}


export default ReviewStar;