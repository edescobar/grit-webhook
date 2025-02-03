"use client";
import React, { useState } from "react";
import { useCallsData } from "@/hooks/useCalls";
import { DashboardHeader } from "@/components/dashboardHeader";
import { SearchBar } from "@/components/searchBar";
import { CallsTable } from "@/components/callsTable";
import { Call } from "@/types/index";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { calls, metrics } = useCallsData();

  const calculateTotalTalkTime = (call: Call) => {
    const firstCallDate = new Date(
      Math.min(
        ...calls
          .filter((c) => c.user_phone_number === call.user_phone_number)
          .map((c) => new Date(c.start_timestamp).getTime())
      )
    );

    const currentDate = new Date();
    const daysSinceFirstCall = Math.floor(
      (currentDate.getTime() - firstCallDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const userCalls = calls.filter(
      (c) => c.user_phone_number === call.user_phone_number
    );
    const totalMinutes = userCalls.reduce(
      (acc, c) => acc + c.duration_ms / 1000 / 60,
      0
    );

    return `${Math.round(
      totalMinutes
    )} mins (${daysSinceFirstCall} days active)`;
  };

  const filteredCalls = calls.filter((call) =>
    Object.values(call).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-6 space-y-6">
      <DashboardHeader metrics={metrics} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CallsTable
        calls={filteredCalls}
        calculateTotalTalkTime={calculateTotalTalkTime}
      />
    </div>
  );
};

export default Dashboard;
