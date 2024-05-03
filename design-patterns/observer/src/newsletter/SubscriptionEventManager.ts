import { ISubscriber } from './ISubscriber';
import { SubscriptionEvent } from './SubscriptionEvent';

export class SubscriptionEventManager {
  private readonly subscribers: Map<SubscriptionEvent, ISubscriber[]>;

  constructor() {
    this.subscribers = new Map();
    this.initSubscribers();
  }

  private initSubscribers(): void {
    Object.keys(SubscriptionEvent).forEach((key) => {
      const event = SubscriptionEvent[key as keyof typeof SubscriptionEvent];
      this.subscribers.set(event, []);
    });
  }

  public subscribe(event: SubscriptionEvent, subscriber: ISubscriber) {
    const eventSubscribers = this.subscribers.get(event) ?? [];
    if (
      eventSubscribers.some((eventSubscriber) => eventSubscriber === subscriber)
    ) {
      throw new Error('User already subscribed to this event.');
    }

    eventSubscribers.push(subscriber);
    this.subscribers.set(event, eventSubscribers);
  }

  public unSubscribe(event: SubscriptionEvent, subscriber: ISubscriber): void {
    const eventSubscribers = this.subscribers.get(event) ?? [];

    const subscriberIndex = eventSubscribers.findIndex(
      (eventSubscriber) => eventSubscriber === subscriber
    );

    if (subscriberIndex < 0) {
      throw new Error('User not found.');
    }

    eventSubscribers.splice(subscriberIndex, 1);

    this.subscribers.set(event, eventSubscribers);
  }

  public notify(event: SubscriptionEvent, message: string) {
    const eventSubscribers = this.subscribers.get(event) ?? [];

    eventSubscribers.forEach((subscriber) => subscriber.notify(message));
  }
}
