import { useEffect, useState } from "react";
import supabase from "../utils/supabaseClient";

function useCallDurations() {
  const [callDurations, setCallDurations] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDailyCallDurationByUser() {
      const { data, error } = await supabase
        .from("calls")
        .select("user_phone_number, start_timestamp, duration_ms")
        .order("start_timestamp", { ascending: true });

      if (error) {
        setError(error);
        setLoading(false);
        return;
      }

      const userDailyTotals = data.reduce((acc, call) => {
        const day = call.start_timestamp.split("T")[0];
        const user = call.user_phone_number;
        const durationInMinutes = call.duration_ms / 60000;

        acc[user] = acc[user] || {};
        acc[user][day] = acc[user][day] || 0;
        acc[user][day] += durationInMinutes;

        return acc;
      }, {});

      setCallDurations(userDailyTotals);
      setLoading(false);
    }

    getDailyCallDurationByUser();
  }, []);

  return { callDurations, loading, error };
}

export default useCallDurations;
