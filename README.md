# ISP Outage Monitor

This little script gets you an overview how stable your internet connection is. It logs all outages and has a gui, so you can see if you have online connection and the datetime and duration of every outage.

## Installation on a Raspberry PI (Model B)

I assume, that you have allready copied the files to your raspberry pi. 

In the next step install NodeJS if you have not allready done. This could take a while.

```bash
sudo apt-get update  
sudo apt-get full-upgrade  
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -  
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```

After that run ``npm install`` to get all the dependencies of this script. Create a folder **database** in the root path of this little app where the outages were stored.

Run the script in the background by:

```bash
nohup node .
```
