# nunzip

Command-line unzip utility running in node.

## Installation

    npm install nunzip

## Usage

Once installed, you can run nunzip in `package.json` scripts, e.g.
```json
{
  "scripts": {
    "unpack": "nunzip my-archie.zip"
  }
}
```
Or using npx directly on the command line, e.g.

    npx nunzip my-archive.zip

Complete usage according to `npx nunzip --help`:

```
Usage: nunzip file[.zip] [OPTIONS]
  -d         directory to extract to
  -h, --help display this help
```
