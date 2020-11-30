# 2020最新Vue项目实战,B站移动端从0到1开发
## try the demo project  :
1.Use the latest version of node and npm:
```
source ~/.bash_profile 
nvm use node  

```
2.move to the project folder

3. install the node:
```
yarn
```
4. run the peoject:  
```
npm run serve
```
## Vue3 CLi ioinstall
1.Use the latest version of node and npm:     
```
source ~/.bash_profile 
nvm use node  
```
[NVM](https://github.com/GlennOu66304/hotelReservation)    

2. Set up the Vue3  
```
npm uninstall -g vue-cli 
npm install -g @vue/cli@latest 
```
reference:   
[How to upgrade my global vue-cli install to the latest version?](https://stackoverflow.com/questions/55686943/how-to-upgrade-my-global-vue-cli-install-to-the-latest-version)   

3. Create a app:  
```
vue create hello-world
```

4. Run the project:  
```
yarn serve
```
[create a website with Vue.js](http://glennou.cn/2020/08/24/create-a-website-with-Vuejs/)   

## Start buiild the project:  
```
zt@ztdeMacBook-Air ~ % vue create bili2 


Vue CLI v4.5.9
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router,
 Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback 
in production) Yes
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated confi
g files
? Save this as a preset for future projects? No


Vue CLI v4.5.9
✨  Creating project in /Users/zt/bili2.
⚙️  Installing CLI plugins. This might take a while...

yarn install v1.22.10
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...


success Saved lockfile.
✨  Done in 58.63s.
🚀  Invoking generators...
📦  Installing additional dependencies...

yarn install v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...

success Saved lockfile.
✨  Done in 43.11s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project bili2.
👉  Get started with the following commands:

 $ cd bili2
 $ yarn serve

zt@ztdeMacBook-Air ~ % 
```

Please be arware to to use the Vue to initial the project, the make sure select the router.
Do not choose the default option to build the project.

## bug fixing: webpack error in Cannot find module 'less'

run the code below to solve the issue:
```
npm install less less-loader
```
reference:  
[webpack error in Cannot find module 'less'](https://stackoverflow.com/questions/36781031/webpack-error-in-cannot-find-module-less)  

## No ESLint configuration found. #34

run the code below to solve the issue
```
npm install eslint -g -D
eslint --init
```
reference:  
[No ESLint configuration found. #34](https://github.com/creativetimofficial/vue-argon-design-system/issues/34)  
[Error: .eslintrc.js » eslint-config-standard: Environment key "es2021" is unknown](https://www.jianshu.com/p/f2203df15a90)   

## Local node update the node
1.just head to the node official website to install the latest node version;
reference:  
[node Downloads](https://nodejs.org/en/download/)   
[Upgrading Node.js to latest version](https://stackoverflow.com/questions/10075990/upgrading-node-js-to-latest-version?page=2&tab=votes#tab-top)  

## Bug:20:5 error Parsing error: end-tag-with-attributes vue/no-parsing-error

You need to go to certain file to check the grammar:

Like the code below: need to add extra arrow bracket.
```
<script
```

## Vant install:  
```
npm i vant -S
```
Main refernece:  
[Vant](https://youzan.github.io/vant/#/en-US/quickstart)  

## Resource:
Video: [2020最新Vue项目实战,B站移动端从0到1开发](https://www.bilibili.com/video/BV1vT4y137So?from=search&seid=17762586340653805563)   
Sourcecode:[Bilibili](https://github.com/githubchx12380/vue-bilibili)   