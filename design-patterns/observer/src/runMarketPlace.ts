import { OnlineMarketPlace } from './online-market-place/OnlineMarketPlace';
import { SubscriptionEvent } from './online-market-place/SubscriptionEvent';

function main() {
  const marketPlace = new OnlineMarketPlace();

  const john = marketPlace.addCustomer('John', 'john@example.com');
  const steven = marketPlace.addCustomer('Steven', 'steven@example.com');
  marketPlace.subscribe(SubscriptionEvent.NEW_PRODUCT, john);
  marketPlace.subscribe(SubscriptionEvent.NEW_OFFER, steven);

  const mark = marketPlace.addJobFinder('mark', 'mark@example.com');
  marketPlace.subscribe(SubscriptionEvent.OPENING_POSITION, mark);

  marketPlace.addOpeningJob('sales');
  const iphone = marketPlace.addProduct('IPhone', 15000);
  marketPlace.addProduct('MacBook Pro', 25000);
  marketPlace.addNewOffer(iphone.getId(), 15);
}

main();
