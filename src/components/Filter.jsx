import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { carsFilter } from "../redux/slices/carsSlice";

const Filter = () => {
  const [formData, setFormData] = useState({
    driverType: "any",
    pickUpDate: "",
    pickUpTime: "",
    capacity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(carsFilter(formData));
  };

  return (
    <>
      {/* Filter Car section */}
      <div className="container-fluid fc-container" id="cari-mobil">
        <div className="container ">
          <div className="card">
            <div className="card-body">
              <form name="fc-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3">
                    <p className=" pt-1">Tipe Driver</p>
                    <select
                      id="driver"
                      name="driverType"
                      value={formData.driverType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value={true}>Pilih Driver</option>
                      <option value="dengan supir">Dengan Supir</option>
                      <option value="lepas kunci">Lepas kunci</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <p className=" pt-1">Tanggal</p>
                    <input
                      type="date"
                      name="pickUpDate"
                      value={formData.pickUpDate}
                      onChange={handleChange}
                      id="date"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-2">
                    <p className=" pt-1">Waktu Jemput/Ambil</p>
                    <input
                      type="time"
                      name="pickUpTime"
                      value={formData.pickUpTime}
                      onChange={handleChange}
                      id="time"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-2">
                    <p className=" pt-1">Jumlah Penumpang</p>
                    <input
                      type="number"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      id="qty"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2 ">
                    <p className=" pt-1"> </p>
                    <button
                      className="btn btn-success my-auto "
                      name="fc-btn"
                      id="fc-btn"
                    >
                      Cari Mobil
                    </button>
                    <button
                      className="btn btn-outline-primary my-auto edit-btn"
                      name="fc-btn"
                      id="fc-btn-edit"
                      style={{ border: "1px solid blue", width: 100 }}
                      hidden
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
