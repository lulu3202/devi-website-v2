export interface Template {
  slug: string;
  title: string;
  description: string; // one-line shown on listing card
  longDescription: string; // shown on the template page
  githubUrl: string;
  prdPromptUrl: string; // set to '' until ready
  tutorialUrl: string;  // set to '' until ready
  youtubeVideoId: string; // set to '' until ready
}

export const templates: Template[] = [
  {
    slug: 'geo-checklist',
    title: 'GEO Optimization Checklist & Score Calculator',
    description: '10 techniques to make any blog post AI-citable by ChatGPT and Perplexity. Includes an interactive GEO score calculator. Free.',
    longDescription: '10 techniques to make any blog post AI-citable by ChatGPT and Perplexity. Includes an interactive GEO score calculator. Free.',
    githubUrl: '',
    prdPromptUrl: '',
    tutorialUrl: '',
    youtubeVideoId: '',
  },
];
