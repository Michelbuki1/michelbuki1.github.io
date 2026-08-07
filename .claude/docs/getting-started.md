# Getting Started with the AI Engineering OS

## Welcome

This `.claude` directory contains your AI Engineering Operating System - a comprehensive framework for running an AI-powered engineering organization.

## Quick Start

### 1. Understand the Structure

```
.claude/
├── CLAUDE.md          # Core operating manual
├── README.md          # This overview
├── agents/            # Role definitions
├── skills/            # Capability definitions
├── workflows/         # Process templates
├── memory/            # Project knowledge
├── templates/         # Document templates
├── standards/         # Engineering standards
└── checklists/        # Quality checklists
```

### 2. Read the Core Documents

Start by reading:
1. **[CLAUDE.md](../CLAUDE.md)** - Engineering philosophy and principles
2. **[Agent Hierarchy](../agents/hierarchy.md)** - Role structure

### 3. Activate Your Role

Choose the skill that matches your current task:

```bash
# Example: Work as a backend engineer
/skill senior-backend-engineer

# Example: Work as a product manager
/skill product-manager

# Example: Work as an architect
/skill software-architect
```

### 4. Follow Workflows

For common tasks, use predefined workflows:

```bash
# Building a new feature?
/workflow feature-development

# Fixing a bug?
/workflow bug-fixing

# Handling an incident?
/workflow incident-response
```

## Available Skills

### Executive
- `ceo` - Strategic leadership
- `cto` - Technical vision

### Architecture
- `software-architect` - System design

### Engineering
- `senior-backend-engineer` - API and service development
- `senior-frontend-engineer` - UI development
- `ai-engineer` - ML/AI implementation
- `prompt-engineer` - LLM prompt optimization
- `rag-engineer` - RAG systems
- `devops-engineer` - CI/CD and automation
- `sre` - Reliability engineering
- `security-engineer` - Security controls
- `data-engineer` - Data pipelines
- `qa-engineer` - Quality assurance

### Product & Business
- `product-manager` - Requirements and roadmap

## Key Templates

| Template | When to Use |
|----------|-------------|
| [PRD](../templates/prd.md) | New feature requirements |
| [RFC](../templates/rfc.md) | Technical proposals |
| [Pull Request](../templates/pull-request.md) | Code submissions |
| [Post-mortem](../templates/postmortem.md) | Incident analysis |

## Essential Checklists

| Checklist | Purpose |
|-----------|---------|
| [Code Review](../checklists/code-review.md) | PR reviews |
| [Deployment](../checklists/deployment.md) | Production releases |

## Standards to Follow

- [Clean Architecture](../standards/clean-architecture.md)
- [SOLID Principles](../standards/solid-principles.md)

## Memory & Context

Before starting work, review:
- [Architecture Memory](../memory/architecture.md) - System design decisions

## Best Practices

1. **Always check memory first** - Understand existing decisions
2. **Use the right role** - Match skill to task
3. **Follow workflows** - Consistency improves quality
4. **Document decisions** - Update ADRs for significant changes
5. **Run checklists** - Before deployments and major changes

## Customization

This OS is designed to be customized:

1. **Add project-specific skills** in `/skills/`
2. **Extend workflows** for your processes
3. **Update memory files** with project knowledge
4. **Modify templates** for your needs

## Support

For questions about using this system:
1. Check relevant documentation
2. Review examples in `/examples/`
3. Consult the appropriate skill documentation

---

*Ready to start? Pick a skill and begin!*
