import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'src', 'data', 'generative-ai', 'concepts');

/** Compact concept seeds: [id, title, subtitle, difficulty, minutes, prereqIds, summary, analogy, bullets, terms, vizSteps, realTitle, realStory, takeaway, quizzes, interactive, code?] */
const C = {
  'ai-fundamentals': [
    ['what-is-ai','What is AI?','Machines doing judgment-like tasks','beginner',6,[],
      'Artificial Intelligence (AI) is software that performs tasks associated with human judgment: recognizing patterns, predicting outcomes, understanding language, or generating content. It is not a digital mind—it is data, algorithms, and compute packaged into useful tools. Today’s popular “AI” usually means machine-learning systems trained for specific jobs, even when the chat interface feels general.',
      'Like a fast apprentice who studied millions of examples: great at patterns, still needing goals and oversight.',
      ['AI is an umbrella covering rule systems and learning systems.','Modern hype mostly points at machine learning and neural nets.','Mental model: Input → Model → Output, with parameters learned from data.','Useful AI is evaluated in a workflow with clear success metrics.'],
      [['Artificial Intelligence','Software performing tasks linked to human intelligence'],['Model','Learned function mapping inputs to outputs'],['Narrow AI','AI specialized for particular tasks']],
      ['A human task appears (e.g., spam detection).','Examples and metrics define success.','A model learns patterns from data.','New inputs get predictions.','Humans monitor errors and decide trust boundaries.'],
      'Campus FAQ assistant','A college wraps AI around library FAQs for midnight answers.','AI helps when the task is clear and measurable.',
      [['AI is best described as…',['A human-identical mind','Software for judgment-like tasks using data/algorithms','Any chat widget','Only humanoid robots'],1,'AI is engineering, not mystical consciousness.'],['Most production AI is…',['Fully general human cognition','Specialized for tasks','Impossible','Only hardware'],1,'Narrow specialization is the norm.']],
      ['toggle',['Sort tickets by topic','Prove a brand-new theorem with guarantees','Find cracks in factory photos'],{'Sort tickets by topic':'Good ML fit: messy language + labels.','Prove a brand-new theorem with guarantees':'Needs formal methods; pure statistical AI is a weak primary tool.','Find cracks in factory photos':'Good vision ML fit.'}]],
    ['machine-learning','Machine Learning','Learn from examples, not only hand-written rules','beginner',7,['what-is-ai'],
      'Machine Learning (ML) builds software by learning patterns from data instead of coding every rule. You supply examples and an objective; an algorithm adjusts a model to improve predictions. ML handles messy reality well, but it can also absorb bias and fail outside its training distribution.',
      'Classic code is a recipe you write. ML is flashcard teaching: enough examples, and the system invents internal rules.',
      ['Supervised learning uses labeled pairs (x → y).','Unsupervised learning finds structure without labels.','Reinforcement learning learns via rewards for actions.','Generalization—to unseen data—is the real goal.'],
      [['Supervised learning','Learning from labeled examples'],['Training','Updating parameters to reduce error'],['Generalization','Doing well on new examples']],
      ['Hand-written keyword rules fail on clever spam.','Collect labeled emails instead.','Train a model on statistical patterns.','Evaluate on held-out messages.','Deploy with monitoring for drift.'],
      'Fraud alerts','Banks score transactions with models trained on historical fraud labels.','ML fits high-volume pattern recognition with feedback.',
      [['Supervised learning needs…',['No data','Input–label pairs','Only GPUs','CSS files'],1,'Labels provide the teaching signal.'],['Generalization means…',['Memorizing training data','Performing well on unseen examples','Training forever','Bigger fonts'],1,'Held-out performance matters.']],
      ['toggle',['Predict house prices','Cluster shoppers','Learn maze with rewards'],{'Predict house prices':'Supervised regression.','Cluster shoppers':'Unsupervised structure finding.','Learn maze with rewards':'Reinforcement learning.'}],
      ['pseudo','Supervised loop','for each (x,y):\n  pred = model(x)\n  loss = error(pred,y)\n  update model','Batches + gradients make this efficient.']],
    ['deep-learning','Deep Learning','Multi-layer nets that learn hierarchical features','beginner',7,['machine-learning'],
      'Deep learning uses neural networks with many layers. Early layers often capture simple patterns; deeper layers compose them into richer concepts. GPUs and large datasets made deep stacks practical, powering modern vision and language systems.',
      'An assembly line of understanding: edges → parts → objects (or characters → words → intent).',
      ['“Deep” means many stacked transformations.','Networks learn representations instead of only hand-built features.','Cost: data, compute, and harder interpretability.','Transformers are a deep architecture for sequences.'],
      [['Layer','One transformation stage'],['Representation','Internal numeric features'],['GPU','Hardware accelerating tensor math']],
      ['Raw signal enters.','Shallow layers detect local patterns.','Mid layers form parts.','Deep layers form task concepts.','A head outputs the prediction.'],
      'Phone dictation','Deep acoustic models map sound to text better than older hand-tuned pipelines.','Depth helps on hierarchical raw signals.',
      [['Deep learning is…',['Any spreadsheet','ML with multi-layer neural nets','Only robots','A disk format'],1,'Layer depth is the idea.'],['It scaled because…',['Thinner monitors','Big data + GPU compute','HTML alone','Wi-Fi alone'],1,'Data and compute unlocked it.']],
      ['toggle',['Hand-built image features','End-to-end learned filters','Keyword sentiment counts'],{'Hand-built image features':'Classical ML features.','End-to-end learned filters':'Deep learning style.','Keyword sentiment counts':'Simple baseline vs contextual deep text models.'}]],
    ['neural-networks','Neural Networks','Weighted units transforming numbers into predictions','beginner',8,['deep-learning'],
      'A neural network stacks simple units that mix inputs with learned weights, apply a nonlinearity, and pass signals forward. With enough capacity and data, nets approximate complex input–output maps—from pixels to labels to next-token probabilities.',
      'A giant board of knobs (weights). Training twists knobs until outputs match targets.',
      ['A neuron: weighted sum + bias + activation.','Layers compose into powerful function approximators.','Training uses loss and backpropagation.','Regularization and evaluation prevent hollow “perfect train scores.”'],
      [['Weight','Learnable connection strength'],['Activation','Nonlinearity enabling complex functions'],['Parameter','Any learnable number in the model']],
      ['Inputs arrive as numbers.','Hidden units mix them with weights.','Activations reshape signals.','Outputs become scores/probabilities.','Errors later drive weight updates.'],
      'Digit recognition','Tiny nets classify handwritten digits by learning stroke patterns as weights.','Even small nets show learning from raw features.',
      [['A weight is…',['Only gym mass','A learnable connection strength','A keyboard','GPU temp'],1,'Weights are parameters.'],['Activations matter because…',['They compile code','Nonlinearities enable complex functions','They delete data','They replace datasets'],1,'Without them, deep stacks stay linear.']],
      ['toggle',['Weights store whole articles verbatim','Weights control signal influence','Weights are passwords'],{'Weights store whole articles verbatim':'Knowledge is distributed—not a document DB.','Weights control signal influence':'Yes—dials of influence.','Weights are passwords':'No.'}],
      ['pseudo','One neuron','z = w·x + b\ny = activation(z)','Networks compose many such units.']],
    ['what-is-generative-ai','What is Generative AI?','Models that create new content','beginner',7,['neural-networks'],
      'Generative AI creates new samples—text, images, audio, code—by learning patterns of a data distribution and sampling from them. New does not mean true: outputs can be fluent and wrong. These models excel at drafting and transformation when paired with verification.',
      'A musician improvising in a practiced genre: stylish, not automatically historically accurate.',
      ['Generators model how data looks, then sample.','LLMs sample tokens; diffusion denoise images.','Use for ideation/drafting; verify facts and safety.','Different from classifiers that only output labels.'],
      [['Generation','Producing new samples'],['Sampling','Drawing outputs from model probabilities'],['Distribution','Statistical shape of possible data']],
      ['Classifier labels an email spam/ham.','Generator receives “write a refund email”.','It samples tokens into a new message.','Output is a draft, not guaranteed truth.','Evaluate usefulness and factuality separately.'],
      'Code autocomplete','IDEs draft next lines; developers accept or edit.','Generation accelerates drafting with human review.',
      [['Generative AI primarily…',['Deletes files','Creates new content samples','Charges phones','Replaces TCP'],1,'Synthesis is the hallmark.'],['Generated text is…',['Always true','Plausible, not guaranteed correct','Always false','A DB key'],1,'Plausibility ≠ truth.']],
      ['toggle',['Draft a launch email','Detect fracture on X-ray','Create logo variations'],{'Draft a launch email':'Generative.','Detect fracture on X-ray':'Mostly discriminative.','Create logo variations':'Generative.'}]],
    ['discriminative-vs-generative','Discriminative vs Generative','Separate classes vs model how data is made','beginner',7,['what-is-generative-ai'],
      'Discriminative models learn p(y|x): decide the label given an input. Generative models learn enough about data to produce new samples (and often condition on prompts). Classifiers are typically discriminative; LLMs and diffusion models are generative. Products often combine both.',
      'Bouncer (discriminative) vs chef who can cook new dishes in-house style (generative).',
      ['Discriminative: decision boundaries / label probabilities.','Generative: model/samplers for new x (or sequences).','LLMs: generative next-token distributions.','Pick based on whether you need labels or creations.'],
      [['Discriminative','Predict labels / separate classes'],['Generative','Model and produce data samples'],['Conditional generation','Generate given a prompt/constraints']],
      ['Plot cat vs dog points.','Draw a discriminative boundary.','Learn a generative notion of “cat images”.','Sample a new cat-like image.','Different goals need different metrics.'],
      'Moderate then rewrite','Classifier flags toxicity; generator suggests a civil rewrite.','Hybrid pipelines are common.',
      [['Spam filters are mostly…',['Generative','Discriminative','Compilers','CDNs'],1,'They predict labels.'],['Image synthesizers are…',['Discriminative','Generative','Caches','Mutexes'],1,'They create samples.']],
      ['toggle',['Approve loans','Generate product photos','Route tickets and draft replies'],{'Approve loans':'Discriminative (plus fairness constraints).','Generate product photos':'Generative.','Route tickets and draft replies':'Hybrid.'}]],
    ['transformers-overview','Transformers (overview)','Attention-based sequence architecture','intermediate',9,['discriminative-vs-generative'],
      'Transformers process sequences with attention so each token can selectively gather information from others. They parallelize better than many recurrent nets and scale well—hence their dominance in LLMs and many multimodal systems.',
      'In a group chat, attention is how each new message decides which prior messages matter now.',
      ['Self-attention mixes token information.','Multi-head attention tracks different relation types.','FFN + residual + norm complete a block.','Decoder-only models power most chat LLMs.'],
      [['Attention','Weighted focus over other tokens'],['Token','Chunk of text the model reads/writes'],['Decoder-only','Predicts next token from left context']],
      ['Split text into tokens.','Embed tokens as vectors.','Self-attention mixes context.','Feed-forward refines each position.','Stacked blocks feed prediction heads.'],
      'Translation leap','Attention transformers beat many older RNN translation stacks.','Architecture + scale changed practical quality.',
      [['Transformers rely heavily on…',['Bubble sort','Attention','FTP','Flexbox'],1,'Attention is central.'],['GPT-like chat models are usually…',['Decoder-only transformers','Only decision trees','Excel macros','GPS chips'],0,'Autoregressive decoders dominate.']],
      ['toggle',['Fill masked words','Chat next-token assistant','Translate EN→FR'],{'Fill masked words':'Encoder/masked modeling style.','Chat next-token assistant':'Decoder-only.','Translate EN→FR':'Encoder-decoder classic.'}]],
    ['foundation-models','Foundation Models','Broad models adapted to many tasks','intermediate',7,['transformers-overview'],
      'Foundation models are large models trained on broad data and reused across many downstream tasks via prompting, retrieval, fine-tuning, or tools. Teams adapt one base instead of training from scratch each time—changing product speed and concentrating capability.',
      'A broadly educated graduate who later specializes—rather than training a newborn for each career.',
      ['Broad pretraining creates transferable capabilities.','Adaptation: prompts, RAG, fine-tunes, agents.','Benefits: speed; risks: inherited bias and cost.','Right-sizing still matters; bigger is not always better.'],
      [['Foundation model','Broad reusable base model'],['Adaptation','Specializing a base to a task'],['Transfer learning','Reuse knowledge across tasks']],
      ['Pretrain on diverse data.','App A: tutoring prompts.','App B: RAG over docs.','App C: fine-tune style.','Shared base + different controls.'],
      'Enterprise copilots','One approved base model powers many department assistants with shared security.','Foundations become platforms.',
      [['Foundation models are…',['Only calculators','Broad reusable models','Printer drivers','HTML tags'],1,'Broad + adaptable.'],['You always need the largest model.',['True','False','Only Tuesdays','Only for CSS'],1,'Right-size the model.']],
      ['toggle',['10 niche defect images','Support bot for 50 products','On-device wake word'],{'10 niche defect images':'Tiny data—giant FM may be overkill.','Support bot for 50 products':'Strong FM + RAG candidate.','On-device wake word':'Small specialized model.'}]],
    ['llms','LLMs','Large language models as next-token engines','beginner',8,['foundation-models'],
      'Large Language Models are neural nets trained to predict tokens at scale. From that objective emerge summarization, drafting, coding help, and dialogue. They model language patterns—they do not automatically ground claims in live reality without tools or retrieval.',
      'Extremely well-read autocomplete that can converse: eloquent, fallible on facts without grounding.',
      ['Pretraining predicts tokens over huge corpora.','Instruction/preference tuning shapes helpful behavior.','Context length and decoding settings change outcomes.','Apps add RAG, tools, evals, and guardrails.'],
      [['LLM','Large neural language model'],['Context window','Token capacity per request'],['Alignment','Steering behavior to preferences/policies']],
      ['User enters a prompt.','Tokenizer emits token IDs.','Transformer contextualizes them.','Next-token distribution appears.','Decoding loops until stop.'],
      'Algorithms tutor','Students get adaptive explanations that may invent citations if ungrounded.','Great for teaching drafts; verify critical claims.',
      [['LLMs are mainly trained to…',['Predict/generate tokens','Replace CPUs','Render CSS','Run payroll by default'],0,'Token prediction is core.'],['Without tools, an LLM knows live prices.',['True','False','If font is green','Only offline'],1,'No magic live data.']],
      ['toggle',['Draft a lab outline','See private DB with no access','Execute bank transfer alone'],{'Draft a lab outline':'Strong generation fit.','See private DB with no access':'Needs provided data/tools.','Execute bank transfer alone':'Needs auth + hard controls.'}]],
    ['multimodal-intro','Multimodal intro','Connecting text, images, audio, and more','intermediate',7,['llms'],
      'Multimodal models handle more than one signal type—e.g., image+text in, text out. They relate pixels and words in a shared representational space, enabling captioning, visual Q&A, and document understanding.',
      'A friend who can look at your whiteboard photo and answer your question about it.',
      ['Modalities: text, image, audio, video, sensors.','Encoders + fusion combine signals.','Images may become visual tokens for transformers.','Risks: mis-seeing details; eval is harder.'],
      [['Modality','A data type/signal kind'],['Fusion','Combining modalities'],['Visual tokens','Image features as sequence units']],
      ['Image + question arrive.','Vision encoder yields features/tokens.','Joint model attends across both.','Answer tokens are generated.','Check grounding against the image.'],
      'Worksheet photos','Students photograph homework; a tutor reads and guides.','Multimodality removes retyping friction.',
      [['Multimodal means…',['Many GPUs only','Multiple data types','Many passwords','Many CSS files'],1,'Multiple modalities.'],['A key risk is…',['Inventing image details','Too much font RAM','DNS only','USB-C'],0,'Visual hallucination.']],
      ['toggle',['Explain a schematic photo','Rewrite a paragraph','Transcribe a lecture'],{'Explain a schematic photo':'Vision+language.','Rewrite a paragraph':'Text-only may suffice.','Transcribe a lecture':'Audio→text pipeline.'}]],
    ['diffusion-intro','Diffusion intro','Images via iterative denoising','intermediate',8,['multimodal-intro'],
      'Diffusion models generate images by learning to reverse a noising process: start from noise and denoise step-by-step toward a prompt-conditioned picture. Latent diffusion runs this in a compressed space for speed.',
      'Reassembling a clear stained-glass picture out of static, guided by a caption.',
      ['Training: add noise to images; learn to remove it.','Sampling: iterative denoising from noise.','Text embeddings condition each step.','Tradeoffs: steps/latency, prompt brittleness, safety filters.'],
      [['Denoising','Removing estimated noise'],['Latent diffusion','Diffusion in compressed latent space'],['Guidance','How hard the prompt steers sampling']],
      ['Start from noise.','Condition on the prompt.','Coarse structure appears.','Details refine.','Final image emerges.'],
      'Concept art ideation','Artists generate variations, then paint over winners.','Diffusion explores; humans finish.',
      [['Sampling usually starts from…',['A finished JPEG','Random noise','A SQL row','CSS grid'],1,'Noise first.'],['Latent diffusion helps because…',['It ignores prompts','It is more efficient','It deletes GPUs','It bans images'],1,'Compressed space efficiency.']],
      ['toggle',['Stronger guidance','Fewer steps','New random seed'],{'Stronger guidance':'Tighter prompt match; can look brittle if extreme.','Fewer steps':'Faster, maybe less refined.','New random seed':'Different sample.'}]],
  ],
};

// Additional categories loaded from seeds file to keep this maintainable
const seedsPath = path.join(__dirname, 'concept-seeds.json');
const extra = JSON.parse(fs.readFileSync(seedsPath, 'utf8'));
Object.assign(C, extra);

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

const defaultFixtures = {
  'token-split': { text: 'Generative AI learns patterns from data.', vocabHint: true },
  similarity: {
    phrases: ['king', 'queen', 'apple', 'orange', 'transformer model', 'neural network'],
    vectors: {
      king: [0.9, 0.1],
      queen: [0.85, 0.2],
      apple: [0.1, 0.9],
      orange: [0.15, 0.85],
      'transformer model': [0.7, 0.65],
      'neural network': [0.68, 0.6],
    },
  },
  temperature: { labels: ['mat', 'floor', 'couch', 'window', 'moon'], logits: [3.2, 2.1, 1.7, 0.4, -1.0] },
  'decode-sampler': {
    prefix: 'The cat sat on the',
    candidates: [
      { t: 'mat', p: 0.42 },
      { t: 'floor', p: 0.18 },
      { t: 'couch', p: 0.12 },
      { t: 'moon', p: 0.01 },
    ],
  },
  'prompt-builder': {
    base: 'If a factory makes 12 widgets/hour and runs 7 hours, how many widgets?',
    withCot: 'Think step by step, then give the final number.',
    answers: { base: 'Jumps to 84 (maybe).', withCot: 'Shows 12×7=84 with intermediate checks.' },
  },
  'rag-query': {
    question: 'What is our refund window?',
    docs: [
      { id: 'd1', text: 'Refunds accepted within 30 days with receipt.' },
      { id: 'd2', text: 'Shipping takes 3–5 business days.' },
      { id: 'd3', text: 'Warranty covers manufacturing defects for 1 year.' },
    ],
    answer: 'According to policy docs, refunds are accepted within 30 days with receipt.',
  },
  'agent-loop': {
    goal: 'Find tomorrow’s weather in Pune and suggest an outfit.',
    steps: [
      {
        thought: 'I need a weather lookup tool.',
        action: 'weather_api(city="Pune", day="tomorrow")',
        observation: '32°C, sunny',
      },
      {
        thought: 'Hot and sunny—recommend light clothes.',
        action: 'final_answer',
        observation: 'Wear breathable cotton; sunglasses optional.',
      },
    ],
  },
};

function toInteractive(seed) {
  if (!seed) {
    return {
      kind: 'generic-toggle',
      title: 'Try the idea',
      description: 'Switch options to build intuition.',
      fixture: {
        options: ['Focus on the core idea', 'Compare to a nearby concept'],
        insights: {
          'Focus on the core idea': 'Restate the concept in one sentence.',
          'Compare to a nearby concept': 'Name one difference from a related idea.',
        },
        selected: 'Focus on the core idea',
      },
    };
  }
  const [kind, options, insights] = seed;
  if (kind === 'toggle') {
    return {
      kind: 'generic-toggle',
      title: 'Try the idea',
      description: 'Switch options to build intuition.',
      fixture: { options, insights, selected: options[0] },
    };
  }
  return {
    kind,
    title: 'Try the idea',
    description: 'Interactive local demo.',
    fixture: options ?? defaultFixtures[kind] ?? { note: 'Local demo fixture' },
  };
}

function buildConcept(categoryId, row, index, rows) {
  const [id, title, subtitle, difficulty, minutes, prereqs, summary, analogy, bullets, terms, vizSteps, realTitle, realStory, takeaway, quizzes, interactiveSeed, code] = row;
  const viz = {
    kind: 'stepped',
    title: `${title} — visual walkthrough`,
    description: `Step through the core idea behind ${title}.`,
    steps: vizSteps.map((caption, i) => ({
      id: `step-${i + 1}`,
      caption,
      callout: i === vizSteps.length - 1 ? 'Pause and restate this in your own words.' : undefined,
      nodes: Array.from({ length: Math.min(4, i + 2) }, (_, n) => ({
        id: `n${n}`,
        label: ['Input', 'Process', 'Transform', 'Output'][n],
        x: 12 + n * 22,
        y: 36 + (n % 2) * 14,
        tone: n <= i ? 'active' : 'muted',
      })),
      edges: i === 0 ? [] : Array.from({ length: Math.min(i, 3) }, (_, e) => ({ from: `n${e}`, to: `n${e + 1}`, label: e === i - 1 ? 'now' : undefined })),
    })),
  };

  // Flagship kinds override in registry; keep stepped data as fallback
  const flagship = new Set(['tokenization','embeddings','self-attention','next-token-prediction','temperature-top-k-top-p','chain-of-thought','retrieval-pipeline','react-agents']);
  if (flagship.has(id)) viz.kind = 'flagship';

  const specialInteractive = {
    tokenization: { kind: 'token-split', title: 'Split a sentence into tokens', description: 'Type a sentence and see a demo tokenizer.', fixture: { text: 'Generative AI learns patterns from data.', vocabHint: true } },
    embeddings: { kind: 'similarity', title: 'Compare meaning distances', description: 'Pick two phrases and compare demo similarity.', fixture: { phrases: ['king', 'queen', 'apple', 'orange', 'transformer model', 'neural network'], vectors: { king: [0.9, 0.1], queen: [0.85, 0.2], apple: [0.1, 0.9], orange: [0.15, 0.85], 'transformer model': [0.7, 0.65], 'neural network': [0.68, 0.6] } } },
    'self-attention': { kind: 'generic-toggle', title: 'What should “bank” attend to?', description: 'Change sentence context and see focus shift.', fixture: { options: ['river bank erosion', 'bank account balance'], insights: { 'river bank erosion': 'Attend to river/erosion senses of bank.', 'bank account balance': 'Attend to money/account senses of bank.' }, selected: 'river bank erosion' } },
    'next-token-prediction': { kind: 'decode-sampler', title: 'Predict the next token', description: 'Inspect top candidate tokens for a prefix.', fixture: { prefix: 'The cat sat on the', candidates: [{ t: 'mat', p: 0.42 }, { t: 'floor', p: 0.18 }, { t: 'couch', p: 0.12 }, { t: 'moon', p: 0.01 }] } },
    'temperature-top-k-top-p': { kind: 'temperature', title: 'Tune sampling randomness', description: 'Adjust temperature and see distribution sharpness.', fixture: { labels: ['mat', 'floor', 'couch', 'window', 'moon'], logits: [3.2, 2.1, 1.7, 0.4, -1.0] } },
    'chain-of-thought': { kind: 'prompt-builder', title: 'Add reasoning scaffolding', description: 'Toggle CoT instructions and compare structure.', fixture: { base: 'If a factory makes 12 widgets/hour and runs 7 hours, how many widgets?', withCot: 'Think step by step, then give the final number.', answers: { base: 'Jumps to 84 (maybe).', withCot: 'Shows 12×7=84 with intermediate checks.' } } },
    'retrieval-pipeline': { kind: 'rag-query', title: 'Run a mini RAG trace', description: 'Ask a question and see retrieve→stuff→answer stages.', fixture: { question: 'What is our refund window?', docs: [{ id: 'd1', text: 'Refunds accepted within 30 days with receipt.' }, { id: 'd2', text: 'Shipping takes 3–5 business days.' }, { id: 'd3', text: 'Warranty covers manufacturing defects for 1 year.' }], answer: 'According to policy docs, refunds are accepted within 30 days with receipt.' } },
    'react-agents': { kind: 'agent-loop', title: 'Walk a ReAct loop', description: 'Step Thought→Action→Observation locally.', fixture: { goal: 'Find tomorrow’s weather in Pune and suggest an outfit.', steps: [ { thought: 'I need a weather lookup tool.', action: 'weather_api(city="Pune", day="tomorrow")', observation: '32°C, sunny' }, { thought: 'Hot and sunny—recommend light clothes.', action: 'final_answer', observation: 'Wear breathable cotton; sunglasses optional.' } ] } },
  };

  const interactive = specialInteractive[id] || toInteractive(interactiveSeed);

  const quiz = quizzes.map((qq, qi) => ({
    id: `${id}-q${qi + 1}`,
    prompt: qq[0],
    options: qq[1].map((text, oi) => ({ id: `o${oi}`, text })),
    correctOptionId: `o${qq[2]}`,
    explanation: qq[3],
  }));

  // ensure 3+ questions by padding thoughtfully if needed
  while (quiz.length < 3) {
    quiz.push({
      id: `${id}-q${quiz.length + 1}`,
      prompt: `In one line, ${title} is mainly about…`,
      options: [
        { id: 'o0', text: summary.split('.')[0] },
        { id: 'o1', text: 'Replacing all databases with CSS' },
        { id: 'o2', text: 'Turning off networking permanently' },
        { id: 'o3', text: 'Only hardware manufacturing' },
      ],
      correctOptionId: 'o0',
      explanation: 'Focus on the core teaching point of this concept.',
    });
  }

  const concept = {
    id,
    categoryId,
    title,
    subtitle,
    difficulty,
    estimatedMinutes: minutes,
    prerequisites: prereqs,
    laymanSummary: summary,
    analogy,
    explanation: bullets,
    keyTerms: terms.map(([term, definition]) => ({ term, definition })),
    visualization: viz,
    interactiveExample: interactive,
    realWorldExample: { title: realTitle, story: realStory, takeaway },
    quiz,
    prevConceptId: rows[index - 1]?.[0],
    nextConceptId: rows[index + 1]?.[0],
  };
  if (code) {
    concept.codeExample = { language: code[0], title: code[1], code: code[2], notes: code[3] };
  }
  return concept;
}

function emitCategory(categoryId, rows) {
  const concepts = rows.map((r, i) => buildConcept(categoryId, r, i, rows));
  const file = path.join(outDir, `${categoryId}.ts`);
  const body = `import type { Concept } from '../../../types/content';\n\nexport const concepts: Concept[] = ${JSON.stringify(concepts, null, 2)} as Concept[];\n`;
  fs.writeFileSync(file, body);
  return concepts.length;
}

fs.mkdirSync(outDir, { recursive: true });
let total = 0;
for (const [categoryId, rows] of Object.entries(C)) {
  total += emitCategory(categoryId, rows);
}
console.log(`Wrote ${Object.keys(C).length} categories, ${total} concepts → ${outDir}`);
