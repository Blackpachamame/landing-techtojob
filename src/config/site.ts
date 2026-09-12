const configuredUrl = process.env.SITE_URL;

// Leave unset locally; configure the real public origin before deployment.
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;

if (siteUrl && !["http:", "https:"].includes(siteUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}
