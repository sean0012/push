const push = require('web-push');

let vapidKeys = {
	publicKey: 'BNGWwwWDGJMsHcIOkGe7GDhO-I5L6nEQeHsrfB7F9GqGDXVAhBoyjB4d6k7rDxucIW6iSgNLgtQY6PABMqMLTLo',
  privateKey: 'Ijx-w6l-4qRv0Asit0WTFrG20tshLo97C7mMWrod0Yo'
};

push.setVapidDetails('mailto:test@code', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
	"endpoint":"https://updates.push.services.mozilla.com/wpush/v1/gAAAAABj3…9TYKCU5tNqZ3Q8x4_LVgNnIWLM3C9WzA5u31vXL7w_3URDabaNZInQY3pcQT",
	"expirationTime":null,
	"keys":{
		"auth":"pg4N9No_dwavo43nQTuELA",
		"p256dh":"BJMZkTrC9kI-Gt70V-25ZcomB4TcW08HVc_8gXtqOZWhG1P3mL8Mu-OBg1AnyelqZDS97evCGW1ZurCI4e-NgCY"
	}
};

push.sendNotification(sub, encodeURI('test message'));
