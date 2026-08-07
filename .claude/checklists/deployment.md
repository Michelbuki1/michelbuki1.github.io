# Deployment Checklist

## Purpose

Ensure safe, consistent deployments to production with minimal risk and maximum reliability.

---

## Pre-Deployment (1-2 Days Before)

### Code Readiness
- [ ] All features complete and tested
- [ ] Code review approved
- [ ] CI/CD pipeline passing
- [ ] No critical bugs open
- [ ] Security scan passed

### Testing
- [ ] Unit tests passing (>80% coverage)
- [ ] Integration tests passing
- [ ] E2E tests passing
- [ ] Performance tests passing
- [ ] Load tests completed (if major change)

### Documentation
- [ ] Release notes drafted
- [ ] API documentation updated
- [ ] Runbooks updated (if needed)
- [ ] Customer communication prepared

### Stakeholder Alignment
- [ ] Product Manager approval
- [ ] Engineering Lead approval
- [ ] Support team briefed
- [ ] Customer success notified (if customer-facing)

---

## Day of Deployment

### Pre-Deployment (2 Hours Before)

#### Environment Check
- [ ] Staging environment healthy
- [ ] Production metrics normal
- [ ] No ongoing incidents
- [ ] Team available for support

#### Backup & Recovery
- [ ] Database backup completed
- [ ] Rollback procedure reviewed
- [ ] Rollback tested (if major change)
- [ ] Feature flags configured (if applicable)

#### Communication
- [ ] Deployment announcement sent
- [ ] War room channel created (if major)
- [ ] On-call engineer confirmed
- [ ] Status page ready (if needed)

---

### During Deployment

#### Execution
- [ ] Following deployment runbook
- [ ] Monitoring deployment progress
- [ ] Logging deployment steps
- [ ] Ready to rollback if needed

#### Verification
- [ ] Health checks passing
- [ ] Smoke tests passing
- [ ] Key user flows working
- [ ] Metrics within normal range
- [ ] Error rates acceptable

---

### Post-Deployment (Within 1 Hour)

#### Technical Validation
- [ ] All services healthy
- [ ] Database connections stable
- [ ] Cache warming complete (if applicable)
- [ ] Background jobs running
- [ ] Logs flowing correctly

#### Business Validation
- [ ] Critical user journeys verified
- [ ] Payment processing working (if applicable)
- [ ] Key integrations functional
- [ ] Analytics tracking correctly

#### Monitoring
- [ ] Dashboards updated
- [ ] Alerts configured
- [ ] Error tracking active
- [ ] Performance monitoring active

---

## Post-Deployment (Day After)

### Review
- [ ] No increase in support tickets
- [ ] Error rates normal
- [ ] Performance metrics stable
- [ ] User feedback positive

### Cleanup
- [ ] Temporary feature flags removed (if applicable)
- [ ] Old versions cleaned up
- [ ] Deployment documentation finalized
- [ ] Lessons learned captured

### Communication
- [ ] Deployment success announced
- [ ] Release notes published
- [ ] Customers notified (if applicable)
- [ ] Stakeholders updated

---

## Rollback Criteria

Roll back immediately if:
- [ ] Critical bug affecting core functionality
- [ ] Data corruption detected
- [ ] Security vulnerability exposed
- [ ] Performance degradation >50%
- [ ] Error rate spike >10x normal

---

## Emergency Contacts

| Role | Name | Contact |
|------|------|---------|
| Deployment Lead | [Name] | [Contact] |
| On-Call Engineer | [Name] | [Contact] |
| Product Manager | [Name] | [Contact] |
| VP Engineering | [Name] | [Contact] |

---

*Template version: 1.0 | Customize for your deployment process*
