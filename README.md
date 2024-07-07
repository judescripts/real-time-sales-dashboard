# Real-Time Sales Dashboard

## Visit the blog here! => 🔗 [Advanced Data Visualization Techniques with D3.js and Plotly](https://devtoys.io/2024/07/07/advanced-data-visualization-techniques-with-d3-js-and-plotly/)

This DevToys.io blog tutorial project demonstrates how to create a real-time sales dashboard using D3.js and Plotly in a Node.js environment. The dashboard displays sales data that updates in real-time, leveraging both D3.js for intricate custom visualizations and Plotly for high-level, interactive charts.

## Project Overview

The real-time sales dashboard displays sales data that updates every two seconds. The project includes:
- A bar chart using D3.js with legends.
- A line chart using Plotly.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm)

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/real-time-sales-dashboard.git
   cd real-time-sales-dashboard
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Project Structure:**

   ```
   real-time-sales-dashboard/
   ├── public/
   │   ├── index.html
   │   ├── dashboard.js
   │   ├── d3.v6.min.js
   │   ├── plotly-latest.min.js
   │   └── styles.css
   ├── server.js
   └── package.json
   ```

## Running the Project

1. **Start the server:**

   ```sh
   node server.js
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:4000
   ```

## File Descriptions

### `server.js`

Sets up the Express server and Socket.IO for real-time updates.

### `public/index.html`

Contains the HTML structure and includes the necessary scripts for D3.js and Plotly.

### `public/dashboard.js`

Handles the client-side logic for rendering the charts and updating them in real-time.

### `public/d3.v6.min.js`

Minified version of D3.js library.

### `public/plotly-latest.min.js`

Minified version of Plotly library.

### `public/styles.css`

Styles the dashboard and the charts for better visual appeal.

## Customization

### D3.js Bar Chart

The D3.js bar chart includes legends and transitions for better visualization. You can customize the colors, transition durations, and other properties in the `dashboard.js` file.

### Plotly Line Chart

The Plotly line chart displays real-time sales data. You can customize the chart layout and styles in the `dashboard.js` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [D3.js](https://d3js.org/)
- [Plotly](https://plotly.com/javascript/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
