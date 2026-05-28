# EGSA 70th Anniversary Website

Official website for the **Ebenezer Grammar School, Iberekodo, Abeokuta Old Students Association (EGSAOSA)** 70th Anniversary Platinum Jubilee celebration (1956–2026).

**Motto:** _"Strive for the Highest"_

## About EGSAOSA

Founded in 1956, Ebenezer Grammar School Abeokuta has remained a citadel of learning and a powerhouse for producing distinguished Nigerians. The school celebrates **70 years of Academic Excellence, Character Building, and Service to Humanity** in 2026.

## Press Coverage

The 70th anniversary press conference was held on **Monday, 13th April 2026** at Ebenezer Grammar School, Iberekodo, Abeokuta, and was covered by multiple national media outlets:

### Key Highlights from the Press Conference

- **National President Engr. (Alhaji) Tajudeen Adisa Olórí, FNSE** urged the Ogun State Government to strengthen funding and infrastructure in the education sector rather than pursuing a blanket return of public schools to missionary owners, warning that previous attempts created disparities and placed financial burdens on parents.

- Olórí described the 70-year milestone as _"a moment of reflection and renewed commitment to future development,"_ noting that EGSA has remained a centre of excellence producing notable alumni contributing to national and international development.

- **Security Transformation:** The school environment was previously plagued by miscreants but has improved significantly due to collaboration between the government, alumni, and security agencies. The campus is now a secure, fenced, and conducive learning environment.

- **Infrastructure Projects by EGSAOSA:** Construction and renovation of classrooms and hostels, provision of a modern library, boreholes, furniture, perimeter fencing, and repainting of school buildings.

- **ICT for Education:** In partnership with the Nigerian Communications Commission (NCC) and the National Information Technology Development Agency (NITDA), EGSAOSA established two ICT centres — the **USPF/NCC IT Centre** and the **Engr. Tajudeen Olórí Computer Centre** — to enhance digital learning and prepare students for Computer-Based Test (CBT) examinations.

- **Academic Achievements:** Ebenezer Grammar School won the **2025 Engineering and You** competition organised by the Nigerian Society of Engineers (NSE), and the **ANCHOPSS national debate competition** held in Imo State, among other accolades.

- **National Secretary Engr. (Dr.) Adekunle Musa, FNSE** unveiled plans for the anniversary celebrations including the construction of a **commemorative monument**, establishment of an **endowment fund**, and publication of a **comprehensive history book** of the school (1956–2026).

### Media Sources

| Publication | Article |
|---|---|
| **FortressNews** | [Ebenezer @70: Alumni President Engr. Olori Cautions Govt Against Blanket Return of Public Schools to Missionary Owners](https://fortressnews.com.ng/ebenezer-70-alumni-president-engr-olori-cautions-govt-against-blanket-return-of-public-schools-to-missionary-owners/) |
| **Fackt** | [EGSAOSA Marks 70 Years of Excellence, Unveils Ambitious Legacy Projects for School](https://fackt.com.ng/egsaosa-marks-70-years-of-excellence-unveils-ambitious-legacy-projects-for-school/) |
| **Salient Times** | [Ebenezer Grammar School @70: Alumni President, Olori, Sounds Note of Caution](https://salienttimes.com/2026/04/14/ebenezer-grammar-school-70-alumni-president-olori-sounds-note-of-caution/) |
| **Business Hallmark** | [EGSAOSA at 70: Olori Urges Ogun to Strengthen Funding, Not Return Schools to Missionaries](https://hallmarknews.com/egsaosa-at-70-olori-urges-ogun-to-strengthen-funding-not-return-schools-to-missionaries/) |

## Anniversary Events

| Event | Date | Notes |
|---|---|---|
| Press Conference | Monday, 13th April 2026 | Ìbẹ̀rẹ̀kòdó, Abeokuta — Successfully Flagged Off |
| The Anniversary Week | 29th – 31st May 2026 | |
| The Grand Finale | Saturday, 30th May 2026 | Unveiling of the Commemorative Monument and Launch of the Endowment Fund |

## Legacy Projects

- **Two ICT Centres** for CBT readiness and global competitiveness
- **Perimeter fencing & campus security** transformation
- **Renovated classrooms, hostels, library, boreholes, and furniture**
- **70th Anniversary Commemorative Monument** (upcoming)
- **Endowment Fund** for long-term sustainability and student support

## Tech Stack

- [Next.js 16](https://nextjs.org/) with App Router
- React 19
- TypeScript
- CSS Modules
- Deployed on [Google Cloud Run](https://cloud.google.com/run)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Deploy to Google Cloud Run:

```bash
pnpm deploy:cloud
```

This runs `gcloud run deploy` targeting the `egsa-anniversary` service in `europe-west1`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Public Sans font
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Design tokens & utility classes
├── components/
│   ├── layout/             # Navigation & Footer
│   ├── HeroSection.tsx     # Hero with countdown
│   ├── AboutSection.tsx    # Heritage & leadership messages
│   ├── ExcoSection.tsx     # National Executive Committee
│   ├── ExcoMemberCard.tsx  # Reusable exco member card
│   ├── JubileeEvents.tsx   # Event timeline
│   ├── LegacyProjects.tsx  # Infrastructure projects
│   ├── GiveBack.tsx        # Endowment & merchandise
│   └── ContactSection.tsx  # Contact information
├── data/
│   └── content.json        # All site content (single source of truth)
└── types/
    └── index.ts            # TypeScript interfaces
```

## Developer

Built by **Techconsult Limited**

---

© 2026 EGSAOSA. All rights reserved.
