// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones?api-version=2015-05-04-preview')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedns.xplattestdns\",\"name\":\"xplattestgcreatedns.xplattestdns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"d61e440c-8cb4-4634-bb19-58debb74ab05\",\"location\":\"global\",\"tags\":{},\"properties\":{}}]}", { 'cache-control': 'private',
  'content-length': '356',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '27460537-40a1-42cb-a497-97624c8efdd5',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11997',
  'x-ms-correlation-request-id': 'ab2178fd-e8b6-4e3f-ae59-91f1d7802911',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T082805Z:ab2178fd-e8b6-4e3f-ae59-91f1d7802911',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:28:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones?api-version=2015-05-04-preview')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedns.xplattestdns\",\"name\":\"xplattestgcreatedns.xplattestdns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"d61e440c-8cb4-4634-bb19-58debb74ab05\",\"location\":\"global\",\"tags\":{},\"properties\":{}}]}", { 'cache-control': 'private',
  'content-length': '356',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '27460537-40a1-42cb-a497-97624c8efdd5',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11997',
  'x-ms-correlation-request-id': 'ab2178fd-e8b6-4e3f-ae59-91f1d7802911',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T082805Z:ab2178fd-e8b6-4e3f-ae59-91f1d7802911',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:28:05 GMT',
  connection: 'close' });
 return result; }]];