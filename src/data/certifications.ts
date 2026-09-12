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
  },
  {
    id: "2",
    name: "IBM Prompt Engineering",
    issuer: "IBM",
  },
  {
    id: "3",
    name: "Microsoft Fabric / Data Engineering",
    issuer: "Microsoft",
  }
];
