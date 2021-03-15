Activity Log Collector for ISO20022 hackathon
=============================

This service gets the information of the activity log from redis (pub-sub) and from mojaloop testing toolkit (websockets). And also it serves the activity over websockets to the simulator page.

## Architecture

The following is the architecture of this setup with various components

![Monitoring Page](/assets/images/activity-log.png)

## Quick Start

To see the working scenario of this service, you need the following services runing on your machine. And you can follow this guide to run this setup for a quick check.

* TTK backend service
* Redis service
* ISO Activity Collector Service (This service)
* ISO UI simulator
* A sample redist publisher to simulate the ISO message logging from a compoent

### 1. Runing Redis service, Testing Toolkit and ISO Activity Collector Service
```
git clone https://github.com/vijayg10/iso-activity-log-collector.git
cd iso-activity-log-collector
docker-compose up
```

### 2. Runing ISO UI Simulator
```
git clone https://github.com/vijayg10/iso-sim-ui.git
cd iso-sim-ui
docker-compose up
```
Open the URL http://localhost:7070

### 3.  Send a sample redis pub message to get the log in UI
Run the following commands and observe the UI
```
cd iso-activity-log-collector
node src/sampleRedisPub.js ./sample-iso-messages/post-quotes-as-iso-pain-001.xml
```

You can observe the changes in the UI like below screenshots

![ISO Seq Diag](/assets/images/screenshot_iso_seq-diagram.png)
![ISO Activity Log](/assets/images/screenshot_iso_activity_log.png)

### 4.  Send a mojaloop message to TTK
Try to send a mojaloop request to TTK on port 5000, then you can observe the sequence diagram and activity log on the SIM UI.

### 5.  Implement the redis pub messages in the format used in the following file
```
src/sampleRedisPub.js
```