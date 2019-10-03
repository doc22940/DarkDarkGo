# DarkDarkGo

![](https://img.shields.io/github/stars/Bennington-Distributed-Systems-2017/DarkDarkGo)
![](https://img.shields.io/github/forks/Bennington-Distributed-Systems-2017/DarkDarkGo)

**DarkDarkGo** is a scalable search engine for the dark web. The goal of the
project is to build a simple, robust search engine from scratch that can search
through the dark web content.

## Project Status

It is a work in progress. The last time we tested (December 2017), the
dark web did not give us enough meaningful results to serve a query. However, each
component was working and tested separately. Hence, this project can be
used as a foundation to add more interesting features and build a more complex
product.

## Architecture

![DarkDarkGo Design](mgmt/doc/DarkDarkGo.png)

**Components**

- [Crawler:](crawler) Crawls the onion websites
- [Index Builder:](indexer) Builds index chunk
- [Index Server:](index-server) Stores replicated index chunk
- [MGMT:](mgmt) Serves as single master, schedules jobs for other servers and executes
  heartbeats messages
- [Front-End:](frontend) Serves a website with Google-like interface
- [Back-End:](webserver) Express server with caching and aggregation logic

**API**
- [API](mgmt/doc/api.md)
- [Sample flow](mgmt/doc/flow.md)

## Testing

Each component has its own Dockerfile that is ready to be built and tested.

## Stargazers over time

[![Stargazers over time](https://starchart.cc/Bennington-Distributed-Systems-2017/DarkDarkGo.svg)](https://starchart.cc/Bennington-Distributed-Systems-2017/DarkDarkGo)
