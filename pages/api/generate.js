import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API密钥未配置，请按照README.md中的说明操作",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "请输入有效的动物名",

      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal),
      temperature: 0.6,
    }, {
      timeout:30000,
      proxy: {
        host: '127.0.0.1',
        port: 10808
      }
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // 考虑调整错误处理逻辑以适应您的用例

    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`OpenAI API请求错误: ${error.message}`);

      res.status(500).json({
        error: {
          message: '请求期间发生错误。',
        }
      });
    }
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `为一只超级英雄动物建议三个名字。
动物：猫
名字：尖爪队长、绒球特工、无敌猫咪
动物：狗
名字：保护者拉夫、奇妙犬、吠叫爵士
动物：${capitalizedAnimal}
名字：`;

}
