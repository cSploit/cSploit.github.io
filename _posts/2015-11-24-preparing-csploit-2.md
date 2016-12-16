---
title: Preparing cSploit 2
categories: news
---

As many of you may noticed we are not making releases from some time.
Now I'm working on rewriting how cSploit deal with the MSF and we are making big changes,
let's take a look :wink:

##### The new MSF

currently MSF interaction it's messy and distributed among various part of our application.
I spent weeks studying the way the MSF works and I made a library that behave in the same way.

cSploit will use this library to communicate with the MSF RPC daemon,
without worrying about how this stuff works, it just use it.

what you will see it's that cSploit will have a dedicated MSF section, where you
can exploit the whole power of the MSF.

here some new feature that I hope you like:


<ul class="collection">
  <li class="collection-item">full module infos ( authors, references, description ... )</li>
  <li class="collection-item">improved module options management</li>
  <li class="collection-item">jobs ( long-running exploits as browser related ones )</li>
  <li class="collection-item">upgrade a shell session to meterpreter</li>
  <li class="collection-item">execute post modules on sessions</li>
  <li class="collection-item">you can now have your msfconsole :heart:</li>
  <li class="collection-item">command history for consoles and sessions</li>
  <li class="collection-item">session/console output will still here until you close cSploit</li>
  <li class="collection-item">event-based system ( notifications/feedback when something changes)</li>
</ul>

##### The new UI

thanks to fat-tire we are moving to a fragment-based UI.
we will have a sidebar to navigate between main sections of the app ( e.g. youtube app ).

it will be awesome, trust me :wink:


##### Why changing the version number

As [semver] say a program should increate it's major version number when it's API it's not backward compatible.

Our android app does not expose any API, but I think that our "interface" it's the UI.

So we are changing the whole UI, making the previous way of using cSploit incompatible :grin:

exploits and sessions will no more live under teargets and many other
logical changes that break how you use the application.

[semver]: http://semver.org
