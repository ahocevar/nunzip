# nunzip

Command-line unzip utility running in node.

## Installation

    npm install nunzip

## Usage

Once installed, nunzip is usefull for scripts in `package.json`, e.g.
```json
{
  "scripts": {
    "unpack": "nunzip my-archie.zip"
  }
}
```
Or use npx directly on the command line, e.g.

    npx nunzip my-archive.zip

```
Usage: nunzip <zip file> [-d <output directory>]
```
