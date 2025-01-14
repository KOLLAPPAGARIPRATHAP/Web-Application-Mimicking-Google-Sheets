# Web-Application-Mimicking-Google-Sheets
The project is a Google Sheets Clone built using the Electron framework along with HTML, CSS, JavaScript, and EJS as a templating engine. The application replicates key functionalities of Google Sheets, allowing users to perform tasks like cell formatting, managing multiple sheets, and evaluating formulas.
# Google Sheets Clone

## Description:

The **Google Sheets Clone** is a web-based application built using **Flask**, **JavaScript**, and **HTML/CSS** with **Generative AI model integration**. This project replicates the functionality of a basic spreadsheet application and includes essential features that allow users to interact with spreadsheets effectively. The application allows users to perform tasks like modifying cell sizes, evaluating formulas, and formatting the sheets with font styles, colors, and alignment.

### Key Features:
- **Change Cell Size**: Dynamically adjust the size of cells for better content presentation.
- **Cycle Detection in Formula**: Detect cycles in formulas to avoid errors during formula evaluation.
- **Evaluate Formula using Stack**: Implement a stack-based algorithm to evaluate formulas entered in cells.
- **File Management**: New, Open, and Save functionalities to handle spreadsheet data.
- **Formatting Options**: Font styles (bold, italic, underline), font size, text color, background color, and cell alignment.
- **WorkBook Management**: Create multiple sheets within a single workbook, allowing easy navigation between sheets.

### Demo:
![Screenshot 1](https://user-images.githubusercontent.com/57831888/102913495-d68fb680-44a4-11eb-8d2f-4e656ed66b4d.png)
![Screenshot 2](https://user-images.githubusercontent.com/57831888/102913487-d4c5f300-44a4-11eb-8efd-5469bf74305e.png)

## 🚀 Technical Stack:

### Frontend:
- **Programming Language**: JavaScript
- **Framework**: Flask (for backend integration)
- **Templating Engine**: EJS (for dynamic content rendering)
- **IDE**: VS Code
- **CSS Framework**: Custom styling with responsive layouts (using Flexbox)

### Backend:
- **Framework**: Flask (for backend server and API integration)
- **Generative AI Model**: Llama-2-13B-Chat (to enhance user interaction and facilitate formula evaluations)
- **Database**: In-memory storage for sheet data (enhanced with file storage capabilities)

### Features:
- **Interactive Sheets**: Users can click and type in cells, and their actions will be reflected immediately.
- **Advanced Formula Evaluation**: The application can evaluate complex formulas using a stack-based algorithm, with cycle detection to avoid infinite loops.
- **Save & Load Workbooks**: Users can save their workbooks and load them later. The app supports saving multiple sheets in one workbook.
- **Cell Formatting**: A comprehensive range of formatting options is available, including font changes, cell colors, and text alignment.

---

## 📄 Installation

To run the project locally, follow these steps:

### Prerequisites:
- **Python 3.x** (for backend)
- **Flask** (Python framework)
- **Node.js & npm** (for frontend dependencies)

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/google-sheets-clone.git
