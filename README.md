# YTLPAngularBasics
# Angular 19 Environment Setup and Project Overview

This guide provides step-by-step instructions to set up the environment for Angular 19, create a new project, understand its file structure, and familiarize yourself with essential commands.

## Prerequisites

Before starting, ensure your system meets the following requirements:

- **Node.js**: Version 18.19.1 or newer. [Download Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js.
- **Text Editor**: Visual Studio Code is recommended. [Download VS Code](https://code.visualstudio.com/)

## Installing Angular CLI

The Angular Command Line Interface (CLI) streamlines the development process. To install it globally:

```bash
npm install -g @angular/cli
```

## Creating a New Angular Project

With the Angular CLI installed, create a new project by running:

```bash
ng new my-angular-app
```

Replace `my-angular-app` with your desired project name. The CLI will prompt you with configuration options; you can accept the defaults or customize as needed.

After creation, navigate to your project directory:

```bash
cd my-angular-app
```

To start the development server:

```bash
ng serve
```

By default, the application runs at `http://localhost:4200/`.

## Project File Structure

An Angular project comprises several files and directories:

- **`node_modules/`**: Contains installed npm packages.
- **`src/`**: Main source code directory.
  - **`app/`**: Contains application modules and components.
    - **`app.component.ts`**: Defines the root component.
    - **`app.component.spec.ts`**: File to write your tests.
    - **`app.component.html`**: Template for the root component.
    - **`app.component.css`**: Styles for the root component.
  - **`index.html`**: Main HTML file.
  - **`main.ts`**: Entry point of the application.
  - **`styles.css`**: Global styles.
- **`angular.json`**: Workspace configuration.
- **`package.json`**: npm configuration and scripts.
- **`tsconfig.json`**: TypeScript configuration.

For a detailed breakdown, refer to the [Angular documentation](https://angular.dev/reference/configs/file-structure).

## Core Angular Concepts

Angular applications are built using several key concepts:

- **Components**: The building blocks of the UI, each with its own template, styles, and logic.
- **Modules**: Containers that group related components, directives, pipes, and services.
- **Templates**: Define the view for a component using HTML.
- **Services**: Classes that handle data logic and can be shared across components.
- **Directives**: Instructions in the DOM that extend HTML capabilities.
- **Pipes**: Transform displayed data within templates.

## Essential Angular CLI Commands

Here are some fundamental commands to assist in Angular development:

- **Generate a new component**:

  ```bash
  ng generate component component-name
  ```

- **Generate a new service**:

  ```bash
  ng generate service service-name
  ```

- **Build the application for production**:

  ```bash
  ng build --prod
  ```

- **Run unit tests**:

  ```bash
  ng test
  ```

- **Run end-to-end tests**:

  ```bash
  ng e2e
  ```
 ---
 ## Creating and Using Components in Angular 19

### What is a Component?

A component in Angular is a TypeScript class that interacts with the HTML template to render the view. It consists of:

- **Template**: Defines the view's structure using HTML.
- **Styles**: Apply specific styling to the template.
- **Logic**: Implemented in the TypeScript class to handle data and user interactions.

### Creating a Component

To create a new component in Angular 19, use:

```bash
ng generate component component-name
```

This command generates:

- `component-name.component.ts`: Component logic.
- `component-name.component.html`: Component template.
- `component-name.component.css`: Component styles.
- `component-name.component.spec.ts`: Test file.

### Using a Component

To use a standalone component within another component:

1. **Import the Component** in `user-profile.component.ts`:

    ```typescript
    import { Component } from '@angular/core';
    import { ProfilePhoto } from './profile-photo.component';

    @Component({
      selector: 'user-profile',
      imports: [ProfilePhoto],
      templateUrl: './user-profile.component.html',
      styleUrls: ['./user-profile.component.css']
    })
    export class UserProfile {
      // Component logic
    }
    ```

2. **Use the Component** in `user-profile.component.html`:

    ```html
    <profile-photo></profile-photo>

3. **Single file Component**

    If you want to have a single file component which only has a .ts file, you can delete .html and .css files
    Instead of using templateUrl and styleUrl we can use template and style, removing the need of having individual files
    Write the html in template: 
    Write the css in style: 

    ```typescript
    import { Component } from '@angular/core';
    import { ProfilePhoto } from './profile-photo.component';

    @Component({
      selector: 'user-profile',
      imports: [ProfilePhoto],
      templateUrl: "<h1>Profile Photo</h1>",
      styleUrls: ['h1 {color: gray}']
    })
    export class UserProfile {
      // Component logic
    }
    ```

## Data Binding and Interpolation in Angular 19

### Interpolation

Interpolation allows you to incorporate dynamic values into your HTML templates. It uses double curly braces `{{ }}` to bind data from the component to the view.

Example:

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basics';
}
```

```html
<!-- app.component.html -->
<h1>{{ title }}</h1>
```

### Property Binding

Property binding allows you to bind values to the properties of HTML elements. It uses square brackets `[]`.

Example:

```html
<!-- app.component.html -->
<input [value]="title">
```

### Event Binding

Event binding allows you to listen to events such as clicks, key presses, etc. It uses parentheses `()`.

Example:

```html
<!-- app.component.html -->
<button (click)="onClick()">Click me</button>
```

```typescript
// app.component.ts
export class AppComponent {
  title = 'Angular Basics';

  onClick() {
    alert('Button clicked!');
  }
}
```

### Two-Way Binding

Two-way binding combines property binding and event binding using the `ngModel` directive. It uses `[()]` syntax, also known as banana-in-a-box.

Example:

```html
<!-- app.component.html -->
<input [(ngModel)]="title">
<p>{{ title }}</p>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  title = 'Angular Basics';
}
```

These are the fundamental concepts of data binding and interpolation in Angular 19. They help in creating dynamic and interactive web applications.