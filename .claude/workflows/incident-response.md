# Incident Response Workflow

## Purpose

Provide a structured approach to responding to production incidents, minimizing impact and restoring service quickly.

## Severity Levels

| Severity | Description | Response Time | Communication |
|----------|-------------|---------------|---------------|
| SEV-1 | Complete outage, data loss | Immediate | Executive + Customer |
| SEV-2 | Major functionality impaired | 15 minutes | Customer |
| SEV-3 | Minor impact, workaround exists | 1 hour | Internal |
| SEV-4 | Minimal impact | 4 hours | Internal |

## Roles

### Incident Commander (IC)
- Leads incident response
- Makes decisions
- Coordinates responders
- Documents timeline

### Technical Lead
- Diagnoses root cause
- Implements mitigation
- Provides technical updates

### Communications Lead
- Updates status page
- Communicates with stakeholders
- Manages customer communication

### Scribe
- Records timeline
- Takes notes
- Tracks action items

## Phases

### Phase 1: Detection & Declaration

**Activities:**
1. Alert received or issue reported
2. On-call acknowledges
3. Assess severity
4. Declare incident
5. Page appropriate responders

**Checklist:**
- [ ] Alert acknowledged
- [ ] Severity assessed
- [ ] Incident declared
- [ ] Responders paged
- [ ] Incident channel created

---

### Phase 2: Triage & Assessment

**Activities:**
1. Gather initial information
2. Identify affected systems/users
3. Estimate impact
4. Assign roles (IC, Tech Lead, Comms, Scribe)

**Checklist:**
- [ ] Impact understood
- [ ] Roles assigned
- [ ] Status page updated (if SEV-1/2)
- [ ] Stakeholders notified

---

### Phase 3: Mitigation

**Activities:**
1. Diagnose root cause
2. Identify mitigation options
3. Implement fastest safe mitigation
4. Verify improvement

**Checklist:**
- [ ] Root cause identified (or hypothesis)
- [ ] Mitigation plan defined
- [ ] Mitigation implemented
- [ ] Service restored or improving

---

### Phase 4: Resolution

**Activities:**
1. Implement permanent fix (if different from mitigation)
2. Verify full resolution
3. Monitor for recurrence
4. Stand down responders

**Checklist:**
- [ ] Fix implemented
- [ ] Service fully restored
- [ ] Metrics normal
- [ ] Incident resolved
- [ ] Team stood down

---

### Phase 5: Post-Incident

**Activities:**
1. Schedule post-mortem (within 48 hours)
2. Document timeline
3. Conduct blameless post-mortem
4. Define action items
5. Share learnings

**Checklist:**
- [ ] Post-mortem scheduled
- [ ] Timeline documented
- [ ] Root cause confirmed
- [ ] Action items defined
- [ ] Learnings shared
- [ ] Follow-ups tracked

---

## Communication Templates

### Initial Update
```
INCIDENT UPDATE - {TIME}
Status: Investigating
Impact: {description of what users are experiencing}
Next update: {time}
```

### Resolution Update
```
INCIDENT RESOLVED - {TIME}
Duration: {start time} - {end time}
Root Cause: {brief description}
Resolution: {what was done}
Post-mortem: Will be shared within 48 hours
```

## Escalation Path

| Severity | Escalate After | Escalate To |
|----------|----------------|-------------|
| SEV-1 | Immediate | CTO, VP Eng |
| SEV-2 | 30 minutes | VP Eng |
| SEV-3 | 2 hours | Eng Manager |

## Tools

- **Incident Management**: incident.io, PagerDuty
- **Communication**: Slack, Zoom
- **Status Page**: Statuspage, Instatus
- **Documentation**: Post-mortem template

## Related Workflows

- [Bug Fixing Workflow](./bug-fixing.md)
- [Root Cause Analysis Workflow](./root-cause-analysis.md)
- [Disaster Recovery Workflow](./disaster-recovery.md)

---

*This workflow ensures incidents are handled efficiently with clear communication.*
