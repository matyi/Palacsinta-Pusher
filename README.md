# Palacsinta-Pusher

## Requirements
1. Register a free [Pusher account](https://pusher.com/)
2. On linux you have to install Festival ```apt-get install festival```
3. Don't forget to plug in the speakers

## Installation

```yarn```

### Add `.env` file

```
PUSHER_API_KEY = ''
PUSHER_SECRET = ''
PUSHER_APP_ID = ''
PUSHER_CLUSTER = ''
```

## Start the app

```yarn start```

## Let's send palacsinta events

| | Send events with these settings |
| ---------------- | ------------------------------------------------------------|
| Channel          | palacsinta-channel                                          |
| Event            | palacsinta-happened                                         |
| Data (optional*) | ```{ "name": "the name who has been palacsinta bombed" }``` |

_* Data is optional but an empty object is still required_
