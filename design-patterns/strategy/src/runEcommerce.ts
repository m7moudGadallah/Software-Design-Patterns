import { CustomerMembership } from './ecommerce/CustomerMembership';
import { ECommerceApp } from './ecommerce/ECommerceApp';
import { BankTransferPaymentStrategy } from './ecommerce/payments/BankTransferPaymentStrategy';
import { PayPalPaymentStrategy } from './ecommerce/payments/PayPalPaymentStrategy';
import { VisaCardPaymentStrategy } from './ecommerce/payments/VisaCardPaymentStrategy';

function main() {
  const app = new ECommerceApp();

  const john = app.addNewCustomer(
    'John Doe',
    'john.doe@example.com',
    CustomerMembership.GOLD
  );
  const missy = app.addNewCustomer(
    'Missy Doe',
    'missy.doe@example.com',
    CustomerMembership.REGULAR
  );
  const gorge = app.addNewCustomer(
    'Gorge Copper',
    'gorge.copper@example.com',
    CustomerMembership.PREMIUM
  );

  const iphone = app.addNewProduct('IPhone 15 Pro', 1500, 5);
  const macBook = app.addNewProduct('MacBook Pro', 2500, 1);

  app.purchaseProduct(iphone, john, new VisaCardPaymentStrategy());
  app.purchaseProduct(iphone, missy, new PayPalPaymentStrategy());
  app.purchaseProduct(iphone, gorge, new BankTransferPaymentStrategy());

  app.purchaseProduct(macBook, john, new PayPalPaymentStrategy());
  // app.purchaseProduct(macBook, missy, new PayPalPaymentStrategy());
}

main();
