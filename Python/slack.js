// slack의 봇을 이용한 message 전송 사용방법 - javascript 버젼
// slack을 다운받아 설치고 workspace(나의 경우는 herold-stock)를 만들고 channel(나는 stock으로 생성)을 추가한다.
// 먼저 api.slack.com으로 접속하여 사용할 workspace을 선택하고 chat-bot(나는 stock-bot)을 생성한다.
// OAuth & Permissions 에서 'chat:write'로 설정한 OAuth Tokens for Your Team을 받는다.
// TOKEN=xoxb-1799431276800-1781774573716-ZrujGqOfJ3N5YcLY30QeFGXR

// vsCode cmd창에서 다음을 실행한다.
// 그러면 node_modules 디렉토리가 생성되고 필요한 라이브러리가 다운로드 설치된다.
// npm install @slack/web-api @slack/events-api

// cmd창에서 SLACK_TOKEN을 설정한다.
// set SLACK_TOKEN=xoxb-1799431276800-1781774573716-ZrujGqOfJ3N5YcLY30QeFGXR

// 아래 코드를 slack.js 파일에 해당 디렉토리에 생성한다.
// cmd 창에서 node slack.js를 실행하면 미리 설정한 workspace의 #stock 채널로 메시지가 전달된다.
const { WebClient } = require('@slack/web-api');

// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_TOKEN);
// The current date
const currentTime = new Date().toTimeString();

(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#stock',
      text: `The current time is ${currentTime}`,
    });
  } catch (error) {
    console.log(error);
  }

  console.log('Message posted!');
})();