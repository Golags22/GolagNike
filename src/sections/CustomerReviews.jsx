import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-4xl text-center font-bold">
          What Our
          <span className="text-coral-red"> Customer </span>
          Say ?
        </h3>
        <p className="text-center info-text m-auto mt-4 max-w-lg ">Our customers love the perfect blend of comfort, style, and quality in every pair. From everyday wear to special occasions, they rave about the exceptional fit, premium feel, and lasting durability. Don’t just take our word for it hear how our shoes are making every step count.</p>

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {
            reviews.map((review)=>(
              <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
              
              />
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default CustomerReviews