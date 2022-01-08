// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4gomh3p19rn6001hp69hj190qs",     // CognitoClientID
  "api_base_url": "https://tchgqzs8z4.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-dummy-arch-app.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d13wcm2ce7tmkd.amplifyapp.com"                                      // AmplifyURL
};

export default config;
