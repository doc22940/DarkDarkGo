# DarkDarkGo

**DarkDarkGo** is an scalable search engine for the dark web. The goal of the
project is to build a simple, robust search engine from scratch that can search
through the dark web content.

## Project Status

It is still a work-in-progress. The last time we tested (December 2017), the
dark web did not give us enough results to serve for a query. However, each
component was working and tested separately. Hence, this project can be
used as a foundation to add more interesting features and build a more complex
product.

## Table of Contents

- [Architecture](#architecture)
- [Testing](#testing)

## Architecture

![DarkDarkGo Design](mgmt/doc/DarkDarkGo.png)

- Crawler: Crawls the onion websites
- Index Builder: Builds index chunk
- Index Server: Stores replicated index chunk
- MGMT: Serves as single master, schedules jobs for other servers and executes
  heartbeats messages
- Front-End: Serves a website with Google-like interface
- Back-End: Express server with caching and aggregation logic

## Testing

Each component has its own Dockerfile that is ready to be built and tested.
