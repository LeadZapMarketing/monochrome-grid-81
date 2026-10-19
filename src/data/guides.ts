import { BlogPost } from "@/types/blog";
import courtyardHouse from "@/Archive/Projects/courtyard-house_01.jpg";

// Journal guides that live in the repo instead of Supabase. They render instantly
// (no fetch), so the prerendered page carries the full article.
// Legal and regulatory facts must match the sources listed at the end of each guide.
export const LOCAL_GUIDES: BlogPost[] = [
  {
    id: "certificate-of-completion-and-compliance-malaysia",
    slug: "certificate-of-completion-and-compliance-malaysia",
    createdAt: "2026-10-19T12:30:00Z",
    author: "Hidi Lau",
    tags: "Authority Submissions",
    image: courtyardHouse,
    title: "Certificate of Completion and Compliance (CCC) in Malaysia: What It Is and Who Issues It",
    seoTitle: "Certificate of Completion and Compliance (CCC) Malaysia",
    excerpt:
      "The CCC is the certificate that confirms a new building in Malaysia is complete, built to its approved plans and safe to occupy. It is issued by the project's Principal Submitting Person, usually the architect, not by the local council.",
    content: `
<h2>The short answer</h2>
<p>A Certificate of Completion and Compliance (CCC) is the document that confirms a building has been completed according to its approved building plans and the local authority's technical conditions, and that it is safe and fit to occupy. It is signed as <strong>Form F</strong>.</p>
<p>The CCC is <strong>not</strong> issued by the local council. It is issued by the project's <strong>Principal Submitting Person (PSP)</strong>: a professional architect, a professional engineer with a practising certificate, or a registered building draughtsman. The system has been in place since the 2007 amendments to the Uniform Building By-Laws, when it replaced the older Certificate of Fitness for Occupation (CF) issued by councils.</p>

<h2>Who can be the Principal Submitting Person?</h2>
<p>Only three kinds of registered professionals can act as the PSP:</p>
<ul>
  <li>A professional architect registered with the Board of Architects Malaysia (LAM).</li>
  <li>A professional engineer holding a practising certificate from the Board of Engineers Malaysia (BEM).</li>
  <li>A registered building draughtsman.</li>
</ul>
<p>Which of them may act depends on the type of building, under a joint memorandum of the Board of Architects and the Board of Engineers. Some project types can only be submitted by a professional architect; for residential and housing projects, the Ministry's guidance names the architect as the appropriate PSP.</p>

<h2>What does the PSP check before signing?</h2>
<p>The PSP issues the CCC after supervising the construction and making sure that:</p>
<ol>
  <li>the building was erected according to the approved plans;</li>
  <li>it was completed in line with all the technical conditions set by the local authority (conditions on health and safety and on the building's essential services); and</li>
  <li>it is safe and fit for occupation.</li>
</ol>

<h2>The 21 Form G stage certificates</h2>
<p>A CCC must be supported by <strong>21 stage certificates, Form G1 to G21</strong>, each signed by the professional responsible for that part of the work and by the contractor. They cover the building from the first earthworks to the final works, for example:</p>
<ul>
  <li>Form G1 earthworks, G2 setting out, G3 foundations and G4 structure;</li>
  <li>internal plumbing, sanitary and electrical works;</li>
  <li>passive and active fire protection, mechanical ventilation and lifts;</li>
  <li>the building works themselves, external water supply and sewerage.</li>
</ul>
<p>Several of these forms need a confirmation or clearance letter from the technical agency concerned, such as the Fire and Rescue Department (Bomba), the water authority, the sewerage department or the electricity supplier. Missing clearances are one of the most common reasons a CCC is delayed, so they should be planned from the start of the project, not at the end.</p>

<h2>Partial CCC for phased projects</h2>
<p>When a development is approved to be completed in phases, the PSP can issue a <strong>partial CCC (Form F1)</strong> for each finished phase. Once the whole project is complete, a full CCC (Form F) is issued for the entire development.</p>

<h2>What this means if you are building your own home</h2>
<ul>
  <li>Appoint a registered architect early: the same person who submits your building plans normally becomes the PSP who certifies the finished house.</li>
  <li>Make sure every consultant and contractor knows which Form G they are responsible for, and keep their registrations and paperwork in order as work progresses.</li>
  <li>Ask your architect how the agency clearances (Bomba, water, sewerage, electricity) will be obtained and when.</li>
  <li>Build to the approved plans. Changes made on site without approval can stop the PSP from certifying compliance.</li>
</ul>

<h2>Sources</h2>
<ul>
  <li>Local Government Department, Ministry of Housing and Local Government (KPKT): <a href="https://jkt.kpkt.gov.my/about-lgd/faqs/certificate-of-completion-and-compliance-ccc-faq" target="_blank" rel="noopener noreferrer">Certificate of Completion and Compliance (CCC) FAQ</a>.</li>
  <li>Board of Engineers Malaysia: <a href="https://crr.kkr.gov.my/sites/default/files/2025-01/C%20007%20PEPC%20Endorsement%20on%20Certificate%20of%20Completion%20and%20Compliance%20(Revised).pdf" target="_blank" rel="noopener noreferrer">Circular No. 007, PEPC endorsements on the Certificate of Completion and Compliance (CCC) and Form Gs</a> (Rev. 1, 29 January 2018).</li>
</ul>
<p><em>This guide is general information, not legal advice. Requirements for a specific project depend on its approvals and the local authority.</em></p>
`,
  },
];

export const getLocalGuide = (slug?: string) =>
  slug ? LOCAL_GUIDES.find((g) => g.slug === slug || g.id === slug) : undefined;
