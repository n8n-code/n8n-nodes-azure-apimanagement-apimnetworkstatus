import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimnetworkstatusApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimnetworkstatusApi';

        displayName = 'Azure Apimanagement Apimnetworkstatus API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimnetworkstatus/azure-apimanagement-apimnetworkstatus.png', dark: 'file:../nodes/AzureApimanagementApimnetworkstatus/azure-apimanagement-apimnetworkstatus.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimnetworkstatus API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
