
# csploit.org

### How to build
```bash
gem update
gem install bundler jekyll jemoji
bundler exec jekyll serve
open http://127.0.0.1:4000//
```
### Output
```
Configuration file: /Users/andrea/Desktop/cSploit.github.io/_config.yml
Configuration file: /Users/andrea/Desktop/cSploit.github.io/_config.yml
            Source: /Users/andrea/Desktop/cSploit.github.io
       Destination: /Users/andrea/Desktop/cSploit.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 1.179 seconds.
 Auto-regeneration: enabled for '/Users/andrea/Desktop/cSploit.github.io'
Configuration file: /Users/andrea/Desktop/cSploit.github.io/_config.yml
    Server address: http://127.0.0.1:4000//
  Server running... press ctrl-c to stop.

```

### All TODOs:
- [ ] Write all .md files using a perfect syntax and using the right HTML format (h1,h2,h6)
- [X] Fix mobile paddingand & content align
- [X] Better resource loading with ksys @AndreaCioccarelli
- [X] Remove unuseful resources
- [X] Create new gradients for pages and extra
- [X] Make UI more fluid and responsive
- [X] Use a code-window plugin to host code on github using getter via row
- [X] Dump all loadings with a web-inspector and tweak resources loading time
- [X] Compleate toasts and iframes
- [X] Finish pages
- [X] Use Roboto Condensed


### Warning: Known issues
+ Page gets 404 errors for each redirection. it's normal, because cSploit will try to redirect you at rootURL + directory and not at the clean url. So, it will be fixed automatically when merged in master, because it'll set up automatically everything
+ Broken links on donation page
+ Internet explorer >11 not work, polygon() returns error
