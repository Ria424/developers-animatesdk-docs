## Flash summary

#### Availability

Flash MX 2004.

#### Description

The flash object represents the Flash application. You can use flash or fl to refer to this object. This documentation uses fl in code samples throughout.

#### Method summary

The following methods can be used with the flash object:

| **Method** | **Description** |
| --- | --- |
| [Flash.addEventListener()](../Flash_object/Flash1.md) | Registers a function to be called when a specific event is received. |
| [Flash.addToolInToolbar()](../Flash_object/Flash1.md) | Add the specified tool from master toolbar to main toolbar, appends in the last. |
| [Flash.browseForFileURL()](../Flash_object/Flash3.md) | Opens a File Open or File Save system dialog box and lets the user specify a file to be opened or saved. |
| [Flash.browseForFolderURL()](../Flash_object/Flash4.md) | Displays a Browse for Folder dialog box and lets the user select a folder. |
| [Flash.clearPublishCache()](../Flash_object/Flash5.md) | Clears the publish cache. |
| [Flash.clipCopyString()](../Flash_object/Flash6.md) | Copies the specified string to the Clipboard. |
| [Flash.closeAll()](../Flash_object/Flash7.md) | Closes all open documents, displaying the Save As dialog box for any documents that were not previously saved. |
| [Flash.closeAllPlayerDocuments()](../Flash_object/Flash8.md) | Closes all the SWF files that were opened with Control > Test Movie. |
| [Flash.closeDocument()](../Flash_object/Flash9.md) | Closes the specified document. |
| [Flash.copyLibraryItem()](../Flash_object/Flash15.md) | Silently copies a library item from a document without exposing the item in the Flash Pro user interface. |
| [Flash.createDocument()](../Flash_object/Flash16.md) | Opens a new document and selects it. |
| [Flash.exportPublishProfileString()](../Flash_object/Flash22.md) | Uniform Resource Identifier (URI) from which to export publish settings. |
| [Flash.fileExists()](../Flash_object/Flash24.md) | Checks whether a file already exists on disk. |
| [Flash.findDocumentDOM()](../Flash_object/Flash25.md) | Lets you target a specific file by using its unique identifier. |
| [Flash.findDocumentIndex()](../Flash_object/Flash26.md) | Returns an array of integers that represent the position of a document in the fl.documents array. |
| [Flash.findObjectInDocByName()](../Flash_object/Flash27.md) | Exposes elements with instance names that match specified text. |
| [Flash.findObjectInDocByType()](../Flash_object/Flash28.md) | Exposes elements of a specified element type in a document. |
| [Flash.getAppMemoryInfo()](../Flash_object/Flash30.md) | Returns an integer that represents the number of bytes being used in a specified area of Flash.exe memory. |
| [Flash.getDocumentDOM()](../Flash_object/Flash31.md) | Retrieves the DOM ([Document object](../Document_object/Document_summary.md)) of the currently active document. |
| [Flash.getSwfPanel()](../Flash_object/Flash35.md) | Returns the SWFPanel object based on the panel's localized name or its SWF filename. |
| [Flash.getThemeColor()](../Flash_object/Flash32.md) | Retrieves a theme color that matches the parameter specified theme parameter name. |
| [Flash.getThemeColorParameters()](../Flash_object/Flash33.md) | Retrieves an array of theme parameter names. |
| [Flash.getThemeFontInfo()](../Flash_object/Flash34.md) | Return either the font style or the font size that is used to draw the UI of the specified size. |
| [Flash.isFontInstalled()](../Flash_object/Flash37.md) | Determines whether a specified font is installed. |
| [Flash.mapPlayerURL()](../Flash_object/Flash40.md) | Maps an escaped Unicode URL to a UTF-8 or MBCS URL. |
| [Flash.openDocument()](../Flash_object/Flash45.md) | Opens a Flash (FLA) document for editing in a new Flash Document window and gives it focus. |
| [Flash.openScript()](../Flash_object/Flash46.md) | Opens a script (JSFL, AS, ASC) or other file (XML, TXT) in the Flash text editor. |
| [Flash.quit()](../Flash_object/Flash55.md) | Quits Flash, prompting the user to save any changed documents. |
| [Flash.reloadEffects() - dropped](../Flash_object/Flash56.md) | Dropped in Adobe Animate. |
| [Flash.reloadTools()](../Flash_object/Flash57.md) | Rebuilds the Tools panel from the toolconfig.xml file. |
| [Flash.removeEventListener()](../Flash_object/Flash58.md) | Unregisters a function that was registered using fl.addEventListener(). |
| [Flash.resetAS3PackagePaths()](../Flash_object/Flash59.md) | Resets the global Classpath setting in the ActionScript 3.0 Settings dialog box to the default value. |
| [Flash.resetPackagePaths() - dropped](../Flash_object/Flash60.md) | Dropped in Adobe Animate. |
| [Flash.runScript()](../Flash_object/Flash62.md) | Executes a JavaScript file. |
| [Flash.saveAll()](../Flash_object/Flash63.md) | Saves all open documents, displaying the Save As dialog box for any documents that were not previously saved. |
| [Flash.saveDocument()](../Flash_object/Flash64.md) | Saves the specified document as a FLA document. |
| [Flash.saveDocumentAs()](../Flash_object/Flash65.md) | Displays the Save As dialog box for the specified document. |
| [Flash.selectElement()](../Flash_object/Flash67.md) | Enables selection or editing of an element. |
| [Flash.selectTool()](../Flash_object/Flash68.md) | Selects the specified tool in the Tools panel. |
| [Flash.setActiveWindow()](../Flash_object/Flash69.md) | Sets the active window to be the specified document. |
| [Flash.setPrefBoolean()](../Flash_object/Flash71.md) | Sets a boolean preference value. |
| [Flash.showIdleMessage()](../Flash_object/Flash70.md) | Lets you disable the warning about a script running too long. |
| [Flash.toggleBreakpoint()](../Flash_object/Flash75.md) | Toggles a breakpoint for the given .as file at the given line. |
| [Flash.trace()](../Flash_object/Flash77.md) | Sends a text string to the Output panel. |
| [Flash.xmlPanel()](../Flash_object/Flash79.md) | Launches the XML To UI dialog from a URI that points to an XML-format file. |
| [Flash.xmlPanelFromString()](../Flash_object/Flash80.md) | Launches the XML To UI dialog from an XML-format string. |

#### Property summary

The following properties can be used with the flash object.

| **Property** | **Description** |
| --- | --- |
| [Flash.actionsPanel](../Flash_object/Flash.md) | Read-only; an [ActionsPanel object](../ActionsPanel_object/ActionsPanel_summary.md). |
| [Flash.as3PackagePaths](../Flash_object/Flash2.md) | A string that corresponds to the global Classpath setting in the ActionScript 3.0 Settings dialog box. |
| [Flash.compilerErrors](../Flash_object/Flash10.md) | Read-only; a [CompilerErrors object](../CompilerErrors_object/CompilerErrors_summary.md). |
| [Flash.componentsPanel](../Flash_object/Flash11.md) | Read-only; a [ComponentsPanel object](../ComponentsPanel_object/ComponentsPanel_summary.md), which represents the Components panel. |
| [Flash.configDirectory](../Flash_object/Flash12.md) | Read-only; a string that specifies the full path for the local user’s Configuration folder as a platform-specific path. |
| [Flash.configURI](../Flash_object/Flash13.md) | Read-only; a string that specifies the full path for the local user’s Configuration directory as a file:/// URI. |
| [Flash.contactSensitiveSelection](../Flash_object/Flash14.md) | A Boolean value that specifies whether Contact Sensitive selection mode is enabled. |
| [Flash.createNewDocList](../Flash_object/Flash17.md) | Read-only; an array of strings that represent the various types of documents that can be created. |
| [Flash.createNewDocListType](../Flash_object/Flash18.md) | Read-only; an array of strings that represent the file extensions of the types of documents that can be created. |
| [Flash.createNewTemplateList](../Flash_object/Flash19.md) | Read-only; an array of strings that represent the various types of templates that can be created. |
| [Flash.documents](../Flash_object/Flash20.md) | Read-only; an array of Document objects (see [Document object](../Document_object/Document_summary.md)) that represent the documents (FLA files) that are currently open for editing. |
| [Flash.drawingLayer](../Flash_object/Flash21.md) | The drawingLayer object that an extensible tool should use when the user wants to temporarily draw while dragging. |
| [Flash.externalLibraryPath](../Flash_object/Flash23.md) | A string that contains a list of items in the global ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. |
| [Flash.flexSDKPath](../Flash_object/Flash29.md) | A string that specifies the path to the Flex SDK folder, which contains bin, frameworks, lib, and other folders. |
| [Flash.installedPlayers](../Flash_object/Flash36.md) | Returns an array of generic objects corresponding to the list of installed Flash Players in the document Property inspector. |
| [Flash.languageCode](../Flash_object/Flash38.md) | Returns the five character code identifying the locale of the application’s user interface. |
| [Flash.libraryPath](../Flash_object/Flash39.md) | A string that contains a list of items in the global ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. |
| [Flash.Math](../Flash_object/Flash41.md) | Read-only; the [Math object](../Math_object/Math_summary.md), which provides methods for matrix and point operations. |
| [Flash.mruRecentFileList](../Flash_object/Flash42.md) | Read-only; an array of the complete filenames in the Most Recently Used (MRU) list that the Flash authoring tool manages. |
| [Flash.mruRecentFileListType](../Flash_object/Flash43.md) | Read-only; an array of the file types in the MRU list that the Flash authoring tool manages. |
| [Flash.packagePaths - dropped](../Flash_object/Flash48.md) | Dropped in Adobe Animate. |
| [Flash.publishCacheDiskSizeMax](../Flash_object/Flash50.md) | An integer that sets the disk cache size limit preference. |
| [Flash.publishCacheEnabled](../Flash_object/Flash51.md) | A boolean value that sets whether publish cache is enabled. |
| [Flash.publishCacheMemoryEntrySizeLimit](../Flash_object/Flash52.md) | An integer property that sets the maximum size for the memory cache entry preference. |
| [Flash.publishCacheMemorySizeMax](../Flash_object/Flash53.md) | An integer that sets the memory cache size limit preference. |
| [Flash.objectDrawingMode](../Flash_object/Flash44.md) | An integer that represents the object drawing mode that is enabled. |
| [Flash.outputPanel](../Flash_object/Flash47.md) | Read-only; reference to the [OutputPanel object](../OutputPanel_object/OutputPanel_summary.md). |
| [Flash.presetPanel](../Flash_object/Flash49.md) | Read-only; a [PresetPanel object](../PresetPanel_object/PresetPanel_summary.md). |
| [Flash.scriptURI](../Flash_object/Flash66.md) | Read-only; a string that represents the path of the currently running JSFL script, expressed as a file:/// URI. |
| [Flash.sourcePath](../Flash_object/Flash72.md) | A string that contains a list of items in the global ActionScript 3.0 Source path, which specifies the location of ActionScript class files. |
| [Flash.spriteSheetExporter](../Flash_object/Flash73.md) | Returns an instance of SpriteSheetExporter object. |
| [Flash.swfPanels](../Flash_object/Flash74.md) | An array of registered swfPanel objects (see [SwfPanel object](../SwfPanel_object/SwfPanel_summary.md)). |
| [Flash.tools](../Flash_object/Flash76.md) | Read-only; an array of Tools objects. |
| [Flash.version](../Flash_object/Flash78.md) | Read-only; the long string version of the Flash authoring tool, including platform. |
| [Flash.xmlui](../Flash_object/Flash81.md) | Read-only; an [XMLUI object](../XMLUI_object/XMLUI_summary.md). |
