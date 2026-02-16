import React, { useState } from "react";

function CreateTicket() {
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket created successfully!");
  };

  return (
    <section style={{ backgroundColor: "#f5f6f8", minHeight: "100vh" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 col-12">
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "32px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              }}
            >
              <div className="text-center mb-4">
                <h2 style={{ fontWeight: "700" }}>Create Support Ticket</h2>
                <p className="text-muted">
                  Tell us about your issue and we’ll help you quickly
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">Choose category</option>
                    <option>Account Opening</option>
                    <option>Funds</option>
                    <option>Trading</option>
                    <option>Technical Issue</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Short summary of your issue"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    placeholder="Explain your issue in detail"
                    required
                  />
                </div>

                <button className="btn btn-outline-primary"
                  type="submit"
                  style={{
                    marginLeft:"16rem"
                  }}
                >
                  Create Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
