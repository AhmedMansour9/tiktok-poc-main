# Safe space

A modern React Native project built with a pragmatic Clean Architecture approach.

The goal of this project is to keep the codebase simple, scalable, and easy to maintain without introducing unnecessary complexity.

---

# Project Structure

```
src
├── core
│   ├── common
│   ├── components
│   ├── grpc
│   └── network
│
└── features
    ├── home
    ├── search
    ├── shorts
    └── profile
```

The project follows a **Feature First** architecture.

Each feature owns everything related to it including:

- API
- Repository
- Hooks
- Components
- Screens
- Mock Data
- Types

Example:

```
features
└── shorts
    ├── api
    ├── components
    ├── hooks
    ├── mock
    ├── repositories
    ├── screens
    └── types
```

This keeps every feature isolated and easy to maintain.

---

# Architecture

The data flow inside every feature is:

```
Screen
    ↓
Hook
    ↓
Repository
    ↓
Api
    ↓
HTTP / gRPC / Mock
```

Each layer has a single responsibility.

## Screen

Responsible only for rendering the UI.

It never talks directly to APIs.

---

## Hook

Responsible for UI state.

Examples:

- loading
- error
- refresh
- local state

The hook does not know how data is fetched.

---

## Repository

Responsible for:

- communicating with APIs
- handling errors
- returning Result<T>

The repository hides the implementation details from the UI.

---

## API

Responsible only for making network requests.

No UI logic should exist here.

---

# Error Handling

The project uses a generic Result type.

Instead of throwing exceptions to the UI, repositories return either:

```ts
Success<T>
```

or

```ts
Failure
```

Example:

```ts
const result = await repository.getVideos();

if (result.success) {
    // use data
} else {
    // show error
}
```

This keeps error handling consistent across the application.

---

# Core Module

The `core` folder contains shared functionality used across all features.

Examples:

- reusable UI components
- networking
- gRPC configuration
- common utilities

Features should depend on `core`, but never on other features.

---

# Networking

HTTP requests are centralized inside:

```
core/network
```

Future improvements:

- Axios Interceptors
- Authentication
- Retry
- Logging

---

# gRPC

gRPC configuration lives inside:

```
core/grpc
```

Features access gRPC through their repositories exactly the same way they access REST APIs.

This keeps the UI independent of the transport layer.

---

# Generating gRPC Files

1. Add or update `.proto` files in the `proto` folder at the project root.
2. Run:

```bash
npm run gen:proto
```

This generates `generated.js` and `generated.d.ts` inside `src/core/network/grpc/proto`.

---

# Design Principles

This project follows:

- Feature First
- Separation of Concerns
- Single Responsibility Principle
- Composition over inheritance
- Keep It Simple
- Avoid Over Engineering

The architecture intentionally avoids unnecessary abstractions until they are actually needed.

---

# Future Improvements

- Dependency Injection
- DTO / Mapper
- Environment Configuration
- Unit Testing
- Offline Cache
- Authentication
- Pagination
- Request Retry
- Logging

                   UI Layer
┌────────────────────────────────────┐
│             Screen                 │
└────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────┐
│              Hook                  │
└────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────┐
│           Repository               │
└────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────┐
│              API                   │
└────────────────────────────────────┘
          │                  │
          ▼                  ▼
      HTTP Client         gRPC Client