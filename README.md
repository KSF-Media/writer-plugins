## KSF Media plugins for Writer
(based on https://github.com/Infomaker/NPWriterPluginBundle)

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

### Plugin testing locally
Launch the staging writer. https://writer.stage.ksf.infomaker.io/

Press `crl/cmd + shift + y` to open the **Configuration test tool**.

Press the **+** icon.

In the **id** field, add the plugins id. Infomaker uses a reverse domain notation, like `se.infomaker.someplugin`. Don't know if it's required, but lets follow the same practice: `fi.ksfmedia.someplugin`.

The **Name** field should contain the plugin name, exactly as defined in the plugins Package file.

**Plugin src url** is the url to your plugins js file in the dist folder.

**Plugin css url** is the url to your plugins css file in the dist folder.

Select enabled and Apply.

### Docs about writer and plugin development
http://docs.writer.infomaker.io/

https://infomaker.github.io/NPWriterDevelopers/guides/
