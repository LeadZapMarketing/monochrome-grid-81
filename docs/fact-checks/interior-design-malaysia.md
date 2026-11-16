# Fact-check: Interior Design in Malaysia (strengthened, 17 Nov 2026)

- Page: https://hidilauarchitect.com/guides/interior-design-malaysia/
- Draft: branch `guide/interior-design-strengthen`, `src/data/guides.ts`, entry `id: "interior-design-malaysia"` (content between `content: \`` and the closing backtick). Plain copy of the new body: `docs/fact-checks/interior-design-malaysia.draft.html`.
- Plan item: plan-1-2026-11 i5 (strengthen the guide at its d28 and link the Johor Bahru interior design service page).
- What changed: new sections "How to check a designer's registration", "Interior designer, design-and-build company or renovation contractor?" (with the CIDB rule), "How interior design fees are charged", "Interior design in Johor Bahru with HIDI Lau Architect", "Common questions"; one line on the Malay term; two new questions in the hire checklist; three new sources. Existing text (what an interior designer does, Part VA, the project steps, planning with the architecture) is unchanged.
- No prices, offers or client claims that the client has not stated. Byline stays the firm (no named reviewer).
- Search Console, 28 days to 14 Nov: 442 impressions, 1 click, position 36.8; top queries "interior design" (144, pos 38), "interior design malaysia" (74, pos 47), "interior designer malaysia" (47, pos 45), "architecture and interior design malaysia" (26, pos 31), "interior design and build malaysia" (23, pos 30), "interior design in malay" (6, pos 19), "interior design registration" (1, pos 1).

## Sources
- S1 LAM, Requirements for Registration as Interior Designer: https://classic.lam.gov.my/registration-requirement-interior-designers (read 17 Nov via r.jina.ai). Items 1 and 2; "Registration Check: List of Registered Individuals & Consultancy Practices" link to https://classic.lam.gov.my/registration-check.
- S2 Architects Act 1967 (Act 117), Part VA ss.27A-27E, LAM PDF (amendments to Feb 2015). Already the guide's source (unchanged text).
- S3 Architects (Scale of Minimum Fees) Rules 2010, P.U.(A) 53/2010, LAM PDF: https://www.lam.gov.my/my-assets/docs/actRules/LAM%20-%20Architects-Scale%20of%20Minimum%20Fees-Rule%202010.pdf (same file the architect fees guide was checked against on 16 Nov).
- S4 CIDB Act 1994 (Act 520), as at 1 Oct 2015, CIDB PDF: https://www.cidb.gov.my/wp-content/uploads/2022/12/Act-520-As-at-1-October-2015.pdf
- S5 CIDB, Contractor Registration: https://www.cidb.gov.my/eng/contractor-registration/ (read 17 Nov via r.jina.ai).
- C1 Client's own site: src/data/projects.ts and src/pages/services/InteriorDesign.tsx; src/pages/About.tsx (credentials).

## Claims (new or changed text only)

| # | Claim | Source |
|---|---|---|
| 1 | In Malay, an interior designer is a "perekabentuk dalaman"; the professional body is the Institut Perekabentuk Dalaman Malaysia, or Malaysian Institute of Interior Design (MIID) | S1 item 1: "a corporate member of the 'Institut Perekabentuk Dalaman Malaysia' or the Malaysian Institute of Interior Design (MIID)" |
| 2 | LAM lists registered individuals and consultancy practices on its website; its "registration check" page is where to check a name | S1 "Online Services: Registration Check — List of Registered Individuals & Consultancy Practices" → https://classic.lam.gov.my/registration-check (page title "Registration Check | Lembaga Arkitek Malaysia", read 17 Nov). The myLAM "List of Registrations (Interior Designers)" link on S1 now ends in a 404, so it is not linked. |
| 3 | (merged into 2) | |
| 4 | Three ways homeowners hire for an interior (designer only; design-and-build company; renovation contractor) and what each means in practice | General description, no legal or numeric claim; advice framed as "ask for a clear breakdown" |
| 5 | The company that carries out the works must be registered with CIDB; under s.25 of Act 520 no one may carry out construction work or hold themselves out as a contractor unless registered | S4 s.25(1): "No person shall carry out or complete, undertake to carry out or complete any construction work or hold himself out as a contractor, unless he is registered with the Lembaga and holds a valid certificate of registration"; S5: "mandatory for all contractors … to register with … CIDB under Section 25 of Act 520 … except those who are exempted under Section 40(1)" |
| 6 | The Act defines construction work to include renovation and alteration of a building | S4 s.2: "'construction works' means the construction, extension, installation, repair, maintenance, renewal, removal, renovation, alteration, dismantling, or demolition of (a) any building …" |
| 7 | Under s.29, anyone convicted of breaking this rule can be fined RM10,000 to RM100,000 | S4 s.29: "Any person who contravenes subsection 25(1) shall be guilty of an offence and shall, on conviction, be liable to a fine of not less than ten thousand ringgit but not more than one hundred thousand ringgit"; S5 says the same |
| 8 | When an architectural practice provides interior design, the 2010 fee rules treat it as a supplementary service; minimum fee 10% of the total cost of works | S3 r.13(h) (Supplementary Services include "providing interior design services …"); r.24(3): "The minimum fees for providing interior design services as specified in paragraph 13(h) shall be 10% of the total cost of works." Same as claim 22 of the architect fees guide (Chief approval 16 Nov) |
| 9 | The fee and what it includes should be agreed in writing before work starts | Advice; consistent with the architect fees guide (approved 16 Nov) |
| 10 | HIDI Lau Architect is led by Ar. Hidi Lau Wei Lin, an Architect registered with LAM | C1 About.tsx; same sentence already live on the bungalow guide (approved) |
| 11 | A registered architect may practise as an Interior Designer, so the same studio can design building and interior | S1 item 2: "Any person who is registered under subsection 10(2) as an Architect shall be entitled to practise or carry on business as an Interior Designer." |
| 12 | The Courtyard House, Eco Sanctuary and Indah Putra Bungalow are Johor Bahru homes where the architecture and interior were designed together | C1 projects.ts: courtyard-house, eco-sanctuary, indah-putra: location Johor Bahru; projectType "Residential Architecture & Interior Design"; scope includes "Architecture, Interior Design" |
| 13 | The East Meets West, Johor Bahru, is interior-only: full interior, furniture/fittings/equipment specification and bespoke joinery | C1 projects.ts east-meets-west: location Johor Bahru, projectType "Residential Interior Design", scope "Full Interior Design, FF&E Specification, Bespoke Joinery" |
| 14 | The firm's interior steps: concept, space plan, materials and colours, lighting, built-in cabinets and storage, feature walls and ceilings, finishes, coordination with the structure | C1 InteriorDesign.tsx processItems (8 items) |
| 15 | Works that touch the structure, the facade or services may need approval from the local council or building management | Unchanged wording from the live guide (step 6), repeated in the FAQ; links the renovation guide |
| 16 | FAQ: an architect registered with the Board is entitled to practise as an Interior Designer | S1 item 2 (as claim 11) |
| 17 | FAQ: the contractor must be registered with CIDB; ask for its certificate | S4 s.25(1); S5 (contractors must display the certificate at their place of business) |

## Something only the client has
- The firm's own interior projects in Johor Bahru (claims 12-13) and its own interior process (claim 14), from the client's site.

## Checked by Chief of Staff 17 Nov 2026: PASS
- 1 ✓ LAM "Requirements for Registration as Interior Designer" item 1 names the Institut Perekabentuk Dalaman Malaysia / MIID.
- 2 ✓ LAM registration-check page answers 200, title "Registration Check | Lembaga Arkitek Malaysia"; right not to link the myLAM list.
- 3 — merged into 2.
- 4 ✓ Descriptive, no legal or numeric claim.
- 5 ✓ Act 520 s.25(1) and CIDB's registration page (exemptions exist under s.40(1)).
- 6 ✓ s.2 "construction works" includes renovation and alteration.
- 7 ✓ s.29 fine RM10,000 to RM100,000; CIDB page repeats it.
- 8 ✓ 2010 Rules para 13(h) and rule 24(3), 10% of total cost of works.
- 9 ✓ Advice line, consistent with rule 3 of the 2010 Rules.
- 10 ✓ About page: Ar. Hidi Lau Wei Lin registered with LAM.
- 11 ✓ LAM page item 2.
- 12 ✓ projects.ts courtyard-house, eco-sanctuary, indah-putra; pages live.
- 13 ✓ projects.ts east-meets-west; page live.
- 14 ✓ InteriorDesign.tsx processItems, eight items in order.
- 15 ✓ Unchanged live wording; renovation guide link resolves.
- 16 ✓ As 11.
- 17 ✓ s.25(1); CIDB: certificate displayed at the place of business.
- Title, description, author schema and byline unchanged; internal links live.
