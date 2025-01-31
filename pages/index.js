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

// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Chip,
// } from "@mui/material";
// import supabase from "../utils/supabaseClient";

// const CallsTable = () => {
//   const [calls, setCalls] = useState([]);

//   useEffect(() => {
//     const fetchCalls = async () => {
//       const { data, error } = await supabase.from("calls").select("*");
//       if (error) {
//         console.error("Error fetching calls:", error);
//       } else {
//         setCalls(data);
//       }
//     };

//     fetchCalls();
//   }, []);

//   const getStatusLabel = (status) => {
//     switch (status) {
//       case "Completed":
//         return <Chip label="Completed" color="success" />;
//       case "Pending":
//         return <Chip label="Pending" color="warning" />;
//       case "Failed":
//         return <Chip label="Failed" color="error" />;
//       default:
//         return <Chip label="Unknown" color="default" />;
//     }
//   };

//   return (
//     <TableContainer component={Paper} elevation={2}>
//       <Table aria-label="calls table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Call ID</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Start Time</TableCell>
//             <TableCell>Duration</TableCell>
//             <TableCell>Customer Name</TableCell>
//             <TableCell>Cost</TableCell>
//             <TableCell>Summary</TableCell>
//             <TableCell>User Sentiment</TableCell>
//             <TableCell>Call Successful</TableCell>
//             <TableCell>Agent Task Completion</TableCell>
//             <TableCell>Call Completion</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {calls.map((call) => (
//             <TableRow key={call.id}>
//               <TableCell>{call.call_id}</TableCell>
//               <TableCell>{getStatusLabel(call.call_status)}</TableCell>
//               <TableCell>
//                 {new Date(call.start_timestamp).toLocaleString()}
//               </TableCell>
//               <TableCell>{call.duration}</TableCell>
//               <TableCell>{call.customer_name}</TableCell>
//               <TableCell>{`$${call.combined_cost}`}</TableCell>
//               <TableCell>{call.call_summary}</TableCell>
//               <TableCell>{call.user_sentiment}</TableCell>
//               <TableCell>{call.call_successful ? "Yes" : "No"}</TableCell>
//               <TableCell>{call.agent_task_completion_rating}</TableCell>
//               <TableCell>{call.call_completion_rating}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CallsTable;
