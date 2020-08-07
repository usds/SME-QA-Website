---
layout: article
section: results
permalink: /results/epa/
title: Environmental Protection Agency
---

{% assign agency = site.data.results.epa %}
{% assign pilot = agency.pilots.first %}

<p class="usa-intro">
  We worked with the {{ agency.name }} to hire {{ pilot.role }}s in the {{ pilot.series }} series.
</p>

{% include results/round-one-result.html %}