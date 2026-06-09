"use client";

import { Building2, Send, UserRound } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  budgetOptions,
  contactMethods,
  projectTypeOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/content";

const inputClass =
  "w-full rounded-lg border border-steel-200 bg-white px-4 py-3.5 text-sm text-navy-900 shadow-sm transition placeholder:text-steel-300 focus:border-clamps-blue focus:outline-none focus:ring-4 focus:ring-clamps-blue/15 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-100";

const labelClass = "text-sm font-semibold text-navy-900";

function FormSection({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-steel-100 pb-8 last:border-b-0 last:pb-0">
      <div className="mb-6 flex gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-clamps-blue/10 text-clamps-muted">
          {icon}
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-navy-900">
            {title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-steel-500">
            {description}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
}

type QuoteFormProps = {
  initialSubmitted?: boolean;
};

export function QuoteForm({ initialSubmitted = false }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(initialSubmitted);

  return (
    <form
      id="engineering-consultation-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="technical-rule rounded-lg border border-steel-100 bg-white p-5 shadow-industrial sm:p-7"
    >
      {submitted ? (
        <div
          role="status"
          className="mb-7 rounded-lg border border-clamps-line bg-clamps-blue/10 px-4 py-3 text-sm font-semibold text-navy-900"
        >
          Thank you. Your project inquiry has been received and will be reviewed
          by our engineering team.
        </div>
      ) : null}

      <div className="grid gap-8">
        <FormSection
          title="Project Information"
          description="Share the project scope, location, discipline, budget range, and delivery timeline."
          icon={<Building2 aria-hidden className="h-5 w-5" />}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className={labelClass}>Project Name</span>
              <input
                className={inputClass}
                name="projectName"
                type="text"
                placeholder="Water scheme rehabilitation"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Organization Name</span>
              <input
                className={inputClass}
                name="organization"
                type="text"
                autoComplete="organization"
                placeholder="Company, agency, or estate"
                required
              />
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span className={labelClass}>Project Location</span>
              <input
                className={inputClass}
                name="location"
                type="text"
                autoComplete="address-level2"
                placeholder="City, state, facility, or site address"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Service Required</span>
              <select className={inputClass} name="service" required defaultValue="">
                <option value="" disabled>
                  Select engineering service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Project Type</span>
              <select
                className={inputClass}
                name="projectType"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Estimated Budget</span>
              <select className={inputClass} name="budget" required defaultValue="">
                <option value="" disabled>
                  Select estimated budget
                </option>
                {budgetOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Expected Timeline</span>
              <select
                className={inputClass}
                name="expectedTimeline"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select expected timeline
                </option>
                {timelineOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </FormSection>

        <FormSection
          title="Professional Contact"
          description="Provide the person our engineering team should contact for review and clarification."
          icon={<UserRound aria-hidden className="h-5 w-5" />}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className={labelClass}>Contact Person</span>
              <input
                className={inputClass}
                name="contactPerson"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Position/Role</span>
              <input
                className={inputClass}
                name="position"
                type="text"
                placeholder="Project manager, facilities lead, director"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Email Address</span>
              <input
                className={inputClass}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@organization.com"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Phone Number</span>
              <input
                className={inputClass}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+234"
                required
              />
            </label>
          </div>
        </FormSection>

        <FormSection
          title="Project Details"
          description="Describe the requirement, objective, constraints, current condition, or engineering challenge."
          icon={<Send aria-hidden className="h-5 w-5" />}
        >
          <label className="grid gap-2">
            <span className={labelClass}>
              Describe your project requirements, objectives, or engineering
              challenges.
            </span>
            <textarea
              className={`${inputClass} min-h-44 resize-y leading-7`}
              name="description"
              placeholder="Describe your project requirements, objectives, or engineering challenges."
              required
            />
          </label>

          <fieldset className="mt-6">
            <legend className={labelClass}>Preferred Contact Method</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {contactMethods.map((method) => (
                <label
                  key={method}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-steel-200 px-4 py-3 text-sm font-semibold text-steel-700 transition hover:border-clamps-blue hover:bg-clamps-blue/5"
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    className="h-4 w-4 border-steel-300 text-clamps-muted focus:ring-clamps-blue"
                    required
                  />
                  {method}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-4 text-sm font-semibold text-white shadow-industrial-sm transition hover:bg-navy-800 sm:w-auto"
          >
            Request Engineering Consultation
            <Send aria-hidden className="h-4 w-4" />
          </button>

          <p id="privacy-note" className="mt-4 text-xs leading-6 text-steel-500">
            Your project details are treated confidentially and used only to
            prepare an appropriate engineering response.
          </p>
        </FormSection>
      </div>
    </form>
  );
}
