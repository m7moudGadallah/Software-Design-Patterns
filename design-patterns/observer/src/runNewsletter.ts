import { NewsletterApp } from './newsletter/NewsletterApp';

function main() {
  const newsletterApp = new NewsletterApp();

  // Add users
  const john = newsletterApp.addNewUser('John Doe', 'john.deo@example.com');
  const steven = newsletterApp.addNewUser(
    'Steven White',
    'steven.white@example.com'
  );
  const missy = newsletterApp.addNewUser(
    'Missy Copper',
    'missy.copper@example.com'
  );
  const sheldon = newsletterApp.addNewUser(
    'Sheldon Copper',
    'sheldon.copper@example.com'
  );

  // Add subscriber
  newsletterApp.subscribeToNewsletters(john);
  newsletterApp.subscribeToBlogs(steven);
  newsletterApp.subscribeToNewsletters(sheldon);
  newsletterApp.subscribeToBlogs(sheldon);

  // Add Newsletters
  newsletterApp.writeNewNewsletter(
    'newsletter1',
    'this is newsletter1 content'
  );

  // Add Blogs
  newsletterApp.writeNewBlog('blog1', 'this is blog1 content');

  newsletterApp.subscribeToBlogs(missy);
  newsletterApp.writeNewBlog('blog2', 'this is blog2 content');
}

main();
