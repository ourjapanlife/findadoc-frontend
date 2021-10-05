export const cityRules = [
  (value) => !!value || "City is required",
  (value) =>
    (value && value.length >= 2) || "City name must be at least 2 characters",
];

export const wardRules = [
  (value) => !!value || "Ward is required",
  (value) =>
    (value && value.length >= 2) || "Ward name must be at least 2 characters",
];

export const nameRules = [
  (value) => !!value || "Clinic name is required",
  (value) =>
    (value && value.length >= 2) || "Clinic name must be at least 2 characters",
];

export const websiteRules = [
  (value) => !!value || "Website URL is required",
  (value) => (value && value.length >= 5) || "Please enter a valid URL",
];
