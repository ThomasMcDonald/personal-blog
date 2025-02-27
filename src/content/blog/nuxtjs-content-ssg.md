---
title: "Static Site Generation with Nuxt and nuxt/content"
description: "How to build a Static Site Generated(SSG) Nuxt project that uses nuxt/pages and nuxt/content"
date: "27 Feb 2025"
draft: true
---

DRAFT please ignore.

### Version 2.14.0

Create a new Nuxt project
Install @nuxt/content
Add content/blah
Add slug route
Add another non content page "Home" for example
Run `nuxi dev` -> content Appears as expected
Run `nuxi generate; nuxi preview` -> content does not appear 


#### Fix
Enable experimental "clientDB" feature
Enable `documentDriven:false` at the global level. 
Enable `documentDriven:true ` at the page slug level.


### Version 3