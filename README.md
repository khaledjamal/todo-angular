# Angular Universal Todo App (Server-Side Rendering)

A server-side rendered (SSR) Todo application built with **Angular 5** and **Angular Universal**, featuring RESTful API integration, optimistic UI updates, and modular architecture. The app is enhanced with prerendering support and Webpack-based SSR configuration for production use.

> 📆 Originally developed in 2017–2018 using Angular CLI 1.6 and Angular 5.

---

## 🚀 Features

- ✅ Server-side rendering (SSR) via Angular Universal
- ✅ Static prerendering for selected routes using `prerender.ts`
- ✅ RESTful API integration using Angular's `HttpClient`
- ✅ Optimistic UI updates with error fallback
- ✅ Modular, scalable TypeScript codebase
- ✅ Custom Webpack configuration for server build
- ✅ Environment-based builds (`dev` / `prod`)

---

## 🧱 Tech Stack

- **Angular 5**
- **Angular Universal**
- **TypeScript**
- **RxJS 5**
- **Webpack**
- **Node.js**
- **Yarn & npm**

> ⚠️ Backend API is expected at `http://localhost:8080/todo`. This server is not included in the repository.

---

## 📂 Project Structure (Simplified)

```
project/
├── src/
│   ├── app/                       # Main application logic (components, services, models)
│   ├── environments/              # Dev/prod environment configs
│   ├── assets/                    # Static assets
│   ├── index.html                 # Main HTML entry point
│   ├── main.ts / main.server.ts  # Entry points for browser/server
│   └── styles.css                # Global styles
│
├── server.ts                     # SSR server entry
├── prerender.ts                  # Static prerendering script
├── static.paths.ts              # Route definitions for prerendering
├── webpack.server.config.js     # Custom Webpack config for server-side build
├── .angular-cli.json             # Angular CLI configuration
├── tsconfig*.json                # TypeScript configs
├── package.json / yarn.lock      # Dependency declarations
```

---

## 🔧 How It Works

- **Client-Server Bootstrapping**: The app uses separate entry points (`main.ts` and `main.server.ts`) and modules (`AppModule`, `AppServerModule`) for browser and server rendering.
- **Universal SSR**: Server-side rendering is enabled using Angular Universal and a custom Webpack config (`webpack.server.config.js`).
- **Prerendering**: The app supports static prerendering using `prerender.ts` and a list of paths defined in `static.paths.ts`.
- **REST API Communication**: Angular's `HttpClient` is used to GET and POST todo lists from/to an external API.
- **Optimistic UI**: Todos are updated locally after confirmation from the server. Failures are gracefully handled using Angular’s change detection lifecycle.

---

## ✨ Notable Implementation Details

- Uses `JSON.parse(JSON.stringify(...))` for deep cloning in the UI logic.
- Error recovery uses `setTimeout()` to reset checkbox states without breaking Angular bindings.
- Custom `.angular-cli.json` defines separate `browser` and `server` build targets.

---

## 📦 Build & Run (Legacy Setup)

> Note: Commands assume global Angular CLI 1.6 and Node 8/10

```bash
# Install dependencies
npm install

# Build client & server
npm run build:ssr

# Run the SSR app
npm run serve:ssr

# Optional: Generate static HTML pages
npm run prerender
```

---

## 👤 About Me

I'm a hands-on full-stack developer with extensive experience in Angular, Spring Boot, and scalable enterprise applications. I enjoy building high-performance frontends, mentoring teams, and delivering clean, maintainable code.

---

## 📬 Contact

- 📧 Email: javaobjects@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/khaledjamal1
- 💻 GitHub: https://github.com/khaledjamal

---

> _This project is a demonstration of Angular Universal, built during the early days of SSR in Angular 5. While some practices and dependencies are now outdated, it reflects solid engineering principles and SSR fundamentals._
