# ISP Outage Monitor

This little script gets you an overview how stable your internet connection is. It logs all outages and has a gui, so you can see of you have online connection and the datetime and duration of every outage.

## Installation on a Raspberry PI (Model B)

I assume, that you have allready copied the files to your raspberry pi. After that run ``npm install`` to get all the dependencies. After that create a folder **database** in the root path of this little app.

In the next step install NodeJS, this could take a while.

```bash
sudo apt-get update  
sudo apt-get full-upgrade  
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -  
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```

Run the script in the background by:

```bash
nohup node .
```
