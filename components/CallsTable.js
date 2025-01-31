import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import supabase from "../utils/supabaseClient";
import ClientCallRow from "./ClientCallRow";
import _ from "lodash"; // Importando Lodash

const CallsTable = () => {
  const [calls, setCalls] = useState([]);
  const [columnNames, setColumnNames] = useState([]);

  useEffect(() => {
    const fetchCalls = async () => {
      const { data, error } = await supabase.from("calls").select("*");
      if (error) {
        console.error("Error fetching calls:", error);
      } else {
        const totalDurations = calculateTotalDurations(data);
        setCalls(
          data.map((call) => ({
            ...call,
            totalMinutes: totalDurations[call.user_phone_number], // Añade minutos totales a cada llamada
          }))
        );
        if (data.length > 0) {
          setColumnNames(
            Object.keys(data[0])
              .map((header) => _.startCase(header))
              .concat("Total Minutes")
          );
        }
      }
    };

    fetchCalls();
  }, []);

  const calculateTotalDurations = (calls) => {
    return calls.reduce((acc, call) => {
      const user = call.user_phone_number;
      const minutes = call.duration_ms / 60000; // Convertir milisegundos a minutos
      acc[user] = acc[user] || 0;
      acc[user] += minutes;
      return acc;
    }, {});
  };

  console.log("Calls:", calls);
  return (
    <Box
      sx={{
        height: "calc(100vh - 48px)",
        margin: "24px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f9ff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          padding: "8px 16px 24px 16px",
          fontWeight: 600,
          color: "#2c3e50",
          fontSize: "1.5rem",
          textAlign: "center",
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "3px",
            backgroundColor: "#a5b4fc",
            borderRadius: "4px",
          },
        }}
      >
        Retell Dashboard
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          maxHeight: "80vh",
          overflow: "auto",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          backgroundColor: "white",
        }}
      >
        <Table
          stickyHeader
          aria-label="calls table"
          sx={{ minWidth: 750, width: "auto" }}
        >
          <TableHead>
            <TableRow>
              {columnNames.map((name) => (
                <TableCell
                  key={name}
                  sx={{
                    minWidth: 120,
                    width: "auto",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontWeight: 600,
                    backgroundColor: "#f8fafc",
                    color: "#475569",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {calls.map((call, index) => (
              <ClientCallRow key={index} call={call} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CallsTable;
