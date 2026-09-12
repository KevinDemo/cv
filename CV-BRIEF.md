# CV brief — Sydney senior/lead .NET job search

Context for anyone (human or Claude) working on this repo.

## Who this CV is for

Kevin (Ning) Chen. 15 years C#/.NET, currently Lead .NET Engineer at Urgent Courier Ltd
(NZ top-3 logistics). Recently relocated Auckland to Sydney. NZ citizen on an SCV 444,
full Australian work rights, no sponsorship needed.

Target: permanent Senior or Lead .NET role in Sydney, AUD $140k–$160k base plus super,
hybrid 3 days on-site. Actively applying now.

## Files

- `resume/data.yml` — YAML source
- `src/data/resume.js` — JS source, must stay in sync with the YAML
- Build: `npm install` then `npm run pdf`

## Editorial decisions already made — keep these

1. **No birth year.** Age never goes on an Australian CV.
2. **Single employer entry, 2010 – Present.** Progression is stated in the first bullet
   rather than split into dated sub-roles, because the promotion years are not confirmed.
   Do not invent dates to split it.
3. **SQL Server is bullet one.** 2M+ transactions/day is the most differentiating thing
   on the page. Most senior .NET candidates in Sydney are weak here. It leads.
4. **Skills list is deliberately short.** Depth over breadth. Everything listed must
   survive an interview probe.
5. **Name is "Kevin (Ning) Chen"** so it matches the LinkedIn profile (`ning-chen-...`).
   Recruiters cross-check and a mismatch stalls things.
6. **`languages` field was removed.** No template in this repo renders it. English and
   Mandarin now live in `knowledge`, which does render.
7. **City is "Sydney, NSW".** Not "recently relocated" — that flags a lack of local
   experience.
8. **Work rights stated explicitly.** Many recruiters don't know the Trans-Tasman
   arrangement and assume sponsorship is needed.

## Do NOT add back

These were removed on purpose because they are claimed skill gaps, not real strengths.
Re-adding them creates interview risk:

- Terraform
- Kubernetes / AKS
- React
- NGRX
- gRPC, CQRS
- Octopus Deploy, GitHub Actions
- AWS (unverified, and it dilutes the Azure narrative)
- GitLab CI (unverified; Azure DevOps is the real pipeline)

Also removed: several quantified claims (35% cost reduction, 70% fewer deployment errors).
Ten numbers in one role reads as invented. Five defensible ones is stronger.

## Open questions

1. Is the .NET Framework to .NET 8 migration complete, or still in progress? If partial,
   reword to "leading the migration of".
2. How deep and how current is the Angular work? If it's read-and-maintain rather than
   build-and-own, cut Frontend to a single line.
3. Confirm the notice period. Currently written as four weeks.

## Writing style

Plain and direct. No em dashes. No corporate filler, no buzzwords, no symmetrical
sentence structures. Concrete numbers over adjectives.
