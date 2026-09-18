import { createSocialImage } from "@/lib/social-image";

// Prerender a real PNG without implicit metadata URLs when SITE_URL is absent.
export const dynamic = "force-static";

export function GET() {
  return createSocialImage();
}
