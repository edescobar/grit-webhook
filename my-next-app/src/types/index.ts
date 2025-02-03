export interface Call {
  call_id: number;
  call_status: string;
  start_timestamp: string;
  end_timestamp: string;
  duration_ms: number;
  transcript: string;
  recording_url: string;
  customer_name: string;
  email_address: string;
  target_pest: string;
  scheduled_time: string;
  user_phone_number: string;
  user_address: string;
  call_type: string;
  call_summary: string;
  user_sentiment: string;
  agent_task_completion_rating: string;
  call_completion_rating: string;
  combined_cost: number;
  call_successful: boolean;
  call_duration: string; // assuming this is a formatted string
  call_start_time: string; // assuming this is a formatted string
  call_end_time: string;
  call_transcript: string;
  call_recording_url: string;
}
