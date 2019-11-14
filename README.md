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

```
Usage: nunzip file[.zip] [OPTIONS]
  -d         directory to extract to (default: /Users/ahocevar/projects/landesstrassen-noe)
  -h, --help display this help
```