var push = require('web-push')

// let VAPIDKeys = push.generateVAPIDKeys()
let VAPIDKeys = {
  publicKey: 'BO_uPe2Cr6Yky3xkF6do8uJMBGErtqnHdd51PuEQ9Qfoc9QJyWbWl6HFaRUnTB8jPGA0gEUL30Yfh0LifOlEpDk',
  privateKey: 'z8FFP9C6Xvyc0KP8mzyFr0quJ7oB60xfJO4jfcVYatI'
}

push.setVapidDetails('mailto:easwar4@gmail.com', VAPIDKeys.publicKey, VAPIDKeys.privateKey)

// vigorous-ramanujan-8f6916.netlify.app
// firefox
// let sub = {
//   "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgB79YAEcepsXpmHW1kdyfXQlIJJhvSgBwesAH0Q8UKGWi-oZnjd6tTt1ez5qd_DDOztAOEwe1cXcZyLEUEsiIesrAWEGxw2CZhmf8GqBQkbGUQ3IAVGLhRdiyS-iQRjUQzztjdEmxeedXIc67X8jzZN7MSRrwdb3UZmvgeMOu9fFKBPg",
//   "keys": {
//     "auth": "tCv2Xwa-A6HMoBzsjeQ1JQ",
//     "p256dh": "BOoxN3ipUUcWyacS1g2KrHrV3tij6N6u1DRdbJdKwevHqc4cunKMy3IsFVcz0AqsvhETHpI5NvXwxmp7GSgzrSE"
//   }
// }

// chrome
let sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/ctQNqJ766qM:APA91bFw9UtkVQYsC_OAxtT9wWKWKA4ESDu9j8BkM9tQPCKF_h8GZTrGt2CPUsrj4rvQlPncGGlYwTTMgjKpX-e-v_L1Gyldi7neeF0WL4CU66wg32K4XAhO0wBp4aDahxhsfL25GwEM",
  "expirationTime": null,
  "keys": {
    "p256dh": "BIVyYIiyghTMAbnRUgjyzONLdw_OiPKSjsnaOg1yF__QW2OtNO5OF5jeBz5CiOuEjYaQHOGlZ2wC7xFRsZNLepI",
    "auth": "y1wHqblNjlVOuRpoHUnBSg"
  }
}

push.sendNotification(sub, 'test msg')