"use client";

import { useState } from "react";
import Link from "next/link";
import { Cta } from "@/components/ui/cta";
import { portfolioHref, site } from "@/lib/site";
import styles from "./contact-form.module.css";

type FormState = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  referenceUrl: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const projectTypes = [
  { value: "", label: "Select project type" },
  { value: "corporate-website", label: "Corporate Website" },
  { value: "premium-corporate", label: "Premium Corporate Website" },
  { value: "advanced-ecommerce", label: "Advanced E-commerce" },
  { value: "website-admin", label: "Website + Admin Dashboard" },
  { value: "enterprise-app", label: "Enterprise Web Application" },
  { value: "website-improvement", label: "Website Improvements & Support" },
  { value: "other", label: "Other / Not sure yet" },
];

const budgets = [
  { value: "", label: "Select a scope" },
  { value: "starter", label: "Starter — a focused single site" },
  { value: "standard", label: "Standard — a full multi page site" },
  { value: "premium", label: "Premium — bespoke design & systems" },
  { value: "enterprise", label: "Enterprise — application or platform" },
  { value: "not-sure", label: "Not sure yet" },
];

const timelines = [
  { value: "", label: "Select timeline" },
  { value: "asap", label: "ASAP" },
  { value: "2-4-weeks", label: "2–4 weeks" },
  { value: "4-8-weeks", label: "4–8 weeks" },
  { value: "6-10-weeks", label: "6–10 weeks" },
  { value: "3-4-months", label: "3–4 months" },
  { value: "flexible", label: "Flexible / Not sure" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    referenceUrl: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (data: FormState): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Enter a valid email address";
    if (!data.projectType) newErrors.projectType = "Please select a project type";
    if (!data.budget) newErrors.budget = "Please select a scope";
    if (!data.timeline) newErrors.timeline = "Please select a timeline";
    if (!data.description.trim()) newErrors.description = "Project description is required";
    else if (data.description.trim().length < 50) newErrors.description = "Please provide more detail (at least 50 characters)";
    if (data.referenceUrl && !/^https?:\/\/.+/.test(data.referenceUrl)) newErrors.referenceUrl = "Enter a valid URL starting with http:// or https://";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");
    setSubmitError(null);

    try {
      const subject = encodeURIComponent(`Project inquiry: ${projectTypes.find(t => t.value === formData.projectType)?.label || formData.projectType}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\nApproximate scope: ${formData.budget}\nTimeline: ${formData.timeline}\nReference URL: ${formData.referenceUrl}\n\nDescription:\n${formData.description}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setFormData({ name: "", company: "", email: "", projectType: "", budget: "", timeline: "", description: "", referenceUrl: "" });
    } catch {
      setStatus("error");
      setSubmitError("Something went wrong. Please try again or email directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <h3>Thanks for reaching out</h3>
        <p>I&apos;ll review your brief and reply within one business day with clarifying questions or a proposal outline.</p>
        <Link href={portfolioHref("/")} className="link-ink" style={{ marginTop: "1rem", display: "inline-block" }}>
          Back to homepage →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Name <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.name && <p id="name-error" className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={styles.input}
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={status === "submitting"}
        />
        {errors.email && <p id="email-error" className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="projectType" className={styles.label}>
            Project type <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`field-select ${styles.select} ${errors.projectType ? styles.inputError : ""}`}
            aria-invalid={errors.projectType ? "true" : "false"}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            disabled={status === "submitting"}
          >
            {projectTypes.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {errors.projectType && <p id="projectType-error" className={styles.error}>{errors.projectType}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="budget" className={styles.label}>
            Approximate scope <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`field-select ${styles.select} ${errors.budget ? styles.inputError : ""}`}
            aria-invalid={errors.budget ? "true" : "false"}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            disabled={status === "submitting"}
          >
            {budgets.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {errors.budget && <p id="budget-error" className={styles.error}>{errors.budget}</p>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="timeline" className={styles.label}>
          Desired timeline <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
            className={`field-select ${styles.select} ${errors.timeline ? styles.inputError : ""}`}
          aria-invalid={errors.timeline ? "true" : "false"}
          aria-describedby={errors.timeline ? "timeline-error" : undefined}
          disabled={status === "submitting"}
        >
          {timelines.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {errors.timeline && <p id="timeline-error" className={styles.error}>{errors.timeline}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="referenceUrl" className={styles.label}>
          Reference URL (optional)
        </label>
        <input
          type="url"
          id="referenceUrl"
          name="referenceUrl"
          value={formData.referenceUrl}
          onChange={handleChange}
          className={`${styles.input} ${errors.referenceUrl ? styles.inputError : ""}`}
          aria-invalid={errors.referenceUrl ? "true" : "false"}
          aria-describedby={errors.referenceUrl ? "referenceUrl-error" : undefined}
          placeholder="https://example.com"
          disabled={status === "submitting"}
        />
        {errors.referenceUrl && <p id="referenceUrl-error" className={styles.error}>{errors.referenceUrl}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="description" className={styles.label}>
          Project description <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={6}
          className={`${styles.textarea} ${errors.description ? styles.inputError : ""}`}
          aria-invalid={errors.description ? "true" : "false"}
          aria-describedby={errors.description ? "description-error" : "description-hint"}
          placeholder="Describe what you're building, who it's for, key features, and any constraints or requirements."
          disabled={status === "submitting"}
        />
        {errors.description && <p id="description-error" className={styles.error}>{errors.description}</p>}
        <p id="description-hint" className={styles.hint}>
          Minimum 50 characters. The more detail, the better I can prepare for our first conversation.
        </p>
      </div>

      {submitError && <p className={styles.submitError} role="alert">{submitError}</p>}

      <div className={styles.actions}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary"
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
        <Cta href={`mailto:${site.email}`} variant="secondary">
          Email directly
        </Cta>
      </div>
    </form>
  );
}