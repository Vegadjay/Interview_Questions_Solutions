# Progress Bar Component

## Project Overview

This repository contains a React-based solution for a common frontend interview question asked at companies like Meta, Uber, and Google: implementing a dynamic progress bar with async data fetching.

## The Interview Problem

**Challenge:** Create a progress bar that displays the loading state of an asynchronous API request, with multiple intermediate steps visible to the user.

This is a common interview question because it tests several important skills:
- State management in React
- Handling asynchronous operations
- Creating responsive UI elements
- Understanding of component lifecycle

## Solution

The implementation includes:

1. A main `App` component that:
   - Manages API data fetching
   - Tracks loading state
   - Updates progress at defined milestones (30%, 50%, 70%, 100%)

2. A reusable `ProgressBar` component that:
   - Takes a progress value as a prop
   - Visually represents the loading progress
   - Animates smoothly between progress states

## Code Explanation

The solution uses React hooks (`useState`, `useEffect`) to manage state and side effects:

- `isLoading` tracks whether data is currently being fetched
- `loadingValue` represents the current progress percentage (0-100)
- `apiData` stores the data once fetched

The progress bar advances at specific milestones during the data fetching process:
- 30% when fetch begins
- 50% after initial delay
- 70% after fetch completes
- 100% after data processing

## Key Features

- **Visual Loading Feedback**: Users can see the exact progress of their request
- **Smooth Transitions**: CSS transitions create a polished user experience
- **Reusable Components**: The ProgressBar component can be used throughout an application
- **Error Handling**: Try/catch block ensures errors won't break the user experience

## How to Use

1. Import the component into your project
2. Replace `"add_your_api_here"` with your actual API endpoint
3. Customize the progress bar styling as needed

## Technical Stack

- React (with Hooks)
- CSS for styling
- Fetch API for data retrieval

## Possible Enhancements

- Add error state visualization
- Implement retry functionality
- Add accessibility features (ARIA attributes)
- Create different themes for the progress bar

## Why This Solution Stands Out

This implementation demonstrates knowledge of modern React patterns and an understanding of creating good user experiences during loading states, which is something that interviewers at top tech companies look for in candidates.