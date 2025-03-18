"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Job } from "@/data/types"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-4">
          <div 
            className="relative h-12 w-12 rounded-md overflow-hidden"
            style={{ backgroundColor: job.logoBackground }}
          >
            <Image
              src={job.logo}
              alt={`${job.company} logo`}
              fill
              className="object-contain p-2"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{job.position}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
        </div>
        <Badge variant="secondary">{job.contract}</Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline">{job.location}</Badge>
          <Badge variant="outline">{job.contract}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Posted {job.postedAt}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={job.apply} target="_blank" rel="noopener noreferrer">
            Apply Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 