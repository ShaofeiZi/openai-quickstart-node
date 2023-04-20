# OpenAI API快速入门 - Node.js示例应用

这是在OpenAI API [快速入门教程](https://platform.openai.com/docs/quickstart)中使用的示例宠物名称生成器应用程序。它使用[Next.js](https://nextjs.org/)框架和[React](https://reactjs.org/)。查看教程或按照以下说明进行设置。

![文本框，其中写着“给我的宠物取名”，旁边是一只狗的图标](https://user-images.githubusercontent.com/10623307/213887080-b2bc4645-7fdb-4dbd-ae42-efce00d0dc29.png)


## 设置

1. 如果您没有安装Node.js，请[从此处安装](https://nodejs.org/en/)（需要Node.js版本> = 14.6.0）

2. 克隆此存储库
3. 进入项目目录

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

应该现在可以通过访问[http://localhost:3000](http://localhost:3000)来访问该应用程序！有关此示例应用程序背后的完整上下文，请查看[教程](https://platform.openai.com/docs/quickstart)。

