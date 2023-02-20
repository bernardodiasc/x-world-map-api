# X-World-Map

World map to display people, events, travels and more.

## Getting Started

This API works with the app https://github.com/bernardodiasc/x-world-map

### Development

With NVM, configure your ennvironment to use Node version 14:

```
nvm install v14
nvm use v14
```

Install dependencies:

```bash
yarn install
```

Make copy of `.env.example` in the root of this project and use the name `.env.local`.

Then run the app:

```bash
yarn develop
```

## Strapi Settings

In the first run you'll need to create a new Strapi user. Then, in order to get things ready for the [app's front-end](https://github.com/bernardodiasc/x-world-map) you need to adjust some settings.

Follow the following steps:

### Set access permission settings

1. Go to [`Settings > Users & Permissions plugin > Roles`](http://localhost:1337/admin/settings/users-permissions/roles):
2. Set `Authenticated` permissions:
  - Attendee (select all)
  - Event (select all)
  - Feature-flag (find)
  - FAQ (find)
  - Location (select all)
  - Profile (select all)
  - Content Builder (none)
  - Email (none)
  - 18in (none)
  - Upload (destroy, find, findOne, upload)
  - Users Permissions (Auth: connect, user: me)
3. Set `Public` permissions:
  - Attendee (find) 
  - Event (find) 
  - Feature-flag (find) 
  - FAQ (find) 
  - Location (find) 
  - Profile (find) 
  - Content Builder (none) 
  - Email (none) 
  - 18in (none) 
  - Upload (find, findOne) 
  - Users Permissions (Auth: callback, Auth: connect, Auth: register, user: me)

### Set feature flags

1. Go to [`Content manager > Feature Flag`](http://localhost:1337/admin/content-manager/collectionType/api::feature-flag.feature-flag)
2. Create new entries:
  - name: AVATAR_UPLOAD, enabled: TRUE
  - name: BOUNDS, enabled: FALSE
  - name: EVENTS, enabled: TRUE
  - name: MARKER_CLUSTERER, enabled: TRUE
  - name: TRAVELS, enabled: FALSE
