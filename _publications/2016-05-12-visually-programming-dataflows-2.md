---
title: "Visually programming dataflows for distributed data analytics"
collection: publications
permalink: /publication/2016-05-12-visually-programming-dataflows-2
excerpt: 'The paper discusses the use of visual programming in the development of parallel dataflow programs for distributed dataflow systems such as Flink. A prototypical visual programming environment called Flision was built and evaluated through qualitative user testing, indicating that visual programming can be a valuable tool for users of scalable data analysis tools.'
date: 2016-05-12
venue: '2016 IEEE International Conference on Big Data (Big Data)'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/7840860'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
Distributed dataflow systems like Spark and Flink allow to analyze large datasets using clusters of computers. These frameworks provide automatic program parallelization and manage distributed workers, including worker failures. Moreover, they provide high-level programming abstractions and execute programs efficiently. Yet, the programming abstractions remain textual while the dataflow model is essentially a graph of transformations. Thus, there is a mismatch between the presented abstraction and the underlying model here. One can also argue that developing dataflow programs with these textual abstractions requires needless amounts of coding and coding skills. A dedicated programming environment could instead allow constructing dataflow programs more interactively and visually. In this paper, we therefore investigate how visual programming can make the development of parallel dataflow programs more accessible. In particular, we built a prototypical visual programming environment for Flink, which we call Flision. Flision provides a graphical user interface for creating dataflow programs, a code generation engine that generates code for Flink, and seamless deployment to a connected cluster. Users of this environment can effectively create jobs by dragging, dropping, and visually connecting operator components. To evaluate the applicability of this approach, we interviewed ten potential users. Our impressions from this qualitative user testing strengthened our believe that visual programming can be a valuable tool for users of scalable data analysis tools.

[Download paper here](https://lauritzthamsen.org/assets/texts/ThamsenRennerByfeldPaeschkeSchroederBoehm_2016_VisuallyProgrammingDataflowsForDistributedDataAnalytics.pdf)

## Bibtex

```
@inproceedings{ThamsenRBPSB16,
  author    = {Lauritz Thamsen and
               Thomas Renner and
               Marvin Byfeld and
               Markus Paeschke and
               Daniel Schroder and
               Felix Bohm},
  editor    = {James Joshi and
               George Karypis and
               Ling Liu and
               Xiaohua Hu and
               Ronay Ak and
               Yinglong Xia and
               Weijia Xu and
               Aki{-}Hiro Sato and
               Sudarsan Rachuri and
               Lyle H. Ungar and
               Philip S. Yu and
               Rama Govindaraju and
               Toyotaro Suzumura},
  title     = {Visually programming dataflows for distributed data analytics},
  booktitle = {2016 IEEE International Conference on Big Data IEEE BigData 2016,
               Washington DC, USA, December 5-8, 2016},
  pages     = {2276--2285},
  publisher = {IEEE Computer Society},
  year      = {2016},
  url       = {https://doi.org/10.1109/BigData.2016.7840860},
  doi       = {10.1109/BigData.2016.7840860},
  timestamp = {Fri, 19 Nov 2021 16:08:20 +0100},
  biburl    = {https://dblp.org/rec/conf/bigdataconf/ThamsenRBPSB16.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
```