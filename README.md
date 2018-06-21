# Sample code for turning JSON API to CSV

## Quick Start

- Install [Node](https://nodejs.org/en/download/)
- Clone the repository
- Run the following commands

```bash
$ cd es2csv
$ npm install
$ npm run start
```

Then open browser at [http://localhost:3000](http://localhost:3000)

## Test with Google Sheet

To allow Google Sheet (temporary) access data on your local machine:
- Install [ngrok](https://ngrok.com/download)
- Run the following commands

```bash
$ ngrok http 3000
```

Which will output:

```
ngrok by @inconshreveable

Session Status     online
Session Expires    7 hours, 59 minutes
Version            2.2.8
Region             United States (us)
Web Interface      http://127.0.0.1:4040
Forwarding         http://<host>.ngrok.io -> localhost:3000
Forwarding         https://<host>.ngrok.io -> localhost:3000
```

Then copy the URL with format `http://<host>.ngrok.io` to Google Sheet and enjoy! 😎

```
=IMPORTDATA("http://<host>.ngrok.io/countries.csv")
```

*The url provided by ngrok should be used for testing only. You need to deploy the script somewhere else.*
