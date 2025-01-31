import dynamic from "next/dynamic";
import CallsTableSkeleton from "../components/Skeleton";

const CallsTable = dynamic(() => import("../components/CallsTable"), {
  loading: () => <CallsTableSkeleton />,
  ssr: false,
});

export default function CallsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        backgroundImage: "radial-gradient(#a5b4fc 0.5px, transparent 0.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      <CallsTable />
    </div>
  );
}
