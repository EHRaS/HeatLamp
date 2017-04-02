express-heatlamp
=====================

Dynamically set cache-control to varying values to prevent bandwidth hogging as all resource caches expire.

1. Install: `npm install --save express-heatlamp`

2. Require: `var heatlamp = require("express-heatlamp")`

3. Use: `app.use(heatlamp({ min: 24, max: 48 }))`

HeatLamp expects the `max` and `min` params to be the earliest and latest acceptable time in hours to refresh the cache.

Based on https://github.com/idottv/express-cache-control (Copyright (c) 2013 i.TV LLC)
