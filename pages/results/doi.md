---
layout: article
section: results
permalink: /results/doi/
title: Results - Department of Interior
---

{% assign agency = site.data.results.doi %}
{% assign pilot = agency.pilots.first %}

<p class="usa-intro">
  We worked with the {{ agency.office }} to hire GS-13 Information Technology Specialists in {{ pilot.locations.size }} locations.
</p>

{% include results/round-one-result.html %}
