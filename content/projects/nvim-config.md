+++
title = 'Nvim Config'
date = 2024-07-28T13:00:45-04:00
draft = false
+++

Neovim is my primary text editor of choice. In this article, I'll be breaking down my current configuration file and explaining the purpose of most plugins and settings.
At the moment, I've tried to mantain a fairly simple configuration, but I'm always looking to improve it.
I'll try updating this article with any changes as time goes on. You can see my config [here](https://github.com/BigBoiChickenNugget/dotfiles).

### Structure
I use lazy as my plugin manager, which I'll get into, but my file structure at the moment looks like this:
```
├── init.lua
├── lazy-lock.json
└── lua
    ├── config
    │   ├── lazy.lua
    │   ├── mappings.lua
    │   └── options.lua
    └── plugins
        ├── copilot.lua
        ├── lsp.lua
        ├── lua-line.lua
        ├── oil.lua
        ├── rose-pine.lua
        ├── telescope.lua
        ├── tokyonight.lua
        ├── treesitter.lua
        ├── vim-smoothie.lua
        ├── vimtex.lua
        ├── which-key.lua
        └── zen-mode.lua
```
The init.lua file is where I source all the other required files. This is what it looks like
```lua
require("config.options")
require("config.mappings")
require("config.lazy")
```

### Options
I have a file for the options I want for neovim. This is what some of it looks like looks like:
```lua
vim.opt.number = true -- display numbers
vim.opt.relativenumber = true -- display numbers relative to line (helps with jumping around)
vim.opt.mouse = 'a' -- mouse stuff

vim.opt.ignorecase = true -- ignore case while searching
vim.opt.smartcase = true -- if uppercase search, only look for uppercase characters

vim.opt.hlsearch = false -- don't highlight past search results
vim.opt.wrap = false -- don't wrap text. it looks horrible

vim.opt.tabstop = 4 -- tab 4
vim.opt.shiftwidth = 4 -- tab 4. 8 is too much

vim.opt.expandtab = false -- keep tab as a tab. don't turn it into spaces

vim.opt.scrolloff = 7 -- start scrolling when 7 lines are left

vim.opt.fillchars = { eob = ' ' } -- fill end of buffer with spaces
```
The last line, for fillchars, is because I don't like the look of the tildas. I prefer a blank spaces instead.

### Mappings
I have a file for all my mappings. This is what it looks like:
```lua
vim.g.mapleader = " " -- set leader key to space
vim.g.maplocalleader = "\\"

vim.keymap.set({'n', 'x'}, '<leader>y', '"+y') -- for copy just do leader (space) and then y
vim.keymap.set({'n', 'x'}, '<leader>p', '"+p') -- for paste just do leader (space) and then p
```
My mappings are fairly simple. I have the leader key set to space, and I have a few mappings for copying and pasting.
