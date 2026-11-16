
# Task 1 — Project Setup

Task 1: Initialize React Application
|
+-- 1.1 Initialize project
|   +-- Create Vite React project
|   +-- Configure React 19
|   +-- Configure Vite
|
+-- 1.2 Install dependencies
|   +-- Install React 19
|   +-- Install React DOM 19
|   +-- Install React Router v7
|
+-- 1.3 Create minimal application
|   +-- index.html
|   +-- src/main.jsx
|   +-- src/App.jsx
|   +-- src/index.css
|
+-- 1.4 Verify project
|   +-- Run development server
|   +-- Check page rendering
|   +-- Check dependency versions


# Task 2 — Declarative Routing

```text
Task 2: Implement Declarative Routing
|
+-- 2.1 Configure Router
|   +-- Import BrowserRouter
|   +-- Wrap application with BrowserRouter
|   +-- Update src/main.jsx
|
+-- 2.2 Create Page Components
|   +-- Create Home.jsx
|   +-- Create About.jsx
|
+-- 2.3 Implement Route Configuration
|   +-- Import Routes and Route
|   +-- Define route "/" using element
|   +-- Define route "/about" using element
|   +-- Update src/App.jsx
|
+-- 2.4 Implement Navigation
|   +-- Import NavLink
|   +-- Add Home navigation link
|   +-- Add About navigation link
|   +-- Apply active class using isActive
|   +-- Update src/index.css
|
+-- 2.5 Verification
|   +-- Verify Home route
|   +-- Verify About route
|   +-- Verify navigation without page reload
|   +-- Verify active link styling
|   +-- Verify production build

# Task 3 — Nested Routes & Shared Layouts

```text
Task 3: Nested Routes & Shared Layouts
|
+-- 3.1 Create Shared Layout
|   +-- Create src/layouts/MainLayout.jsx
|   +-- Move application heading into MainLayout
|   +-- Move existing NavLink navigation into MainLayout
|   +-- Preserve active link styling
|
+-- 3.2 Implement Outlet
|   +-- Import Outlet from react-router
|   +-- Render Outlet inside MainLayout
|   +-- Display child route content through Outlet
|
+-- 3.3 Implement Nested Routes
|   +-- Update src/App.jsx
|   +-- Define parent Layout route
|   +-- Define Home as index route
|   +-- Define About as nested route
|
+-- 3.4 Verify Application
|   +-- Verify Home renders at /
|   +-- Verify About renders at /about
|   +-- Verify shared layout remains visible
|   +-- Verify active NavLink styling
|   +-- Verify navigation without page reload
|   +-- Verify production build

# Task 4 — Lazy Loading & Suspense

```text
Task 4: Lazy Loading & Suspense
|
+-- 4.1 Implement Route-Level Code Splitting
|   +-- Import lazy from React
|   +-- Replace static Home import with React.lazy()
|   +-- Replace static About import with React.lazy()
|   +-- Use dynamic import() for each page
|   +-- Update src/App.jsx
|
+-- 4.2 Implement Suspense Boundary
|   +-- Import Suspense from React
|   +-- Wrap Outlet in Suspense
|   +-- Provide minimal loading fallback
|   +-- Keep shared navigation visible
|   +-- Update src/layouts/MainLayout.jsx
|
+-- 4.3 Verification
|   +-- Verify Home route loads
|   +-- Verify About route loads
|   +-- Verify navigation remains functional
|   +-- Verify route-level JavaScript chunks
|   +-- Verify Suspense fallback
|   +-- Verify production build
|


