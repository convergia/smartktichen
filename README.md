# convergia_smart_agriculture_demo

- [Install the application](#install-the-application)
- [Install dependencies](#install-dependencies)
- [Configure the application](#configure-the-application)
- [How to](#how-to)
- [Using the application](#using-the-application)

## Install the application
- From the scriptr.io web IDE, click the arrow on the right of "New Script" on the bottom left corner of the screen then select "Install Module"
- In the Modules wizard, click "+Add custom module from Github"
- Fill the fields as follows (see image below)
  - Owner: **scriptrdotio**
  - Repository: **convergia_smart_agriculture_demo**
  - Path: /convergia-demo-app
  - Branch: leave empty or type **master**
  - Destination folder: /convergia-demo-app

 ![Deploy UIComponents](./doc-resources/install_convergia_demo.PNG) 

## Install dependencies
- UIComponents module
- Underscore

### Install UIComponents
- From the scriptr.io web IDE, click the arrow on the right of "New Script" on the bottom left corner of the screen then select "Install Module"
- In the Modules wizard, click "+Add custom module from Github"
- Fill the fields as follows (see image below)
  - Owner: **scriptrdotio**
  - Repository: **UIComponents**
  - Path: /UIComponents
  - Branch: leave empty or type **master**
  - Destination folder: /UIComponents
 
 ![Deploy UIComponents](./doc-resources/deploy_uicomponents.PNG)

### Install Underscore
- From the scriptr.io web IDE, click the arrow on the right of "New Script" on the bottom left corner of the screen then select "Install Module"
- In the Modules wizard, scroll down to **Underscore** (see image below)
- Click the "Install" button.

![Deploy Underscore](./doc-resources/deploy_underscore.png)

## Configure the application
In the tree view on the left side of the scriptr.io web IDE

### Configure the communication layer

- Scroll down to UIComponents and expand the folder
- Open **/UIComponents/config/scriptrTransport.js**

![Expand UIComponents folder](./doc-resources/configure_application_2.PNG))

  - Replace <subdomain> with your own sub-domain (see dedicated section on [how to create a sub-domain](#how-to-create-a-sub-domain))
  - Replace <anonymous_token> with your own anonymous token (see dedicated section on [how to obtain your anonymous token](#how-to-obtain-my-anonymous-token))
  
![Expand UIComponents folder](./doc-resources/configure_application_3.PNG))

### Configure the simulator

- Scroll to **/convergia-demo-app/simulator/waspmote/data** and open the data script
- Replace the **<subdomain>** part of the **const api** variable with your own sub-domain

- Scroll to **/convergia-demo-app/entities/config** and open the config script
- Replace the **<anonymous-token>** value of the  **var anonymousToken** variable with your own anonymous token
  
 ### Configure editor group

- Click on your email address in the top-right of the IDE workspace
- Choose Device Directory
- Add new Group **"editor"** if not existed
- Add your login device to the editor group

### Configure the email address to send alerts to

- Open the **convergia-demo-app/entities/config** script
- Modify the "TO" field of the "email" variable. Currently set to the account owner

## How to

### How to create a sub-domain
Scriptr allows you to create a sub-domain for your account to customize the generic URL prefix used to invoke your APIs (api.scriptrapps.io). Hence, if you are building a smart farming application for example, then you might like your URL to be smartfarming.scriptrapps.io.

- Open your workspace the click on your username on the top right corner of the screen
- Click on Account then select the Subdomain tab in the Account dialog
- Enter a subdomain of your choice then click on the check sign. Scriptr will check the unicity of the name and ask you to make another choice if this name is already in use)

### How to obtain my anonymous token
When you registered to scriptr, an account was created for you on the platform and an authentication token was allocated to it. 
To get your account token:
- open the workspace then click on your username on the top right corner of the screen.
- In the drop-down list, click on Account
- Select the Info tab (should be selected by default)
- Copy the value of the anonymous token field.

# Using the application

## How to add rules using the decision table

Metrics are encoded is the payload as follows:
"TC" ,BAT", "PLV1", "PLV2", "PLV3", "SOIL2", "ANE", "STR", "PRES", "HUM"
You can use these values to create new rules using the decision table:
*the below apply whether you use the decision table from the app's UI or from the web IDE*
- In the decision table, click "+New Condition"
  - use one of the metrics as the condition (column on the left of the table)
  - in the "type" column, select the type of the metric (string, number, etc.)
- If you want the rule to be specific to this metric, click "+New Rule"
  - in the new column (Rule n), add an expression that matches the type (e.g. < 35, if number)
- If you want to create a rule that combines this metric to existing ones
  - if this is a new rule, click "+New Rule" then create an expression for each of the metric in the Rule column
  - if this is an existing rule, add an expression for the metric in the corresponding column
- Click "+New Action" if you want to add a new action, **or reuse an existing action**
- In the action row, add a predefined parameter

**Important**: you can't create an expression using other conditions.

## About rule actions and predefined action parameters

Actions and their corresponding predefined parameters **are defined by developers** (in the code) before they can be used in decision tables.
- The current version of the application supports two actions: sending emails and logging alerts.
- Predefined parameters are defined in the **convergia-demo-app/entities/helper/mail/templates** script. 

I update the code in Renzo's account to handle High humidity and reflected this in the decision table.
I also removed the row you added.  
