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

### Make sure you have node and npm installed
```
node --version
npm --version
```

### Install the gulp command line tool
```
npm install --global gulp-cli
```

### Do this occasionally when the project updates
```
bundle install
```

### Do this to start development
```
npm run dev
```

This will serve the application on port 8080 and should automatically open http://localhost:8080.

### Do this to perform a clean build for deployment
```
npm run build
```
NOTE: This isn't necessary as github pages will perform this step automatically.


