# Post-Mortem Template

## Incident Summary

| Field | Value |
|-------|-------|
| **Incident ID** | [INC-XXX] |
| **Title** | [Brief title] |
| **Date** | [YYYY-MM-DD] |
| **Duration** | [Start time] - [End time] (X hours Y minutes) |
| **Severity** | [SEV-1/2/3/4] |
| **Status** | [Draft | In Review | Complete] |
| **Author** | [Name] |
| **Incident Commander** | [Name] |

---

## Executive Summary

*Brief overview of what happened, impact, and resolution.*

[Write 2-3 sentences summarizing the incident for leadership.]

---

## Impact

### User Impact
- [Number] users affected ([X]% of user base)
- [Description of what users experienced]
- [Support tickets received]

### Business Impact
- Revenue impact: $[amount] (if applicable)
- SLA/SLO impact: [Details]
- Reputation impact: [Details]

### Technical Impact
- Services affected: [List]
- Data impact: [None/Lost/Corrupted - describe]
- Downstream systems: [List]

---

## Timeline

*All times in [Timezone]*

| Time | Event |
|------|-------|
| HH:MM | Incident began (users started experiencing issues) |
| HH:MM | Alert fired |
| HH:MM | On-call acknowledged |
| HH:MM | Incident declared |
| HH:MM | Root cause identified |
| HH:MM | Mitigation implemented |
| HH:MM | Service restored |
| HH:MM | Incident resolved |

---

## Root Cause

*What caused this incident?*

[Describe the root cause in detail. Use the "5 Whys" technique to dig deep.]

### Contributing Factors

1. [Factor 1]
2. [Factor 2]
3. [Factor 3]

---

## Detection

### How was the incident detected?

- [ ] Automated alerting
- [ ] User reports
- [ ] Internal testing
- [ ] Monitoring dashboard
- [ ] Other: [describe]

### Time to Detection

- **From incident start to alert**: X minutes
- **From alert to acknowledgment**: Y minutes

### Detection Gaps

[Could this have been detected earlier? How?]

---

## Response

### What went well

- [Item 1]
- [Item 2]
- [Item 3]

### What went poorly

- [Item 1]
- [Item 2]
- [Item 3]

### Challenges Faced

[Describe any obstacles during response:]

---

## Resolution

### How was the incident resolved?

[Describe the fix applied:]

### Was rollback required?

- [ ] Yes - [describe rollback process]
- [ ] No - [describe forward fix]

---

## Action Items

*Preventive measures to avoid recurrence.*

| ID | Action | Owner | Priority | Due Date | Status |
|----|--------|-------|----------|----------|--------|
| 1 | [Action item] | [Name] | [P0/P1/P2] | [Date] | [Open/Done] |
| 2 | [Action item] | [Name] | [P0/P1/P2] | [Date] | [Open/Done] |
| 3 | [Action item] | [Name] | [P0/P1/P2] | [Date] | [Open/Done] |

### Action Item Categories

#### Immediate (This Week)
- [Action items that should be done immediately]

#### Short-term (This Month)
- [Action items for the near future]

#### Long-term (This Quarter)
- [Action items requiring more planning]

---

## Lessons Learned

### What did we learn?

1. [Learning 1]
2. [Learning 2]
3. [Learning 3]

### What could have gone worse?

[Near misses or lucky breaks]

### Where did we get lucky?

[Be honest about luck vs. preparation]

---

## Blameless Assessment

*This section ensures we focus on systems, not individuals.*

### System Failures

[What system weaknesses contributed?]

### Process Failures

[What process gaps were exposed?]

### Tool Failures

[What tool limitations were revealed?]

---

## Follow-up

### Review Schedule

- **30-day review**: [Date] - Verify action items completed
- **90-day review**: [Date] - Confirm no recurrence

### Communication

- [ ] Shared with engineering team
- [ ] Shared with leadership
- [ ] Shared with customers (if appropriate)
- [ ] Added to incident knowledge base

---

## Appendix

### Related Documents

- [Link to incident chat log]
- [Link to monitoring dashboards]
- [Link to related runbooks]
- [Link to architecture diagrams]

### Additional Context

[Any supplementary information]

---

*Template version: 1.0 | Based on blameless post-mortem best practices*
