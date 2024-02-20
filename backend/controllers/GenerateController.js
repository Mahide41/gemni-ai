const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();
console.log("API KEY : ", process.env.APIKEY);
// GoogleGenerativeAI required config
const configuration = new GoogleGenerativeAI("AIzaSyBJkFNZUJMxGPh8KEBWcJOe0v_2aqvCC-8");

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

// Model initialization
const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId, safetySettings });

const history = [];
const generateResponse = async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await model.generateContentStream(prompt);
        const response = await result.response;
        const text = response.text();
        const { totalTokens } = await model.countTokens(prompt);
        history.push(response)
        res.status(200).json({ response: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    generateResponse,
    history
}