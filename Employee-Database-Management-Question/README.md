# Employee Dashboard Component

A responsive React dashboard for managing employee information with a clean UI built using React and Tailwind CSS.

- ``` This question is ask in META, UBER Machine coding round. ```

## Features

- Display employees in an interactive sidebar list
- View detailed employee profiles
- Add new employees via a simple form
- Responsive design for all devices

## Installation

```bash
# Install dependencies
npm install

# Start the dev server
npm start
```

## Usage

```jsx
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
```

## Data Structure

Employee objects follow this structure:

```javascript
{
  name: "John Doe",
  age: 30,
  img: "https://url-to-image.jpg" // Optional
}
```

## Component Structure

- **Header**: Dashboard title
- **Main Dashboard**:
  - Sidebar with employee list
  - Main content showing selected employee details
- **Add Employee Form**: Form to add new employees

## Future Enhancements

- Data persistence
- Edit/delete functionality
- Filtering and sorting
- Additional employee details

## License

MIT