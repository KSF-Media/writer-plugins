## KSF Media plugins for Writer
(fork of https://github.com/Infomaker/NPWriterPluginBundle)

### Get started
Install dependencies
```
yarn install
```

Start a webpack development server running at [http://localhost:5001](localhost:5001)
```
yarn start
```
(All plugins resources will be available at https://localhost:5001/plugin-name.js and https://localhost:5001/plugin-name.css.)

Build a dist-folder by running
```
yarn build
```

### Plugin development
**Creating a new plugin:** Add a new folder `plugins/fi.ksfmedia.plugin-name`. See the very basic plugin sample-plugin for example.

### Docs about plugin development
http://docs.writer.infomaker.io/
