# SME-QA Website
This is the repo for the SME-QA website which can be found at smeqa.usds.gov.

## Local Development Instructions

### references
https://brew.sh/  
https://jekyllrb.com/docs/installation/macos/

### make sure you have ruby installed
```
xcode-select --install
brew install ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
```

### check if ruby has been installed
```
which ruby
ruby -v
````

### do this once per ruby version
```
gem install bundler
gem install jekyll
```

### do this occasionally when the project updates
```
bundle install
```

### do this to build the website
```
bundle exec jekyll serve --config _config-dev.yml
```

the website will start at http://127.0.0.1:4000
