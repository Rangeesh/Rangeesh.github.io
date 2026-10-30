---
layout: base
title: About me
permalink: /aboutme
description: A little about Rangeesh Venkatesan, from mechanical engineering and vehicle controls to robotics foundation models.
---

<header class="page-header container">
  <p class="section-label">About</p>
  <h1>Hi, I’m Rangeesh.</h1>
  <p class="lead">An engineer working on robotics foundation models, with roots in mechanical engineering and autonomous driving.</p>
</header>

<section class="section container" aria-labelledby="story-heading">
  <div class="about-grid">
    <img class="about-portrait" src="{{ '/assets/img/rangeesh.jpeg' | relative_url }}" alt="Portrait of Rangeesh Venkatesan" width="224" height="224">
    <div class="prose">
      <h2 id="story-heading">A little about me</h2>
      <p>I’m Rangeesh Venkatesan. I’m a Member of Technical Staff at Amazon Frontier AI &amp; Robotics in San Francisco, where I lead distributed training infrastructure for foundation-model pretraining and co-build a multi-node reinforcement learning framework.</p>
      <p>I studied mechanical engineering at IIT Madras and robotics at Texas A&amp;M before moving to the Bay Area. Formula Student was an early chance to build something that had to work outside the classroom. Vehicle controls and motion planning led me into software and machine learning; at Tesla, I was one of four core contributors to Actually Smart Summon.</p>
      <p>Outside work, I enjoy table tennis, tennis, badminton, time at the gym, reading, and cooking biryani.</p>
      <p><a class="text-link" href="{{ '/work/' | relative_url }}">Explore my work and experience</a></p>
      <div class="contact-links">
        <a class="text-link" href="mailto:{{ site.email | escape }}">Email me</a>
        <a class="text-link" href="{{ site.linkedin | escape }}">LinkedIn</a>
        <a class="text-link" href="{{ site.github_url | escape }}">GitHub</a>
      </div>
    </div>
  </div>
</section>

<section class="section container" aria-labelledby="education-heading">
  <div class="section-header">
    <h2 id="education-heading">Education</h2>
  </div>
  <div class="grid-two">
    {% for education in site.data.career.education %}
    <article class="card">
      <p class="card-label">{{ education.period | escape }} · Graduated {{ education.graduation_year | escape }}</p>
      <h3>{{ education.institution | escape }}</h3>
      <p>{{ education.degree | escape }}</p>
      <p class="meta">GPA {{ education.gpa | escape }}</p>
      {% if education.details %}<p>{{ education.details | escape }}</p>{% endif %}
    </article>
    {% endfor %}
  </div>
</section>

<section class="section container" aria-labelledby="skills-heading">
  <div class="section-header">
    <h2 id="skills-heading">Tools I work with</h2>
  </div>
  <ul class="skill-list">
    {% for skill in site.data.career.skills %}
    <li>{{ skill | escape }}</li>
    {% endfor %}
  </ul>
</section>