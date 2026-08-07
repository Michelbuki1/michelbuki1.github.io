# AI Engineering Operating System

## Overview

This `.claude` repository transforms Claude Code into a complete AI software engineering organization. It provides the structure, skills, workflows, and standards needed to operate at Series C startup or Fortune 500 enterprise scale.

## Repository Structure

```
.claude/
├── CLAUDE.md              # Operating manual and engineering philosophy
├── README.md              # This file - repository overview
├── agents/                # Agent definitions and orchestration
│   └── hierarchy.md       # Agent hierarchy and communication
├── skills/                # Role-specific skills (50+ roles)
│   ├── executive/         # CEO, CTO, VP roles
│   ├── architecture/      # System design, technical strategy
│   ├── engineering/       # Core engineering practices
│   ├── frontend/          # UI/UX development
│   ├── backend/           # Server-side development
│   ├── platform/          # Platform engineering
│   ├── cloud/             # Cloud infrastructure
│   ├── ai/                # AI/ML engineering
│   ├── devops/            # DevOps and SRE
│   ├── security/          # Security engineering
│   ├── databases/         # Database engineering
│   ├── product/           # Product management
│   ├── testing/           # QA and testing
│   └── ...                # Additional specialized roles
├── workflows/             # Reusable workflows
│   ├── feature-dev.md     # Feature development workflow
│   ├── bug-fix.md         # Bug fixing workflow
│   └── ...                # Additional workflows
├── memory/                # Persistent project memory
│   ├── architecture.md    # Architecture decisions
│   ├── conventions.md     # Coding conventions
│   └── ...                # Additional memory files
├── prompts/               # Prompt templates
├── standards/             # Engineering standards
│   ├── clean-architecture.md
│   ├── solid-principles.md
│   └── ...                # Additional standards
├── templates/             # Document templates
│   ├── prd.md             # Product Requirements Document
│   ├── rfc.md             # Request for Comments
│   └── ...                # Additional templates
├── examples/              # Usage examples
├── decisions/             # Architecture Decision Records
├── docs/                  # Additional documentation
└── checklists/            # Operational checklists
```

## Quick Start

### For New Projects

1. Copy this `.claude` directory to your project root
2. Review `CLAUDE.md` for engineering principles
3. Customize skills for your specific needs
4. Begin using workflows for common tasks

### For Existing Projects

1. Review existing code against standards in `/standards`
2. Identify gaps using checklists in `/checklists`
3. Create memory files documenting current architecture
4. Gradually adopt workflows and templates

## Available Roles

### Executive Leadership
- **CEO**: Strategic direction, business alignment
- **CTO**: Technical vision, architecture oversight
- **VP Engineering**: Team management, delivery

### Architecture
- **Software Architect**: System design, technology selection
- **Solution Architect**: Integration patterns, API design
- **Enterprise Architect**: Cross-system alignment

### Engineering
- **Backend Engineer**: APIs, services, data processing
- **Frontend Engineer**: UI, UX, client applications
- **Full Stack Engineer**: End-to-end feature development
- **Platform Engineer**: Developer tools, infrastructure

### AI/ML
- **AI Engineer**: ML models, inference pipelines
- **Prompt Engineer**: LLM prompt optimization
- **RAG Engineer**: Retrieval-augmented generation
- **ML Ops Engineer**: Model deployment, monitoring

### Infrastructure
- **DevOps Engineer**: CI/CD, automation
- **SRE**: Reliability, incident response
- **Cloud Engineer**: Cloud infrastructure, cost optimization
- **Security Engineer**: Security controls, compliance

### Data
- **Data Engineer**: Pipelines, warehouses, ETL
- **Database Engineer**: Schema design, optimization
- **Analytics Engineer**: Metrics, dashboards, insights

### Product & Business
- **Product Manager**: Requirements, roadmap, prioritization
- **Technical Writer**: Documentation, guides
- **Customer Success**: Support, feedback loops

## Core Workflows

| Workflow | Purpose | When to Use |
|----------|---------|-------------|
| Feature Development | Build new functionality | New features, enhancements |
| Bug Fixing | Resolve defects | Production issues, test failures |
| Code Review | Ensure code quality | Before merging changes |
| Incident Response | Handle outages | Production incidents |
| Release Management | Deploy to production | Scheduled releases |
| Architecture Review | Validate designs | Major changes, new systems |

## Key Documents

- **[CLAUDE.md](./CLAUDE.md)**: Engineering operating manual
- **[Agent Hierarchy](./agents/hierarchy.md)**: Role orchestration
- **[Memory](./memory/)**: Project-specific knowledge
- **[Standards](./standards/)**: Engineering standards
- **[Templates](./templates/)**: Document templates

## Usage Patterns

### Single Role Mode

Activate a specific role for focused work:

```
/skill backend-engineer
Task: Design a REST API for user management
```

### Multi-Role Collaboration

Complex tasks may require multiple roles:

```
/workflow feature-development
Roles: product-manager, architect, backend-engineer, frontend-engineer, qa-engineer
```

### Workflow Execution

Follow predefined workflows for consistency:

```
/workflow incident-response
Severity: SEV-2
Service: payment-api
```

## Customization

### Adding New Skills

1. Create a new file in `/skills/<category>/`
2. Follow the skill template structure
3. Define clear inputs, outputs, and responsibilities

### Modifying Standards

1. Propose changes via RFC process
2. Update relevant checklists
3. Communicate changes to team

### Extending Workflows

1. Identify workflow gaps
2. Create new workflow file
3. Test with sample scenarios
4. Document usage examples

## Best Practices

1. **Always check memory** before starting work
2. **Follow established workflows** for consistency
3. **Document decisions** in ADR format
4. **Use templates** for standard documents
5. **Run checklists** before deployments
6. **Update memory** when learning new information

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024 | Initial release |

## Contributing

Contributions follow the standard engineering process:

1. Create feature branch
2. Make changes
3. Submit pull request
4. Review and approve
5. Merge to main

## Support

For questions or issues:

1. Check documentation in `/docs`
2. Review relevant standards
3. Consult checklists
4. Escalate per hierarchy if needed

---

*This repository is the foundation of the AI Engineering Operating System. Keep it updated, maintain its quality, and use it consistently.*
