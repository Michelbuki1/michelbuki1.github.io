# Bug Fixing Workflow

## Purpose

Standardize the process for identifying, diagnosing, and resolving bugs in production and development environments.

## Severity Levels

| Severity | Description | Response Time | Examples |
|----------|-------------|---------------|----------|
| SEV-1 | Critical - System down | Immediate | Complete outage, data loss |
| SEV-2 | Major - Core functionality broken | 15 minutes | Payment failures, auth issues |
| SEV-3 | Minor - Workaround exists | 1 hour | Non-critical feature broken |
| SEV-4 | Trivial - Cosmetic | Next business day | UI typos, minor visual issues |

## Roles Involved

- Reporter (whoever finds the bug)
- On-call Engineer / SRE
- Engineering Team
- QA Engineer
- Product Manager (for customer communication)

## Phases

### Phase 1: Bug Report & Triage

**Owner:** Reporter → On-call Engineer

**Activities:**
1. Create bug report with details
2. Assign severity level
3. Reproduce the issue (if possible)
4. Identify affected users/systems
5. Assign to appropriate engineer

**Outputs:**
- Documented bug report
- Severity assigned
- Owner identified

**Checklist:**
- [ ] Steps to reproduce documented
- [ ] Expected vs actual behavior clear
- [ ] Screenshots/logs attached
- [ ] Severity assessed
- [ ] Owner assigned

---

### Phase 2: Diagnosis

**Owner:** Assigned Engineer

**Activities:**
1. Reproduce the bug
2. Gather additional logs/metrics
3. Identify root cause
4. Estimate fix complexity
5. Determine if immediate fix needed

**Outputs:**
- Root cause identified
- Fix approach defined
- Timeline estimated

**Checklist:**
- [ ] Bug reproduced
- [ ] Root cause understood
- [ ] Fix approach documented
- [ ] Timeline estimated
- [ ] Rollback considered (if needed)

---

### Phase 3: Fix Implementation

**Owner:** Assigned Engineer

**Activities:**
1. Create hotfix branch (if urgent) or feature branch
2. Implement fix
3. Write regression tests
4. Test locally
5. Open pull request (mark urgent if needed)

**Outputs:**
- Fix implemented
- Tests added
- PR opened

**Checklist:**
- [ ] Fix addresses root cause
- [ ] Regression tests added
- [ ] Local testing passed
- [ ] No new issues introduced
- [ ] PR documented

---

### Phase 4: Review & Testing

**Owner:** Tech Lead + QA

**Activities:**
1. Expedited code review
2. Deploy to staging (if time permits)
3. QA verification
4. Confirm fix resolves issue

**Outputs:**
- PR approved
- QA sign-off

**Checklist:**
- [ ] Code reviewed
- [ ] Staging tested (if applicable)
- [ ] QA verified fix
- [ ] No regressions detected

---

### Phase 5: Deployment

**Owner:** DevOps / On-call Engineer

**Activities:**
1. Deploy fix to production
2. Monitor metrics closely
3. Verify fix in production
4. Close bug if resolved

**Outputs:**
- Fix deployed
- Issue resolved

**Checklist:**
- [ ] Deployment successful
- [ ] Metrics normal
- [ ] Fix verified in production
- [ ] Bug status updated

---

### Phase 6: Post-Mortem (for SEV-1/SEV-2)

**Owner:** Engineering Team

**Activities:**
1. Schedule post-mortem meeting
2. Document timeline
3. Identify root cause
4. Define preventive actions
5. Share learnings

**Outputs:**
- Post-mortem document
- Action items tracked

**Checklist:**
- [ ] Timeline documented
- [ ] Root cause confirmed
- [ ] Preventive actions defined
- [ ] Owners assigned
- [ ] Learnings shared

---

## Escalation Path

| Situation | Escalate To |
|-----------|-------------|
| Can't reproduce | Senior Engineer |
| Fix complex/timeline risk | Tech Lead |
| Customer impact significant | Product Manager |
| SEV-1 incident | VP Engineering / CTO |

## Templates

- [Bug Report Template](../../templates/bug-report.md)
- [Post-mortem Template](../../templates/postmortem.md)

## Related Workflows

- [Incident Response Workflow](./incident-response.md)
- [Root Cause Analysis Workflow](./root-cause-analysis.md)

---

*This workflow ensures bugs are fixed efficiently while preventing regressions.*
