---
layout: article
section: results
permalink: /results/cms/
title: Centers for Medicare and Medicaid Services Pilot Results
---

{% assign agency = site.data.results.cms %}
{% assign pilot = agency.pilots.first %}

<p class="usa-intro">
  We worked with the {{ agency.name }} to hire {{ pilot.role }}s in the {{ pilot.series }} series.
</p>

{% include results/round-one-result.html %}
