// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services?service=mobileservice&action=register')
  .reply(409, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ConflictError</Code><Message>The resource type mobileservice is already registered for this subscription.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '238',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '9a90bb5f1ec683ea84c3c1140bef219c',
  date: 'Wed, 08 Apr 2015 01:24:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  etag: 'd55f2c355656447ba9149ca30f41bb84:0000',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '810a4956332e8978af30603cdc857a97',
  date: 'Wed, 08 Apr 2015 01:24:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/810a4956332e8978af30603cdc857a97')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>810a4956-332e-8978-af30-603cdc857a97</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '3bd2e1fe58f28c5bbe5f77a45de82289',
  date: 'Wed, 08 Apr 2015 01:24:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/810a4956332e8978af30603cdc857a97')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>810a4956-332e-8978-af30-603cdc857a97</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'ffce3e51387c8bf7b794f9802a37f1fb',
  date: 'Wed, 08 Apr 2015 01:24:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/810a4956332e8978af30603cdc857a97')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>810a4956-332e-8978-af30-603cdc857a97</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'fbed0491434f8823aa9c13c2b5349e07',
  date: 'Wed, 08 Apr 2015 01:24:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/810a4956332e8978af30603cdc857a97')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>810a4956-332e-8978-af30-603cdc857a97</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'f76cf9228c25800f8d1f785c9acc2358',
  date: 'Wed, 08 Apr 2015 01:24:36 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/810a4956332e8978af30603cdc857a97')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>810a4956-332e-8978-af30-603cdc857a97</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'f83254beebf0846283190a5160ef715b',
  date: 'Wed, 08 Apr 2015 01:24:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/810a4956332e8978af30603cdc857a97')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>810a4956-332e-8978-af30-603cdc857a97</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'facb25a1e0f783e7bbede96bc98ecba7',
  date: 'Wed, 08 Apr 2015 01:24:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestDotNet119mobileservice')
  .reply(200, "<Application xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestDotNet119mobileservice</Name><Label>clitestDotNet119</Label><Description>clitestDotNet119</Description><Uri>https://management.core.windows.net/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestDotNet119mobileservice</Uri><State>Healthy</State><InternalResources><InternalResource><LogicalName>ZumoMobileService</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.MobileServices.MobileService</Type><Name>clitestDotNet119</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/clitestDotNet119</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlDatabase_4262dc65b3df4a2098a7715baef10249</LogicalName><State>Provisioned</State><Type>Microsoft.WindowsAzure.SQLAzure.DataBase</Type><Name>clitestDotNet119_db</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/bs8aazdhdp/databases/clitestDotNet119_db</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlServer_c35eb171a4d34faab8c3124bc159e629</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.SQLAzure.Server</Type><Name>bs8aazdhdp</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/bs8aazdhdp</SelfLinkUri><FailureCode/></InternalResource></InternalResources><ExternalResources/></Application>", { 'cache-control': 'no-cache',
  'content-length': '1604',
  'content-type': 'application/xml; charset=utf-8',
  etag: 'd55f2c355656447ba9149ca30f41bb84:0001',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '4cdc1417fc298d2493260fbf3e7228bc',
  date: 'Wed, 08 Apr 2015 01:24:47 GMT' });
 return result; }]];