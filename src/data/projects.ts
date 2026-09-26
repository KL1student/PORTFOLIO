import type { Project } from "@/types";

export const projectsData: Record<string, Project> = {
  mindmate: {
    id: "mindmate",
    title: "MindMate: AI-Powered Multilingual Mental Health Support System",
    badge: "GENERATIVE AI & FULL STACK",
    tagline:
      "2025–2026. A multilingual mental health support application built with React, Vite, Node.js, and Express. It combines Google Gemini 2.5 Flash, persistent chat history, safety guardrails, and text and speech emotion recognition.",
    metrics: [
      { value: "Gemini 2.5 Flash", label: "LLM integration with prompt engineering and safety guardrails" },
      { value: "SSE", label: "Streamed conversational responses from backend to frontend" },
      { value: "XLM-RoBERTa + XGBoost", label: "Text and speech emotion recognition" }
    ],
    archDesc:
      "React and Vite client with Node.js and Express services: authenticated chat and persistent history, severity-based emotion and crisis analysis, Gemini 2.5 Flash responses, and SSE delivery to the frontend.",
    githubUrl: "https://github.com/KL1student/MindMate",
    githubLabel: "GitHub Repository",
    aliases: ["mental health", "chatbot", "multilingual chat"],
    featured: true,
    challengeDetails: "The application combines authentication and persistent chat with a severity-based pipeline for emotion analysis and crisis detection, alongside streamed LLM responses.",
    archNodes: [
      { id: "input", label: "Chat Application", tech: "React + Vite", rationale: "Provides the multilingual chat interface, authentication, and persistent conversation history." },
      { id: "emotion", label: "Emotion Recognition", tech: "XLM-RoBERTa · XGBoost", rationale: "Uses XLM-RoBERTa for text emotion recognition and XGBoost for speech emotion recognition." },
      { id: "severity", label: "Severity Pipeline", tech: "Emotion · Crisis", rationale: "Processes emotion severity and crisis signals as part of the support workflow." },
      { id: "llm", label: "LLM Responses", tech: "Gemini 2.5 Flash", rationale: "Generates conversational responses with prompt engineering and safety guardrails." },
      { id: "stream", label: "Response Delivery", tech: "Server-Sent Events", rationale: "Streams responses from the Node.js and Express backend to the frontend." },
    ],
    caseStudy: {
      overview: "A multilingual mental health support application that combines conversational AI, persistent chat, and text and speech emotion recognition.",
      problem: "Provide a coherent support experience that can retain conversation context, stream responses, and account for emotional severity and potential crisis signals.",
      contribution: "Developed the frontend and backend, implemented authentication and persistent chat history, integrated Gemini 2.5 Flash with prompt and safety handling, and connected streamed responses and emotion-analysis components.",
      implementation: [
        { area: "Frontend", details: "React and Vite application for multilingual conversations and persistent chat history." },
        { area: "Backend and APIs", details: "Node.js and Express services for authentication, chat workflows, and response delivery." },
        { area: "AI integration", details: "Google Gemini 2.5 Flash with prompt engineering and safety guardrails." },
        { area: "Emotion analysis", details: "XLM-RoBERTa for text emotion recognition and XGBoost for speech emotion recognition, used in a severity-based processing flow." },
        { area: "Streaming", details: "Server-Sent Events stream generated responses from the backend to the frontend." }
      ],
      features: ["Authentication", "Persistent chat history", "Multilingual conversations", "Streamed responses", "Text and speech emotion recognition", "Severity-based emotion and crisis processing"],
      techStack: [
        { category: "Frontend", tools: ["React", "Vite"] },
        { category: "Backend", tools: ["Node.js", "Express.js", "REST APIs", "JWT"] },
        { category: "AI and ML", tools: ["Google Gemini 2.5 Flash", "XLM-RoBERTa", "XGBoost"] },
        { category: "Integration", tools: ["Server-Sent Events", "Prompt engineering", "Safety guardrails"] }
      ]
    },
  },
  "oil-spill": {
    id: "oil-spill",
    title: "AI-Based Oil Spill Detection from SAR Satellite Imagery",
    badge: "STREAMLIT · DEEP LEARNING · REMOTE SENSING",
    tagline:
      "An interactive Streamlit application for analyzing SAR satellite and aerial images with an oil-spill segmentation model. Upload an image, tune detection and overlay thresholds, and compare the original image, predicted probability mask, and colorized spill overlay alongside a severity estimate.",
    metrics: [
      { value: "Focal Dice", label: "Loss to address class imbalance and small spill regions" },
      { value: "Test Time Augmentation", label: "Flips and rotations with prediction fusion" },
      { value: "IoU · Dice · Precision · Recall", label: "Evaluation metrics used for the segmentation model" }
    ],
    archDesc:
      "Enhanced U-Net segmentation workflow: OpenCV and PIL preprocessing resizes SAR imagery to 320×320, normalizes inputs, processes binary masks, and applies augmentation. Focal Dice Loss addresses class imbalance; flip and rotation TTA predictions are fused before evaluation and interactive Streamlit visualization.",
    githubUrl:
      "https://github.com/springboardmentor112r-Agri/Oil_Spill_Detection-/tree/AI_OSD-Shivanandh_V",
    githubLabel: "Infosys Branch Repo",
    aliases: ["oil", "spill", "sar", "satellite"],
    featured: false,
    challengeDetails: "Severe class imbalance and small oil-spill regions motivated the use of Focal Dice Loss. Test Time Augmentation fuses predictions from flipped and rotated inputs to improve inference robustness.",
    archNodes: [
      { id: "preprocess", label: "Image Preprocessing", tech: "OpenCV · PIL · 320×320", rationale: "Resizes and normalizes imagery, processes binary masks, and applies data augmentation." },
      { id: "unet", label: "Semantic Segmentation", tech: "Enhanced U-Net · PyTorch", rationale: "Segments oil-spill regions in SAR satellite imagery at the pixel level." },
      { id: "loss", label: "Imbalance Handling", tech: "Focal Dice Loss", rationale: "Addresses severe class imbalance and improves learning on small spill regions." },
      { id: "tta", label: "Prediction Fusion", tech: "Flip · Rotation TTA", rationale: "Combines predictions from transformed inputs to improve inference robustness." },
      { id: "evaluation", label: "Model Evaluation", tech: "IoU · Dice · Precision · Recall", rationale: "Evaluates segmentation performance using overlap and classification metrics." },
      { id: "deployment", label: "Interactive Inference", tech: "Streamlit", rationale: "Provides SAR image inference and visualization through a web interface." },
    ],
    caseStudy: {
      overview: "An AI-based semantic segmentation system that detects and segments oil-spill regions in SAR satellite imagery, with interactive image inference and visualization.",
      problem: "Oil spill regions can be small relative to the full satellite image, creating severe foreground/background class imbalance and making pixel-level segmentation challenging.",
      contribution: "Developed an enhanced U-Net segmentation model, implemented Focal Dice Loss and image preprocessing/augmentation, applied flip and rotation Test Time Augmentation with prediction fusion, and deployed interactive inference with Streamlit.",
      implementation: [
        { area: "Input", details: "SAR satellite imagery is resized to 320×320 and normalized; binary masks are processed for segmentation." },
        { area: "Preprocessing", details: "OpenCV and PIL support resizing, normalization, mask processing, and data augmentation." },
        { area: "Model", details: "Enhanced U-Net in PyTorch produces pixel-level oil-spill segmentation masks." },
        { area: "Loss", details: "Focal Dice Loss addresses class imbalance and improves learning on small spill regions." },
        { area: "Inference", details: "Flip and rotation Test Time Augmentation predictions are fused to improve robustness." },
        { area: "Deployment", details: "Streamlit provides interactive SAR image inference and visualization." }
      ],
      features: ["320×320 image preprocessing", "Binary mask processing", "Data augmentation", "Focal Dice Loss", "Flip and rotation TTA with prediction fusion", "Interactive Streamlit inference and visualization"],
      techStack: [
        { category: "Modeling", tools: ["Python", "PyTorch", "Enhanced U-Net", "Focal Dice Loss"] },
        { category: "Image processing", tools: ["OpenCV", "PIL", "Data augmentation", "Test Time Augmentation"] },
        { category: "Deployment and evaluation", tools: ["Streamlit", "IoU", "Dice Coefficient", "Precision", "Recall"] }
      ]
    },
  },
  coinvision: {
    id: "coinvision",
    title: "CoinVision: Indian Coin Recognition System",
    badge: "COMPUTER VISION & DEEP LEARNING",
    tagline:
      "2025. An Indian coin recognition application built with Python, TensorFlow, Keras, OpenCV, and Tkinter. The image-processing workflow prepares coin images for CNN classification and presents predictions in a desktop interface.",
    metrics: [
      { value: "92%", label: "Classification accuracy reported in the project resume" },
      { value: "1,500+", label: "Coin images in the dataset" },
      { value: "TensorFlow · Keras", label: "CNN development and model integration" }
    ],
    archDesc:
      "Python image-processing pipeline using OpenCV, integrated with a TensorFlow/Keras convolutional neural network and a Tkinter graphical interface for Indian coin classification.",
    githubUrl: "https://github.com/KL1student/CoinVision",
    githubLabel: "GitHub Repository",
    aliases: ["coin", "coins", "indian coin"],
    featured: false,
    challengeDetails: "The work focused on improving image preprocessing and augmentation, developing and tuning a CNN, then integrating the trained model with the preprocessing workflow and desktop interface.",
    archNodes: [
      { id: "preprocess", label: "Image Preparation", tech: "Python · OpenCV", rationale: "Prepares coin images and applies augmentation to improve input quality and generalization." },
      { id: "cnn", label: "Coin Classifier", tech: "TensorFlow · Keras", rationale: "A convolutional neural network classifies Indian coin images." },
      { id: "integration", label: "Model Integration", tech: "Preprocessing Pipeline", rationale: "Connects the trained model to the image preprocessing workflow." },
      { id: "interface", label: "Desktop Interface", tech: "Tkinter", rationale: "Provides a graphical interface for automated coin classification." },
    ],
    caseStudy: {
      overview: "An Indian coin recognition application that prepares coin images for CNN classification and presents predictions in a Tkinter desktop interface.",
      problem: "Coin images need consistent preprocessing and augmentation so the classifier can learn robust visual patterns across the dataset.",
      contribution: "Developed and optimized image preprocessing and augmentation pipelines, contributed to CNN development and tuning, integrated the trained model with the preprocessing workflow, and connected it to the Tkinter interface.",
      implementation: [
        { area: "Image processing", details: "Python and OpenCV preprocessing and augmentation improve image input quality and model generalization." },
        { area: "Model", details: "A convolutional neural network developed and tuned with TensorFlow and Keras classifies Indian coin images." },
        { area: "Integration", details: "The trained classifier is integrated with the image preprocessing workflow." },
        { area: "Interface", details: "Tkinter provides a desktop UI for image-based coin classification." }
      ],
      features: ["Coin image preprocessing", "Data augmentation", "CNN-based coin classification", "Tkinter desktop interface"],
      techStack: [
        { category: "Modeling", tools: ["Python", "TensorFlow", "Keras", "CNN"] },
        { category: "Image processing", tools: ["OpenCV", "Preprocessing", "Data augmentation"] },
        { category: "Application", tools: ["Tkinter"] }
      ]
    },
  },
  inventory: {
    id: "inventory",
    title: "Inventory Management System",
    badge: "FULL STACK WEB APPLICATION",
    tagline:
      "2023–2024. A full-stack inventory management web application built with PHP and MySQL to manage products, categories, stock levels, and inventory transactions through CRUD workflows.",
    metrics: [
      { value: "PHP", label: "Server-side form and application logic" },
      { value: "MySQL", label: "Relational storage for inventory data" },
      { value: "CRUD", label: "Product, category, stock, and transaction workflows" }
    ],
    archDesc:
      "PHP application logic processes form input and database queries against MySQL schemas for inventory records and stock updates, with a responsive HTML, CSS, and JavaScript interface.",
    githubUrl: "https://github.com/KL1student/Inventory-Management-System",
    githubLabel: "GitHub Repository",
    aliases: ["inventory", "stock", "products"],
    featured: false,
    challengeDetails: "The database schema organizes items, categories, and stock updates to support consistent inventory records across application workflows.",
    archNodes: [
      { id: "interface", label: "Responsive Interface", tech: "HTML · CSS · JavaScript", rationale: "Provides navigation, dynamic form inputs, and inventory record displays." },
      { id: "server", label: "Application Logic", tech: "PHP", rationale: "Processes user input and forms, runs database queries, and implements CRUD operations." },
      { id: "schema", label: "Inventory Database", tech: "MySQL", rationale: "Relational tables manage items, categories, and stock updates." },
      { id: "versioning", label: "Source Control", tech: "Git", rationale: "Tracks changes and maintains an organized project repository." },
    ],
    caseStudy: {
      overview: "A full-stack inventory management web application for tracking products, categories, stock levels, and inventory transactions.",
      problem: "Inventory data needs to be organized and updated consistently as product details and stock quantities change.",
      contribution: "Developed the application with PHP and MySQL, implemented server-side form processing and CRUD workflows, designed relational data structures for inventory records, and built the responsive interface.",
      implementation: [
        { area: "Frontend", details: "HTML, CSS, and JavaScript provide navigation, dynamic form inputs, and inventory record displays." },
        { area: "Backend", details: "PHP processes user input and forms, executes database queries, and implements create, read, update, and delete operations." },
        { area: "Database", details: "MySQL relational schemas manage items, categories, and stock updates." },
        { area: "Development workflow", details: "Git tracks source changes and keeps the project organized; Apache is part of the listed technology stack." }
      ],
      features: ["Product management", "Category management", "Stock level tracking", "Inventory transaction management", "Responsive inventory records"],
      techStack: [
        { category: "Frontend", tools: ["HTML5", "CSS3", "JavaScript"] },
        { category: "Backend and database", tools: ["PHP", "MySQL", "CRUD operations"] },
        { category: "Tools", tools: ["Apache", "Git"] }
      ]
    },
  },
  "finance-tracker": {
    id: "finance-tracker",
    title: "Finance Tracker: Personal Finance Web App",
    badge: "CLIENT-SIDE FINANCIAL TRACKER",
    tagline:
      "A browser-based finance tracker for recording transactions, categorizing spending, and tracking balances with LocalStorage persistence.",
    metrics: [
      { value: "JavaScript", label: "Client-side transaction and balance logic" },
      { value: "LocalStorage", label: "Transaction persistence between sessions" },
      { value: "Categories", label: "Organized income and expense tracking" }
    ],
    archDesc:
      "Event-driven JavaScript transaction pipeline with persistent LocalStorage state synchronization and interactive visual cash-flow metrics.",
    githubUrl: "https://github.com/KL1student/finance-tracker",
    githubLabel: "GitHub Repository",
    aliases: ["finance", "budget", "ledger"],
    featured: false,
    challengeDetails: "The first version recalculated totals in several event handlers, so filters and persisted data could disagree. I centralized ledger updates and derived every balance and visualization from that single state source.",
    archNodes: [
      { id: "input", label: "Transaction Input", tech: "DOM Events", rationale: "A small event-driven input layer keeps adding income and expenses immediate and predictable." },
      { id: "ledger", label: "Ledger State", tech: "JavaScript", rationale: "A single transaction ledger gives every chart and balance the same source of truth." },
      { id: "persist", label: "Persistence", tech: "LocalStorage", rationale: "LocalStorage keeps the ledger available between sessions without requiring a backend for this client-first tool." },
      { id: "analytics", label: "Analytics UI", tech: "CSS + Charts", rationale: "Derived totals and categories turn raw transactions into decisions users can act on." },
    ],
    caseStudy: {
      overview: "A client-side finance tracker for recording transactions, viewing categorized spending, and tracking balance changes.",
      problem: "Personal transactions and derived balances need to stay consistent across entry, filtering, and page reloads.",
      contribution: "Built a browser-based transaction workflow with categorized records, derived balances, visual summaries, and LocalStorage persistence.",
      implementation: [
        { area: "Transaction input", details: "JavaScript event handlers collect and validate income and expense entries." },
        { area: "Ledger state", details: "A transaction list acts as the source for derived balance and category views." },
        { area: "Persistence", details: "LocalStorage retains transactions between browser sessions." },
        { area: "Interface", details: "HTML and CSS present transaction entry, spending breakdowns, and balance projections." }
      ],
      features: ["Income and expense records", "Transaction categories", "Balance calculations", "Spending breakdowns", "Persistent browser storage"],
      techStack: [
        { category: "Application", tools: ["JavaScript", "DOM events"] },
        { category: "Interface", tools: ["HTML", "CSS"] },
        { category: "Persistence and analysis", tools: ["LocalStorage", "Transaction categories"] }
      ]
    },
  },
  "netflix-clone": {
    id: "netflix-clone",
    title: "Netflix Clone: High-Fidelity Streaming UI",
    badge: "STREAMING UI CLONE",
    tagline:
      "A high-fidelity Netflix web application featuring dynamic hero movie carousels, category rows, smooth responsive video preview layouts, and sleek dark mode aesthetics.",
    metrics: [
      { value: "Responsive UI", label: "Adaptive streaming catalog layout" },
      { value: "Vercel", label: "Deployment platform" },
      { value: "HTML · CSS · JavaScript", label: "Browser-based application stack" }
    ],
    archDesc:
      "Modern HTML5/CSS3/JavaScript single page application deployed on Vercel edge infrastructure with optimized asset caching.",
    githubUrl: "https://github.com/KL1student/netflix_clone",
    githubLabel: "GitHub Repository",
    aliases: ["netflix", "streaming"],
    featured: false,
    challengeDetails: "Large poster images caused scroll jank on smaller devices. Lazy loading, smaller responsive assets, and keeping row rendering incremental preserved smooth horizontal carousels without sacrificing visual density.",
    archNodes: [
      { id: "catalog", label: "Movie Catalog", tech: "JavaScript", rationale: "Category-driven data keeps the UI extensible as more genres and media endpoints are added." },
      { id: "rows", label: "Content Rows", tech: "DOM Builder", rationale: "Reusable row construction avoids duplicating markup for every streaming category." },
      { id: "preview", label: "Preview UI", tech: "HTML5 Video", rationale: "Lightweight previews make the browsing experience feel rich without blocking catalog interaction." },
      { id: "cdn", label: "Deployment", tech: "Vercel", rationale: "Identifies the hosting platform used for the interface." },
    ],
    caseStudy: {
      overview: "A responsive streaming-service interface with a featured title area, category rows, and video previews.",
      problem: "Present a large media catalog in a browsable layout that adapts to different screen sizes.",
      contribution: "Built the browser interface and reusable content rows and used Vercel as its deployment platform.",
      implementation: [
        { area: "Catalog", details: "JavaScript organizes media into categories for display." },
        { area: "Content rows", details: "Reusable row construction presents poster thumbnails by category." },
        { area: "Preview interface", details: "HTML video support provides preview interaction where available." },
        { area: "Deployment", details: "The project uses Vercel as its deployment platform." }
      ],
      features: ["Featured title area", "Category-based content rows", "Responsive catalog layout", "Video preview interface"],
      techStack: [
        { category: "Frontend", tools: ["HTML5", "CSS3", "JavaScript"] },
        { category: "Media interface", tools: ["Category rows", "HTML video"] },
        { category: "Deployment", tools: ["Vercel"] }
      ]
    },
  }
};
