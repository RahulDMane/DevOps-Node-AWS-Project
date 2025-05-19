# DevOps-Node-AWS-Project

# 🚀 DevOps Project: Node.js App on AWS

This project demonstrates a full-stack DevOps implementation for a Node.js application using AWS services, including Auto-Scaling EC2 instances, a CI/CD pipeline with CodePipeline and CodeBuild, and a serverless API with Lambda and API Gateway.

---

## 📌 Table of Contents

- [1. Auto-Scaling Node.js App on EC2](#1-auto-scaling-nodejs-app-on-ec2)
- [2. CI/CD Pipeline with AWS CodePipeline & CodeBuild](#2-cicd-pipeline-with-aws-codepipeline--codebuild)
- [3. Serverless API with AWS Lambda & API Gateway](#3-serverless-api-with-aws-lambda--api-gateway)
- [4. IAM User for Review](#4-iam-user-for-review)
- [5. Resources and References](#5-resources-and-references)

---

## 1. Auto-Scaling Node.js App on EC2

### ✅ Features
- Node.js application hosted on EC2
- Nginx reverse proxy for multi-process handling
- Auto Scaling Group (ASG) with Elastic Load Balancer (ALB)
- CloudWatch alarms based on CPU utilization

### 🛠️ Setup Steps

1. **Launch EC2 Instance** (Amazon Linux 2 or Ubuntu)
2. **Install Node.js, Nginx, Git**
3. **Clone and Run Node App**
4. **Nginx Config for Load Balancing** between ports `3000`, `3001`, etc.
5. **Create Launch Template** with User Data:
    ```bash
    #!/bin/bash
    yum update -y
    curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
    yum install -y nodejs git nginx
    git clone https://github.com/your-repo/node-app.git /home/ec2-user/app
    cd /home/ec2-user/app
    npm install
    PORT=3000 node app.js &
    PORT=3001 node app.js &
    systemctl enable nginx
    systemctl start nginx
    ```
6. **Set up Application Load Balancer (ALB)**
7. **Create Auto Scaling Group (ASG)** using the launch template
8. **Set Target Tracking Scaling Policy**
9. **Create CloudWatch Alarm for CPU > 70%**

---

## 2. CI/CD Pipeline with AWS CodePipeline & CodeBuild

### ✅ Features
- GitHub as source control
- CodeBuild for testing and building Node.js app
- Elastic Beanstalk or ECS for deployment

### 🛠️ Setup Steps

1. **Push Code to GitHub Repository**: [repo-link]
2. **Create CodeBuild Project**
    - Runtime: Amazon Linux / Ubuntu
    - BuildSpec file:
      ```yaml
      version: 0.2
      phases:
        install:
          commands:
            - npm install
        build:
          commands:
            - npm test
      artifacts:
        files:
          - '**/*'
      ```
3. **Create AWS CodePipeline**
    - Source: GitHub
    - Build: CodeBuild
    - Deploy: Elastic Beanstalk (or ECS/Fargate)

---

## 3. Serverless API with AWS Lambda & API Gateway

### ✅ Features
- RESTful API using Lambda
- MongoDB Atlas for persistent storage
- IAM roles and least privilege permissions

### 🛠️ Setup Steps

1. **Create AWS Lambda Function** in Node.js (e.g., `getUser.js`)
2. **Set Up API Gateway** with REST routes
3. **Use Environment Variables** for MongoDB connection string
4. **Connect to MongoDB Atlas**
5. **IAM Roles** with proper permissions for logging and secure access

Example Lambda function:
```javascript
const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  await client.connect();
  const db = client.db('mydb');
  const users = await db.collection('users').find().toArray();
  await client.close();

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};
