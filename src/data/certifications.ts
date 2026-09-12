export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "1",
    name: "Google Advanced Data Analytics",
    issuer: "Google",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/google-advanced-data-analytics",
  },
  {
    id: "2",
    name: "IBM Prompt Engineering",
    issuer: "IBM",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/ibm-prompt-engineering",
  },
  {
    id: "3",
    name: "Microsoft Fabric / Data Engineering",
    issuer: "Microsoft",
    date: "2024",
    link: "https://learn.microsoft.com/en-us/certifications/",
  },
];
