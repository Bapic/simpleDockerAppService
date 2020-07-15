# simpleDockerAppService
# Overview:
## These sample repo will help you to deploy a simple containerised WebApp to Azure AppService from a Azure Container Registry. 

### Pre-requisites:
1. You already have an active Azure Subscription
2. You have a Github account and you perform basic operations
3. You have basic understanding of git operations.

### Steps:

1. Login to your Github account Fork the repo (containing the simple docker application) from the MTC Github to your github account: https://github.com/Bapic/simpleDockerAppService.git

2. Generate a PAT for your github to use with Cloud Shell https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token and save it securely

3. Login to Azure portal and launch Cloud Shell 

4. Run the below commands to clone the repo locally. 
	
	git config --global user.email "<your email>"
	git config --global user.name "your github username"
	git clone https://github.com/Bapic/simpleDockerAppService.git
	cd simpleDockerAppService
	git remote show origin or git remote -v. # Ensure your repo is set to use your repo as the origin
	git add .
	git commit -m "Initial commit"
	code index.js # make some change to the text of the response body.
	git push origin master # Once done, check your git hub repo for the changes.
	
4. Run the below commands (deployment script in the making) to deploy an App service, App service plan and ACR
	REGION_NAME=eastus
	RESOURCE_GROUP=DockerAppServiceRG-$RANDOM
	APP_NAME=simpleDockerAppService$RANDOM
	GITREPO=https://github.com/Bapic/simpleDockerAppService.git
	ACR_NAME=acr$RANDOM
	
	az group create --location $REGION_NAME --name $RESOURCE_GROUP
	
	az appservice plan create --name $APP_NAME --resource-group $RESOURCE_GROUP --location $REGION_NAME --is-linux --sku S1
	
	az webapp create --name $APP_NAME --plan $APP_NAME --resource-group $RESOURCE_GROUP -i nginx
	
	az acr create \
    --resource-group $RESOURCE_GROUP \
    --location $REGION_NAME \
    --name $ACR_NAME \
    --sku Standard

5. Navigate to the ACR you created and ensure Admin access is enabled and creds are upated in the "Container settings" of the WebApp. If not please update.

6. Now, manually configure the Deployment Source as Github with Azure DevOps pipelines with continuous deployment.

7. Make changes to the App files txt, push the changes and that should reflect on the site instantly.
