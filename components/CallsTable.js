"use client";

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

const CallsTable = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    const fetchCalls = async () => {
      const { data, error } = await supabase.from("calls").select("*");
      if (error) {
        console.error("Error fetching calls:", error);
      } else {
        setCalls(data);
      }
    };

    fetchCalls();
  }, [supabase]);

  return (
    <Box
      sx={{
        height: "calc(100vh - 48px)", // Full viewport height minus margins
        margin: "24px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f9ff", // Light pastel blue background
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
        Calls Table
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          height: "100%",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          backgroundColor: "white",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#a5b4fc",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#8b5cf6",
            },
          },
        }}
      >
        <Table stickyHeader aria-label="calls table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Call ID
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Start Time
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Duration
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Customer Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Cost
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Summary
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                User Sentiment
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Call Successful
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Agent Task Completion
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                Call Completion
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {calls.map((call) => (
              <ClientCallRow key={call.id} call={call} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CallsTable;
