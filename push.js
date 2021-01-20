var push = require('web-push')

// let VAPIDKeys = push.generateVAPIDKeys()
let VAPIDKeys = {
  publicKey: 'BO_uPe2Cr6Yky3xkF6do8uJMBGErtqnHdd51PuEQ9Qfoc9QJyWbWl6HFaRUnTB8jPGA0gEUL30Yfh0LifOlEpDk',
  privateKey: 'z8FFP9C6Xvyc0KP8mzyFr0quJ7oB60xfJO4jfcVYatI'
}

push.setVapidDetails('mailto:easwar4@gmail.com', VAPIDKeys.publicKey, VAPIDKeys.privateKey)

let sub = {

}

push.sendNotification(sub, 'test msg')