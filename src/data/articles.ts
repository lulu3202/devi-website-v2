export type Publication = 'Towards AI' | 'Medium';

export interface Article {
  title: string;
  publication: Publication;
  url: string; // TODO: replace '#' placeholders with your real Medium/Towards AI URLs
  description: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    title: 'Getting Started with Claude: A 101 Guide to Claude Skills and Cowork Projects',
    publication: 'Towards AI',
    url: 'https://medium.com/towards-artificial-intelligence/a-101-guide-to-claude-skills-and-cowork-projects-fd3acae6d7c8', // TODO: add your Towards AI article URL
    description:
      "A beginner-friendly guide to Claude's AI Skills and Cowork Projects — from setup to your first automation, no prior experience needed.",
    featured: true,
  },
  {
    title: 'Building Agentic AI Apps using LangGraph, Pydantic, Streamlit & Groq',
    publication: 'Towards AI',
    url: 'https://medium.com/towards-artificial-intelligence/building-agentic-ai-apps-using-langgraph-pydantic-streamlit-groq-f3c535cc553d?source=your_stories_outbox---writer_outbox_published-----------------------------------------', // TODO: add your Towards AI article URL
    description:
      "Step-by-step walkthrough of building a multi-agent AI application with LangGraph, Groq's fast inference, and a clean Streamlit UI.",
    featured: true,
  },
  {
    title: "A Primer on Using Google's Gemini API to Improve Your Photography",
    publication: 'Towards AI',
    url: 'https://pub.towardsai.net/a-primer-on-using-googles-gemini-api-to-improve-your-photography-7862dc8dbaec', // TODO: add your Towards AI article URL
    description:
      'How to use the Gemini API to build a photography critique app that gives intelligent, actionable feedback on your shots.',
    featured: true,
  },
  {
    title: 'Agentic Framework Deep Dive Series (Part 2): Agno',
    publication: 'Medium',
    url: 'https://medium.com/@devipriyakaruppiah/agentic-framework-deep-dive-series-part-2-agno-c45da579b7c0', // TODO: add your Medium article URL
    description:
      'A deep dive into the Agno agentic framework — key concepts, how it differs from LangChain, and a hands-on example app.',
  },
  {
    title: 'Tried-and-Tested Strategies to Pass the AWS ML Specialty Exam',
    publication: 'Medium',
    url: 'https://medium.com/@devipriyakaruppiah/tried-and-tested-strategies-to-pass-the-aws-ml-specialty-exam-9466345f6108', // TODO: add your Medium article URL
    description:
      'The study plan, resources, and strategies that helped me pass the AWS Machine Learning Specialty certification exam.',
  },
  {
    title: 'From Chunks to Connections: The Case for Graph RAG',
    publication: 'Medium',
    url: 'https://pub.towardsai.net/from-chunks-to-connections-the-case-for-graph-rag-5fc8ce37a871', // TODO: add your Medium article URL
    description:
      'Do we really need Graph RAG? If yes, why and when? Complete with a Bridgerton demo!',
  },
];
