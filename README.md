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
1. Launch EC2 Instance
2. Install Node.js, Nginx, Git
3. Clone and Run Node App
4. Configure Nginx for multiple node processes
5. Create Launch Template and Auto Scaling Group
6. Attach Load Balancer and CloudWatch Alarms

---

## 2. CI/CD Pipeline with AWS CodePipeline & CodeBuild

### ✅ Features
- GitHub as source control
- CodeBuild for testing and building Node.js app
- Elastic Beanstalk or ECS for deployment

### 🛠️ Setup Steps
1. Push Code to GitHub
2. Create CodeBuild Project
3. Define buildspec.yml
4. Create CodePipeline with Source, Build, and Deploy stages

---

## 3. Serverless API with AWS Lambda & API Gateway

### ✅ Features
- RESTful API using Lambda
- MongoDB Atlas for persistent storage
- IAM roles and least privilege permissions

### 🛠️ Setup Steps
1. Create Lambda Function in Node.js
2. Set Up API Gateway routes
3. Use environment variables for MongoDB connection
4. Connect to MongoDB Atlas

---

## 4. IAM User for Review

IAM user created with read-only access to EC2, ASG, ELB, CodePipeline, Lambda, and CloudWatch for review purposes.

---

## 5. Resources and References

- [AWS Auto Scaling](https://docs.aws.amazon.com/autoscaling/)
- [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/)
- [AWS Lambda](https://docs.aws.amazon.com/lambda/)
- [MongoDB Atlas](https://www.mongodb.com/docs/atlas/)
