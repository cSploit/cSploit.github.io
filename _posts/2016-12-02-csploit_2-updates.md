---
title: Some updates about cSploit 2 development
categories: news
author: DeveloppSoft
---

##### Hello
Hi guys, I am DeveloppSoft, one of the cSploit devs.
I am currently working on the version 2 of our great project :heart:!
Let me give you some news...

##### The new daemon
As some of you know, we have decided to rewrite the whole project in golang in order to build a daemon that will be able to run on most platforms (computers, Android phones, etc...). The daemon is located in a [new repository](https://github.com/cSploit/daemon), so you can track our progress!

##### But... What about the UI??
Well... That's a tricky question :smile:...
Currently we are focusing on the daemon, but we planned to start developing the UI soon!

##### How will it work?
We will use a web based UI (provide more portability accross the different platforms) that will communicate with the daemon thanks to a REST api.

##### What we did
Currently, we implemented the following
-	A nice database
-	Ability to manages hosts, services and even scanned networks!
-	WiFi cracking (no, it is not a joke :smirk:!)
-	The network radar
I am sure I missed some parts, but you got the point :smile:!

##### What's planed?
I will continue to work on the WiFi attacks by implementing Wps and rogue APs (thanks to the [mana](https://github.com/sensepost/mana)) attacks.

Napitek is working on the evilproxy project (manipulate victims traffic after an MITM attack).

IwraStudios is working on dns2proxy project (will let us intercept https).

Tux-mind is working really hard on the daemon (can't quote evrything :smile:!).

If I forgot someone, I am sorry!

##### The end
Well... I guess it is the end, thanks guys!
And... don't forget to make a donation to the project if you can! :heart:
