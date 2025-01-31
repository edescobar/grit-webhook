import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Skeleton,
} from "@mui/material";

const CallsTableSkeleton = () => {
  return (
    <TableContainer component={Paper} elevation={2}>
      <Typography variant="h6" style={{ padding: "16px" }}>
        <Skeleton width={150} />
      </Typography>
      <Table aria-label="calls table skeleton">
        <TableHead>
          <TableRow>
            {[...Array(11)].map((_, index) => (
              <TableCell key={index}>
                <Skeleton />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(5)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {[...Array(11)].map((_, cellIndex) => (
                <TableCell key={cellIndex}>
                  <Skeleton />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CallsTableSkeleton;
