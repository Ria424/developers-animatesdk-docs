## fl summary

#### Availability

Flash MX 2004.

#### Description

The flash object represents the Flash application. You can use flash or fl to refer to this object. This documentation uses fl in code samples throughout.

#### Method summary

The following methods can be used with the flash object:

| **Method** | **Description** |
| --- | --- |
| [fl.addEventListener()](../flash_object_(fl)/fl1.md) | Registers a function to be called when a specific event is received. |
| [fl.addToolInToolbar()](../flash_object_(fl)/fl1.md) | Add the specified tool from master toolbar to main toolbar, appends in the last. |
| [fl.browseForFileURL()](../flash_object_(fl)/fl3.md) | Opens a File Open or File Save system dialog box and lets the user specify a file to be opened or saved. |
| [fl.browseForFolderURL()](../flash_object_(fl)/fl4.md) | Displays a Browse for Folder dialog box and lets the user select a folder. |
| [fl.clearPublishCache()](../flash_object_(fl)/fl5.md) | Clears the publish cache. |
| [fl.clipCopyString()](../flash_object_(fl)/fl6.md) | Copies the specified string to the Clipboard. |
| [fl.closeAll()](../flash_object_(fl)/fl7.md) | Closes all open documents, displaying the Save As dialog box for any documents that were not previously saved. |
| [fl.closeAllPlayerDocuments()](../flash_object_(fl)/fl8.md) | Closes all the SWF files that were opened with Control > Test Movie. |
| [fl.closeDocument()](../flash_object_(fl)/fl9.md) | Closes the specified document. |
| [fl.copyLibraryItem()](../flash_object_(fl)/fl15.md) | Silently copies a library item from a document without exposing the item in the Flash Pro user interface. |
| [fl.createDocument()](../flash_object_(fl)/fl16.md) | Opens a new document and selects it. |
| [fl.exportPublishProfileString()](../flash_object_(fl)/fl22.md) | Uniform Resource Identifier (URI) from which to export publish settings. |
| [fl.fileExists()](../flash_object_(fl)/fl24.md) | Checks whether a file already exists on disk. |
| [fl.findDocumentDOM()](../flash_object_(fl)/fl25.md) | Lets you target a specific file by using its unique identifier. |
| [fl.findDocumentIndex()](../flash_object_(fl)/fl26.md) | Returns an array of integers that represent the position of a document in the fl.documents array. |
| [fl.findObjectInDocByName()](../flash_object_(fl)/fl27.md) | Exposes elements with instance names that match specified text. |
| [fl.findObjectInDocByType()](../flash_object_(fl)/fl28.md) | Exposes elements of a specified element type in a document. |
| [fl.getAppMemoryInfo()](../flash_object_(fl)/fl30.md) | Returns an integer that represents the number of bytes being used in a specified area of Flash.exe memory. |
| [fl.getDocumentDOM()](../flash_object_(fl)/fl31.md) | Retrieves the DOM ([Document object](../Document_object/Document_summary.md)) of the currently active document. |

| **Method** | **Description** |
| --- | --- |
| [fl.getSwfPanel()](../flash_object_(fl)/fl35.md) | Returns the SWFPanel object based on the panel's localized name or its SWF filename. |
| [fl.getThemeColor()](../flash_object_(fl)/fl32.md) | Retrieves a theme color that matches the parameter specified theme parameter name. |
| [fl.getThemeColorParameters()](../flash_object_(fl)/fl33.md) | Retrieves an array of theme parameter names. |
| [fl.getThemeFontInfo()](../flash_object_(fl)/fl34.md) | Return either the font style or the font size that is used to draw the UI of the specified size. |
| [fl.isFontInstalled()](../flash_object_(fl)/fl37.md) | Determines whether a specified font is installed. |
| [fl.mapPlayerURL()](../flash_object_(fl)/fl40.md) | Maps an escaped Unicode URL to a UTF-8 or MBCS URL. |
| [fl.openDocument()](../flash_object_(fl)/fl45.md) | Opens a Flash (FLA) document for editing in a new Flash Document window and gives it focus. |
| [fl.openScript()](../flash_object_(fl)/fl46.md) | Opens a script (JSFL, AS, ASC) or other file (XML, TXT) in the Flash text editor. |
| [fl.quit()](../flash_object_(fl)/fl55.md) | Quits Flash, prompting the user to save any changed documents. |
| [fl.reloadEffects() - dropped](../flash_object_(fl)/fl56.md) | Dropped in Adobe Animate. |
| [fl.reloadTools()](../flash_object_(fl)/fl57.md) | Rebuilds the Tools panel from the toolconfig.xml file. |
| [fl.removeEventListener()](../flash_object_(fl)/fl58.md) | Unregisters a function that was registered using fl.addEventListener(). |
| [fl.resetAS3PackagePaths()](../flash_object_(fl)/fl59.md) | Resets the global Classpath setting in the ActionScript 3.0 Settings dialog box to the default value. |
| [fl.resetPackagePaths() - dropped](../flash_object_(fl)/fl60.md) | Dropped in Adobe Animate. |
| [fl.runScript()](../flash_object_(fl)/fl62.md) | Executes a JavaScript file. |
| [fl.saveAll()](../flash_object_(fl)/fl63.md) | Saves all open documents, displaying the Save As dialog box for any documents that were not previously saved. |
| [fl.saveDocument()](../flash_object_(fl)/fl64.md) | Saves the specified document as a FLA document. |
| [fl.saveDocumentAs()](../flash_object_(fl)/fl65.md) | Displays the Save As dialog box for the specified document. |
| [fl.selectElement()](../flash_object_(fl)/fl67.md) | Enables selection or editing of an element. |
| [fl.selectTool()](../flash_object_(fl)/fl68.md) | Selects the specified tool in the Tools panel. |
| [fl.setActiveWindow()](../flash_object_(fl)/fl69.md) | Sets the active window to be the specified document. |
| [fl.setPrefBoolean()](../flash_object_(fl)/fl71.md) | Sets a boolean preference value. |
| [fl.showIdleMessage()](../flash_object_(fl)/fl70.md) | Lets you disable the warning about a script running too long. |
| [fl.toggleBreakpoint()](../flash_object_(fl)/fl75.md) | Toggles a breakpoint for the given .as file at the given line. |
| [fl.trace()](../flash_object_(fl)/fl77.md) | Sends a text string to the Output panel. |
| [fl.xmlPanel()](../flash_object_(fl)/fl79.md) | Launches the XML To UI dialog from a URI that points to an XML-format file. |
| [fl.xmlPanelFromString()](../flash_object_(fl)/fl80.md) | Launches the XML To UI dialog from an XML-format string. |

#### Property summary

The following properties can be used with the flash object.

| **Property** | **Description** |
| --- | --- |
| [fl.actionsPanel](../flash_object_(fl)/fl.md) | Read-only; an [ActionsPanel object](../ActionsPanel_object/ActionsPanel_summary.md). |
| [fl.as3PackagePaths](../flash_object_(fl)/fl2.md) | A string that corresponds to the global Classpath setting in the ActionScript 3.0 Settings dialog box. |
| [fl.compilerErrors](../flash_object_(fl)/fl10.md) | Read-only; a [CompilerErrors object](../CompilerErrors_object/CompilerErrors_summary.md). |
| [fl.componentsPanel](../flash_object_(fl)/fl11.md) | Read-only; a [ComponentsPanel object](../ComponentsPanel_object/ComponentsPanel_summary.md), which represents the Components panel. |
| [fl.configDirectory](../flash_object_(fl)/fl12.md) | Read-only; a string that specifies the full path for the local user’s Configuration folder as a platform-specific path. |
| [fl.configURI](../flash_object_(fl)/fl13.md) | Read-only; a string that specifies the full path for the local user’s Configuration directory as a file:/// URI. |
| [fl.contactSensitiveSelection](../flash_object_(fl)/fl14.md) | A Boolean value that specifies whether Contact Sensitive selection mode is enabled. |
| [fl.createNewDocList](../flash_object_(fl)/fl17.md) | Read-only; an array of strings that represent the various types of documents that can be created. |
| [fl.createNewDocListType](../flash_object_(fl)/fl18.md) | Read-only; an array of strings that represent the file extensions of the types of documents that can be created. |
| [fl.createNewTemplateList](../flash_object_(fl)/fl19.md) | Read-only; an array of strings that represent the various types of templates that can be created. |
| [fl.documents](../flash_object_(fl)/fl20.md) | Read-only; an array of Document objects (see [Document object](../Document_object/Document_summary.md)) that represent the documents (FLA files) that are currently open for editing. |
| [fl.drawingLayer](../flash_object_(fl)/fl21.md) | The drawingLayer object that an extensible tool should use when the user wants to temporarily draw while dragging. |
| [fl.externalLibraryPath](../flash_object_(fl)/fl23.md) | A string that contains a list of items in the global ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. |
| [fl.flexSDKPath](../flash_object_(fl)/fl29.md) | A string that specifies the path to the Flex SDK folder, which contains bin, frameworks, lib, and other folders. |
| [fl.installedPlayers](../flash_object_(fl)/fl36.md) | Returns an array of generic objects corresponding to the list of installed Flash Players in the document Property inspector. |
| [fl.languageCode](../flash_object_(fl)/fl38.md) | Returns the five character code identifying the locale of the application’s user interface. |
| [fl.libraryPath](../flash_object_(fl)/fl39.md) | A string that contains a list of items in the global ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. |
| [fl.Math](../flash_object_(fl)/fl41.md) | Read-only; the [Math object](../Math_object/Math_summary.md), which provides methods for matrix and point operations. |
| [fl.mruRecentFileList](../flash_object_(fl)/fl42.md) | Read-only; an array of the complete filenames in the Most Recently Used (MRU) list that the Flash authoring tool manages. |
| [fl.mruRecentFileListType](../flash_object_(fl)/fl43.md) | Read-only; an array of the file types in the MRU list that the Flash authoring tool manages. |
| [fl.packagePaths - dropped](../flash_object_(fl)/fl48.md) | Dropped in Adobe Animate. |
| [fl.publishCacheDiskSizeMax](../flash_object_(fl)/fl50.md) | An integer that sets the disk cache size limit preference. |
| [fl.publishCacheEnabled](../flash_object_(fl)/fl51.md) | A boolean value that sets whether publish cache is enabled. |
| [fl.publishCacheMemoryEntrySizeLimit](../flash_object_(fl)/fl52.md) | An integer property that sets the maximum size for the memory cache entry preference. |

| **Property** | **Description** |
| --- | --- |
| [fl.publishCacheMemorySizeMax](../flash_object_(fl)/fl53.md) | An integer that sets the memory cache size limit preference. |
| [fl.objectDrawingMode](../flash_object_(fl)/fl44.md) | An integer that represents the object drawing mode that is enabled. |
| [fl.outputPanel](../flash_object_(fl)/fl47.md) | Read-only; reference to the [OutputPanel object](../OutputPanel_object/OutputPanel_summary.md). |
| [fl.presetPanel](../flash_object_(fl)/fl49.md) | Read-only; a [PresetPanel object](../PresetPanel_object/PresetPanel_summary.md). |
| [fl.scriptURI](../flash_object_(fl)/fl66.md) | Read-only; a string that represents the path of the currently running JSFL script, expressed as a file:/// URI. |
| [fl.sourcePath](../flash_object_(fl)/fl72.md) | A string that contains a list of items in the global ActionScript 3.0 Source path, which specifies the location of ActionScript class files. |
| [fl.spriteSheetExporter](../flash_object_(fl)/fl73.md) | Returns an instance of SpriteSheetExporter object. |
| [fl.swfPanels](../flash_object_(fl)/fl74.md) | An array of registered swfPanel objects (see [SwfPanel object](../SwfPanel_object/SwfPanel_summary.md)). |
| [fl.tools](../flash_object_(fl)/fl76.md) | Read-only; an array of Tools objects. |
| [fl.version](../flash_object_(fl)/fl78.md) | Read-only; the long string version of the Flash authoring tool, including platform. |
| [fl.xmlui](../flash_object_(fl)/fl81.md) | Read-only; an [XMLUI object](../XMLUI_object/XMLUI_summary.md). |
