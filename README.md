# SME-QA Website
This is the repo for the SME-QA website which can be found at smeqa.usds.gov.

## Local Development Instructions

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
