from slacker import Slacker

slack = Slacker('xoxb-1799431276800-1781774573716-ZrujGqOfJ3N5YcLY30QeFGXR')

# Send a message to #stock channel
slack.chat.post_message('#stock', '안녕~ 프로그램 슬랙커야!')
