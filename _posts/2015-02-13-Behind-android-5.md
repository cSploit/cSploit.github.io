---
title: the work made to support android 5
categories: news
---

##### everything thanks to a guy from the internet

when the T42 died the time that i could spend on this project were significatly reduced.
android 5 support were probably ready on summer.

but, now, cSploit works on android 5 ! :v:

all this thanks to one guy, he contacted me via email after I wrote about my old T42 and purchased me an used T60 notebook.

this kindfull act make me proud about our growing community.


##### Hack and trick

###### **Network Radar**

the first issue fixed on android 5 were with the replacement of `NetworkDiscovery`.
`NetworkDiscovery` were wrote in java and opens a lot of sockets for searching hosts in your local subnet.
that was horrible :grin:
all these opened sockets made cSploit reach the maximum number of opened files on android 5.

I rewrote it **completely** in plain ANSI C.

I changed it's name to `NetworkRadar`, thus to give a better idea of what it does.
for more infos about this component of cSploit visit the [project page](https://github.com/cSploit/network-radar/).

###### **socket context**

the second issue I fixed were a selinux restriction about accessing the `/dev/socket` folder.
moving the cSploit UNIX socket inside the app folder fixed this.

###### **PIE**

last but not least problem were the PIE restricion ( Position Indipendent Executables ).
android 5 support only executables compiled with the PIE flag.
android version prior to JELLY_BEAN does not support this kind of executables.

my choice for fixing this problem were to build the core and the ruby package twice,
one for the PIE platforms and one for the non PIE platform.

cSploit will detect your platform on boot and install the right core.

this solution have many impacts on many aspect of cSploit. first of all the APK size is reduced from ~10MB to ~3MB.
this means a faster startup of the application :wink:

another aspect is that we can now create ad-hoc core packages.
say that one day a particular bug on many devices is found,
well just detect the bug on boot and download the ad-hoc core package. :sunglasses:

##### special thanks

  - - the guy that purchased me a new notebook, he make me able to work on cSploit in these months.
  - - all of you that have helped me in testing cSploit on lollipop devices.
  - - all those contributors that manage translations for me, thus to let me focus on the code.



