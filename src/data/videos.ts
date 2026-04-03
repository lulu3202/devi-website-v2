export interface Video {
  videoId: string; // YouTube video ID (the part after ?v=) — TODO: replace all placeholder IDs
  title: string;
  description: string;
}

// TODO: Replace the videoId values below with your actual YouTube video IDs.
// To find a video ID: go to the YouTube video, copy the URL.
// The ID is the string after "?v=" — e.g., https://www.youtube.com/watch?v=XXXXXXXXXX
// If a video doesn't have an ID yet, leave the placeholder and it will show a "Watch on YouTube" card.

export const videos: Video[] = [
  {
    videoId: 'MGgtBGrFi_k', // TODO: replace with real video ID
    title: 'Getting Started with Claude Skills and Cowork Projects',
    description: "A step-by-step walkthrough of Claude's AI Skills feature and how to use Cowork Projects.",
  },
  {
    videoId: 'm8fIDfA9EQA', // TODO: replace with real video ID
    title: 'Building Agentic AI Apps with LangGraph and Groq',
    description: 'Live coding session: build a multi-agent app with LangGraph, Pydantic, Streamlit, and Groq.',
  },
  {
    videoId: 'EdaNBIdwi7w', // TODO: replace with real video ID
    title: 'Small Language Models (SLMs) Series',
    description: 'A 9 part small language model shorts series',
  },
  {
    videoId: 'UAlX8debJOA', // TODO: replace with real video ID
    title: 'Getting started with Agno Framework',
    description: 'Hands-on demo of building a multi-agent system using AGNO framework. Teaching how to integrate web searches, GitHub code searches, and GIFs with a user-friendly interface using Streamlit and a local debugging interface.',
  },
];

export const channelUrl = 'https://www.youtube.com/@devislab';
