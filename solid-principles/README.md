# SOLID Principles

SOLID is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin (also known as Uncle Bob).

## Single Responsibility Principle (SRP)

A class should have only one reason to change, meaning that a class should have only one job.

### SRP Examples

#### Email Service Example

**Before:**

![Email Service Example Before](./uml-diagrams/SRP/email-service-before.png)

**After:**

![Email Service Example After](./uml-diagrams/SRP/email-service-after.png)

#### OrderManagement Service Example

**Before:**

![OrderManagement Service Example Before](./uml-diagrams/SRP/order-management-before.png)

**After:**

![OrderManagement Service Example After](./uml-diagrams/SRP/order-management-after.png)

## Open/Closed Principle (OCP)

- Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

### OCP Examples

#### DiscountCalculator Example

**Before:**

![DiscountCalculator Example Before](./uml-diagrams/OCP/discount-calculator-before.png)

```typescript
class DiscountCalculator {
  calculateDiscount(product: Product): number {
    switch (product.getType()) {
      case "electronic":
        return product.getPrice() * 0.1;
      case "furniture":
        return product.getPrice() * 0.2;
      case "clothing":
        return product.getPrice() * 0.3;
      default:
        return 0;
    }
  }
}
```

**After:**

![DiscountCalculator Example After](./uml-diagrams/OCP/discount-calculator-after.png)

```typescript
interface IDiscountStrategy {
  calculateDiscount(product: Product): number;
}

class ElectronicDiscountStrategy implements IDiscountStrategy {
  calculateDiscount(product: Product): number {
    return product.getPrice() * 0.1;
  }
}

class FurnitureDiscountStrategy implements IDiscountStrategy {
  calculateDiscount(product: Product): number {
    return product.getPrice() * 0.2;
  }
}

class ClothingDiscountStrategy implements IDiscountStrategy {
  calculateDiscount(product: Product): number {
    return product.getPrice() * 0.3;
  }
}

class DiscountCalculator {
  private readonly discountStrategy: IDiscountStrategy;

  constructor(discountStrategy: IDiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  calculateDiscount(product: Product): number {
    return this.discountStrategy.calculateDiscount(product);
  }
}
```
