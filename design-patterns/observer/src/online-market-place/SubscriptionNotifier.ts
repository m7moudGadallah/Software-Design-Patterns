import { ISubscriber } from './ISubscriber';
import { SubscriptionEvent } from './SubscriptionEvent';

export class SubscriptionNotifier {
  private readonly subscriptions: Map<SubscriptionEvent, ISubscriber[]>;

  constructor() {
    this.subscriptions = new Map();
    this.initSubscriptions();
  }

  private initSubscriptions(): void {
    Object.keys(SubscriptionEvent).forEach((key) => {
      const event = SubscriptionEvent[key as keyof typeof SubscriptionEvent];
      this.subscriptions.set(event, []);
    });
  }

  public subscribe(event: SubscriptionEvent, subscriber: ISubscriber) {
    const subscribers = this.subscriptions.get(event) ?? [];

    const index = subscribers.indexOf(subscriber);

    if (index !== -1) {
      throw new Error('Subscriber is already subscribed for the given event');
    }

    subscribers.push(subscriber);
    this.subscriptions.set(event, subscribers);
  }

  public unSubscribe(event: SubscriptionEvent, subscriber: ISubscriber) {
    const subscribers = this.subscriptions.get(event) ?? [];

    const index = subscribers.indexOf(subscriber);

    if (index !== -1) {
      subscribers.splice(index, 1);
    } else {
      throw new Error('Subscriber not found for the given event');
    }

    this.subscriptions.set(event, subscribers);
  }

  public notify(event: SubscriptionEvent, message: string): void {
    this.subscriptions
      .get(event)
      ?.forEach((subscriber) => subscriber.notify(message));
  }
}
