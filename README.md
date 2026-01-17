# AwesomeProject

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

---

# 📚 React Native 学习路线图

## 🎯 当前状态分析

你已经掌握了：

- ✅ React Native 项目结构
- ✅ 基础组件使用（View, Text, TextInput, TouchableOpacity）
- ✅ State 管理（useState Hook）
- ✅ 样式系统（StyleSheet）
- ✅ 基础表单处理

---

## 📖 学习阶段规划

### 第一阶段：巩固基础（第 1 周）

#### 1. 深入学习 React Hooks

**学习资源：**

- [React Hooks 官方文档](https://react.dev/reference/react)
- 重点关注：`useState`, `useEffect`, `useCallback`, `useMemo`

**实践任务：**

- [ ] 在你的登录界面添加 `useEffect` 监听表单变化
- [ ] 使用 `useCallback` 优化 `handleLogin` 函数
- [ ] 学习使用 `useMemo` 缓存计算结果

#### 2. 表单验证和用户体验

**学习主题：**

- 邮箱格式验证（正则表达式）
- 密码强度验证
- 输入错误提示
- 加载状态管理

**实践任务：**

- [ ] 添加邮箱格式验证（使用正则表达式：`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`）
- [ ] 添加密码长度验证（至少 6 个字符）
- [ ] 在输入框下方显示错误提示（而不是 Alert）
- [ ] 添加登录按钮的 loading 状态（使用 `ActivityIndicator`）

#### 3. 样式进阶

**学习主题：**

- Flexbox 布局深入
- 响应式设计
- 平台特定样式（Platform.select）

**学习资源：**

- [Flexbox 布局详解](https://reactnative.dev/docs/flexbox)
- [Platform 模块](https://reactnative.dev/docs/platform-specific-code)

---

### 第二阶段：导航系统（第 2 周）

#### 1. 安装 React Navigation

**安装命令：**

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
```

**学习资源：**

- [React Navigation 官方文档](https://reactnavigation.org/)
- [Getting Started](https://reactnavigation.org/docs/getting-started)

**实践任务：**

- [ ] 安装 React Navigation 及相关依赖
- [ ] 学习 Stack Navigator 的概念
- [ ] 创建主页面组件（Welcome/Home）
- [ ] 配置导航：登录成功后跳转到主页面
- [ ] 实现页面间的数据传递（传递 email）

---

### 第三阶段：状态管理（第 3 周）

#### 1. Context API

**学习资源：**

- [React Context 官方文档](https://react.dev/reference/react/useContext)

**实践任务：**

- [ ] 创建用户认证 Context
- [ ] 在登录成功后更新 Context
- [ ] 在多个页面中共享用户信息

#### 2. 本地存储（AsyncStorage）

**安装：**

```bash
npm install @react-native-async-storage/async-storage
```

**学习资源：**

- [React Native AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

**实践任务：**

- [ ] 登录成功后保存用户信息到本地
- [ ] App 启动时检查是否有已保存的用户信息
- [ ] 实现"记住我"功能

---

### 第四阶段：网络请求（第 4 周）

#### 1. Fetch API

**学习主题：**

- HTTP 请求基础
- Fetch API 的使用
- Promise 和 async/await
- 错误处理

**学习资源：**

- [Fetch API 文档](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Promise 和 async/await](https://javascript.info/async-await)

**实践任务：**

- [ ] 创建 API 服务文件（services/api.ts）
- [ ] 实现模拟的登录 API 调用
- [ ] 处理网络错误和响应错误

---

## 🎯 推荐学习顺序

### 第 1 周：基础巩固

- **周一-周二**：深入学习 React Hooks（useState, useEffect）
- **周三-周四**：表单验证和用户体验优化
- **周五-周末**：样式进阶，完善登录界面

### 第 2 周：导航系统

- **周一-周二**：学习 React Navigation 概念和安装
- **周三-周四**：创建主页面，配置导航
- **周五-周末**：实现页面间数据传递

### 第 3 周：状态管理

- **周一-周二**：学习 Context API
- **周三-周四**：实现用户认证 Context
- **周五-周末**：学习 AsyncStorage，实现数据持久化

### 第 4 周：网络请求

- **周一-周二**：学习 Fetch API 和 Promise
- **周三-周四**：创建 API 服务
- **周五-周末**：整合所有功能，完成一个完整的小项目

---

## 🛠️ 推荐学习资源

### 官方文档（必读）

1. [React Native 官方文档](https://reactnative.dev/docs/getting-started)
2. [React 官方文档](https://react.dev)
3. [TypeScript 官方文档](https://www.typescriptlang.org/docs/)

### 视频教程（可选）

- YouTube 搜索："React Native Tutorial"
- React Native 官方 YouTube 频道

### 实践平台

- **GitHub**：创建仓库，记录学习过程
- **Expo Snack**：在线 React Native 编辑器

---

## 💡 学习建议

### 1. 动手实践

- **不要只看不动手**：每学一个概念，立即在你的项目中实现
- **修改现有代码**：在现有登录界面上添加新功能

### 2. 循序渐进

- **不要跳跃学习**：先掌握基础，再学习高级特性
- **理解原理**：不只是复制代码，要理解为什么这样写

### 3. 遇到问题

- **查看官方文档**：90% 的问题都能在文档中找到答案
- **使用搜索引擎**：错误信息 + "React Native" 搜索
- **Stack Overflow**：查看类似问题

### 4. 代码规范

- **使用 TypeScript**：你的项目已经配置了 TS，充分利用类型系统
- **保持代码整洁**：定期重构代码，提取可复用的组件

### 5. 记录学习

- **写注释**：在代码中写下你学到了什么
- **记录问题**：遇到错误时记录解决方案
- **分享学习**：在 GitHub 上记录学习过程

---

## 🎯 下一步行动

### 立即开始（今天）

1. **深入学习 useEffect**

   - 阅读官方文档
   - 在你的登录界面中添加一个效果：当用户输入邮箱时，在控制台打印日志

2. **改进表单验证**
   - 实现邮箱格式验证
   - 在输入框下方显示错误提示（不使用 Alert）

### 本周完成

- [ ] 登录界面添加完整的表单验证
- [ ] 添加 loading 状态
- [ ] 优化用户体验（错误提示、输入反馈）

### 下周开始

- [ ] 安装 React Navigation
- [ ] 创建主页面
- [ ] 实现页面导航

---

## ✅ 学习里程碑

当你完成以下任务时，说明你已经掌握了基础：

- [ ] 能独立创建 React Native 项目
- [ ] 理解组件、Props、State
- [ ] 能使用 Hooks 管理状态
- [ ] 能实现表单验证
- [ ] 能配置页面导航
- [ ] 能使用 Context 管理全局状态
- [ ] 能进行网络请求
- [ ] 能处理错误和加载状态

**加油！记住：编程是实践的艺术，多动手，多思考！** 🚀

---

## ❓ 常见问题

### Q: 我应该先学 React 还是直接学 React Native？

**A:** 如果你已经会用 React Native 的基础组件（View, Text），说明你已经理解了 React 的核心概念。继续学习 React Native，遇到 React 概念时再深入学习。

### Q: 我应该看中文还是英文文档？

**A:** 建议看英文官方文档（最准确、最新）。接国外单时也需要阅读英文文档，现在就开始习惯。

### Q: 需要学习原生开发（Java/Kotlin/Swift）吗？

**A:** 初期不需要。React Native 的目标就是避免原生开发。遇到需要原生功能时，可以使用社区库或学习对应的原生集成。

### Q: 如何选择学习资源？

**A:** 优先官方文档 → Stack Overflow → GitHub Issues → YouTube 教程

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
