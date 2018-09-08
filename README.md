# Flatpak.org website

## Installation and setup

To set up middleman locally on Fedora:

    dnf install ruby rubygems rubygem-bundler rubygem-json

In the git checkout, do a `bundle install`. This installs all 
the needed modules in their appropriate vesions.

Add the middleman binary location (probably ~/bin) to $PATH.

## Testing

To run a local web server to test the site:

    bundle exec middleman server

Edit the haml/scss files and commit your changes, pushing to 
origin/source.

## Deployment

**You must be on the source branch to deploy.**

To deploy your changes:

    rm -rf build
    bundle exec middleman build
    bundle exec middleman deploy

This will push the site from ./build into origin/master branch. 
The flatpak sysadmins then have to update the live site.

## 翻译进度

- [x] index.html
- [x] setup.html
  - [x] Ubuntu
  - [x] Fedora
  - [x] Red Hat Enterprise Linux
  - [x] Linux Mint
  - [x] openSUSE
  - [x] Arch
  - [x] Debian
  - [x] CentOS
  - [x] Gentoo
  - [x] Solus
  - [x] Alpine
  - [x] Megeia
  - [x] Pop!_OS
  - [x] elementary OS
  - [x] Raspbian
- [x] press.html
  - [x] Announcing Flatpak – Next Generation Linux Applications
  - [x] Flatpak 1.0 Released, Ready for Prime Time
- [x] about
- [x] faq.html