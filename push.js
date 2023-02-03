const push = require('web-push');

let vapidKeys = {
	publicKey: 'BNGWwwWDGJMsHcIOkGe7GDhO-I5L6nEQeHsrfB7F9GqGDXVAhBoyjB4d6k7rDxucIW6iSgNLgtQY6PABMqMLTLo',
  privateKey: 'Ijx-w6l-4qRv0Asit0WTFrG20tshLo97C7mMWrod0Yo'
};

push.setVapidDetails('mailto:test@code', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
	"endpoint": "https://updates.push.services.mozilla.com/wpush/v1/gAAAAABj3KTaQoLWA5qrpI1dqwMGEePtSJZOhraP7JA-2kN2dYEberRU1dmdB6iNffyjfGzz-V_28F59600zjSCvdpvTw-KgYQze7pgUKXOuAS7L2Wh3j1ZvmbPfmq-gxvc2CXpy2ZEh",
	"expirationTime":null,
	"keys":{
		"auth":"6aSqYbSjrxFNHZ85igMI5Q",
		"p256dh":"BG6BZPVFsGiJEbF60F4xV6BqHzAsRVKoihT5QM0VUyKDmSfpJv_bwE3Llu-fSQHsf0oTCyfu8Cu0XYhRzmpPyOA"
	}
};

push.sendNotification(sub, 'test message');
