import CardSesiHst from "./CardSesiHst";
function DashHistory({ idUser }) {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold text-stone-700">History</h1>
        <div>
          <CardSesiHst idUser={idUser} />
        </div>
      </div>
    </>
  );
}

export default DashHistory;
