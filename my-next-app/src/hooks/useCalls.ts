import { useState, useEffect } from "react";
import supabase from "@/utils/supabaseClient";
import { Call } from "../types/index";

export const useCallsData = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [metrics, setMetrics] = useState({
    totalCalls: 0,
    successRate: 0,
    averageDuration: 0,
    totalCost: 0,
  });

  useEffect(() => {
    const fetchCalls = async () => {
      const { data, error } = await supabase
        .from("calls")
        .select("*")
        .order("start_timestamp", { ascending: false });

      if (error) {
        console.error("Error fetching calls:", error);
      } else {
        const callsData = data as Call[];
        setCalls(callsData);
        calculateMetrics(callsData);
      }
    };

    fetchCalls();
  }, []);

  const calculateMetrics = (callsData: Call[]) => {
    const totalCalls = callsData.length;
    const successfulCalls = callsData.filter(
      (call) => call.call_successful
    ).length;
    const totalDuration = callsData.reduce(
      (acc, call) => acc + call.duration_ms,
      0
    );
    const totalCost = callsData.reduce(
      (acc, call) => acc + (call.combined_cost || 0),
      0
    );

    setMetrics({
      totalCalls,
      successRate: (successfulCalls / totalCalls) * 100,
      averageDuration: totalDuration / totalCalls / 1000 / 60,
      totalCost,
    });
  };

  return { calls, metrics };
};
