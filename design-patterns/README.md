# Design Patterns

## Table of Contents

<!-- TOC -->

- [Design Patterns](#design-patterns)
  - [Table of Contents](#table-of-contents)
  - [Behavioral Patterns](#behavioral-patterns)
    - [Observer Pattern](#observer-pattern)
      - [Observer Pattern Example](#observer-pattern-example)
      - [Observer Pattern Exercise](#observer-pattern-exercise)

<!-- /TOC -->

## Behavioral Patterns

### Observer Pattern

#### Observer Pattern Example

**Use Case:**

- We want to create a marketplace notification system where users can subscribe to notifications for new product arrivals or new offers in an online marketplace. Whenever a new product or new offer is added to the marketplace, subscribed users should receive notifications.
- We should allow both adding new subscribers and cancelling subscription as well.

**Design:**

![marketplace-notification-system](./observer/design/market-place-notification-system.png)

**Implementation:**

- Look at the [Marketplace Notification System](./observer) for the implementation.
- Run command `yarn install`
- Run command `yarn run start:marketplace`

#### Observer Pattern Exercise

**Use Case:**

- Develop a newsletter for an author who wants to notify his subscribers about each new blog post or newsletter weekly.
- Considering that subscribers might want to get notifications for each blog post, newsletter, or both of them,.
- Subscribers can also unsubscribe, and then they should not get any notifications.

**Design:**

![newsletter-notification-system](./observer/design/newsletter-notification-system.png)

**Implementation:**

- Look at the [Newsletter System](./observer) for the implementation.
- Run command `yarn install`
- Run command `yarn run start:newsletter`

_**[TOP ↑](#design-patterns)**_
