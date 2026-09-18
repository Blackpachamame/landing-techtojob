const configuredUrl = process.env.SITE_URL?.trim();

// Leave unset locally; configure the real public origin before deployment.
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;

if (siteUrl && !["http:", "https:"].includes(siteUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}

if (
  siteUrl &&
  (siteUrl.username || siteUrl.password || siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash)
) {
  throw new Error("SITE_URL must be a public origin without credentials, a path, query or fragment.");
}

export const siteName = "TechToJob";
