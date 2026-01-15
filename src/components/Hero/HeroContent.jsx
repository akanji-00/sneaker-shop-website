export default function HeroContent() {
  return (
    <>
      <h1 className="content__title">sneaker company</h1>
      <h2 className="content__subtitle">fall limited edition sneakers</h2>
      <p className="content__text">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand eveything the
        weather can offer.
      </p>

      <div className="price-container">
        <div className="discount__price-container">
          <p className="content__discount-price">$125.00</p>
          <span className="price-percentage">50%</span>
        </div>
        <p className="content__original-price">$250.00</p>
      </div>
    </>
  );
}
