const express = require('express')
const line = require('@line/bot-sdk')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const port = 1010
const config = {
    channelAccessToken: "uEmxQ5eqN3dnFdBYzvMv4/LoVmQQ50YcDrP81+/VJTr/9mar35SKFkpQsgK6MkSkLiNGDkLtZ0KDHispD7iiXoQZPn7OQuTmFYynCgaVtQ9v4zgT82uBXOrRa3QOHbkWnqzDs5i6zAKEoYvm19atEAdB04t89/1O/w1cDnyilFU=",
    channelSecret: "8ff5f1c6a82e76869d788a0f26958156"
}
const client = new line.Client(config)

app.use(cors())

app.post('/login', bodyParser.json(), (req) => {
    console.log(req.url)
    console.log(req.body)

    client.pushMessage('Uc60be211af4e1985384e3beb01a9c7d7', {

        type: "flex",
        altText: "this is a flex message",
        contents: {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: req.body.picture
                    },
                    {
                        type: 'text',
                        text: `Email : ${req.body.email} `
                    }, {
                        type: 'text',
                        text: `  Name : ${req.body.name}`
                    }
                ]

            }
        }
    })

})


app.listen(port, () => console.log(`App running:${port}`))

