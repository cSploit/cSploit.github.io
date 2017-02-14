# cSploit.github.io

### How to build
```bash
gem update
gem install bundler jekyll jemoji
bundler exec jekyll serve
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
- [ ] Create github control center with JSON APIs interpreter in JS
- [ ] Better resource loading with ksys @AndreaCioccarelli
- [ ] Remove unuseful resources
- [ ] Create new gradients for pages and extra
- [ ] Make UI more fluid and responsive
- [ ] Use a code-window plugin to host code on github using getter via row
- [ ] Dump all loadings with a web-inspector and tweak resources loading time
- [ ] Add google-analytics script to monotor traffic in blank (Maybe)
- [ ] Compleate toasts and iframes
- [X] Finish pages


### Warning: Known issues
+ Page gets 404 errors for each redirection. it's normal, because cSploit will try (Security reason) to redirect you at rootURL + directory and not at the clean directory. So, it will be fixed automatically when merged in master, because it'll set up automatically everything
