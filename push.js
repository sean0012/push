const push = require('web-push');

let vapidKeys = {
	publicKey: 'BNGWwwWDGJMsHcIOkGe7GDhO-I5L6nEQeHsrfB7F9GqGDXVAhBoyjB4d6k7rDxucIW6iSgNLgtQY6PABMqMLTLo',
  privateKey: 'Ijx-w6l-4qRv0Asit0WTFrG20tshLo97C7mMWrod0Yo'
};

push.setVapidDetails('mailto:test@code', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');
