function ReviewStar({voteParam}) {

    return <div className="vote" >
        {voteParam >= 1 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
        {voteParam >= 2 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
        {voteParam >= 3 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
        {voteParam >= 4 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
        {voteParam >= 5 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
    </div>
}


export default ReviewStar;