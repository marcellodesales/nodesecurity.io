---
title: ep_imageconvert unauthenticated remote command injection
author:  Neal Poole
module_name: ep_imageconvert
publish_date: May 06 2013 09:33:48 GMT-0800 (PST)
cves: "[{\"name\":\"CVE-2013-3364\",\"link\":\"http://www.cve.mitre.org/cgi-bin/cvename.cgi?name=2013-3364\"},{\"name\":\"CVE-2013-7380\",\"link\":\"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7380\"}]"
vulnerable_versions: "<=0.0.2"
patched_versions: ">=0.0.3"
...

## Overview:

ep_imageconvert is a plugin for [Etherpad Lite](https://github.com/ether/etherpad-lite). ep_imageconvert <= 0.0.2 is vulnerable to remote command injection.

Authentication is not required for remote exploitation.


## Recommendations:

Update to version 0.0.3 or greater.

## References:
- https://github.com/redhog/ep_imageconvert/pull/5

