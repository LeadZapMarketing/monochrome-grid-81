// The contact form's checks, in plain code: the same rules and messages the forms
// had with the zod library, without adding that library to every page's main code.

export type ContactForm = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  propertyLocation: string;
  serviceCategory: string;
  submittedAt?: string;
};

type Field = keyof ContactForm;
type Issue = { path: [Field]; message: string };
type Result =
  | { success: true; data: ContactForm; error?: undefined }
  | { success: false; data?: undefined; error: { issues: Issue[] } };

// zod 3's email pattern, so the same addresses pass as before.
const EMAIL = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;

const RULES: { field: Exclude<Field, "submittedAt">; required?: string; email?: boolean; max?: number }[] = [
  { field: "name", required: "Name is required", max: 100 },
  { field: "phone", required: "Contact number is required", max: 20 },
  { field: "email", email: true, max: 255 },
  { field: "projectType", required: "Please select a project type" },
  { field: "propertyLocation", required: "Please select a location" },
  { field: "serviceCategory", required: "Please select a category" },
];

export const contactSchema = {
  safeParse(input: Partial<Record<Field, unknown>>): Result {
    const issues: Issue[] = [];
    const data = {} as ContactForm;
    for (const { field, required, email, max } of RULES) {
      const raw = input[field];
      if (typeof raw !== "string") {
        issues.push({ path: [field], message: "Required" });
        continue;
      }
      const value = raw.trim();
      if (required && value.length < 1) issues.push({ path: [field], message: required });
      if (max && value.length > max)
        issues.push({ path: [field], message: `String must contain at most ${max} character(s)` });
      if (email && !EMAIL.test(value)) issues.push({ path: [field], message: "Invalid email address" });
      data[field] = value;
    }
    if (input.submittedAt !== undefined) {
      if (typeof input.submittedAt === "string") data.submittedAt = input.submittedAt;
      else issues.push({ path: ["submittedAt"], message: "Expected string" });
    }
    return issues.length ? { success: false, error: { issues } } : { success: true, data };
  },
};
