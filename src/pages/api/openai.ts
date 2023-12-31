/* eslint-disable import/no-anonymous-default-export */

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_SKEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "Open API key missing => https://platform.openai.com/account/api-keys",
      },
    });
  }
  const input = req.body.input || "";
  if (input.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter an input",
      },
    });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 3600,
      temperature: 0.3,
      temperature: 0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (e) {
    res.status(500).json({
      error: {
        message: "An error occured during the request",
      },
    });
  }
}
