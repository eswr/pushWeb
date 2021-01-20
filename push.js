var push = require('web-push')

// let VAPIDKeys = push.generateVAPIDKeys()
let VAPIDKeys = {
  publicKey: 'BO_uPe2Cr6Yky3xkF6do8uJMBGErtqnHdd51PuEQ9Qfoc9QJyWbWl6HFaRUnTB8jPGA0gEUL30Yfh0LifOlEpDk',
  privateKey: 'z8FFP9C6Xvyc0KP8mzyFr0quJ7oB60xfJO4jfcVYatI'
}

push.setVapidDetails('mailto:easwar4@gmail.com', VAPIDKeys.publicKey, VAPIDKeys.privateKey)

// vigorous-ramanujan-8f6916.netlify.app

let sub = {
  "endpoint": "https://updates.push.services.mozilla.com/wpush/v2gAAAAABgB…hRdiyS-iQRjUQzztjdEmxeedXIc67X8jzZN7MSRrwdb3UZmvgeMOu9fFKBPg",
  "keys": {
    "auth": "tCv2Xwa-A6HMoBzsjeQ1JQ",
    "p256dh": "BOoxN3ipUUcWyacS1g2KrHrV3tij6N6u1DRdbJdKwevHqc4cunKMy3IsFVcz0AqsvhETHpI5NvXwxmp7GSgzrSE"
  }
}

push.sendNotification(sub, 'test msg')