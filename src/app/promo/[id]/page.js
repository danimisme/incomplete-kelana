export default function DetailPromoPage({ params }) {
  return (
    <div className="mt-5 container-lg">
      <div className="py-5">
        <h1>Detail Promo Page</h1>
        <p>Promo id : {params.id}</p>
      </div>
    </div>
  );
}
