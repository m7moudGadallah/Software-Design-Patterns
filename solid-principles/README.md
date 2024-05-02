# SOLID Principles

SOLID is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin (also known as Uncle Bob).

## Table of Contents

<!-- TOC -->

- [SOLID Principles](#solid-principles)
  - [Table of Contents](#table-of-contents)
  - [Single Responsibility Principle SRP](#single-responsibility-principle-srp)
    - [SRP Examples](#srp-examples)
      - [Email Service Example](#email-service-example)
      - [OrderManagement Service Example](#ordermanagement-service-example)
  - [Open/Closed Principle OCP](#openclosed-principle-ocp)
    - [OCP Examples](#ocp-examples)
      - [DiscountCalculator Example](#discountcalculator-example)
      - [PaymentProcessing Service Example](#paymentprocessing-service-example)

<!-- /TOC -->

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

_**[TOP ↑](#solid-principles)**_

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

#### PaymentProcessing Service Example

**Before:**

![PaymentProcessing Service Example Before](./uml-diagrams/OCP/payment-processing-before.png)

```typescript
class PaymentProcessingService {
  processPayment(payment: Payment): void {
    switch (payment.getType()) {
      case "visa":
        // Process credit card payment
        break;
      case "mastercard":
        // Process debit card payment
        break;
      case "american express":
        // Process PayPal payment
        break;
      default:
        throw new Error("Invalid payment type");
    }
  }
}
```

**After:**

![PaymentProcessing Service Example After](./uml-diagrams/OCP/payment-processing-after.png)

```typescript
interface IPaymentStrategy {
  processPayment(amount: number): void;
}

class Visa implements IPaymentStrategy {
  processPayment(amount: number): void {
    // Process credit card payment
  }
}

class MasterCard implements IPaymentStrategy {
  processPayment(amount: number): void {
    // Process debit card payment
  }
}

class AmericanExpress implements IPaymentStrategy {
  processPayment(amount: number): void {
    // Process PayPal payment
  }
}

class PaymentProcessingService {
  private readonly paymentStrategy: IPaymentStrategy;

  constructor(paymentStrategy: IPaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  processPayment(order: Order): void {
    this.paymentStrategy.processPayment(order.getPrice());
  }
}
```

_**[TOP ↑](#solid-principles)**_
