const Card = () => {

  return (
    <div className="Card">
        <div className="image_container">
            <img src="src\assets\image-equilibrium.jpg" alt="Image" className="img" />
            <div className="toggleView">
              <img src="src/assets/icon-view.svg" alt="view" />
            </div>
        </div>
        <div className="description">
          <p className="title">Equilibrium #3429</p>
          <p className="details">Our Equilibrium collection promotes balance and calm</p>
          <div className="pricing">
            <p className="price">
              <img src="src\assets\icon-ethereum.svg" alt="etherum" />
              0.041 ETH</p>
            <p className="time">
              <img src="src\assets\icon-clock.svg" alt="time" />
              3 days left</p>
          </div>
        </div>
        <hr className="horizontal-break"/>
        <div className="author_details">
          <div className="profile">
          <img src="src\assets\image-avatar.png" alt="avatar" />
          </div>
          <p>Creation of <span className="author">Jules Wyvern</span></p>
        </div>
    </div>
  )
}

export default Card;