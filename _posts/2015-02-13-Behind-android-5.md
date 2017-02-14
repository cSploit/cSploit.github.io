---
title: The work made to support Android 5.0
categories: news
---

#### Everything thanks to a guy from the internet

When the T42 died the time that i could spend on this project were significatly reduced.
android 5 support were probably ready on summer.

But, now, cSploit works on Android 5.0 ! :v:

All this thanks to one guy, he contacted me via email after I wrote about my old T42 and purchased me an used T60 notebook.

This kindfull act make me proud about our growing community.


#### Hack and trick

###### **Network Radar**

The first issue fixed on android 5.0 were with the replacement of `NetworkDiscovery`.
`NetworkDiscovery` were wrote in java and opens a lot of sockets for searching hosts in your local subnet.
That was horrible :grin:
All these opened sockets made cSploit reach the maximum number of opened files on android 5.0

I rewrote it **completely** in plain ANSI C.

I changed it's name to `NetworkRadar`, thus to give a better idea of what it does.
For more infos about this component of cSploit visit the [project page](https://github.com/cSploit/network-radar/).

###### **Socket context**

The second issue I fixed were a selinux restriction about accessing the `/dev/socket` folder.
Moving the cSploit UNIX socket inside the app folder fixed this.

###### **PIE**

Last but not least problem were the PIE restricion (Position Indipendent Executables).
Android Lollipop supports only executables compiled with the PIE flag.
Android version prior to *JELLY_BEAN* does not support this kind of executables.

My choice for fixing this problem were to build the core and the ruby package twice,
One for the PIE platforms and one for the non PIE platform.

cSploit will detect your platform on first start and install the right core.

This solution have many impacts on many aspect of cSploit. first of all the APK size is reduced from ~10MB to ~3MB.
This means a faster startup of the application :wink:

Another aspect is that we can now create ad-hoc core packages.
Say that one day a particular bug on many devices is found,
well just detect the bug on boot and download the ad-hoc core package. :sunglasses:

##### Special Thanks<!-- todo -->
* The guy that purchased me a new notebook, he make me able to work on cSploit in these months.
 
* All of you that have helped me in testing cSploit on lollipop devices.
 
* All those contributors that manage translations for me, thus to let me focus on the code.



