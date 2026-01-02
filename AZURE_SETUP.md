# Azure Deployment Setup Instructions

## Step 1: Create Azure Service Principal

Run this command in Azure Cloud Shell or with Azure CLI installed:

```bash
az ad sp create-for-rbac --name "github-actions-printstudio" \
  --role contributor \
  --scopes /subscriptions/{YOUR_SUBSCRIPTION_ID}/resourceGroups/{YOUR_RESOURCE_GROUP} \
  --sdk-auth
```

**Replace:**
- `{YOUR_SUBSCRIPTION_ID}` - Your Azure subscription ID
- `{YOUR_RESOURCE_GROUP}` - Your resource group name (where printstudio app is located)

**To find your subscription ID:**
```bash
az account show --query id -o tsv
```

**To find your resource group:**
- Go to Azure Portal → Your App Service (printstudio) → Overview
- Look for "Resource group" field

## Step 2: Copy the JSON Output

The command will output a JSON object like this:
```json
{
  "clientId": "...",
  "clientSecret": "...",
  "subscriptionId": "...",
  "tenantId": "...",
  ...
}
```

**Copy the entire JSON output.**

## Step 3: Add Secret to GitHub

1. Go to your GitHub repository: https://github.com/vageeshs/rainbowprinting
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `AZURE_CREDENTIALS`
5. Value: Paste the entire JSON output from Step 2
6. Click **Add secret**

## Step 4: Push the Updated Workflow

The workflow file has been updated. Commit and push:

```bash
git add .github/workflows/azure-webapps-deploy.yml
git commit -m "Update workflow to use Azure Service Principal"
git push origin main
```

## Alternative: Enable Basic Authentication (if preferred)

If you prefer to use publish profile instead:

1. Go to Azure Portal → Your App Service (printstudio)
2. Go to **Configuration** → **General settings**
3. Enable **Basic authentication**
4. Save
5. Then download the publish profile from Overview page

