#!/bin/sh
echo "Inside install-integration-test"
npm install
brew tap wix/brew
brew install applesimutils
npm install -g detox-cli
npm install detox --save-dev