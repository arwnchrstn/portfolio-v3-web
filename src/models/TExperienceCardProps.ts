export interface TExperienceCardProps {
  img?: string
  position: string
  companySchoolName: string
  companySchoolAddr: string
  yearOfStay: {
    from: string
    to: string
  }
  responsibilities?: Array<string>
}
