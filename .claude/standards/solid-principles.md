# SOLID Principles Standard

## Overview

SOLID is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.

## The Five Principles

### 1. Single Responsibility Principle (SRP)

**Definition:** A class should have one, and only one, reason to change.

**Why:** Reduces complexity, improves maintainability.

**Example - Violation:**
```typescript
// ❌ BAD: Multiple responsibilities
class UserService {
  async createUser(data: UserData): Promise<User> {
    // Business logic
  }
  
  async sendWelcomeEmail(user: User): Promise<void> {
    // Email logic
  }
  
  async logActivity(action: string): Promise<void> {
    // Logging logic
  }
}
```

**Example - Correct:**
```typescript
// ✅ GOOD: Separated responsibilities
class UserService {
  constructor(
    private userRepo: UserRepository,
    private emailService: EmailService,
    private logger: Logger
  ) {}
  
  async createUser(data: UserData): Promise<User> {
    const user = await this.userRepo.save(data);
    await this.emailService.sendWelcome(user);
    await this.logger.log('user_created', user.id);
    return user;
  }
}
```

---

### 2. Open/Closed Principle (OCP)

**Definition:** Software entities should be open for extension but closed for modification.

**Why:** Allows adding new functionality without changing existing code.

**Example - Violation:**
```typescript
// ❌ BAD: Requires modification for new types
class PaymentProcessor {
  process(paymentType: string, amount: number) {
    if (paymentType === 'credit') {
      // Credit card logic
    } else if (paymentType === 'paypal') {
      // PayPal logic
    }
    // Need to modify for new payment types
  }
}
```

**Example - Correct:**
```typescript
// ✅ GOOD: Extend through interface
interface PaymentMethod {
  process(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  process(amount: number) { /* ... */ }
}

class PayPalPayment implements PaymentMethod {
  process(amount: number) { /* ... */ }
}

class PaymentProcessor {
  process(method: PaymentMethod, amount: number) {
    method.process(amount);
  }
}
```

---

### 3. Liskov Substitution Principle (LSP)

**Definition:** Subtypes must be substitutable for their base types.

**Why:** Ensures inheritance is used correctly.

**Example - Violation:**
```typescript
// ❌ BAD: Square violates Rectangle behavior
class Rectangle {
  width: number;
  height: number;
  
  setWidth(w: number) { this.width = w; }
  setHeight(h: number) { this.height = h; }
}

class Square extends Rectangle {
  setWidth(w: number) {
    this.width = w;
    this.height = w; // Breaks Rectangle contract
  }
  setHeight(h: number) {
    this.width = h;
    this.height = h; // Breaks Rectangle contract
  }
}
```

**Example - Correct:**
```typescript
// ✅ GOOD: Use composition or separate interfaces
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  area() { return this.width * this.height; }
}

class Square implements Shape {
  constructor(public side: number) {}
  area() { return this.side * this.side; }
}
```

---

### 4. Interface Segregation Principle (ISP)

**Definition:** Clients should not be forced to depend on interfaces they do not use.

**Why:** Prevents "fat" interfaces, reduces coupling.

**Example - Violation:**
```typescript
// ❌ BAD: Workers forced to implement unused methods
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class Robot implements Worker {
  work() { /* ... */ }
  eat() { throw new Error("Robots don't eat"); }
  sleep() { throw new Error("Robots don't sleep"); }
}
```

**Example - Correct:**
```typescript
// ✅ GOOD: Segregated interfaces
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class HumanWorker implements Workable, Eatable, Sleepable {
  work() { /* ... */ }
  eat() { /* ... */ }
  sleep() { /* ... */ }
}

class RobotWorker implements Workable {
  work() { /* ... */ }
}
```

---

### 5. Dependency Inversion Principle (DIP)

**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions.

**Why:** Decouples layers, enables testing and flexibility.

**Example - Violation:**
```typescript
// ❌ BAD: Direct dependency on concrete class
class UserService {
  private db = new MySQLDatabase();
  
  async getUser(id: string) {
    return this.db.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}
```

**Example - Correct:**
```typescript
// ✅ GOOD: Depend on abstraction
interface Database {
  query(sql: string): Promise<any>;
}

class UserService {
  constructor(private db: Database) {}
  
  async getUser(id: string) {
    return this.db.query('SELECT * FROM users WHERE id = ?', [id]);
  }
}

// Can now use MySQLDatabase, PostgresDatabase, MockDatabase, etc.
```

## Implementation Checklist

When reviewing code, verify:

- [ ] **SRP**: Each class has single responsibility
- [ ] **OCP**: New features don't require modifying existing code
- [ ] **LSP**: Subclasses can replace parent classes
- [ ] **ISP**: Interfaces are focused and minimal
- [ ] **DIP**: Dependencies are injected, not created

## Benefits

| Principle | Primary Benefit |
|-----------|-----------------|
| SRP | Easier maintenance |
| OCP | Safe extensibility |
| LSP | Reliable inheritance |
| ISP | Loose coupling |
| DIP | Testability, flexibility |

## References

- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) - Robert C. Martin
- [Agile Software Development](https://www.amazon.com/Agile-Software-Development-Principles-Patterns/dp/0135974445) - Robert C. Martin

---

*All code reviews should consider SOLID principles.*
