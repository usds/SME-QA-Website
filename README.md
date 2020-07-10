# SME-QA Website
This is the repo for the SME-QA website which can be found at smeqa.usds.gov.

## Local Development Instructions

### References
https://brew.sh/  
https://jekyllrb.com/docs/installation/macos/

#### WHIT Macs
If you have a WHIT Mac, [follow these instructions](https://tools.usds.gov/handbook/how-to/whit-mac.md) on installing Xcode, Homebrew, NPM, and Ruby.

### Make sure you have ruby installed
```
xcode-select --install
brew install ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
```

### Check if ruby has been installed
```
which ruby
ruby -v
````

### Do this once per ruby version
```
gem install bundler
gem install jekyll
```

### Do this occasionally when the project updates
```
bundle install
```

### Do this to start development
```
npm start
```

### Do this to perform a clean build for deployment
```
npm build
```
NOTE: This isn't necessary as github pages will perform this step automatically.

The website will start at http://localhost:4000

### If you have no styles when building locally
Will can only make the build work with this command:
```
bundle exec jekyll serve --config _config-dev.yml
```
