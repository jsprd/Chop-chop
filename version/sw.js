
// sw.js (Service Worker)

self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Time is up! Please check out.',
    icon: 'https://example.com/notification-icon.png', // Optional icon
    badge: 'https://example.com/notification-badge.png' // Optional badge
  };
  event.waitUntil(self.registration.showNotification('Time's up!', options));
});

self.addEventListener('message', function(event) {
  const { title, body } = event.data;
  const options = {
    body: body,
    icon: 'https://example.com/notification-icon.png',
  };

  self.registration.showNotification(title, options);
});
