# Code Review Checklist

## Purpose

Ensure consistent, thorough code reviews that maintain code quality and share knowledge across the team.

---

## Pre-Review Checks

- [ ] PR description is clear and complete
- [ ] Related issues/tickets are linked
- [ ] Tests are included
- [ ] Documentation is updated (if needed)
- [ ] CI checks are passing

---

## Code Quality

### Readability
- [ ] Code is easy to understand
- [ ] Variable/function names are descriptive
- [ ] Comments explain "why", not "what"
- [ ] Complex logic is documented

### Structure
- [ ] Functions are small (< 50 lines)
- [ ] Classes have single responsibility
- [ ] No code duplication (DRY)
- [ ] Follows project structure conventions

### Style
- [ ] Follows language style guide
- [ ] Consistent formatting
- [ ] No unused imports/variables
- [ ] No commented-out code

---

## Correctness

### Logic
- [ ] Implements requirements correctly
- [ ] Edge cases handled
- [ ] Error handling appropriate
- [ ] No obvious bugs

### Data
- [ ] Input validation present
- [ ] Output format correct
- [ ] Null/undefined handled
- [ ] Type safety maintained

### Concurrency
- [ ] Race conditions considered
- [ ] Thread safety addressed (if applicable)
- [ ] Locks used correctly (if applicable)

---

## Security

- [ ] No hardcoded secrets
- [ ] SQL injection prevented
- [ ] XSS prevention in place
- [ ] Authentication/authorization correct
- [ ] Sensitive data protected
- [ ] Dependencies are secure

---

## Performance

- [ ] No obvious performance issues
- [ ] Database queries optimized
- [ ] Caching used appropriately
- [ ] Memory leaks avoided
- [ ] N+1 queries avoided

---

## Testing

- [ ] Unit tests cover new logic
- [ ] Integration tests for critical paths
- [ ] Edge cases tested
- [ ] Tests are deterministic
- [ ] Test names are descriptive

---

## Observability

- [ ] Logging added for debugging
- [ ] Metrics instrumented (if applicable)
- [ ] Errors are logged appropriately
- [ ] Log levels are correct

---

## Compatibility

- [ ] Backward compatible (or breaking change documented)
- [ ] API versioning handled (if applicable)
- [ ] Database migrations reversible (if applicable)
- [ ] Works with existing features

---

## Documentation

- [ ] README updated (if needed)
- [ ] API docs updated (if applicable)
- [ ] Inline comments for complex logic
- [ ] Changelog entry (if applicable)

---

## Deployment

- [ ] Configuration externalized
- [ ] Feature flags used (if risky change)
- [ ] Rollback plan exists (if major change)
- [ ] Monitoring/alerting considered

---

## Review Decision

### Options:
- [ ] **Approve**: Ready to merge
- [ ] **Request Changes**: Issues must be addressed
- [ ] **Comment**: Suggestions only, optional to address

### Review Summary

**Strengths:**
- [List positive aspects]

**Issues to Address:**
- [List required changes]

**Suggestions:**
- [List optional improvements]

---

*Template version: 1.0 | Adapt based on project needs*
