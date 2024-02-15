# TechnoBlog Web Application

TechnoBlog is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), Nodemailer library for email functionalities, and Cloudinary service for managing image uploads. This platform allows users to publish posts or blogs covering various topics in the technology field such as web development, mobile development, AI, cybersecurity, and others.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Create and Publish Posts**: Authenticated users can create and publish posts with images and content related to various technology topics.
- **Email Notifications**: Nodemailer library is integrated to send email notifications for various actions such as new user registration, password reset, etc.
- **Image Uploads**: Cloudinary service is used for storing and managing images uploaded by users for their posts.
- **User Profiles**: Users have profiles where they can view their published posts and other account information.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/KamelTouati/TechnoBlog
```

2. Navigate to the project directory:

```bash
cd technoblog
```

3. Install dependencies:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

4. Set up environment variables:

- Create a `.env` file in the root directory.
- Define the following environment variables:

```
PORT=5000
MONGODB_URI=<your_mongodb_uri>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
APP_EMAIL_ADDRESS=<your_email_service_provider>
APP_EMAIL_PASSWORD=<your_email_password>
JWT_SECRET=<your_jwt_secret>
```

5. Start the development server:

```bash
# Start frontend development server
cd frontend
npm run dev

# Start backend development server
cd ../backend
npm run app
```

## Screenshots

![website interface0](<Screenshots/(1).png>)
![website interface0](<Screenshots/(2).png>)
![website interface0](<Screenshots/(3).png>)
![website interface0](<Screenshots/(4).png>)
![website interface0](<Screenshots/(5).png>)
![website interface0](<Screenshots/(6).png>)
![website interface0](<Screenshots/(7).png>)
![website interface0](<Screenshots/(8).png>)
![website interface0](<Screenshots/(9).png>)
![website interface0](<Screenshots/(10).png>)
![website interface0](<Screenshots/(11).png>)
![website interface0](<Screenshots/(12).png>)
![website interface0](<Screenshots/(13).png>)
![website interface0](<Screenshots/(14).png>)

## Usage

- Access the application by navigating to `http://localhost:5173` in your web browser.
- Sign up or log in to start creating and publishing posts.
- Explore existing posts, search for topics of interest, and interact with other users' content.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

Feel free to customize this template according to the specific details and features of your TechnoBlog web application.
