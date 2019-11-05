export default {
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-gov-bucket"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://adt2jemts1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ZHopwMMAP",
    APP_CLIENT_ID: "2i7fto7g6e11hepvo4um3v6crb",
    IDENTITY_POOL_ID: "us-east-2:2a3941fe-e1cf-46e0-a634-adfa03101a29"
  }
};