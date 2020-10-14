# nodebb-plugin-iframe-resizable
NodeBB plugin which providers host script for iframe-resizer library.

[![npm version](https://badge.fury.io/js/nodebb-plugin-iframe-resizable.svg)](https://badge.fury.io/js/nodebb-plugin-iframe-resizable)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/aramwram/nodebb-plugin-iframe-resizable/blob/main/LICENSE)

## Purpose
nodebb-plugin-iframe-resizable simply embeds [iframe-resizer](https://www.npmjs.com/package/iframe-resizer) guest script ([iframeResizer.contentWindow.min.js](https://raw.githubusercontent.com/davidjbradshaw/iframe-resizer/v4.2.11/js/iframeResizer.contentWindow.min.js)) into [NodeBB](https://nodebb.org) application.

## Use case
You have some web application which hosts NodeBB forum in an iframe and you want iframe height to dynamically fit forum's content.

## Usage
- Install nodebb-plugin-iframe-resizable package:
`npm install --save nodebb-plugin-iframe-resizable`
- Go to NodeBB admin panel and activate the plugin.
- Install iframe-resizer on your host app's project.
- Follow further instructions from [here](https://www.npmjs.com/package/iframe-resizer#getting-started).

## Versioning
It's supposed that versions of nodebb-plugin-iframe-resizable are mapped exactly to the versions of iframe-resizer package starting from [v.4.2.11](https://www.npmjs.com/package/iframe-resizer/v/4.2.11) so taht it will always be easy to find a proper version of nodebb-plugin-iframe-resizable for a given version of iframe-resizer package.
