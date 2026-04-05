export interface Template {
  slug: string;
  title: string;
  description: string; // one-line shown on listing card
  longDescription: string; // shown on the template page
  githubUrl: string;
  prdPromptUrl: string; // set to '' until ready
  tutorialUrl: string;  // set to '' until ready
  youtubeVideoId: string; // set to '' until ready
  beehiivUrl: string;   // set to '' until ready
}

export const templates: Template[] = [
  {
    slug: 'website-starter',
    title: 'Build Your Website with Claude Code',
    description: 'The complete PRD prompt and project template to build a personal brand site with Claude Code — no coding experience needed.',
    longDescription: 'The complete project template and PRD prompt to build a modern personal brand site using the Claude Code VS Code extension. No prior coding experience needed. Watch the video walkthrough below, or read the full tutorial on Towards AI.',
    githubUrl: 'https://github.com/lulu3202/devi-website-v2',
    prdPromptUrl: '',   // TODO: add your PRD prompt link
    tutorialUrl: '',    // TODO: add your Towards AI article URL
    youtubeVideoId: '', // TODO: add your YouTube video ID
    beehiivUrl: '',     // TODO: add your Beehiiv subscribe URL
  },
];
