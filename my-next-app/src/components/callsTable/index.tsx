import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Call } from "@/types/index";

interface CallsTableProps {
  calls: Call[];
  calculateTotalTalkTime: (call: Call) => string;
}

export const CallsTable: React.FC<CallsTableProps> = ({
  calls,
  calculateTotalTalkTime,
}) => {
  return (
    <Card className="bg-white">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="min-w-[80px]">Call ID</TableHead>
                <TableHead className="min-w-[90px]">Status</TableHead>
                <TableHead className="min-w-[120px]">Start Time</TableHead>
                <TableHead className="min-w-[120px]">End Time</TableHead>
                <TableHead className="min-w-[90px]">Duration</TableHead>
                <TableHead className="min-w-[120px]">Customer Name</TableHead>
                <TableHead className="min-w-[180px]">Email Address</TableHead>
                <TableHead className="min-w-[100px]">Target Pest</TableHead>
                <TableHead className="min-w-[120px]">Scheduled Time</TableHead>
                <TableHead className="min-w-[120px]">Phone Number</TableHead>
                <TableHead className="min-w-[150px]">Address</TableHead>
                <TableHead className="min-w-[80px]">Type</TableHead>
                <TableHead className="min-w-[200px]">Summary</TableHead>
                <TableHead className="min-w-[100px]">Sentiment</TableHead>
                <TableHead className="min-w-[100px]">Agent Task</TableHead>
                <TableHead className="min-w-[120px]">Call Completion</TableHead>
                <TableHead className="min-w-[80px]">Cost</TableHead>
                <TableHead className="min-w-[90px]">Success</TableHead>
                <TableHead className="min-w-[120px]">Total Talk Time</TableHead>
                <TableHead className="min-w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calls.map((call) => (
                <TableRow key={call.call_id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{call.call_id}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        call.call_status === "ended"
                          ? "bg-green-100 text-green-800"
                          : call.call_status === "failed"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {call.call_status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(call.start_timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(call.end_timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {(call.duration_ms / 1000 / 60).toFixed(1)} min
                  </TableCell>
                  <TableCell>{call.customer_name}</TableCell>
                  <TableCell>{call.email_address}</TableCell>
                  <TableCell>{call.target_pest}</TableCell>
                  <TableCell>{call.scheduled_time}</TableCell>
                  <TableCell>{call.user_phone_number}</TableCell>
                  <TableCell>{call.user_address}</TableCell>
                  <TableCell>{call.call_type}</TableCell>
                  <TableCell>
                    <div
                      className="max-w-[200px] truncate"
                      title={call.call_summary}
                    >
                      {call.call_summary}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        call.user_sentiment === "positive"
                          ? "bg-green-100 text-green-800"
                          : call.user_sentiment === "negative"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {call.user_sentiment}
                    </span>
                  </TableCell>
                  <TableCell>{call.agent_task_completion_rating}</TableCell>
                  <TableCell>{call.call_completion_rating}</TableCell>
                  <TableCell>${call.combined_cost}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        call.call_successful
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {call.call_successful ? "Yes" : "No"}
                    </span>
                  </TableCell>
                  <TableCell>{calculateTotalTalkTime(call)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <a
                        href={call.call_transcript}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Transcript
                      </a>
                      <a
                        href={call.call_recording_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Recording
                      </a>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
