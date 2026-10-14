---
title: "Die 5G-Apokalypse: Blick auf ein Digital Wildfire und seine Entstehung"
collection: talks
type: "Conference talk"
role: "Speaker"
permalink: /talks/2023-06-07-republica-5g-digital-wildfire
venue: "re:publica 2023"
date: 2023-06-07
location: "Berlin, Germany"
description: "Daniel Thilo Schroeder and Stefan Brenner's re:publica 2023 talk on 5G conspiracy narratives, digital wildfires, and the real-world consequences of online misinformation."
image: /images/daniel-thilo-schroeder-republica-2023-stage.jpg
image_alt: "Daniel Thilo Schroeder and Stefan Brenner on stage at re:publica 2023 in Berlin"
images:
  - path: /images/daniel-thilo-schroeder-republica-2023-stage.jpg
    title: "Daniel Thilo Schroeder and Stefan Brenner at re:publica 2023"
    caption: "Daniel Thilo Schroeder and Stefan Brenner on stage at re:publica 2023 in Berlin, with a map of attacks on mobile-phone infrastructure."
    source: https://www.flickr.com/photos/re-publica/52958317113/
  - path: /images/daniel-thilo-schroeder-republica-2023-audience.jpg
    title: "Daniel Thilo Schroeder presenting digital wildfires at re:publica 2023"
    caption: "Daniel Thilo Schroeder presenting digital wildfires alongside Stefan Brenner to the audience at re:publica 2023 in Berlin."
    source: https://www.flickr.com/photos/re-publica/52958244585/
---

Joint talk with Stefan Brenner at **re:publica 2023** in Berlin, delivered in German.

The talk presented three years of research into how 5G conspiracy narratives spread and evolve through social networks. It examined how online misinformation can escalate into digital wildfires with real-world consequences, including attacks on mobile-phone infrastructure, and discussed opportunities for early detection.

## Event

- Date: June 7, 2023
- Time: 15:00-15:30
- Event: re:publica 2023, Berlin, Germany
- Speakers: Daniel Thilo Schroeder and Stefan Brenner
- Language: German
- Track: Media and the Public Sphere

## Photos

{% for photo in page.images %}
<figure itemscope itemtype="https://schema.org/ImageObject">
  <a href="{{ photo.path | relative_url }}" itemprop="contentUrl">
    <img src="{{ photo.path | relative_url }}" alt="{{ photo.caption | escape }}" width="1600" height="1067" loading="lazy" decoding="async" />
  </a>
  <figcaption>
    <span itemprop="caption">{{ photo.caption | escape }}</span><br />
    Photo: <span itemprop="creditText">Stefanie Loos / re:publica</span>.
    <a href="{{ photo.source }}" itemprop="acquireLicensePage">re:publica 23 - Tag 3 (Flickr)</a>,
    <a href="https://creativecommons.org/licenses/by-sa/2.0/" itemprop="license" rel="license">CC BY-SA 2.0</a>.
  </figcaption>
</figure>
{% endfor %}

## Resources

- [Official programme](https://re-publica.com/de/session/die-5g-apokalypse-blick-auf-ein-digital-wildfire-und-seine-entstehung)
- [DDMAC report on the talk](https://decodingdigitalmedia.org/2023/11/13/daniel-thilo-schroeder-and-stefan-brenner-talk-about-digital-wildfires-and-their-emergence-at-republica-2023/)
