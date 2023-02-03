const push = require('web-push');

let vapidKeys = {
	publicKey: 'BNGWwwWDGJMsHcIOkGe7GDhO-I5L6nEQeHsrfB7F9GqGDXVAhBoyjB4d6k7rDxucIW6iSgNLgtQY6PABMqMLTLo',
  privateKey: 'Ijx-w6l-4qRv0Asit0WTFrG20tshLo97C7mMWrod0Yo'
};

push.setVapidDetails('mailto:test@code', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v1/gAAAAABj3KwASEtDMX5i2kaTII95rVvkz8uGErAy-K4xNGGAINJ1Y9jI3OPxn2d6ySiO88TNlQ0tCqySmOekUJ_6V6vrsovZaOLB67UoCQ-eeJJQ6e3Yz4tcUvhl9QOwF_T2YOgqYgQJ","expirationTime":null,"keys":{"auth":"M9hBgvRdtkPJ12iJEfwttA","p256dh":"BKrDNpQLBODF9MfjBQoliGE6mimrii5GDYE5fXvhlFABl3jFkuMa_FyQ0MSutSG6QYLlrRoJ2ZX8fSeziqyaTeU"}}


push.sendNotification(sub, 'test message');
