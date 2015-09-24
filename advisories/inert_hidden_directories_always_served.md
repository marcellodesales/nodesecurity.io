---
title:  inert Hidden Directories always served
author:  Gil Pedersen
module_name: inert
publish_date: Mon Dec 15 2014 19:13:48 GMT-0800 (PST)
cves: "[]"
vulnerable_versions: "<1.1.1"
patched_versions: ">=1.1.1"
...

## Overview:

The inert directory handler always allows files in hidden directories to be served, even when `showHidden` is false.

## Recommendations:

Update to version >= 1.1.1.

## References:
- https://github.com/hapijs/inert/pull/15
- https://github.com/hapijs/inert/commit/e8f99f94da4cb08e8032eda984761c3f111e3e82
