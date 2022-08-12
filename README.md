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

Run the app:

```bash
yarn develop
```

## Strapi Settings

Maybe you need to put some settings on your local Strapi. If you need, follow those steps:

### Set some feature flags

-> Settings > users & permissions plugin > roles:

Authenticated permissions: - Attendee (select all) - Event (select all) - Feature-flag (find) - FAQ (find) - Location (select all) - Profile (select all) - Content Builder (none) - Email (none) - 18in (none) - Upload (destroy, find, findOne, upload) - Users Permissions (Auth: connect, user: me)

Public permissions: - Attendee (find) - Event (find) - Feature-flag (find) - FAQ (find) - Location (find) - Profile (find) - Content Builder (none) - Email (none) - 18in (none) - Upload (find, findOne) - Users Permissions (Auth: callback, Auth: connect, Auth: register, user: me)

### Set some feature flags

-> Contante manager > Feature Flag
put this flags: - name: AVATAR_UPLOAD enabled: TRUE - name: BOUNDS enabled: FALSE - name: EVENTS enabled: TRUE - name: MARKER_CLUSTERER enabled: TRUE - name: TRAVELS enabled: FALSE
