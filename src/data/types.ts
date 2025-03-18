export type EmploymentType = "Full Time" | "Part Time" | "Contract" | "Internship"
export type ContractType = "Permanent" | "Contract" | "Temporary"

export interface Job {
  id: number
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
  website: string
  apply: string
  description: string
  requirements: {
    content: string
    items: string[]
  }
  role: {
    content: string
    items: string[]
  }
}

export interface JobFilters {
  title?: string
  location?: string
  employmentType?: EmploymentType[]
  contractType?: ContractType[]
  experience?: string
  skills?: string[]
} 