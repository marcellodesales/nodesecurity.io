---
title:  marked regular expression denial of service
author:  Barış Soner Uşaklı
module_name: marked
publish_date: Thur Jan 22 2015 09:33:48 GMT-0800 (PST)
cves: "[]"
vulnerable_versions: "<=0.3.3"
patched_versions: ">=0.3.4"
...

## Overview

Marked 0.3.3 and earlier is vulnerable to regular expression denial of service (ReDoS) when certain types of input are passed in to be parsed.

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1]

Marked's catastrophic backtracking issue for the `em` inline rule has now been patched in 0.3.4.

## Recommendation:

Update to marked v0.3.4 or later.

## References:
- [1] https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/chjj/marked/issues/497

