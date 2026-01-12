// Server Component - forces dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

import DownloadClient from "./DownloadClient";

export default function DownloadPage() {
  return <DownloadClient />;
}
