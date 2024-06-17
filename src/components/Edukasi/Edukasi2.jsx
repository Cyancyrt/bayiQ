import CardArtEdu from "./CardArtikelEdu";

function Edukasi2({ data, isfilter, filterData }) {
  const filteredData = isfilter ? filterData : data;
  return (
    <>
      <div className="flex justify-center w-full h-fit  place-self-center">
        <div className="max-w-[1440px] w-fit lg:w-full px-6 md:px-20 py-12 justify-between grid gap-6">
          <div className="self-stretch justify-start items-start gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((data, index) => (
              <CardArtEdu key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Edukasi2;
