---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="print-header">
  <h1>Daniel Thilo Schroeder</h1>
  <p>contact@danielthiloschroeder.org &nbsp;·&nbsp; +47 907 58 926</p>
</div>

<div class="cv-print-note">
  For a formatted CV, use your browser's Print function on this page and save as PDF.
</div>

Functions
======

* _Research Scientist_ Sintef (Sustainable Communication Technologies)
* _External Supervisor_ Simula Research Laboratory (High Performance Computing)
* _Member of Institute of Electrical and Electronics Engineers (IEEE)_
* _Alumni Technical University of Berlin_
* _Alumni Academy of International Affairs NRW_

Short Bio
======
Dr. Daniel Thilo Schroeder, residing in Oslo, is a Research Scientist specializing in big data analytics, complex networks and digital communication. He is a member of the Smart Data group at SINTEF, contributing to the development of sustainable platforms for processing extreme data and building high-quality, FAIR-compliant datasets that fortify the effectiveness of AI applications. During his postdoc at the Simula Research Laboratory, he engaged in pivotal work to expand the application of deep learning to unstructured data through the development of computational frameworks. Earning his PhD from the Technical University of Berlin, Dr. Schroeder has been involved in multiple projects centered around understanding and mitigating the rapid spread of online misinformation.


Professional Experience
======
2023 - now\.  Research Scientist Sintef. <br />
2021 - 2023\. Postdoctoral Fellow Simula Research Laboratory. <br />
2021 - 2022\. Research Assistant Oslo Metropolitan University. <br />
2018 - 2021\. Phd Student Simula Research Laboratory & Technical University of Berlin. <br />
2016 - 2017\. Student Assistant at the department for Complex and Distributed IT Systems. <br />

Education
======
* B.S. in Computer Science, Technical University of Berlin, 2010 - 2015
* B.S. in Computer Science, Federal University of Rio Grande do Sul, 2013 - 2015
* M.S. in Computer Science, Technical University of Berlin, 2015 - 2017
* Ph.D in Engineering, Technical University of Berlin, 2018 - 2022
* Ph.D in Engineering, Simula Research Laboratory, 2018 - 2021

Research Expertise
======
* AI-enabled influence operations, disinformation, and information integrity.
* Malicious AI swarms, synthetic consensus, and agent-based threat modeling.
* Computational social science and complex network analysis.
* Scalable graph computation, graph neural networks, and extreme-scale data systems.
* Data infrastructure, interoperability, and FAIR data for marine and environmental domains.

Selected Projects
======
* AI-enabled influence operations and malicious AI swarms, 2025 - now: threat modeling, simulation, evaluation, and AI Influence Observatory concepts.
* UMOD - Understanding and Monitoring Digital Wildfires, 2017 - 2020: automated detection and analysis of fast-spreading online misinformation.
* DD-MAC - Decoding Digital Media in African Regions of Conflict, 2021 - 2024: computational methods for studying social media, disinformation, and conflict dynamics in Ethiopia and Mali.
* Graph-Massivizer, 2023 - 2025: scalable and sustainable processing of extreme data through massive graph representations.
* Enabling Graph Neural Networks at Exascale, 2020 - 2022: computational frameworks for scaling graph neural networks on parallel systems.
* enRichMyData, 2022 - 2025: scalable data enrichment, cleaning, and linking pipelines for AI and big-data applications.
* AquaINFRA, 2023 - 2026: FAIR data infrastructure and virtual research environments for marine and freshwater science.
* SEADITO, 2024 - 2027: data infrastructure and interoperability for social-ecological models in the European Digital Twin Ocean context.
* Geo4Water, 2025 - 2026: geodata spaces for water monitoring, extreme-weather response, and urban resilience.

Language Skills
======
* German (+)
* English (+)
* Portuguese (+-)
* Norwegian Bokmål (-)

Publications
======

{% assign publications_by_year = site.publications | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}
{% for year in publications_by_year %}
<h2>{{ year.name }}</h2>
<ul>
  {% assign sorted_posts = year.items | sort: "date" | reverse %}
  {% for post in sorted_posts %}
    {% include archive-single-publication.html %}
  {% endfor %}
</ul>
{% endfor %}

Supervisions
======

<ul>
  {% for post in site.supervisions reversed %}
    {% include archive-single-supervision.html %}
  {% endfor %}
</ul>

Public Engagement
======

{% include media-list.html %}
