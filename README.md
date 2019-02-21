# ISP Outage Monitor

This little script gets you an overview how stable your internet connection is. It logs all outages and has a gui, so you can see of you have online connection and the datetime and duration of every outage.

## Installation on a Raspberry PI

I assume, that you have allready copied the files to your raspberry pi. After that run ``npm install`` to get all the dependencies. After that create a folder **database** in the root path of this little app.

In the next step install NodeJS, this could take a while.

```bash
sudo apt-get update  
sudo apt-get full-upgrade  
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -  
sudo apt-get install -y nodejs
```

Install PM2 to let the application run without you needed to be logged in:

```bash
sudo npm install -g pm2
```

Run the script in the background by:

```bash
pm start ./index.js
```
