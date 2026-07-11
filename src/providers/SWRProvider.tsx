"use client";

import { swrConfig } from "@/config/swr";
import { SWRConfig } from "swr";

export default function SWRProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
