import basilLeaf from '../../public/images/basilLeaf.png'
import {AiFillStar} from 'react-icons/ai'

const Reviews = () => {
  return (
    <div className='reviews'>
      <h1>Customers Reviews</h1>
      <img src={basilLeaf} alt="" />
      <div className='review'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo.</p>
          <div className='review-bio-section'>
            <img src="" alt="" />
            <p>Mila Kunis</p>
          </div>
      </div>
      <div className='review'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo.</p>
          <div className="review-bio-section">
            <img src="" alt="" />
            <p>Mike Sendler</p>
          </div>
      </div>
      <div className='review'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo.</p>
          <div className="review-bio-section">
            <img src="" alt="" />
            <p>David Rish</p>
          </div>
      </div>
    </div>
  )
}

export default Reviews
