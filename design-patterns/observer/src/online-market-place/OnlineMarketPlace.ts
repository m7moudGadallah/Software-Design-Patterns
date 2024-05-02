import { Customer } from './Customer';
import { ISubscriber } from './ISubscriber';
import { Job } from './Job';
import { JobFinder } from './JobFinder';
import { Offer } from './Offer';
import { Product } from './Product';
import { SubscriptionEvent } from './SubscriptionEvent';
import { SubscriptionNotifier } from './SubscriptionNotifier';

export class OnlineMarketPlace {
  private readonly customers: Map<string, Customer>;
  private readonly jobFinders: Map<string, JobFinder>;
  private readonly openingJobs: Map<string, Job>;
  private readonly products: Map<string, Product>;
  private readonly offers: Map<string, Offer>;
  private readonly subscriptionNotifier: SubscriptionNotifier;

  constructor() {
    this.customers = new Map();
    this.jobFinders = new Map();
    this.openingJobs = new Map();
    this.products = new Map();
    this.offers = new Map();
    this.subscriptionNotifier = new SubscriptionNotifier();
  }

  public addCustomer(name: string, email: string): Customer {
    const customer = new Customer(name, email);
    this.customers.set(customer.getId(), customer);
    return customer;
  }

  public addJobFinder(name: string, email: string): JobFinder {
    const jobFinder = new JobFinder(name, email);
    this.jobFinders.set(jobFinder.getId(), jobFinder);
    return jobFinder;
  }

  public addOpeningJob(name: string): Job {
    const job = new Job(name);
    this.openingJobs.set(job.getId(), job);
    this.subscriptionNotifier.notify(
      SubscriptionEvent.OPENING_POSITION,
      `New Job Available: ${job.getName()}`
    );
    return job;
  }

  public addProduct(name: string, price: number): Product {
    const product = new Product(name, price);
    this.products.set(product.getId(), product);
    this.subscriptionNotifier.notify(
      SubscriptionEvent.NEW_PRODUCT,
      `New Product Available: ${product.getName()}`
    );
    return product;
  }

  public addNewOffer(productId: string, discount: number): Offer {
    const product = this.products.get(productId);
    if (!product) throw new Error('Product not found!');
    const offer = new Offer(product, discount);
    this.offers.set(offer.getId(), offer);
    this.subscriptionNotifier.notify(
      SubscriptionEvent.NEW_OFFER,
      `New Offer Available: ${offer.getMessage()}`
    );
    return offer;
  }

  public subscribe(event: SubscriptionEvent, subscriber: ISubscriber): void {
    this.subscriptionNotifier.subscribe(event, subscriber);
  }

  public unSubscribe(event: SubscriptionEvent, subscriber: ISubscriber): void {
    this.subscriptionNotifier.unSubscribe(event, subscriber);
  }
}
