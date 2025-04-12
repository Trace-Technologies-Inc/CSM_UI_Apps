# CSM_UI_Apps
Apps for Zendesk, ServiceNow, etc.

Run (within zendesk-loan-quoting folder, or any other zendesk app):
```
(base) Mac:Trace Yash$ npm install -g @zendesk/zcli
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated @oclif/screen@3.0.8: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.

added 349 packages in 12s

60 packages are looking for funding
  run `npm fund` for details

(base) Mac:zendesk-loan-quoting Yash$ zcli login -i
Subdomain: trace8526                                                           
Email: yash@Tracetec.co
API Token: ****************************************
Successfully logged in.

(base) Mac:zendesk-loan-quoting Yash$ zcli apps:validate
No validation errors
(base) Mac:zendesk-loan-quoting Yash$ zcli apps:server

Apps server is running on http://localhost:4567 🚀

Add ?zcli_apps=true to the end of your Zendesk URL to load these apps on your Zendesk account.
```

(API token can be generated from Zendesk Admin Console > Settings > Search "API" > Apps and Integrations > API Access tokens)

Then visit https://trace8526.zendesk.com/agent/tickets/6?zcli_apps=4567 to view app in right sidebar
