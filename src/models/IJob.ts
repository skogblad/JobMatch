export interface IJobSearchRes {
  total: number;
  hits: IJob[];
}

export interface IJob {
  id: string;
  headline: string;
  employer?: { name?: string };
  workplace_address?: { municipality?: string;region?: string };
  publication_date?: string;
  application_deadline?: string;
  webpage_url?: string;
  logo_url?: string;
  description: IJobAdDesc[]
};

interface IJobAdDesc {
  text: string;
  text_formatted: string;
  company_information: string;
  needs: string;
  requirements: string;
  conditions: string;
}