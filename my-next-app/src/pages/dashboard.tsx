// pages/dashboard.tsx
import React, { useEffect, useState } from "react";
import supabase from "../utils/supabaseClient"; // Asegúrate de que la ruta de importación sea correcta
import { Call } from "../types/index";

const Dashboard: React.FC = () => {
  const [calls, setCalls] = useState<Call[]>([]);

  useEffect(() => {
    const fetchCalls = async () => {
      const { data, error } = await supabase
        .from("calls")
        .select("*")
        .order("start_timestamp", { ascending: false });

      if (error) {
        console.error("Error fetching calls:", error);
      } else {
        setCalls(data as Call[]);
      }
    };

    fetchCalls();
  }, []);

  return (
    <div>
      <h1>Calls Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Call ID</th>
            <th>Customer Name</th>
            <th>Start Time</th>
            <th>Duration</th>
            <th>Status</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((call) => (
            <tr key={call.call_id}>
              <td>{call.call_id}</td>
              <td>{call.customer_name}</td>
              <td>{new Date(call.start_timestamp).toLocaleString()}</td>
              <td>{call.duration}</td>
              <td>{call.call_status}</td>
              <td>${call.combined_cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
