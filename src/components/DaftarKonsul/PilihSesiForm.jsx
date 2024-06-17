/* eslint-disable react/prop-types */
import { useState } from "react";
import { Label, Select, Datepicker, Button } from "flowbite-react";
import { kategoriKonsul } from "../../middleware/funct";

function PilihSesiForm({ handleFilter }) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDay() + 1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedValue, setSelectedValue] = useState();
  const [selectedRange, setRange] = useState({ A: 0, B: 2000000 });
  const kategori = kategoriKonsul;

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const dateChange = (date) => {
    setSelectedDate(date);
  };
  const handleRangeChange = (event, range) => {
    const value = event.target.value;
    setRange((prevState) => ({
      ...prevState,
      [range]: value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    handleFilter(selectedValue, selectedDate, selectedRange); // Assuming handleFilter is defined somewhere
  };
  const handleReset = (e) => {
    handleFilter("", "", "");
  };
  return (
    <div className="w-screen">
      <form
        className=" mx-auto w-fit px-4 py-2 gap-6 grid md:flex  active:border-primary-500"
        onSubmit={handelSubmit}
      >
        <div className="min-w-72">
          <div className="mb-1  block">
            <Label
              htmlFor="jeniskonsulny"
              className="text-stone-600"
              value="Jenis Konsultasi"
            />
          </div>

          <Select
            id="jeniskonsulny"
            onChange={handleChange}
            value={selectedValue}
          >
            <option value={""}>pilih Konsultasi</option>
            {Object.keys(kategori).map((key) => (
              <option key={key} value={kategori[key]}>
                {kategori[key]}
              </option>
            ))}
          </Select>
        </div>
        <div className="min-w-72">
          <div className="mb-1 block">
            <Label
              htmlFor="tglkonsul"
              className="text-stone-600"
              value="Tanggal Konsultasi"
            />
          </div>
          <Datepicker
            id="tglkonsul"
            minDate={tomorrow}
            onSelectedDateChanged={dateChange}
            required
          />
        </div>
        {/* filter harga */}
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Pilih Rentang Harga" />
          </div>
          <div className="flex gap-2 ">
            <Select
              id="min"
              required
              name="min"
              value={selectedRange.A}
              onChange={(e) => handleRangeChange(e, "A")}
            >
              <option value={0}>pilih harga</option>
              <option value={50000}>Rp. 50.000</option>
              <option value={100000}>Rp. 100.000</option>
              <option value={150000}>Rp. 150.000</option>
              <option value={200000}>Rp. 200.000</option>
            </Select>
            <p className="self-center">sd.</p>
            <Select
              id="max"
              required
              name="max"
              value={selectedRange.B}
              onChange={(e) => handleRangeChange(e, "B")}
            >
              <option value={200000}>pilih harga</option>
              <option value={100000}>Rp. 99.000</option>
              <option value={150000}>Rp. 149.000</option>
              <option value={250000}>Rp. 299.000</option>
              <option>seterusnya</option>
            </Select>
          </div>
        </div>
        <Button
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 h-fit self-end px-6 text-stone-50"
        >
          Filter
        </Button>
        <Button
          type="reset"
          onClick={handleReset}
          className="bg-primary-600 hover:bg-primary-700 h-fit self-end px-6 text-stone-50"
        >
          reset
        </Button>
      </form>
    </div>
  );
}

export default PilihSesiForm;
