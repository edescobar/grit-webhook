import { TableCell, TableRow, Chip } from "@mui/material";

const ClientCallRow = ({ call }) => {
  const getStatusLabel = (status) => {
    switch (status) {
      case "Completed":
        return (
          <Chip
            label="Completed"
            sx={{
              minWidth: "90px",
              backgroundColor: "#dcfce7",
              color: "#166534",
              border: "1px solid #86efac",
              "&:hover": {
                backgroundColor: "#bbf7d0",
              },
            }}
          />
        );
      case "Pending":
        return (
          <Chip
            label="Pending"
            sx={{
              minWidth: "90px",
              backgroundColor: "#fef9c3",
              color: "#854d0e",
              border: "1px solid #fde047",
              "&:hover": {
                backgroundColor: "#fef08a",
              },
            }}
          />
        );
      case "Failed":
        return (
          <Chip
            label="Failed"
            sx={{
              minWidth: "90px",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              border: "1px solid #fca5a5",
              "&:hover": {
                backgroundColor: "#fecaca",
              },
            }}
          />
        );
      default:
        return (
          <Chip
            label="Unknown"
            sx={{
              minWidth: "90px",
              backgroundColor: "#f8fafc",
              color: "#64748b",
              border: "1px solid #cbd5e1",
              "&:hover": {
                backgroundColor: "#f1f5f9",
              },
            }}
          />
        );
    }
  };

  return (
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: "#f8fafc",
          transition: "background-color 0.2s ease-in-out",
        },
      }}
    >
      <TableCell>{call.id}</TableCell>
      <TableCell>{call.call_id}</TableCell>
      <TableCell>{getStatusLabel(call.call_status)}</TableCell>
      <TableCell>{new Date(call.start_timestamp).toLocaleString()}</TableCell>
      <TableCell>{new Date(call.end_timestamp).toLocaleString()}</TableCell>
      <TableCell>{call.duration_ms}ms</TableCell>
      <TableCell>{call.transcript}</TableCell>
      <TableCell>{call.recording_url}</TableCell>
      <TableCell>{call.customer_name}</TableCell>
      <TableCell>{call.email_address}</TableCell>
      <TableCell>{call.target_pest}</TableCell>
      <TableCell>{new Date(call.scheduled_time).toLocaleString()}</TableCell>
      <TableCell>{call.user_phone_number}</TableCell>
      <TableCell>{call.user_address}</TableCell>
      <TableCell>{call.call_type}</TableCell>
      <TableCell
        sx={{
          maxWidth: "200px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {call.call_summary}
      </TableCell>
      <TableCell>{call.user_sentiment}</TableCell>
      <TableCell>{call.agent_task_completion_rating}</TableCell>
      <TableCell>{call.call_completion_rating}</TableCell>
      <TableCell>${call.combined_cost.toFixed(2)}</TableCell>
      <TableCell>
        {call.totalMinutes ? call.totalMinutes.toFixed(2) : "0.00"} mins
      </TableCell>
    </TableRow>
  );
};

export default ClientCallRow;
