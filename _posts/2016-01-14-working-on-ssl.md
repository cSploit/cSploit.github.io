---
title: Working on SSL
categories: news
---
#### SSL Hacking
Yesterday a my friend asked me to intercept some kind of SSL-secured session.

Rigth now I'm working on putting some extra feature into cSploit to intercept secured communications.

I'm working on 2 features:

<ul class="collection">
  <li class="collection-item">DNS aliasing to bypass HSTS</li>
  <li class="collection-item">Inject cSploit CA certificate</li>
</ul>

I think that the cleaner approach is the root CA certificate injection,
As it will allow us to sniff even those connection that are started over SSL.

Obviously this method will pop up a dialog on the victim phone (I'm testing on Android and iOS),
Asking him to add our root CA certificate.

I bet that many users are too dummy and will just press "go on".

The other method is to alising any hardcoded HSTS domain into something similar ( like MITMf does ),
But using DNS instead of HTTP, this will give us the ability to perform this action even on secured connections.
That said, beating HTST isn't enough, the connection still performed over SSL and there is no way to redirect to a non-SSL.
However as the user request a resource over plain HTTP ( usually assets ), we will sniff it's cookies for that domain.
If the unsecured resource contains any secured link we can strip them out.

I will work more on this features today, the deadline for the work should be tomorrow around 3 PM UTC.

This is a gift that I'm making to this my friend, however the work will be used to improve cSploit,
I hope that you will enjoy and apreciate my work.
