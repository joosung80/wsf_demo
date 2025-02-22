# TODO Application Design Document

## Overview
Modern TODO application with React frontend hosted on GitHub Pages and AWS Serverless backend infrastructure managed with CDK.

## System Architecture

### Frontend (React + GitHub Pages)
- Single Page Application (SPA) built with React
- Hosted on GitHub Pages for easy deployment and accessibility
- Material-UI or Tailwind CSS for modern UI components
- State management using React Context or Redux (if needed)

### Backend (AWS Serverless)
1. API Gateway
   - REST API endpoints for TODO operations
   - CORS enabled for GitHub Pages domain

2. Lambda Functions
   - createTodo
   - getTodos
   - updateTodo
   - deleteTodo
   - markTodoComplete

3. DynamoDB
   - Table: Todos
     - PK: todoId (UUID)
     - SK: userId (anonymous user identifier)
     - Fields:
       - title: String
       - description: String
       - status: String (PENDING/COMPLETED)
       - createdAt: Timestamp
       - updatedAt: Timestamp

4. Cognito
   - Anonymous user access enabled
   - Identity Pool for generating temporary AWS credentials
   - No user authentication required

## API Design

### Endpoints

1. POST /todos
   - Create new todo item
   - Request body: { title, description }

2. GET /todos
   - Retrieve all todos for anonymous user
   - Query params: status (optional)

3. PUT /todos/{todoId}
   - Update existing todo
   - Request body: { title, description, status }

4. DELETE /todos/{todoId}
   - Delete specific todo

## Frontend Design

### Components
1. TodoList
   - Main component displaying all todos
   - Filtering capability by status

2. TodoItem
   - Individual todo item display
   - Edit/Delete actions
   - Status toggle

3. AddTodoForm
   - Form for creating new todos
   - Input validation

4. FilterBar
   - Filter todos by status
   - Search functionality

### State Management
- React Context for global state
- Local state for form handling
- API integration using custom hooks

## Infrastructure as Code (CDK)

### Stacks
1. StorageStack
   - DynamoDB table
   - S3 bucket (if needed for attachments)

2. ApiStack
   - API Gateway
   - Lambda functions
   - IAM roles and policies

3. AuthStack
   - Cognito Identity Pool
   - IAM roles for anonymous access

## Development Workflow
1. Local Development
   - React development server
   - Local testing of Lambda functions
   - CDK local testing

2. Deployment
   - GitHub Actions for frontend deployment
   - CDK deployment for backend infrastructure
   - Automated testing before deployment

## Security Considerations
1. CORS configuration for GitHub Pages domain
2. Rate limiting on API Gateway
3. Least privilege IAM roles
4. DynamoDB item ownership validation

## Monitoring and Logging
1. CloudWatch Logs for Lambda functions
2. CloudWatch Metrics for API Gateway
3. X-Ray tracing for request tracking
4. Error handling and reporting

## Future Enhancements
1. User authentication
2. Todo sharing capabilities
3. Attachments support
4. Due dates and reminders
5. Categories and tags
