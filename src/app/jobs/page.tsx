import { JobCard } from "@/components/shared/job-card"
import { getJobs } from "@/lib/data"

export default function JobsPage() {
  const jobs = getJobs()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Developer Jobs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  )
} 