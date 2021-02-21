<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSocket Test</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function() {
            var ws;
            var url = 'ws://127.0.0.1';
            let output = document.getElementById("output");
            var txtRecv = $('#Recv');
            ws = new WebSocket(url);
            
            // websocket 서버에 연결되면 연결 메시지를 화면에 출력한다.
            ws.onopen = function (event) {
                //ws.send("Here's some text that the server is urgently awaiting!");
                //writeToScreen("연결완료.");
                //sendText();
                txtRecv.append( "connected<br>" );
            }

            // Send text to all users through the server
            function sendText() {
                // Construct a msg object containing the data the server needs to process the message from the chat client.
                var msg = {
                    type: "message",
                    text: document.getElementById("text").value,
                    id:   clientID,
                    date: Date.now()
                };

                // Send the msg object as a JSON-formatted string.
                ws.send(JSON.stringify(msg));

                // Blank the text input element, ready to receive the next line of text from the user.
                document.getElementById("text").value = "";
            }

            // websocket 에서 수신한 메시지를 화면에 출력한다.
            ws.onmessage = function (event) {
                // var f = document.getElementById("chatbox").contentDocument;
                // var text = "";
                // var msg = JSON.parse(event.data);
                // var time = new Date(msg.date);
                // var timeStr = time.toLocaleTimeString();

                // switch(msg.type) {
                //     case "id":
                //         clientID = msg.id;
                //         setUsername();
                //         break;
                //     case "username":
                //         text = "<b>User <em>" + msg.name + "</em> signed in at " + timeStr + "</b><br>";
                //         break;
                //     case "message":
                //         text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
                //         break;
                //     case "rejectusername":
                //         text = "<b>Your username has been set to <em>" + msg.name + "</em> because the name you chose is in use.</b><br>"
                //         break;
                //     case "userlist":
                //         var ul = "";
                //         for (i=0; i < msg.users.length; i++) {
                //             ul += msg.users[i] + "<br>";
                //         }
                //         document.getElementById("userlistbox").innerHTML = ul;
                //         break;
                // }

                // if (text.length) {
                //     f.write(text);
                //     document.getElementById("chatbox").contentWindow.scrollByPages(1);
                // }

                txtRecv.append( e.data + "<br>" );
            }
            
            function writeToScreen(message) {
                let pre = document.createElement("p");
                pre.style.wordWrap = "break-word";
                pre.innerHTML = message;
                output.appendChild(pre);
            }

            ws.onerror = function(event) {
                console.log(event);
            }

            // websocket 세션이 종료되면 화면에 출력한다.
            ws.onclose = function(e){
                txtRecv.append( "closed<br>" );
            }
        });

        // 사용자가 입력한 메시지를 서버로 전송한다.
        function sendMessage()
        {
            var txtSend = $('#Send');

            ws.send( txtSend.val() );
            txtSend.val( "" );
        }
    </script>
</head>
<body>
    <form>
        <input id="Send" type="text">
        <button type="button" onclick="sendMessage();">Send</button>
    </form>
      
    <div id="Recv"></div>
</body>
</html>