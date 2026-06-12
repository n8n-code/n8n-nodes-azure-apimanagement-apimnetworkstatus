import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimnetworkstatus implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimnetworkstatus',
                name: 'N8nDevAzureApimanagementApimnetworkstatus',
                icon: { light: 'file:./azure-apimanagement-apimnetworkstatus.png', dark: 'file:./azure-apimanagement-apimnetworkstatus.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to check Azure API Management network connectivity status within a Virtual Network.',
                defaults: { name: 'Azure Apimanagement Apimnetworkstatus' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimnetworkstatusApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
