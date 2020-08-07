---
layout: article
section: results
permalink: /results/state/
title: State Department
---

{% assign agency = site.data.results.state %}
{% assign pilot = agency.pilots.first %}

<p class="usa-intro">
  We worked with the {{ agency.name }} to hire {{ pilot.role }}s in the {{ pilot.series }} series.
</p>

{% include results/round-one-result.html %}