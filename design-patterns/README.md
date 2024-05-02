# Design Patterns

## Table of Contents

<!-- TOC -->

- [Design Patterns](#design-patterns)
  - [Table of Contents](#table-of-contents)
  - [Behavioral Patterns](#behavioral-patterns)
    - [Observer Pattern](#observer-pattern)

<!-- /TOC -->

## Behavioral Patterns

### Observer Pattern

**Use Case:**

- We want to create a marketplace notification system where users can subscribe to notifications for new product arrivals or new offers in an online marketplace. Whenever a new product or new offer is added to the marketplace, subscribed users should receive notifications.
- We should allow both adding new subscribers and cancelling subscription as well.

**Design:**

![marketplace-notification-system](./observer/design/market-place-notification-system.png)

**Implementation:**

- Look at the [Marketplace Notification System](./observer) for the implementation.
- Run command `yarn install`
- Run command `yarn start`

_**[TOP ↑](#design-patterns)**_
