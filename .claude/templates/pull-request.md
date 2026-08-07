# Pull Request Template

## Description

*Briefly describe what this PR does.*

[Write 1-2 sentences summarizing the change.]

---

## Related Issues

- Fixes #[issue number]
- Related to #[issue number]

---

## Type of Change

Select all that apply:

- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to change)
- [ ] 📝 Documentation update
- [ ] 🔄 Refactoring (no functional changes)
- [ ] ⚡ Performance improvement
- [ ] 🔒 Security fix
- [ ] 🧪 Test addition/update

---

## Changes

*List the main changes in this PR.*

- [Change 1]
- [Change 2]
- [Change 3]

---

## Testing

### How has this been tested?

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing performed
- [ ] E2E tests passing

### Test Details

| Test Type | Status | Notes |
|-----------|--------|-------|
| Unit Tests | [Pass/Fail] | [Coverage %] |
| Integration | [Pass/Fail] | [Details] |
| E2E | [Pass/Fail] | [Scenarios] |

### Steps to Test

1. [Step 1]
2. [Step 2]
3. [Step 3]

---

## Screenshots / Videos

*If applicable, include visual evidence of the change.*

[Before/After screenshots, screen recordings, etc.]

---

## Checklist

Before submitting this PR, I have:

- [ ] Followed the coding standards
- [ ] Added appropriate comments
- [ ] Updated documentation (if needed)
- [ ] Checked for security issues
- [ ] Verified no sensitive data is exposed
- [ ] Ensured backward compatibility (or documented breaking changes)
- [ ] Added entries to CHANGELOG (if applicable)

---

## Deployment Notes

*Any special deployment considerations?*

- [ ] Database migrations required
- [ ] Environment variables need updating
- [ ] Feature flag configuration needed
- [ ] Cache invalidation required
- [ ] Special monitoring/alerting needed

### Migration Commands

```bash
# If database migrations are required
[your migration command here]
```

### Rollback Plan

[Describe how to rollback if needed]

---

## Performance Impact

- [ ] No performance impact expected
- [ ] Performance improved
- [ ] Performance degraded (explain below)

### Metrics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Latency (P50) | X ms | Y ms | Z% |
| Latency (P95) | X ms | Y ms | Z% |
| Throughput | X req/s | Y req/s | Z% |

---

## Security Considerations

- [ ] No security implications
- [ ] Security reviewed by [Name]
- [ ] Security concerns noted below:

[Describe any security considerations]

---

## Dependencies

### New Dependencies Added

| Package | Version | Reason |
|---------|---------|--------|
| [package] | [version] | [reason] |

### Dependencies Updated

| Package | From | To | Reason |
|---------|------|-----|--------|
| [package] | [version] | [version] | [reason] |

---

## Reviewers

- [ ] Code review by peer engineer
- [ ] Architecture review (if major change)
- [ ] Security review (if security-sensitive)
- [ ] Product review (if user-facing)

---

## Open Questions

[Any questions or areas where you'd like specific feedback?]

- [ ] [Question 1]
- [ ] [Question 2]

---

## Post-Merge Tasks

- [ ] [Task 1]
- [ ] [Task 2]

---

*Thanks for contributing! 🎉*
