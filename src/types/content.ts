export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
};

export type VizStep = {
  id: string;
  caption: string;
  highlight?: string[];
  nodes?: { id: string; label: string; x: number; y: number; tone?: string }[];
  edges?: { from: string; to: string; label?: string }[];
  particles?: { id: string; from: string; to: string; label?: string }[];
  callout?: string;
};

export type VisualizationSpec = {
  kind: 'stepped' | 'flagship';
  title: string;
  description: string;
  steps: VizStep[];
  mathNote?: string;
};

export type InteractiveExampleSpec = {
  kind: 'token-split' | 'temperature' | 'similarity' | 'prompt-builder' | 'rag-query' | 'agent-loop' | 'generic-toggle' | 'decode-sampler';
  title: string;
  description: string;
  fixture: Record<string, unknown>;
};

export type Concept = {
  id: string;
  categoryId: string;
  title: string;
  subtitle: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  prerequisites: string[];
  laymanSummary: string;
  analogy: string;
  explanation: string[];
  keyTerms: { term: string; definition: string }[];
  visualization: VisualizationSpec;
  interactiveExample: InteractiveExampleSpec;
  codeExample?: {
    language: 'ts' | 'python' | 'pseudo';
    title: string;
    code: string;
    notes: string;
  };
  realWorldExample: { title: string; story: string; takeaway: string };
  quiz: QuizQuestion[];
  nextConceptId?: string;
  prevConceptId?: string;
};

/** Card-level fields, cheap enough to keep in the entry bundle for every concept. */
export type ConceptSummary = Pick<
  Concept,
  'id' | 'categoryId' | 'title' | 'subtitle' | 'difficulty' | 'estimatedMinutes'
>;

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  order: number;
  accent: string;
  conceptIds: string[];
};
