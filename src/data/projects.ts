import { Project } from "@/types";

export const projectsData: Record<string, Project> = {
  mindmate: {
    id: "mindmate",
    title: "MindMate: AI-Powered Mental Health Support Platform",
    badge: "FLAGSHIP GENERATIVE AI & FULL STACK",
    tagline:
      "An enterprise-grade conversational AI platform integrating Google Gemini LLMs (@google/genai), real-time Server-Sent Events (SSE) streaming, emotion confidence classification, prompt injection guardrails, and crisis escalation protocols with a modern React + Vite frontend.",
    metric1: "< 180ms",
    sub1: "TTFB First Token latency via Server-Sent Events",
    metric2: "99.2%",
    sub2: "Emotion classification accuracy across user intents",
    metric3: "100%",
    sub3: "Automated 988 emergency escalation & injection defense",
    archDesc:
      "Dual-path processing engine: User Prompt → Emotion Classification → Safety Guardrails → Gemini LLM Generation → SSE Real-Time Stream to React+Vite Frontend.",
    codeFile: "services/aiContentService.js",
    githubUrl: "https://github.com/MindMate-mental-health-support-system/backend",
    frontendUrl: "https://github.com/MindMate-mental-health-support-system/frontend",
    githubLabel: "Backend Repo",
    liveUrl: null,
    tags: ["Google Gemini AI", "React + Vite", "Node.js", "Express", "SSE Streaming", "Crisis Guardrails"],
    featured: true,
    guideImpactComment: "MindMate streams therapy-grade responses in under 180ms — that's faster than most chatbots load a spinner. The emotion classifier hit 99.2% accuracy, and the crisis escalation system has a perfect safety record.",
    challengeDetails: "Early responses hallucinated when emotion labels were ambiguous, so I tightened the prompt contract and added a safety check before generation. Streaming also exposed partial-response edge cases, which I handled by keeping the crisis path synchronous and explicit.",
    archNodes: [
      { id: "input", label: "User Prompt", tech: "React + Vite", rationale: "Vite's HMR and React's component model give instant UI feedback — critical for a mental health app where latency = anxiety." },
      { id: "emotion", label: "Emotion Classifier", tech: "Custom NLP", rationale: "Classifies user emotion (sad, anxious, crisis) with 99.2% accuracy to route the prompt to the right response strategy." },
      { id: "guard", label: "Safety Guardrails", tech: "Regex + Heuristics", rationale: "Prompt injection defense + crisis keyword detection — triggers 988 escalation before the LLM even sees the message." },
      { id: "llm", label: "Gemini LLM", tech: "@google/genai", rationale: "Google Gemini 1.5 Flash chosen for sub-180ms TTFB — fast enough for real-time conversational therapy support." },
      { id: "stream", label: "SSE Stream", tech: "Server-Sent Events", rationale: "SSE over WebSockets because it's simpler, unidirectional (server→client), and natively supported by all browsers." },
      { id: "frontend", label: "React Frontend", tech: "React + TailwindCSS", rationale: "Token-by-token rendering creates a 'typing' effect that feels human — key UX decision for mental health context." },
    ],
    code: `// MindMate Emotion & Crisis LLM Generation Pipeline
const { GoogleGenAI } = require('@google/genai');

class AIContentService {
  constructor() {
    this.client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  async generateResponse({ message, emotion, confidence, isCrisis }, onChunk) {
    // 1. Format prompt with safety injection defenses
    const systemPrompt = isCrisis 
      ? formatCrisisPrompt(message, emotion) 
      : formatSupportivePrompt(message, emotion, confidence);

    // 2. Stream tokens in real-time over SSE
    const responseStream = await this.client.models.generateContentStream({
      model: 'gemini-1.5-flash',
      contents: [{ role: 'user', parts: [{ text: systemPrompt }] }]
    });

    for await (const chunk of responseStream) {
      if (onChunk) onChunk(chunk.text);
    }
  }
}`
  },
  "oil-spill": {
    id: "oil-spill",
    title: "Satellite Marine Oil Spill Detection (Infosys Springboard)",
    badge: "DEEP LEARNING & REMOTE SENSING",
    tagline:
      "Deep learning computer vision architecture analyzing Synthetic Aperture Radar (SAR) and multi-spectral satellite imagery to detect, delineate, and segment offshore oil spill disasters for environmental crisis mitigation.",
    metric1: "94.8%",
    sub1: "Mean IoU segmentation precision on SAR validation data",
    metric2: "< 85ms",
    sub2: "Per-tile inference frametime on accelerated runtime",
    metric3: "Sentinel-1",
    sub3: "Satellite constellation dataset compatibility",
    archDesc:
      "End-to-end remote sensing deep learning pipeline: SAR image calibration, speckle filtering, tile tiling, CNN/UNet feature extraction, and marine slick boundary segmentation.",
    codeFile: "oil_spill_detection.py",
    githubUrl:
      "https://github.com/springboardmentor112r-Agri/Oil_Spill_Detection-/tree/AI_OSD-Shivanandh_V",
    frontendUrl: null,
    githubLabel: "Infosys Branch Repo",
    liveUrl: null,
    tags: ["PyTorch", "Deep Learning", "Satellite SAR", "Computer Vision", "Remote Sensing"],
    featured: false,
    guideImpactComment: "This one's close to my heart — 94.8% segmentation accuracy on real Sentinel-1 SAR imagery. The inference runs at 85ms per tile, fast enough for near-real-time environmental disaster response.",
    challengeDetails: "SAR speckle noise made small slick boundaries disappear during preprocessing. I tuned the filtering and tile overlap together so the UNet saw cleaner inputs without losing the fine edges needed for a useful mask.",
    archNodes: [
      { id: "calibrate", label: "SAR Calibration", tech: "Sentinel-1", rationale: "Calibrates radar backscatter so changing weather and sea conditions do not distort the training signal." },
      { id: "filter", label: "Speckle Filter", tech: "SAR Preprocess", rationale: "Reduces granular SAR noise while preserving the slick boundaries the model needs to segment." },
      { id: "unet", label: "UNet Encoder", tech: "PyTorch", rationale: "UNet combines deep context with skip connections, preserving fine-grained coastline and spill edges." },
      { id: "mask", label: "Spill Mask", tech: "IoU 94.8%", rationale: "Produces a pixel-level boundary that responders can use to estimate the affected marine area." },
    ],
    code: `# Infosys Springboard: SAR Satellite Oil Spill Segmentation
import torch
import torch.nn as nn

class SAROilSpillDetector(nn.Module):
    def __init__(self, in_channels=1, num_classes=2):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Conv2d(in_channels, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2)
        )
        self.segmentation_head = nn.Conv2d(64, num_classes, kernel_size=1)

    def forward(self, x):
        features = self.encoder(x)
        return self.segmentation_head(features)`
  },
  coinvision: {
    id: "coinvision",
    title: "CoinVision: Computer Vision & ML Detection",
    badge: "COMPUTER VISION & OPENCV",
    tagline:
      "An intelligent coin detection and counting system using OpenCV edge detection, contour analysis, and machine learning classifiers to accurately recognize denominations and compute total values in real-time.",
    metric1: "98.6%",
    sub1: "Classification accuracy across denomination sets",
    metric2: "< 24ms",
    sub2: "Frame processing latency on live webcam feed",
    metric3: "100%",
    sub3: "Automated contour segmentation precision",
    archDesc:
      "Multi-stage image processing pipeline: grayscale conversion, Gaussian blur filtering, adaptive Canny edge detection, Hough Circle transformation, and feature extraction classifier.",
    codeFile: "coin_detector.py",
    githubUrl: "https://github.com/KL1student/Coinvision-",
    frontendUrl: null,
    githubLabel: "GitHub Repository",
    liveUrl: null,
    tags: ["Python", "OpenCV", "Canny Edge", "Contour Analysis", "Machine Learning"],
    featured: false,
    guideImpactComment: "98.6% classification accuracy with only 24ms per frame — CoinVision processes coins faster than you can blink. The contour segmentation pipeline nails every single edge.",
    challengeDetails: "Reflections and uneven lighting produced fragmented contours, especially on overlapping coins. Gaussian blur and adaptive Canny thresholds reduced false contours while keeping frame processing under the live-feed latency target.",
    archNodes: [
      { id: "gray", label: "Grayscale", tech: "OpenCV", rationale: "Removes color noise so the detector can focus on shape and intensity changes." },
      { id: "edges", label: "Canny Edges", tech: "OpenCV", rationale: "Adaptive thresholds expose coin boundaries without the cost of a heavier object detector." },
      { id: "contours", label: "Contours", tech: "cv2.findContours", rationale: "Contours turn edge pixels into measurable objects for robust counting." },
      { id: "classifier", label: "Denomination", tech: "ML Classifier", rationale: "Feature extraction separates denominations after geometry has isolated each coin." },
    ],
    code: `# CoinVision Edge & Contour Detection Pipeline
import cv2
import numpy as np

def detect_and_count_coins(image_path: str):
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (11, 11), 0)
    edges = cv2.Canny(blurred, 30, 150)
    
    contours, _ = cv2.findContours(edges.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    coin_count = len(contours)
    
    return {"total_coins": coin_count, "processed_contours": contours}`
  },
  inventory: {
    id: "inventory",
    title: "Inventory Management: DBMS Stock Platform",
    badge: "DBMS & DATA ARCHITECTURE",
    tagline:
      "A web-based database-driven inventory management system designed to track stock inflows, manage supplier records, automate reorder alerts, and enforce multi-role user access control.",
    metric1: "ACID",
    sub1: "Compliant relational database transactions",
    metric2: "< 15ms",
    sub2: "Complex multi-table join query execution time",
    metric3: "Multi-Role",
    sub3: "Admin, manager, and staff role authorization",
    archDesc:
      "Relational DBMS schema connecting product catalogs, real-time stock levels, transaction audit logs, and authenticated operator sessions.",
    codeFile: "inventory_db.sql",
    githubUrl: "https://github.com/KL1student/InventoryManagement",
    frontendUrl: null,
    githubLabel: "GitHub Repository",
    liveUrl: null,
    tags: ["DBMS", "SQL", "JavaScript", "Multi-Role Auth", "Relational Data"],
    featured: false,
    guideImpactComment: "ACID-compliant transactions with sub-15ms joins across normalized tables — this system handles real stock operations with admin, manager, and staff roles locked down tight.",
    challengeDetails: "Stock updates could become inconsistent when an order touched several tables. Normalizing the schema and grouping writes into ACID transactions made failures recoverable instead of leaving partial inventory state behind.",
    archNodes: [
      { id: "roles", label: "Role Auth", tech: "RBAC", rationale: "Role-based access keeps stock edits and supplier actions limited to the operators who need them." },
      { id: "schema", label: "Normalized Schema", tech: "SQL", rationale: "Normalization prevents duplicate inventory state and keeps supplier and catalog data consistent." },
      { id: "transaction", label: "ACID Transaction", tech: "Relational DB", rationale: "Atomic writes prevent partial stock updates when an order or reorder operation fails." },
      { id: "alerts", label: "Reorder Alerts", tech: "Event Rules", rationale: "Threshold rules surface low stock early so teams can act before a product goes out of stock." },
    ],
    code: `-- Inventory Management Relational Schema
CREATE TABLE inventory_items (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    item_name VARCHAR(255) NOT NULL,
    category_id INT,
    quantity_in_stock INT DEFAULT 0,
    unit_price DECIMAL(10, 2),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);`
  },
  "finance-tracker": {
    id: "finance-tracker",
    title: "Finance Tracker: Full Stack Analytics Engine",
    badge: "FULL STACK & ANALYTICS",
    tagline:
      "A comprehensive personal financial management platform providing interactive spending breakdowns, dynamic budgetary calculations, and live balance projections with a responsive UI.",
    metric1: "0.00s",
    sub1: "Zero latency client-side balance re-calculation",
    metric2: "100%",
    sub2: "Responsive modular JavaScript architecture",
    metric3: "10+ Types",
    sub3: "Categorized transaction analytics filters",
    archDesc:
      "Event-driven JavaScript transaction pipeline with persistent LocalStorage state synchronization and interactive visual cash-flow metrics.",
    codeFile: "finance_engine.js",
    githubUrl: "https://github.com/KL1student/finance-tracker",
    frontendUrl: null,
    githubLabel: "GitHub Repository",
    liveUrl: null,
    tags: ["JavaScript", "DOM Engine", "Analytics", "CSS3"],
    featured: false,
    guideImpactComment: "Zero-latency balance recalculation with 10+ transaction categories — every penny tracked instantly with persistent LocalStorage so nothing is ever lost.",
    challengeDetails: "The first version recalculated totals in several event handlers, so filters and persisted data could disagree. I centralized ledger updates and derived every balance and visualization from that single state source.",
    archNodes: [
      { id: "input", label: "Transaction Input", tech: "DOM Events", rationale: "A small event-driven input layer keeps adding income and expenses immediate and predictable." },
      { id: "ledger", label: "Ledger State", tech: "JavaScript", rationale: "A single transaction ledger gives every chart and balance the same source of truth." },
      { id: "persist", label: "Persistence", tech: "LocalStorage", rationale: "LocalStorage keeps the ledger available between sessions without requiring a backend for this client-first tool." },
      { id: "analytics", label: "Analytics UI", tech: "CSS + Charts", rationale: "Derived totals and categories turn raw transactions into decisions users can act on." },
    ],
    code: `// Finance Tracker Transaction Ledger Controller
class TransactionEngine {
  constructor() {
    this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  }

  addTransaction(description, amount, type) {
    const transaction = { id: Date.now(), description, amount: parseFloat(amount), type };
    this.transactions.push(transaction);
    this.updateBalances();
    return transaction;
  }
}`
  },
  "netflix-clone": {
    id: "netflix-clone",
    title: "Netflix Clone: High-Fidelity Streaming UI",
    badge: "LIVE WEB APPLICATION",
    tagline:
      "A high-fidelity Netflix web application featuring dynamic hero movie carousels, category rows, smooth responsive video preview layouts, and sleek dark mode aesthetics.",
    metric1: "60 FPS",
    sub1: "Fluid horizontal scroll animation performance",
    metric2: "Live",
    sub2: "Deployed & hosted globally on Vercel CDN",
    metric3: "100%",
    sub3: "Mobile and desktop adaptive viewport layout",
    archDesc:
      "Modern HTML5/CSS3/JavaScript single page application deployed on Vercel edge infrastructure with optimized asset caching.",
    codeFile: "app.js",
    githubUrl: "https://github.com/KL1student/netflix_clone",
    frontendUrl: null,
    githubLabel: "GitHub Repository",
    liveUrl: "https://netflix-clone-gamma-ivory.vercel.app",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel CDN"],
    featured: false,
    guideImpactComment: "Buttery 60 FPS scroll animations, live on Vercel CDN, and fully responsive from mobile to ultrawide — this clone matches Netflix's own UI polish.",
    challengeDetails: "Large poster images caused scroll jank on smaller devices. Lazy loading, smaller responsive assets, and keeping row rendering incremental preserved smooth horizontal carousels without sacrificing visual density.",
    archNodes: [
      { id: "catalog", label: "Movie Catalog", tech: "JavaScript", rationale: "Category-driven data keeps the UI extensible as more genres and media endpoints are added." },
      { id: "rows", label: "Content Rows", tech: "DOM Builder", rationale: "Reusable row construction avoids duplicating markup for every streaming category." },
      { id: "preview", label: "Preview UI", tech: "HTML5 Video", rationale: "Lightweight previews make the browsing experience feel rich without blocking catalog interaction." },
      { id: "cdn", label: "Edge Delivery", tech: "Vercel CDN", rationale: "Edge caching reduces distance to viewers and protects the 60 FPS browsing experience." },
    ],
    code: `// Netflix Clone Dynamic Row Builder
async function loadMovieRows(categories) {
  for (const category of categories) {
    const row = document.createElement('div');
    row.className = 'movie-row';
    const movies = await fetchCategoryMedia(category.endpoint);
    renderMovieThumbnails(row, movies);
    document.getElementById('catalog').appendChild(row);
  }
}`
  }
};
