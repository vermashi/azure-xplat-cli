// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/SOA/@?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set6623\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"806a1c73-108c-40bb-9574-b73fab35ee28\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"azuredns-hostmaster.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300,\"serialNumber\":1}}}", { 'cache-control': 'private',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  etag: '806a1c73-108c-40bb-9574-b73fab35ee28',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '50c869e4-bc9b-4395-9f75-045695882059',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '01fd3ece-8b3c-4d26-8428-82f0aec08846',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143047Z:01fd3ece-8b3c-4d26-8428-82f0aec08846',
  date: 'Fri, 28 Jul 2017 14:30:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/SOA/@?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set6623\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"806a1c73-108c-40bb-9574-b73fab35ee28\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"azuredns-hostmaster.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300,\"serialNumber\":1}}}", { 'cache-control': 'private',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  etag: '806a1c73-108c-40bb-9574-b73fab35ee28',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '50c869e4-bc9b-4395-9f75-045695882059',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '01fd3ece-8b3c-4d26-8428-82f0aec08846',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143047Z:01fd3ece-8b3c-4d26-8428-82f0aec08846',
  date: 'Fri, 28 Jul 2017 14:30:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/SOA/@?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set6623\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"b2725f13-dfb2-4adc-8461-41b70831d9e7\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"mail.microsoft.com\",\"expireTime\":60000,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":2400,\"refreshTime\":3600,\"retryTime\":6400,\"serialNumber\":123}}}", { 'cache-control': 'private',
  'content-length': '533',
  'content-type': 'application/json; charset=utf-8',
  etag: 'b2725f13-dfb2-4adc-8461-41b70831d9e7',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8b5b7e1e-66d2-454a-9c82-cea6725289ac',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7cf577cf-ec9f-4193-b6c4-a425e58be2d3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143048Z:7cf577cf-ec9f-4193-b6c4-a425e58be2d3',
  date: 'Fri, 28 Jul 2017 14:30:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/SOA/@?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set6623\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"b2725f13-dfb2-4adc-8461-41b70831d9e7\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"mail.microsoft.com\",\"expireTime\":60000,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":2400,\"refreshTime\":3600,\"retryTime\":6400,\"serialNumber\":123}}}", { 'cache-control': 'private',
  'content-length': '533',
  'content-type': 'application/json; charset=utf-8',
  etag: 'b2725f13-dfb2-4adc-8461-41b70831d9e7',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8b5b7e1e-66d2-454a-9c82-cea6725289ac',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7cf577cf-ec9f-4193-b6c4-a425e58be2d3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143048Z:7cf577cf-ec9f-4193-b6c4-a425e58be2d3',
  date: 'Fri, 28 Jul 2017 14:30:48 GMT',
  connection: 'close' });
 return result; }]];