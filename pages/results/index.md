---
layout: article
section: results
permalink: /results/
title: Results
intro: Through the spring of 2019, the team tested the SME-QA process with two pilots at Health and Human Services (HHS) and Department of the Interior (DOI), both focused on improving the quality of applicants who appear on certificates. In addition, while time to hire was not a focus of these pilots, it will be critical as the SME-QA process scales. To measure the success of the pilots, the team gathered baseline data to compare with data from each agency pilot.
---

{% assign agencies = site.data.results %}

<p class="usa-intro">
  {{ page.intro }}
</p>
<p>
  The most important metric the team tracked was the number of selections hiring managers made from the certificates, indicating the quality of the certificates. Because the SME-QA process gradually eliminates applicants who Subject Matter Experts (SMEs) do not find qualified, hiring managers received a shorter list of qualified applicants. In both pilots, fewer applicants were deemed qualified but more applicants were selected. 
</p>

## Pilot Agencies - Round One

{% assign hhs = agencies['hhs'] %}
{% assign doi = agencies['doi'] %}

* <a href="{{hhs.abbrev | prepend: site.baseurl }}/">{{hhs.name}}</a>
* <a href="{{doi.abbrev | prepend: site.baseurl }}/">{{doi.name}}</a>
