import React, { useState } from "react";
import "./App.css";

const pgList = [
  {
    name: "Sunrise PG",
    price: "₹6000/mo",
    room: "Non-AC, 2 Sharing",
    dest: "Sunrise+PG,+Avadi,+Chennai",
  },
  {
    name: "Green Stay",
    price: "₹5500/mo",
    room: "AC, 3 Sharing",
    dest: "Green+Stay+PG,+Avadi,+Chennai",
  },
  {
    name: "Happy Nest",
    price: "₹6500/mo",
    room: "Co-Living, AC",
    dest: "Happy+Nest+PG,+Avadi,+Chennai",
  },
];

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    message: "",
  });

  const handleApplyChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
  };

  return (
    <div className="container py-4" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 className="text-center mb-4 text-primary">PG Finder</h1>

      {/* Filter Section */}
      <section className="card mb-4 p-3">
        <h5>🔍 Filter PGs</h5>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Price Range</label>
            <select className="form-select">
              <option>Choose...</option>
              <option>₹5000 - ₹6000</option>
              <option>₹6000 - ₹7000</option>
              <option>₹7000 - ₹8000</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Room Type</label>
            <div className="d-flex flex-wrap gap-2">
              {["AC", "Non-AC", "2 Sharing", "3 Sharing", "Co-Living"].map((type, i) => (
                <div className="form-check" key={i}>
                  <input className="form-check-input" type="checkbox" id={`room${i}`} />
                  <label className="form-check-label" htmlFor={`room${i}`}>{type}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100">Apply Filters</button>
          </div>
        </form>
      </section>

      {/* PG Listings */}
      <section>
        <h2 className="mb-3">Nearby PGs</h2>
        {pgList.map((pg, i) => (
          <div className="card mb-4 shadow-sm" key={i}>
            <div className="card-body">
              <h5>{pg.name} - {pg.price}</h5>
              <p>Room: {pg.room}</p>
              <iframe
                title={`${pg.name}-map`}
                src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=Vel+Tech+University,+Chennai&destination=${pg.dest}&zoom=14`}
                width="100%"
                height="250"
                style={{ borderRadius: "10px", border: 0 }}
                loading="lazy"
                allowFullScreen
              />
              <button className="btn btn-custom mt-3 w-100" onClick={() => alert(`Viewing details of ${pg.name}`)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Apply Form */}
      <section className="mt-5">
        <h2 className="text-center">Apply for Sunrise PG</h2>
        <form onSubmit={handleApplySubmit} className="card p-4 mt-3 shadow-sm">
          {["name", "email", "phone", "college"].map((field) => (
            <label key={field} className="form-label mt-2">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                required
                className="form-control mt-1"
                value={formData[field]}
                onChange={handleApplyChange}
              />
            </label>
          ))}
          <label className="form-label mt-2">
            Message:
            <textarea
              name="message"
              className="form-control mt-1"
              rows="4"
              value={formData.message}
              onChange={handleApplyChange}
              placeholder="Additional info..."
            />
          </label>
          <button type="submit" className="btn btn-success mt-3 w-100">Submit Application</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center mt-4">
        <small className="text-muted">© 2025 PG Finder</small>
      </footer>
    </div>
  );
};


<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

export default App;
