import dotenv from 'dotenv'
import aws from 'aws-sdk'

dotenv.config()

const s3Config = new aws.S3({
    region: process.env.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });