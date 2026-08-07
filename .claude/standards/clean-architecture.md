# Clean Architecture Standard

## Overview

This standard defines our adoption of Clean Architecture principles for building maintainable, testable, and scalable software systems.

## Core Principles

### 1. Dependency Rule

Dependencies point inward. Inner layers know nothing about outer layers.

```
┌─────────────────────────────────────────┐
│         Frameworks & Drivers            │  ← Outermost
├─────────────────────────────────────────┤
│         Interface Adapters              │
├─────────────────────────────────────────┤
│         Use Cases (Business Rules)      │
├─────────────────────────────────────────┤
│         Entities (Enterprise Rules)     │  ← Innermost
└─────────────────────────────────────────┘
```

### 2. Separation of Concerns

Each layer has a single responsibility:

| Layer | Responsibility |
|-------|----------------|
| Entities | Business objects, enterprise-wide rules |
| Use Cases | Application-specific business rules |
| Interface Adapters | Convert data between layers |
| Frameworks/Drivers | External interfaces (DB, Web, UI) |

### 3. Independence

- **Independent of UI**: UI can change without affecting business logic
- **Independent of Database**: Database can be swapped
- **Independent of Framework**: Framework is a tool, not a requirement
- **Independent of External Agencies**: Business logic doesn't depend on external APIs

## Layer Definitions

### Entities

- Pure business objects
- Contain enterprise-wide business rules
- Have no dependencies on outer layers
- Should be stable over time

```typescript
// Example: Entity
class User {
  constructor(
    public id: UserId,
    public email: Email,
    public name: Name
  ) {}

  // Business logic
  canAccess(resource: Resource): boolean {
    // Enterprise rule
  }
}
```

### Use Cases

- Application-specific business rules
- Orchestrate flow of data to/from entities
- Define transactions
- Should not depend on frameworks

```typescript
// Example: Use Case
class CreateUserUseCase {
  constructor(
    private userRepo: UserRepository,
    private emailService: EmailService
  ) {}

  async execute(dto: CreateUserDTO): Promise<User> {
    // Application business rule
  }
}
```

### Interface Adapters

- Controllers: Handle HTTP requests
- Presenters: Format response data
- Gateways: Interface implementations
- Convert between use cases and external world

### Frameworks & Drivers

- Database access
- Web frameworks
- UI frameworks
- External API clients

## Implementation Guidelines

### DO

- ✅ Keep business logic in entities and use cases
- ✅ Depend on abstractions (interfaces), not concretions
- ✅ Make dependencies explicit through constructor injection
- ✅ Test business logic without frameworks
- ✅ Keep use cases focused on single operations

### DON'T

- ❌ Put business logic in controllers
- ❌ Depend on concrete implementations
- ❌ Import framework code in inner layers
- ❌ Create circular dependencies
- ❌ Make use cases do too much

## Project Structure

```
src/
├── entities/           # Business objects
│   ├── user.ts
│   └── order.ts
├── use-cases/          # Application business rules
│   ├── create-user/
│   └── process-order/
├── interface-adapters/ # Converters
│   ├── controllers/
│   ├── presenters/
│   └── gateways/
└── frameworks/         # External interfaces
    ├── database/
    ├── web/
    └── external-api/
```

## Testing Strategy

| Layer | Testing Approach |
|-------|------------------|
| Entities | Unit tests, no mocks needed |
| Use Cases | Unit tests with mocked repositories |
| Interface Adapters | Integration tests |
| Frameworks | End-to-end tests |

## Migration Guide

For existing projects:

1. Identify business logic scattered in controllers
2. Extract to use cases
3. Create entity classes
4. Introduce interfaces for dependencies
5. Invert dependencies

## References

- [Clean Architecture](https://blog.cleancoder.com/) - Robert C. Martin
- [Dependency Rule](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

---

*All new services must follow Clean Architecture principles.*
