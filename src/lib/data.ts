import { Job } from "@/data/types"
import jobsData from "@/data/data.json"

export function getJobs(): Job[] {
  return jobsData
} 