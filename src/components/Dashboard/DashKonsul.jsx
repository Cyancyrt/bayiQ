import CardSesidb from "./CardSesidb";

function DashKonsultasi({ booking, err }) {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold text-stone-700">
          Konsultasi Mendatang
        </h1>
        <div>
          <CardSesidb data={booking} err={err} />
        </div>
      </div>
    </>
  );
}

export default DashKonsultasi;
