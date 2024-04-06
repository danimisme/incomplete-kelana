import styles from "./CardPromo.module.css";

export default function CardPromo({ promo }) {
  return (
    <div className="col-md-3 col-sm-6 p-3">
      <div className={`${styles.card} card`}>
        <img
          src={promo.imageUrl}
          className={`${styles.card_image} card-img-top`}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{promo.title}</h5>
          <p className="card-text">{promo.description}</p>
          <a href="#" className="btn btn-outline-success">
            View Detail<i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
