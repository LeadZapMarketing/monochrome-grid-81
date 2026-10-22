import { BlogPost } from "@/types/blog";
import courtyardHouse from "@/Archive/Projects/courtyard-house_01.jpg";
import aorInterior from "@/Archive/Services/07aor-min.jpg";
import horizonHills from "@/Archive/Projects/10-horizon-hills--min.jpg";

// Journal guides that live in the repo instead of Supabase. They render instantly
// (no fetch), so the prerendered page carries the full article.
// Legal and regulatory facts must match the sources listed at the end of each guide.
export const LOCAL_GUIDES: BlogPost[] = [
  {
    id: "what-does-an-architect-do-malaysia",
    slug: "what-does-an-architect-do-malaysia",
    createdAt: "2026-10-23T02:00:00Z",
    author: "HIDI Lau Architect",
    tags: "Architectural Design",
    image: horizonHills,
    title: "What Does an Architect Do in Malaysia? A Homeowner's Guide",
    seoTitle: "What Does an Architect Do in Malaysia?",
    excerpt:
      "An architect turns what you need from a building into a design that can be approved and built, then looks after your interests until it is finished. This guide explains what a registered architect does in Malaysia, stage by stage, and when you need one.",
    content: `
<h2>The short answer</h2>
<p>An architect designs your building and guides it from the first idea to the finished, certified building. In Malaysia that means studying the site and your needs, designing the building, preparing and submitting the plans to the local council for approval, coordinating the engineers and other consultants, and checking the work on site so the building matches the approved plans.</p>
<p>Throughout, the architect acts as your adviser, and as your agent when dealing with the authorities and the contractor.</p>

<h2>Who can call themselves an architect in Malaysia?</h2>
<p>The title is protected by law. Under section 7 of the Architects Act 1967 (Act 117), only a person registered as an Architect with the Board of Architects Malaysia (Lembaga Arkitek Malaysia, LAM) may describe themselves as an "Architect", use the abbreviation "Ar." before their name, set up an architectural consultancy practice, or recover fees in court for architectural consultancy services.</p>
<p>To get there, a graduate gains practical experience, passes the LAM-PAM examination, joins the Malaysian Institute of Architects (Pertubuhan Akitek Malaysia, PAM) as a corporate member, and then registers with LAM as an Architect.</p>
<p><strong>Tip:</strong> look for "Ar." before the name and confirm the registration with LAM before you appoint anyone.</p>

<h2>What an architect does, stage by stage</h2>
<p>This is how we run a home project at HIDI Lau Architect. The stages are the ones listed on our architectural design service page.</p>
<ol>
  <li><strong>Site analysis and design feasibility.</strong> We study the site, its surroundings, sun and wind, and what can be built on it.</li>
  <li><strong>Space planning and layout.</strong> How you live and move through the home decides where each room goes.</li>
  <li><strong>Concept design.</strong> The overall form, mood and direction of the building.</li>
  <li><strong>Floor plans and elevations.</strong> The drawings that fix the layout and how the building looks from outside.</li>
  <li><strong>Refinement with your feedback.</strong> The design is adjusted until it fits your needs.</li>
  <li><strong>Materials and facade.</strong> Choices made for looks, upkeep and the tropical climate.</li>
  <li><strong>Planning for daily use.</strong> Storage, light, ventilation and the details that make a home easy to live in.</li>
  <li><strong>Coordination with structure and authority requirements.</strong> The design is coordinated with the engineers' work and the rules the plans must meet before they are submitted.</li>
</ol>

<h2>Approvals and the CCC</h2>
<p>Before a building can be built, its plans must be approved by the local authority. Under the Architects Act, submitting plans or drawings to a local authority is one of the architectural consultancy services an architect provides, and PAM describes the architect as your agent when submitting drawings for planning and building approvals.</p>
<p>At the end of the project, the building needs a Certificate of Completion and Compliance (CCC). It is issued by the project's Principal Submitting Person (PSP), not by the council. The PSP can be an architect, a professional engineer or a registered building draughtsman, and the Ministry of Housing and Local Government names the architect as the appropriate PSP for residential and housing projects. Read more in our <a href="/blog/certificate-of-completion-and-compliance-malaysia">guide to the CCC in Malaysia</a>.</p>

<h2>During construction</h2>
<p>PAM describes the architect's role during construction as calling for and awarding tenders, administering the building contract, and advising you on your rights and responsibilities towards the contractor, while dealing fairly with both sides. For the CCC, the PSP must supervise the construction and make sure the building follows the approved plans and the council's technical conditions, and is safe and fit to occupy.</p>

<h2>Do you need an architect for your home?</h2>
<ul>
  <li><strong>A new house or a major extension:</strong> yes. Plans need council approval and the finished building needs a CCC signed by a PSP; for homes, that is normally the architect.</li>
  <li><strong>A renovation that changes the structure or facade:</strong> such works may need approval from your local council or building management. Ask an architect to confirm what your project needs before work starts.</li>
  <li><strong>Interior-only changes:</strong> you may only need an interior designer. See our <a href="/guides/interior-design-malaysia/">guide to interior design in Malaysia</a>.</li>
</ul>

<h2>Questions to ask before you appoint an architect</h2>
<ul>
  <li>Are you registered with LAM as an Architect? Under what name?</li>
  <li>Which of the stages above are included in your service?</li>
  <li>Will you act as the Principal Submitting Person and certify the CCC?</li>
  <li>Can I see completed homes similar to mine?</li>
</ul>

<h2>Sources</h2>
<ul>
  <li>Laws of Malaysia: <a href="https://www.lam.gov.my/my-assets/docs/actRules/architects_act_1967_incorparating_amendments_up_to_february_2015.pdf_-_final.pdf" target="_blank" rel="noopener noreferrer">Architects Act 1967 (Act 117)</a>, section 2 (definition of "architectural consultancy services") and section 7 (restrictions on unregistered persons), incorporating amendments up to February 2015, published by LAM.</li>
  <li>Pertubuhan Akitek Malaysia (PAM): <a href="https://pam.org.my/42-resources/284-architectural-services.html" target="_blank" rel="noopener noreferrer">Architectural Services: process of obtaining an architect</a>.</li>
  <li>Local Government Department, Ministry of Housing and Local Government (KPKT): <a href="https://jkt.kpkt.gov.my/about-lgd/faqs/certificate-of-completion-and-compliance-ccc-faq" target="_blank" rel="noopener noreferrer">Certificate of Completion and Compliance (CCC) FAQ</a>.</li>
</ul>
<p><em>This guide is general information, not legal advice. What a specific project needs depends on its approvals and the local authority.</em></p>
`,
  },
  {
    id: "interior-design-malaysia",
    slug: "interior-design-malaysia",
    path: "/guides/interior-design-malaysia/",
    createdAt: "2026-10-21T14:00:00Z",
    author: "Hidi Lau",
    tags: "Interior Design",
    image: aorInterior,
    title: "Interior Design in Malaysia: A Homeowner's Guide to the Process",
    seoTitle: "Interior Design in Malaysia: A Homeowner's Guide",
    excerpt:
      "Interior design in Malaysia covers far more than furniture and colours: it plans how a home works, from layout and storage to lighting, materials and built-ins. This guide explains what an interior designer does, who may legally call themselves one, and how a project runs from brief to handover.",
    content: `
<h2>The short answer</h2>
<p>Interior design is the planning of a building's inside spaces so they are comfortable, practical and good to look at. A good interior designer works out how you will move through a room, where things are stored, how light falls at different times of day and which materials will last in Malaysia's heat and humidity, before any furniture is chosen.</p>
<p>In Malaysia, interior design is a regulated profession. The title "Interior Designer" is protected by law, so it is worth checking who you hire.</p>

<h2>What does an interior designer do?</h2>
<p>For a home, the work usually covers:</p>
<ul>
  <li>an interior concept that fits the architecture and the way you live;</li>
  <li>space planning and the furniture layout;</li>
  <li>materials and colours, chosen for looks, upkeep and the climate;</li>
  <li>lighting, both everyday light and the mood of each room;</li>
  <li>built-in cabinets and storage;</li>
  <li>feature walls, ceilings and the finishing details;</li>
  <li>coordination with the building's structure and services, so the design can actually be built.</li>
</ul>

<h2>Who can call themselves an interior designer in Malaysia?</h2>
<p>Under Part VA of the Architects Act 1967 (Act 117), the Board of Architects Malaysia (Lembaga Arkitek Malaysia, LAM) keeps a Register of Interior Designers. A person who is not registered may not use the title "Interior Designer", advertise themselves as one, or recover fees in court for interior design services.</p>
<p>To register, a designer must pass the route the Board sets (as a Graduate Interior Designer with practical experience and the Board's examination), or be a corporate member of the Malaysian Institute of Interior Design (MIID) or hold a qualification the Board accepts as equivalent. A registered architect is also entitled by the Board to practise as an Interior Designer.</p>
<p><strong>Tip:</strong> ask for the designer's LAM registration number and confirm it with the Board before you sign anything.</p>

<h2>How an interior design project runs</h2>
<ol>
  <li><strong>Brief.</strong> You explain how you live, what is not working today, your must-haves and your budget range. Bring photos of spaces you like.</li>
  <li><strong>Site visit and measurements.</strong> The designer measures the space and notes the structure, windows, wiring and plumbing that the design must work with.</li>
  <li><strong>Concept.</strong> A first layout and a mood for the home: materials, colours and the overall look.</li>
  <li><strong>Design development.</strong> Detailed layouts, ceilings, lighting, built-ins and the selection of finishes.</li>
  <li><strong>Drawings for construction.</strong> The drawings and specifications that contractors price and build from.</li>
  <li><strong>Approvals where needed.</strong> Works that touch the structure, the facade or the building's services may need approval from your local council or building management. Ask your designer to confirm this for your project before work starts.</li>
  <li><strong>Construction and site checks.</strong> The designer checks the work against the drawings and answers contractors' questions.</li>
  <li><strong>Handover.</strong> A final inspection, a list of defects to fix, then the keys back to you.</li>
</ol>

<h2>Why plan the interior with the architecture</h2>
<p>Many problems in finished homes come from designing the inside after the building is fixed: a beam where the wardrobe should go, a socket behind the sofa, a window that floods the TV wall with glare. When the architect and interior designer plan together from the start, the layout, light, storage and structure fit from day one, and fewer changes are needed on site.</p>

<h2>Questions to ask before you hire</h2>
<ul>
  <li>Are you registered with the Board of Architects Malaysia? Under what name?</li>
  <li>Which stages of the process above are included, and which are not?</li>
  <li>Who checks the work on site, and how often?</li>
  <li>Can I see completed homes similar in size and style to mine?</li>
</ul>

<h2>Sources</h2>
<ul>
  <li>Board of Architects Malaysia (LAM): <a href="https://classic.lam.gov.my/registration-requirement-interior-designers" target="_blank" rel="noopener noreferrer">Requirements for registration as Interior Designer</a>.</li>
  <li>Laws of Malaysia: <a href="https://www.lam.gov.my/my-assets/docs/actRules/architects_act_1967_incorparating_amendments_up_to_february_2015.pdf_-_final.pdf" target="_blank" rel="noopener noreferrer">Architects Act 1967 (Act 117), Part VA, sections 27A to 27E</a> (incorporating amendments up to February 2015), published by LAM.</li>
</ul>
<p><em>This guide is general information, not legal advice. What a specific project needs depends on its approvals and the local authority.</em></p>
`,
  },
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
