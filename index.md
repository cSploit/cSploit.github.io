---
---

# cSploit

The most complete and advanced IT security professional toolkit on Android.

### cSploit target

My final goal is to write an application that is able to:

  - crack wifi passwords
  - enumerate local hosts (*)
  - find vulnerabilities (*)
  - find exploits for these vulnerabilities (*)
  - use those exploits to gain access to the target (*)
  - install backdoors for later access

(*) already implemented

### Portability

Thanks to the new core, cSploit will be easily portable.

Basically it can run on any UNIX-based system, but for now only Andorid is supported. When I reach a beta-state version I will consider working on iOS, OSX, GTK+ and QT.

### Contribute to the code

If you want to contribute fork the repo you want to contribute to and create a pull request when you're done.
If you actively contribute to the project I will ask you to join the team.

### Support us

Please [donate](/donate.html) to cSploit to support our efforts and resources.
Thank you :heart:

### Story

After being initially created by evilsocket, I ( tux-mind ) started working on dSploit in summer 2012, i forked it and added the following features:

  - Vulnerability finder
  - Exploit finder
  - MetaSploitFramework integration ( draft )

After some weeks the project owner ( evilsocket ) asked me to merge it to the upstream branch.
Initially there were about 2 main developers (me and evilsocket) and an UI developer ( androguide ).
After a few months evilsocket got overloaded by work and stop working on it.


But I kept working on dSploit, always trying to improve it.
Many functions were slow and error-prone, I changed the way them work, added new features and corrected many bugs.


Finally, in summer 2014 I suggested a new way to make dSploit work, the new core.
basically I wish to move all the slow and inefficent code out of Java.
Evilsocket agreed with my suggestion and told me to start working on it.
Evilsocket is very busy with work because he started working for zImpremium.


On autumn 2014 evilsocket received the order to merge dSploit into zANTI2.
this decision killed the project.
I asked if I could bring it on, but evilsocket told that the domain dsploit.net belongs to him 
and dsploit will officially merge into zANTI2.
so I forked the project and finished my work on the new core.

> **NOTE:** Evilsocket told, that in a far future zANTI2 will be open source,
> but I don't want to wait for this, I want to finish all original dSploit TODOs.

This was when cSploit was born.
