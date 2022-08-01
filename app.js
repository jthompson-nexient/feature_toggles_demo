import express from 'express'
import featureFlags from './aws_sdk_flag_utils.js'

const app = express()

app.get("/", (req, res) => {
    render_home_page(res)
})

app.listen("3001", () => {
    console.log("Listening")
})

/* generic parent function to call one of the two implementations based
on the feature flag */
async function render_home_page(res) {
    if (await featureFlags("render_improved_html_template_key")) {
        new_home_page(res)
    } else {
        old_home_page(res)
    }
}

function new_home_page(res) {
    return res.send("NEEEWWWWWWWW")
}

function old_home_page(res) {
    return res.send("..old feature")
}
