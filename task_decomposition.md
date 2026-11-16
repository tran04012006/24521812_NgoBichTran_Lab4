
# Task 1 — Project Setup

Task 1: Project Setup
|
+-- 1.1 Initialize Project
|   +-- Create Vite + React application
|   +-- Configure React 19
|   +-- Install dependencies
|
+-- 1.2 Prepare Project Structure
|   +-- src/
|   |   +-- components/
|   |   +-- App.jsx
|   |   +-- main.jsx
|   |   +-- index.css
|   +-- index.html
|   +-- package.json
|   +-- vite.config.js
|   +-- .gitignore
|
+-- 1.3 Create Initial Application
|   +-- Implement App.jsx
|   +-- Add basic CSS
|   +-- Verify React rendering
|

# Task 2 — Reproduce Legacy Validation Anti-Patterns

## Objective

Implement the legacy form validation architecture using
five chained useEffect hooks across InputField and
SimpleForm.

## Task Decomposition

```text
Task 2: Legacy Validation Anti-Patterns
|
+-- 2.1 Create InputField Component
|   +-- Implement local input state
|   +-- Implement onChange handler
|   +-- Add useEffect #1: syncToParent()
|   +-- Add useEffect #4: syncErrorsToChild()
|   +-- Add useEffect #5: autoScrollToError()
|
+-- 2.2 Create SimpleForm Component
|   +-- Implement parent form state
|   +-- Implement validation error state
|   +-- Implement form validity state
|   +-- Add useEffect #2: validateField()
|   +-- Add useEffect #3: calcFormValidity()
|   +-- Implement form submission
|
+-- 2.3 Integrate Components
|   +-- Import SimpleForm into App.jsx
|   +-- Connect InputField to SimpleForm
|   +-- Add basic form styling
|   +-- Display validation feedback
|
+-- 2.4 Git Commits
|   +-- Commit 4: Create legacy InputField
|   +-- Commit 5: Create legacy SimpleForm
|   +-- Commit 6: Integrate legacy form
|
+-- 2.5 Verification
    +-- Input accepts user typing
    +-- Local state synchronizes with parent
    +-- Invalid email displays error
    +-- Valid email clears error
    +-- Form validity updates correctly
    +-- Five useEffect hooks are present
    +-- Application remains usable
```

