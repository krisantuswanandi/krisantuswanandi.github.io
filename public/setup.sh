#!/usr/bin/env bash

# based on https://gist.github.com/bradp/bea76b16d3325f5c47d4

echo "Installing command line tools..."
xcode-select --install

echo "Installing homebrew..."
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

echo "Installing brew packages..."
brew install bat
brew install deno
brew install exa
brew install ffmpeg
brew install fnm
brew install fzf
brew install gh
brew install git
brew install go
brew install imagemagick
brew install jq
brew install kubernetes-cli
brew install neovim
brew install ripgrep
brew install rustup-init
brew install streamlink
brew install tmux
brew install tree-sitter
brew install vercel-cli
brew install youtube-dl
brew install zig
brew install zoxide

brew tap oven-sh/bun
brew install bun

echo "Installing applications..."
brew install --cask blender
brew install --cask brave-browser
brew install --cask docker
brew install --cask elmedia-player
brew install --cask eqmac
brew install --cask firefox
brew install --cask google-chrome
brew install --cask inkscape
brew install --cask iterm2
brew install --cask openvpn-connect
brew install --cask postman
brew install --cask raycast
brew install --cask sequel-ace
brew install --cask the-unarchiver
brew install --cask visual-studio-code

brew tap homebrew/cask-fonts
brew install --cask font-fira-code

echo "Setting up node..."
fnm install --lts
corepack enable
npm i -g @antfu/ni
npm i -g yo
npm i -g generator-code

echo "Setting up git..."
git config --global user.name "Krisantus Wanandi"
git config --global user.email krisantus.wanandi@gmail.com

mkdir -p ~/Documents/projects/personal
cd ~/Documents/projects/personal

gh repo clone krisantuswanandi/asomasow
gh repo clone krisantuswanandi/dotfiles
gh repo clone krisantuswanandi/krisantuswanandi.github.io
gh repo clone krisantuswanandi/mongkee
gh repo clone krisantuswanandi/not-an
gh repo clone krisantuswanandi/sharelinkgan
gh repo clone krisantuswanandi/shotime
gh repo clone krisantuswanandi/vdom-kw
gh repo clone krisantuswanandi/volumer
gh repo clone krisantuswanandi/vsext

echo "Update conf..."
defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
defaults write com.apple.dock autohide -bool true
defaults write com.apple.dock persistent-apps -array
killall Dock

ln -s ~/Documents/projects/personal/dotfiles/nvim ~/.config/nvim

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
