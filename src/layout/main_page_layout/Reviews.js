import Ratings from "../../components/Ratings"

const Reviews = () => {
  return (
    <div className='reviews'>
      <h1>Customers Reviews</h1>
      <img style={{"padding":"1em"}} src={process.env.PUBLIC_URL + '/images/leaf.png'} alt="" />
      <div className='review-card'>
         <Ratings />
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo.</p>
          <div className='client-bio-section'>
            <img src={process.env.PUBLIC_URL + '/images/client1.png'} alt="" />
            <p className="client-name">Mila Kunis</p>
          </div>
      </div>
      <div className='review-card'>
         <Ratings />
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo.</p>
          <div className="client-bio-section">
            <img src={process.env.PUBLIC_URL + '/images/client2.png'} alt="" />
            <p className="client-name">Mike Sendler</p>
          </div>
      </div>
      <div className='review-card'>
         <Ratings />
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
          dapibus leo.</p>
          <div className="client-bio-section">
            <img src={process.env.PUBLIC_URL + '/images/client1.png'} alt="" />
            <p className="client-name">Anna Hatons</p>
          </div>
      </div>
    </div>
  )
}

export default Reviews
