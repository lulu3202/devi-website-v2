export interface Certification {
  name: string;
  issuer: string;
  url: string; // TODO: replace '#' with your Credly or official credential URLs
}

export const certifications: Certification[] = [
  {
    name: 'Generative AI Engineer Associate',
    issuer: 'Databricks',
    url: 'https://credentials.databricks.com/0215e507-0732-4089-9ea0-9c62423920b5#acc.hpPv1i6s', // TODO: add your Credly/Databricks credential URL
  },
  {
    name: 'Machine Learning Specialty',
    issuer: 'AWS',
    url: 'https://www.credly.com/badges/786c057e-26de-473c-a711-79e309ccc86c/linked_in_profile', // TODO: add your Credly credential URL
  },
  {
    name: 'Solutions Architect Associate',
    issuer: 'AWS',
    url: 'https://www.credly.com/badges/fe5d9495-2ca7-4f0e-b376-3379ed63b025/linked_in_profile', // TODO: add your Credly credential URL
  },
  {
    name: 'AI Engineer Associate (AI-102)',
    issuer: 'Microsoft Azure',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/Devi-6391/BD28630D2B036A1A?sharingId=5582872C63A8F46B', // TODO: add your Microsoft credential URL
  },
  {
    name: 'Solutions Architect Expert',
    issuer: 'Microsoft Azure',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/Devi-6391/7AACAC48819CC637?sharingId=5582872C63A8F46B', // TODO: add your Microsoft credential URL
  },
  {
    name: 'Administrator Associate (AZ-104)',
    issuer: 'Microsoft Azure',
    url: 'https://learn.microsoft.com/en-us/users/devi-6391/credentials/6e72329de036849d?ref=https%3A%2F%2Fwww.linkedin.com%2F', // TODO: add your Microsoft credential URL
  },
  {
    name: 'Agentforce Specialist',
    issuer: 'Salesforce',
    url: 'https://drive.google.com/file/d/10MmojiWetR9W_VmrN3QGrUPfydJW4cSP/view', // TODO: add your Trailhead credential URL
  },
];
