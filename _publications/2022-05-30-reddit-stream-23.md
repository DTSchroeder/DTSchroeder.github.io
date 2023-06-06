---
title: "A Streaming System for Large-scale Temporal Graph Mining of Reddit Data"
collection: publications
permalink: /publication/2022-05-30-reddit-stream-23
date: 2022-05-30
venue: '2022 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW)'
# paperurl: 'https://ieeexplore.ieee.org/document/6637429'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
The study of online social networks has becomea major topic of research within the last decade, and manyaspects of the networks and the behavior of their users have beeninvestigated. The majority of research efforts has been directedat Twitter, which grants limited data accesses to researchers andprovides detailed information.However, recently, important social and economic phenomenasuch as WallStreetBets or Antiwork have originated on Reddit,which has thus become an important field of investigation in itsown right, and, due to its open nature, all Reddit data is availableto study. As a consequence, in contrast to Twitter, where it isdifficult to obtain large amounts of data, the main challenge ofresearching Reddit is to handle the vast amounts of data thatare freely available.Here, we present the Reddit Dataset Stream Pipeline (RDSP), asimple and efficient parallel system based on Akka Streams that iscapable of processing the entire Reddit dataset. We demonstratehow to build massive temporal graphs between subreddits froma parallel streamed dataset. We investigate the generated graphsand present experimental results. Moreover, we publish both thedatasets as well as the codebase in order to invite researchersfrom different fields to contribute and profit from this work. 

[Download paper here](https://www.researchgate.net/publication/362502944_A_Streaming_System_for_Large-scale_Temporal_Graph_Mining_of_Reddit_Data)

## Bibtex

```
@inproceedings{huber2022streaming,
  title={A streaming system for large-scale temporal graph mining of reddit data},
  author={Huber, Andreas and Schroeder, Daniel Thilo and Pogorelov, Konstantin and Griwodz, Carsten and Langguth, Johannes},
  booktitle={2022 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW)},
  pages={1153--1162},
  year={2022},
  organization={IEEE}
}
```