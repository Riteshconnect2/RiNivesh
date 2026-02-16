import React, { useState } from "react";

function Hero() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "Account Opening",
      items: [
        "Resident Individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your RiNivesh Account",
      items: [
        "Your Profile",
        "Account Modification",
        "Client Master Report (CMR) & DP",
        "Nomination",
        "Transfer & Conversion of Securities",
      ],
    },
    {
      title: "RiNivesh Trading",
      items: [
        "Place your first trade",
        "Order types explained",
        "Charts & indicators",
        "Margins & leverage",
      ],
    },
    {
      title: "Funds",
      items: [
        "Add funds",
        "Withdraw funds",
        "Fund settlement",
      ],
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div
        style={{
          background: "linear-gradient(135deg, #0a1230, #0d1b3f)",
          padding: "80px 15px",
          color: "#ffffff",
        }}
      >
        <div className="container text-center">
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Support Portal
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#cfd8ff",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Find answers to all your RiNivesh queries
          </p>
        </div>
      </div>

      <div className="container my-5">
        {data.map((section, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: "6px",
              marginBottom: "14px",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              onClick={() => toggle(index)}
              style={{
                padding: "18px 22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                backgroundColor: "#f4f6fb",
              }}
            >
              <span>{section.title}</span>
              <span style={{ fontSize: "14px" }}>
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>

            {openIndex === index && (
              <ul
                style={{
                  listStyle: "none",
                  padding: "10px 22px 18px",
                  margin: 0,
                }}
              >
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "10px 0",
                      fontSize: "clamp(14px, 1.4vw, 16px)",
                      color: "#1a73e8",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
