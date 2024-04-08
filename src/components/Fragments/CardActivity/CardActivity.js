import styles from "./CardActivity.module.css";
import Link from "next/link";

export default function CardActivity({ activity }) {
  return (
    <div className=" col-md-6 col-lg-4  p-3 ">
      <Link href={`/activity/${activity.id}`}>
        <div className="card">
          <img
            src={activity.imageUrls}
            className={` ${styles.img} card-img-top`}
            alt="..."
          />
          <p className="position-absolute top-0 end-0 bg-white m-1 px-2 py-1 rounded-pill ">
            <i className="bi bi-star-fill text-warning"></i> {activity.rating}
          </p>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h6 className={` ${styles.title} card-title`}>
                {activity.title}
              </h6>
              <p className={` ${styles.text_location}`}>
                <i className="bi bi-geo-alt-fill text-success"></i>
                {` ${activity.city}, ${activity.province}`}
              </p>
            </div>
            <div>
              <p>
                {activity.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
