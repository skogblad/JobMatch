export interface IJobSearchRes {
  total: {
    value: number;
  };
  hits: IJob[];
}

export interface IJob {
  id: string;
  headline: string;
  employer?: { name?: string };
  workplace_address?: { municipality?: string; region?: string };
  publication_date?: string;
  application_deadline?: string;
  webpage_url?: string;
  logo_url?: string;

  description: {
    text: string;
    text_formatted: string;
    company_information: string;
    needs: string;
    requirements: string;
    conditions: string;
  };

  salary_type: {
    label: string;
  };

  application_details: {
    reference: string;
    url: string;
  };

  occupation: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };

  application_contacts: {
    name: string;
    description: string;
    email: string;
  }[];
}
