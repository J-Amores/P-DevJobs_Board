"use client"

import { JobCard } from "@/components/shared/job-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { jobs } from "@/data/data"
import { Job } from "@/data/types"
import { useState, useMemo } from "react"

export default function Home() {
  const [titleFilter, setTitleFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [contractFilter, setContractFilter] = useState<string | undefined>(undefined)

  // Ensure jobs is an array before filtering
  const jobsArray = Array.isArray(jobs) ? jobs : []

  const filteredJobs = useMemo(() => {
    return jobsArray.filter((job: Job) => {
      const matchesTitle = job.position.toLowerCase().includes(titleFilter.toLowerCase())
      const matchesLocation = job.location.toLowerCase().includes(locationFilter.toLowerCase())
      const matchesContract = !contractFilter || job.contract.toLowerCase() === contractFilter.toLowerCase()
      
      return matchesTitle && matchesLocation && matchesContract
    })
  }, [jobsArray, titleFilter, locationFilter, contractFilter])

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">DevJobs Board</h1>
          <p className="text-muted-foreground">
            Find your next developer job opportunity
          </p>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Job Title
            </label>
            <Input
              id="title"
              placeholder="Filter by title..."
              className="w-full"
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <Input
              id="location"
              placeholder="Filter by location..."
              className="w-full"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contract" className="text-sm font-medium">
              Contract Type
            </label>
            <Select value={contractFilter} onValueChange={setContractFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select contract type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full time">Full Time</SelectItem>
                <SelectItem value="part time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job: Job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No jobs found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  )
} 