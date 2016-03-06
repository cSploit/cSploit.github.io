---
title: Designing cSploit 2
categories: news
---

I received an email from a guy that want to joint the dev team.

I replied with the following email, I just want to share it with you.
I'm looking forward to receive your comments and suggestions, especially from my loved contributors.

Feel free to comments on the [issue](https://github.com/cSploit/android/issues/597) I opened.

---

As i told you I really love the project but I'm overloaded of work to fill my fridge besides lessons and exams for my master degree.
I would really appreciate any help in maintaining/developing cSploit.

I have a lot of ideas that will make it more flexible and cross-platform.

As now I've started working on a new fragmented layout of the app .
But combining what I learned from school and work with the **huge** amount of work needed to switch to this new layout makes me think about a new architecture for the whole app.

First let me explain you a bit how the app worked, how it works and what are my thoughts for the future.

### The old dSploit

dSploit were entirely written in Java, using the Android SDK.
It used some prebuilt binary with some from-sources ones to have hackers-must-have tools ( arpspoof, nmap, hydra, ettercap ... ).
Then it spawned a su shell each time a command is issues.

We encountered many problems, like dynamic library loading restrictions, limitations on su shell opened in a certain time window and so on...
One of the major ones was the MitM performances: when a lot of traffic passed though dSploit it cannot satisfy that load.

### The current cSploit

The idea behind cSploit is to rewrite the "problematic stuff" of the app into C ( from there the new app name).
As now there is a daemon ( cSploitd ) that just manage child processes.
The Java app connects to it via a unix socket ( using a native library ) and use it to spawn processes and get their results.
This a very "old school" architecture, hard to maintain, hard to add a new tool to our set and so on.

I probably made a bad choice when I was forced to abandon the dSploit project as it were merged into zAnti.

### My thoughts for the future

I'm working pretty much with web apps now and I saw the awesome of having a full decupled system.
Having an API server and a thin frontend makes everything clean and easily maintainable. 

So I was thinking about using this architecture for cSploit, using a REST daemon that crunch data and make the whole work,
beside with a thin client that just represent the data from the daemon.

For the frontend I was loooking to angularJS and cordova.
For the backend I was looking at Go.

AngularJS, HTML5, CSS3 will make us able to provide a web client to the daemon (responsive [PC, mobile, tablet]).
Cordova ( and maybe Ionic ) will then take care of turning this web app into a mobile app for any kind of mobile platform ( Android, iOS, blackberry, windows phone ... ).

For the backend I was looking to Go because the alternatives just do not fit well with android and it's performances are simply awesome.
I love the idea of having a compiled daemon ( this is because I designed cSploit daemon in C ), it just run very fast!
Now, thanks to Go we can have a native program written in a high-level language!

### Conclusions

I'm looking forward to resume forking on the project, really, but now I have to finish my jobs and follow my courses.
There is a kindness guy that it's about to send me a Thinkpad to work better when I'm not at home ( mostly all days ).
I hope to get back writing code as I resume my courses ( just tomorrow xD ), but depends on my workload.

So, if you can help me in any way I will really appreciate it.
Tell me your skills and super-powers, there is very much to do.

Feel free to suggest anything you want, I'm really open to hints and I will make my best to fit your needs.