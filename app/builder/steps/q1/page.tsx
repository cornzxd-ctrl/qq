"use client";
import { useState, useEffect } from "react";
import { useQuote } from "@/context/QuoteContext";
import StepWrapper from "@/components/StepWrapper";

export default function Q1() {
  const { data, updateStep } = useQuote();
  const q1 = data.q1 || {};

  const [companyName, setCompanyName] = useState(q1.companyName || "");
  const [website, setWebsite] = useState(q1.website || "");
  const [contactName, setContactName] = useState(q1.contactName || "");
  const [email, setEmail] = useState(q1.email || "");
  const [phone, setPhone] = useState(q1.phone || "");

  const requiredFilled =
    companyName.trim() &&
    contactName.trim() &&
    email.trim() &&
    phone.trim();

  function saveQ1() {
    updateStep("q1", {
      companyName,
      website,
      contactName,
      email,
      phone,
    });
  }

  return (
    <StepWrapper
      title="Business Identity"
      description="Your business information will appear on every quote you send to customers."
      nextEnabled={!!requiredFilled}
      onNext={saveQ1}
    >
      <div className="space-y-4">

        <div>
          <label className="label">Company Name *</label>
          <input
            className="input"
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
            placeholder="Acme Hauling Services"
          />
        </div>

        <div>
          <label className="label">Website (Optional)</label>
          <input
            className="input"
            value={website}
            onChange={e => setWebsite(e.target.value)}
            placeholder="https://yourcompany.com"
          />
        </div>

        <div>
          <label className="label">Primary Contact *</label>
          <input
            className="input"
            value={contactName}
            onChange={e => setContactName(e.target.value)}
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="label">Email *</label>
          <input
            className="input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email@business.com"
          />
        </div>

        <div>
          <label className="label">Phone *</label>
          <input
            className="input"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="555-123-4567"
          />
        </div>

        {!requiredFilled && (
          <p className="text-sm text-red-500">
            Please complete all required fields to continue.
          </p>
        )}

      </div>
    </StepWrapper>
  );
}
