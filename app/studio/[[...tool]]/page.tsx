
import React from "react";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

// Properly handling ReactNode return type
export default function StudioPage(): React.ReactElement | null {
  return <>{NextStudio({ config })}</>;
}
