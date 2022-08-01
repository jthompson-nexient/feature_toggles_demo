import express from 'express'
import featureFlags from './custom_feature_flag.js'

const app = express()

app.get("/", (req, res) => {
    (async function() {
        if (await featureFlags("render_improved_html_template_key")) {
            new_feature(res)
        } else {
            old_feature(res)
        }
    })()
})

app.listen("3001", () => {
    console.log("Listening")
})

function new_feature(res) {
    return res.send("NEEEWWWWWWWW")
}

function old_feature(res) {
    return res.send("..old feature")
}