export interface Project {
  title: string;
  description: string;
  image: string; // filename only — resolved to /images/<filename> at runtime
  tags: string[];
  githubUrl: string; // TODO: replace with your actual GitHub repo URLs
  blogUrl?: string;  // TODO: replace with your actual blog/article URLs
  youtubeUrl?: string; // TODO: replace with your actual YouTube video URLs
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Document Portal',
    description:
      'An enterprise-grade document intelligence platform using RAG architecture. Upload documents, ask questions, and get accurate answers — powered by LangChain, FAISS vector search, and AWS infrastructure with a clean FastAPI backend.',
    image: 'doc2.png',
    tags: ['FastAPI', 'LangChain', 'FAISS', 'AWS', 'Python', 'Docker'],
    githubUrl: 'https://github.com/lulu3202/doocument_portal-', // TODO: add specific repo URL
    blogUrl: '#', // TODO: add blog post URL
    youtubeUrl: '#', // TODO: add YouTube video URL
    featured: true,
  },
  {
    title: 'Agentic AI App Hub',
    description:
      "A Streamlit hub with three AI agents built on LangGraph: a personalized learning path generator, an AI code reviewer, and an automated blog post generator — all powered by Groq's blazing-fast inference.",
    image: 'agentic_ai.png',
    tags: ['LangGraph', 'Groq', 'Pydantic', 'Streamlit', 'Python'],
    githubUrl: 'https://github.com/lulu3202/langgraph_workflows', // TODO: add specific repo URL
    blogUrl: '#', // TODO: add blog post URL
    youtubeUrl: '#', // TODO: add YouTube video URL
    featured: true,
  },
  {
    title: 'Python Code Explainer (Agno)',
    description:
      'Paste any GitHub repo URL and get a plain-English explanation of what the code does. Built with the Agno framework, DuckDuckGo web search for context, and a Streamlit frontend.',
    image: 'streamlit.png',
    tags: ['AGNO', 'Streamlit', 'GitHub API', 'Python', 'DuckDuckGo'],
    githubUrl: 'https://github.com/lulu3202/agno_usecase', // TODO: add specific repo URL
    blogUrl: '#', // TODO: add blog post URL
    featured: false,
  },
];
