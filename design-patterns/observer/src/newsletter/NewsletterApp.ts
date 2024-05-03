import { Blog } from './Blog';
import { ISubscriber } from './ISubscriber';
import { Newsletter } from './Newsletter';
import { SubscriptionEvent } from './SubscriptionEvent';
import { SubscriptionEventManager } from './SubscriptionEventManager';
import { User } from './User';

export class NewsletterApp {
  private readonly users: Map<string, User>;
  private readonly blogs: Map<string, Blog>;
  private readonly newsletters: Map<string, Newsletter>;
  private readonly subscriptionEventManager: SubscriptionEventManager;

  constructor() {
    this.users = new Map();
    this.blogs = new Map();
    this.newsletters = new Map();
    this.subscriptionEventManager = new SubscriptionEventManager();
  }

  public addNewUser(name: string, email: string): User {
    const user = new User(name, email);
    this.users.set(name, user);
    return user;
  }

  public writeNewBlog(name: string, content: string): Blog {
    const blog = new Blog(name, content);
    this.blogs.set(name, blog);
    this.subscriptionEventManager.notify(
      SubscriptionEvent.NEW_BLOG,
      `New Blog is available: ${name}`
    );
    return blog;
  }

  public writeNewNewsletter(name: string, content: string): Newsletter {
    const newsletter = new Newsletter(name, content);
    this.newsletters.set(name, newsletter);
    this.subscriptionEventManager.notify(
      SubscriptionEvent.NEW_NEWSLETTER,
      `New Newsletter is available: ${name}`
    );
    return newsletter;
  }

  public subscribeToNewsletters(subscriber: ISubscriber): void {
    this.subscriptionEventManager.subscribe(
      SubscriptionEvent.NEW_NEWSLETTER,
      subscriber
    );
  }

  public unsubscribeFromNewsletters(subscriber: ISubscriber): void {
    this.subscriptionEventManager.unSubscribe(
      SubscriptionEvent.NEW_NEWSLETTER,
      subscriber
    );
  }
  public subscribeToBlogs(subscriber: ISubscriber): void {
    this.subscriptionEventManager.subscribe(
      SubscriptionEvent.NEW_BLOG,
      subscriber
    );
  }

  public unsubscribeFromBlogs(subscriber: ISubscriber): void {
    this.subscriptionEventManager.unSubscribe(
      SubscriptionEvent.NEW_BLOG,
      subscriber
    );
  }
}
