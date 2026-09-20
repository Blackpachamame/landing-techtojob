import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

const image = readFileSync(path.join(process.cwd(), "public/social/techtojob-og.png"));
const imageDataUrl = `data:image/png;base64,${image.toString("base64")}`;

export function createSocialImage() {
  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a native image element.
    <img
      src={imageDataUrl}
      alt=""
      width={1200}
      height={630}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />,
    { width: 1200, height: 630 },
  );
}
