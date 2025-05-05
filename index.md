# Animate JSAPI Documentation

This is the home page of Animate APIs

## Table of Contents

- [Introduction](#introduction)
  - [Working with the JavaScript API](#working-with-the-javascript-api)
  - [What's new in the JavaScript API](#whats-new-in-the-javascript-api)
  - [JavaScript API objects](#javascript-api-objects)
  - [Sample implementations](#sample-implementations)
- [Top-level functions](#top-level-summary)
- [ActionsPanel summary](#actionspanel-summary)
- [BitmapInstance summary](#bitmapinstance-summary)
- [BitmapItem summary](#bitmapitem-summary)
- [Camera summary](#camera-summary)
- [CompiledClipInstance summary](#compiledclipinstance-summary)
- [CompilerErrors summary](#compilererrors-summary)
- [ComponentInstance summary](#componentinstance-summary)
- [ComponentsPanel summary](#componentspanel-summary)
- [Contour summary](#contour-summary)
- [Document summary](#document-summary)
- [DrawingLayer summary](#drawinglayer-summary)
- [Edge summary](#edge-summary)
- [Element summary](#element-summary)
- [Fill summary](#fill-summary)
- [Filter summary](#filter-summary)
- [Flash summary](#flash-summary)
- [FLfile summary](#flfile-summary)
- [FolderItem summary](#folderitem-summary)
- [FontItem summary](#fontitem-summary)
- [Frame summary](#frame-summary)
- [HalfEdge summary](#halfedge-summary)
- [Instance summary](#instance-summary)
- [Item summary](#item-summary)
- [Layer summary](#layer-summary)
- [LayerParenting summary](#layerparenting-summary)
- [Library summary](#library-summary)
- [Math summary](#math-summary)
- [Matrix summary](#matrix-summary)
- [OutputPanel summary](#outputpanel-summary)
- [OvalObject summary](#ovalobject-summary)
- [Parameter summary](#parameter-summary)
- [Path summary](#path-summary)
- [PresetItem summary](#presetitem-summary)
- [PresetPanel summary](#presetpanel-summary)
- [RectangleObject summary](#rectangleobject-summary)
- [Shape summary](#shape-summary)
- [SoundItem summary](#sounditem-summary)
- [SpriteSheetExporter summary](#spritesheetexporter-summary)
- [Stroke summary](#stroke-summary)
- [SwfPanel summary](#swfpanel-summary)
- [SymbolInstance summary](#symbolinstance-summary)
- [SymbolItem summary](#symbolitem-summary)
- [TextAttrs summary](#textattrs-summary)
- [TextRun summary](#textrun-summary)
- [TextureAtlasExporter summary](#textureatlasexporter-summary)
- [Text summary](#text-summary)
- [Timeline summary](#timeline-summary)
- [ToolObj summary](#toolobj-summary)
- [Tools summary](#tools-summary)
- [Tween summary](#tween-summary)
- [Vertex summary](#vertex-summary)
- [VideoItem summary](#videoitem-summary)
- [XMLUI summary](#xmlui-summary)
- [C-Level_Extensibility](#c-level_extensibility)

## Introduction

### Working with the JavaScript API

As a user of Adobe® Animate®, you may be familiar with Adobe® ActionScript®, which lets you create scripts that execute at run time in Adobe® Flash® Player. The Animate JavaScript application programming interface (JavaScript API or JSAPI) described in this document is a complementary programming tool that lets you create scripts that run in the Animate authoring environment.

This document describes the objects, methods, and properties available in the JavaScript API. It assumes that you know how to use the documented commands when working in the authoring environment. If you have a question about what a particular command does, use other documents in Animate Help, such as *Using Animate*, to find that information.

This document also assumes that you are familiar with JavaScript or ActionScript syntax and with basic programming concepts such as functions, parameters, and data types.

The Animate JavaScript API lets you write scripts to perform several actions in the Animate authoring environment (that is, while a user has the Animate program open). This functionality is different from the ActionScript language, which lets you write scripts to perform actions in the Flash Player environment (that is, while a SWF file is playing). This functionality is also different from JavaScript commands that you might use in pages displayed in a web browser.

Using the JavaScript API, you can write Animate application scripts to help streamline the authoring process. For example, you can write scripts to automate repetitive tasks or add custom tools to the Tools panel.

The Animate JavaScript API is designed to resemble the Adobe® Dreamweaver® and Adobe® Fireworks® JavaScript API (which were designed based on the Netscape JavaScript API). The Animate JavaScript API is based on a Document Object Model (DOM), which allows Animate documents to be accessed using JavaScript objects. The Animate JavaScript API includes all elements of the Netscape JavaScript API, plus the Animate DOM. These added objects and their methods and properties are described in this document. You can use any of the elements of the native JavaScript language in an Animate script, but only elements that make sense in the context of an Animate document have an effect.

The JavaScript API also contains methods that let you implement extensibility using a combination of JavaScript and custom C code. For more information, see [C-Level Extensibility](./C-Level_Extensibility/About_extensibility.md).

The JavaScript interpreter in Animate is the Mozilla SpiderMonkey engine, version 1.8, which is available on the web at [www.mozilla.org/js/spidermonkey/](http://www.mozilla.org/js/spidermonkey/). SpiderMonkey is one of the two reference implementations of the JavaScript language developed by Mozilla.org. It is the same engine that is embedded in the Mozilla browser.

SpiderMonkey implements the core JavaScript language as defined in the ECMAScript (ECMA-262) edition 3 language specification and it is fully compliant with the specification. Only the browser-specific host objects, which are not part of the ECMA-262 specification, are not supported. Similarly, many JavaScript reference guides distinguish between core JavaScript and client-side (browser-related) JavaScript. Only core JavaScript applies to the Animate JavaScript interpreter.

### Creating JSFL files

You can use Adobe Animate Professional or your preferred text editor to write and edit Animate JavaScript (JSFL) files. If you use Animate, these files have a .jsfl extension by default. To write a script, select File > New > Advanced > JSFL Script File.

You can also create a JSFL file by selecting commands in the History panel. Then click the Save button in the History panel or select Save As Command from the panel menu. The command (JSFL) file is saved in the Commands folder ([see Saving JSFL files](#saving-jsfl-files)). You can then open the file and edit it the same as any other script file.

The History panel provides some other useful options as well. You can copy selected commands to the Clipboard, and you can view JavaScript commands that are generated while you are working in Animate.

#### To copy commands from the History panel to the clipboard

1. Select one or more commands in the History panel.

2. Do one of the following:

    - Click the Copy button.

    - Select Copy Steps from the panel menu.

#### To view JavaScript commands in the History panel

- Select View > JavaScript in Panel from the panel menu.

### Saving JSFL files

You can have JSFL scripts available within the Animate authoring environment by storing them in one of several folders within the Configuration folder. By default, the Configuration folder is in the following location:

- Windows® 10™:

*boot drive*\\Users\\*username*\\AppData\\Local\\Adobe\\Animate *version*\\*language*\\Configuration\\

- Mac OS® X:

Macintosh HD/Users/*username*/Library/Application Support/Adobe/Animate *version*/*language*/Configuration/

To determine the location of the Configuration folder, use [Flash.configDirectory](./Flash_object/Flash12.md) or [Flash.configURI](./Flash_object/Flash13.md), as shown in the following example:

```javascript
// store directory to a variable 
var configDir = fl.configDirectory;
// display directory in the Output panel 
fl.trace(fl.configDirectory);
```

Within the Configuration folder, the following folders can contain scripts that you can access in the authoring environment: Behaviors (to support the user interface for behaviors); Commands (for scripts that appear on the Commands menu); JavaScript (for scripts used by Script Assist to populate the user interface controls); Tools (for extensible tools in the Tools panel); and WindowSWF (for panels that appear in the Windows menu). This document focuses on scripts used for commands and tools.

If you edit a script in the Commands folder, the new script is immediately available in Animate. If you edit a script for an extensible tool, close and restart Animate, or else use the [Flash.reloadTools()](./Flash_object/Flash57.md) command. However, if you used a script to add an extensible tool to the Tools panel and you then edit the script, either remove and then add the tool to the Tools panel again, or else close and restart Animate for the revised tool to be available.
There are two locations where you can store command and tool files so they can be accessed in the authoring environment.

- For scripts that appear as items in the Commands menu, save the JSFL file in the Commands folder in the following location:

| **Operating system** | **Location** |
| --- | --- |
| Windows 10 | *boot drive*\\Users\\*username*\\AppData\\Local\\Adobe\\Animate *version*\\*language*\\Configuration\\Commands |
| Mac OS X | Macintosh HD/Users/*userName*/Library/Application Support/Adobe/Animate *version*/*language*/Configuration/Commands |

- For scripts that appear as extensible tools in the Tools panel, save the JSFL file in the Tools folder in the following location:

| **Operating system** | **Location** |
| --- | --- |
| Windows 10 | *boot drive*\\Users\\*username*\\AppData\\Local\\Adobe\\Animate *version*\\*language*\\Configuration\\Tools |
| Mac OS X | Macintosh HD/Users/*userName*/Library/Application Support/Adobe/Animate *CC/language*/Configuration/Tools |

If a JSFL file has other files that go with it, such as XML files, store them in the same directory as the JSFL file.

### Running scripts

There are several ways to run scripts. The most common ways are explained in this section.

#### To run a script that you are currently viewing or editing

- Right-click (Command-click on the Macintosh) and choose Run Script.

- Click the Run Script icon on the Script window toolbar.

This option lets you run a script before you have saved it. This option also lets you run a script even if no FLA files are open.

#### To run a script that is in the Commands folder, do one of the following

- From the authoring environment, select Commands > *Script Name*.

- Use a keyboard shortcut that you have assigned to the script. To assign a keyboard shortcut, use Edit > Keyboard Shortcuts and select Drawing Menu Commands from the Commands pop-up menu. Expand the Commands node in the menu tree to view a list of available scripts.

#### To run a command script that is not in the Commands folder, do one of the following

- From the authoring environment, select Commands > Run Command, and then select the script to run.

- From within a script, use the [Flash.runScript()](./Flash_object/Flash62.md) command.

- From the file system, double-click the script file.

#### To add a tool implemented in a JSFL file to the Tools panel

1. Copy the JSFL file for the tool and any other associated files to the Tools folder (see ["Saving JSFL files"](#saving-jsfl-files)).

2. If tool is not visible in toolbar, click three dots (Edit Toolbar...)

3. Add the tool to the list of available tools.

You can add individual JavaScript API commands to ActionScript files by using the MMExecute() function, which is documented in the *ActionScript 3.0 Language and Components Reference*. However, the MMExecute() function has an effect only when it is used in the context of a custom user interface element, such as a component Property inspector, or a SWF panel within the authoring environment. Even if called from ActionScript, JavaScript API commands have no effect in Flash Player or outside the authoring environment.

#### To issue a command from an ActionScript script

- Use the following syntax (you can concatenate several commands into one string):

```text
MMExecute(Javascript command string);
```

You can also run a script from the command line.

#### To run a script from the command line on Windows

- Use the following syntax (add path information as required):

```bat
"Animate.exe" myTestFile.jsfl [-AlwaysRunJSFL]
```

Use the `-AlwaysRunJSFL` option to bypass the dialog box that prompts you to confirm script execution.

#### To run a script from the "Terminal" application on the Macintosh, use either of the following

- Use the following osacript syntax (add path information as required):

```bash
osascript -e 'tell application "Animate" to open alias "Mac OS X:Users:user:myTestFile.jsfl" '
```

The osascript command can also run AppleScript in a file. For example, you could include the following text in a file named myScript:

```text
tell application "Animate"
open alias "Mac OS X:Users:user:myTestFile.jsfl" 
end tell
```

Then, to run the script, you would use this command:
osascript myScript

- Use the Animate command:

```bash
/Applications/Adobe\ Animate\ 2020/Animate.app/Contents/MacOS/Animate \<path of the jsfl file\>
```

### What's new in the JavaScript API

The following section lists new objects, methods, and properties in Animate. It also lists changes in Flash CC, CS6, CS5.5, and CS5.
If you have not used the JavaScript API before, you might want to skip this section and go directly to [JavaScript API objects](./Introduction/JavaScript_API_objects.md).

#### New methods and properties in Animate 2020

The following methods and properties for existing objects are new in Animate 2020:

- [Document object](./Document_object/Document_summary.md)

  - [Document.getTaggedSwatches()](./Document_object/Document6064.md)

  - [Document.getTaggedSwatchByName()](./Document_object/Document6062.md)

  - [Document.getTaggedSwatchAtIndex()](./Document_object/Document6061.md)

  - [Document.setTaggedSwatchByName()](./Document_object/Document6068.md)

  - [Document.setTaggedSwatchAtIndex()](./Document_object/Document6067.md)

  - [Document.addTaggedSwatch()](./Document_object/Document6058.md)

  - [Document.addTaggedSwatchWithColor()](./Document_object/Document6059.md)

  - [Document.deleteTaggedSwatchByName()](./Document_object/Document6066.md)

  - [Document.deleteTaggedSwatchAtIndex()](./Document_object/Document6065.md)

  - [Document.getTaggedSwatchesPaletteList()](./Document_object/Document6063.md)

  - [Document.getIndexForTaggedSwatchesPalette()](./Document_object/Document6060.md)

  - [Document.convertToDoc()](./Document_object/Document6069.md)

  - [Document.exportCanvasPublishTemplate()](./Document_object/Document6070.md)

  - [Document.importCanvasPublishTemplate()](./Document_object/Document6071.md)

  - [Document.exportMedia()](./Document_object/Document6072.md)

  - [Document.exportSVG()](./Document_object/Document6074.md)

- [Layer object](./Layer_object/Layer_summary.md)

  - [Layer.getZDepthAtFrame()](./Layer_object/Layer11.md)

  - [Layer.setZDepthAtFrame()](./Layer_object/Layer12.md)

  - [Layer.getRigParentAtFrame()](./Layer_Parenting_Object/LayerParenting1.md)

  - [Layer.setRigParentAtFrame()](./Layer_Parenting_Object/LayerParenting2.md)

  - [Layer.getRigMatrixAtFrame()](./Layer_Parenting_Object/LayerParenting3.md)

  - [Layer.getFiltersAtFrame()](./Layer_object/Layer15.md)

  - [Layer. setFiltersAtFrame()](./Layer_object/Layer18.md)

  - [Layer.getColorTransformAtFrame()](./Layer_object/Layer14.md)

  - [Layer.setColorTransformAtFrame()](./Layer_object/Layer17.md)

  - [Layer.getBlendModeAtFrame()](./Layer_object/Layer13.md)

  - [Layer.setBlendModeAtFrame()](./Layer_object/Layer16.md)

- [Timeline object](./Timeline_object/Timeline_summary.md)

  - [Timeline.advancedLayersEnabled](./Timeline_object/Timeline52.md)

  - [Timeline.mergeLayers()](./Timeline_object/Timeline51.md)

- [Flash object (fl)](./Flash_object/Flash_summary.md)

  - [Flash.addToolInToolbar()](./Flash_object/Flash82.md)

#### New objects in Animate 2020

The following object is new in Flash CS6:

- [TextureAtlasExporter object](./TextureAtlasExporter_object/TextureAtlasExporter_summary.md)

- [Camera object](./Camera_object/Camera_Summary.md)

#### New methods and properties in Flash CC

The following methods and properties for existing objects are new in Flash Profesional CC:

- [Tween Object](./Tween_Object/Tween_summary.md)

  - Tween.getColorTransform()

  - Tween.getFilters()

  - Tween.getGeometricTransform()

  - Tween.getShape()

  - Tween.duration

  - Tween.startFrame

  - Tween.tweenType

- [CompiledClipInstance object](./CompiledClipInstance_object/CompiledClipInstance_summary.md)

  - CompiledClipInstance.backgroundColor

  - CompiledClipInstance.blendMode

  - CompiledClipInstance.brightness

  - CompiledClipInstance.cacheAsBitmap

  - CompiledClipInstance.colorAlphaAmount

  - CompiledClipInstance.colorAlphaPercent

  - CompiledClipInstance.colorBlueAmount

  - CompiledClipInstance.colorBluePercent

  - CompiledClipInstance.colorGreenAmount

  - CompiledClipInstance.colorGreenPercent

  - CompiledClipInstance.colorMode

  - CompiledClipInstance.colorRedAmount

  - CompiledClipInstance.colorRedPercent

  - CompiledClipInstance.filters

  - CompiledClipInstance.tintColor

  - CompiledClipInstance.tintPercent

  - CompiledClipInstance.useBackgroundColor

  - CompiledClipInstance.visible

- [Document object](./Document_object/Document_summary.md)

  - Document.convertSelectionToBitmap()

  - Document.distributeToKeyframes()

  - Document.exportVideo()

  - Document.getPublishDocumentData()

  - Document.getTelemetryForSwf()

  - Document.importFile() showDialog and showImporterUI properties

  - Document.setPublishDocumenData()

- [Element object](./Element_object/Element_summary.md)

  - Element.getPublishPersistentData()

  - Element.setPublishPersistentData()

- [Flash object (fl)](./Flash_object/Flash_summary.md)

  - Flash.addEventListener() prePublish, postPublish, selectionChanged, and dpiChanged events

  - Flash.getThemeColor()

  - Flash.getThemeColorParameters()

  - Flash.getThemeFontInfo()

  - Flash.setPrefBoolean()

  - Flash.toggleBreakPoint()

  - Flash.xmlPanel()

  - Flash.xmlPanelFromString()

- [Frame object](./Frame_object/Frame_summary.md)

  - Frame.convertToFrameByFrameAnimation()

  - Frame.getSoundEnvelope()

  - Frame.getSoundEnvelopeLimits()

  - Frame.setSoundEnvelope()

  - Frame.setSoundEnvelopeLimits()

  - Frame.isEmpty()

- [Item object](./Item_object/Item_summary.md)

  - Item.getPublishData()

  - Item.setPublishData()

- [Library object](./library_object/Library_summary.md)

  - Library.unusedItems

- [SwfPanel object](./swfPanel_object/SwfPanel_summary.md)

  - SwfPanel.dpiScaleFactorX

  - SwfPanel.dpiScaleFactorY

  - SwfPanel.reload()

- [SymbolInstance object](./SymbolInstance_object/SymbolInstance_summary.md)

  - SymbolInstance.brightness

  - SymbolInstance.tintColor

  - SymbolInstance.tintPercent

- [Timeline object](./Timeline_object/Timeline_summary.md)

  - Timeline.getBounds()

#### Dropped methods and properties in Flash CC

The following methods and properties for existing objects are dropped in Adobe Animate:

- ActionsPanel.getClassForObject()

- ActionsPanel.getScriptAssistMode()

- ActionsPanel.setScriptAssistMode()

- CompiledClipInstance.actionscript

- Flash.reloadEffects()

- Flash.resetPackagePaths()

- Document.activeEffect

- Document.allowScreens()

- Document.drawingLayer

- Document.importSWF()

- Document.loadCuePointXML()

- Document.packagePaths

- Document.saveAndCompact()

- Document.screenType

- Library.importEmbeddedSWF()

- SymbolInstance.actionscript

#### New objects in Flash CS6

The following object is new in Flash CS6:

- [SpriteSheetExporter object](./SpriteSheetExporter_object/SpriteSheetExporter_summary.md)

#### New methods and properties in Flash CS6

The following methods and properties for existing objects are new in Flash Pro CS6:

- [BitmapItem object](./BitmapItem_object/BitmapItem_summary.md)

  - BitmapItem.exportToFile()quality parameter

  - BitmapItem.hasValidAlphaLayer

  - BitmapItem.lastModifiedDate

- [Document object](./Document_object/Document_summary.md)

  - Document.exportInstanceToLibrary()

  - Document.exportInstanceToPNGSequence()

  - Document.getSWFPathFromProfile()

  - Document.saveAsCopy()

  - Document.swfJPEGQuality

- [Flash object (fl)](./Flash_object/Flash_summary.md)

  - Flash.spriteSheetExporter

- [Layer object](./Layer_object/Layer_summary.md)

  - Layer.animationType

- [Math object](./Math_object/Math_summary.md)

  - Math.transformPoint()

- [Shape object](./Shape_object/Shape_summary.md)

  - Shape.isFloating

- [SoundItem object](./SoundItem_object/SoundItem_summary.md)

  - SoundItem.lastModifiedDate

- [SymbolInstance object](./SymbolInstance_object/SymbolInstance_summary.md)

  - SymbolInstance.is3D

- [SymbolItem object](./SymbolItem_object/SymbolItem_summary.md)

  - SymbolItem.exportToLibrary()

  - SymbolItem.exportToPNGSequence()

  - SymbolItem.lastModifiedDate

- [Text object](./Text_object/Text_summary.md)

  - Text.filters

- [VideoItem object](./VideoItem_object/VideoItem_summary.md)

  - VideoItem.lastModifiedDate

#### New methods and properties in Flash CS5 and CS5.5

The following methods and properties for existing objects are new in Flash Pro CS5:

- [Document object](./Document_object/Document_summary.md)

  - Document.debugMovie()

  - Document.loadCuepointXML()

- [Flash object (fl)](./Flash_object/Flash_summary.md)

  - Flash.languageCode

  - Flash.toggleBreakpoint

- [Frame object](./Frame_object/Frame_summary.md)

  - Frame.convertMotionObjectTo2D()

  - Frame.convertMotionObjectTo3D()

  - Frame.getMotionObjectXML()

  - Frame.hasMotionPath()

  - Frame.isMotionObject()

  - Frame.is3DMotionObject()

  - Frame.selectMotionPath()

  - Frame.setMotionObjectDuration()

  - Frame.setMotionObjectXML()

  - Frame.tweenInstanceName

- [Timeline object](./Timeline_object/Timeline_summary.md)

  - Timeline.createMotionObject()

  - Timeline.libraryItem

  - Timeline.removeMotionObject()

  - Timeline.startPlayback

  - Timeline.stopPlayback

The following methods and properties for existing objects are new in Flash Pro CS5.5:

- [SymbolInstance object](./SymbolInstance_object/SymbolInstance_summary.md)

  - symbolInstance.bitmapRenderMode

  - symbolInstance.backgroundColor

  - symbolInstance.usesBackgroundColor

  - symbolInstance.visible

- [Timeline object](./Timeline_object/Timeline_summary.md)

  - Timeline.copyLayers()

  - Timeline.cutLayers()

  - Timeline.duplicateLayers()

  - Timeline.pasteLayers()

- [Flash object (fl)](./Flash_object/Flash_summary.md)

  - Flash.getSwfPanel()

  - Flash.installedPlayers()

  - Flash.publishCacheEnabled

  - Flash.publishCacheDiskSizeMax

  - Flash.publishCacheMemorySizeMax

  - Flash.publishCacheMemoryEntrySizeLimit

  - Flash.clearPublishCache()

- [SwfPanel object](./swfPanel_object/SwfPanel_summary.md)

  - SwfPanel.setFocus()

#### Other changes in Flash CS5 and CS5.5

The following methods and properties are updated in Flash CS5:

- Flash.openScript()

- Flash.publishDocument()

- FontItem.embedRanges

- FontItem.embeddedCharacters

- FontItem.embedVariantGlyphs

The following objects and method are no longer available in Flash CS5:

- Screen object

- ScreenOutline object

- Document.canSaveAVersion()

- Document.revertToLastVersion()

- Document.saveAVersion()

- Document.synchronizeWithHeadVersion()

- Flash.downloadLatestVersion()

- Flash.revertDocumentToLastVersion()

- Flash.saveAVersionOfDocument()

- Flash.synchronizeDocumentWithHeadVersion()

### JavaScript API objects

This section provides a summary of the objects available in the Animate JavaScript API and how to begin working with them. All standard JavaScript commands are also available when working with the JavaScript API.

The following table briefly describes each of the objects in the JavaScript API. The objects are listed in alphabetical order.

| **Object** | **Description** |
| --- | --- |
| ActionsPanel object | The ActionsPanel object represents the currently displayed Actions panel. |
| BitmapInstance object | The BitmapInstance object is a subclass of the Instance object and represents a bitmap in a frame. |
| BitmapItem object | A BitmapItem object refers to a bitmap in the library of a document. The BitmapItem object is a subclass of the Item object. |
| CompiledClipInstance object | The CompiledClipInstance object is a subclass of the Instance object. |
| compilerErrors object | The compilerErrors object represents the Compiler Errors panel. It is a property of the flash object (`fl.compilerErrors`). |
| ComponentInstance object | The ComponentInstance object is a subclass of the SymbolInstance object and represents a component in a frame. |
| ComponentsPanel object | The ComponentsPanel object, which represents the Components panel, is a property of the flash object (`fl.componentsPanel`). |
| Contour object | A Contour object represents a closed path of half edges on the boundary of a shape. |
| Document object | The Document object represents the Stage. |
| DrawingLayer object | The DrawingLayer object is accessible from JavaScript as a child of the flash object. |
| Edge object | The Edge object represents an edge of a shape on the Stage. |
| Element object | Everything that appears on the Stage is of the type Element. |
| Fill object | The Fill object contains all the properties of the Fill color setting of the Tools panel or of a selected shape. |
| Filter object | The Filter object contains all the properties for all filters. |
| Flash object | The Flash object represents the Animate application. |
| FLfile object | The FLfile object lets you write Animate extensions that can access, modify, and remove files and folders on the local file system. |
| FolderItem object | The FolderItem object is a subclass of the Item object. |
| FontItem object | The FontItem object is a subclass of the Item object. |
| Frame object | The Frame object represents frames in the layer. |
| HalfEdge object | Directed side of the edge of a Shape object. |
| Instance object | The Instance object is a subclass of the Element object. |
| Item object | The Item object is an abstract base class. |
| Layer object | The Layer object represents a layer in the timeline. |
| library object | The library object represents the Library panel. |
| Math object | The Math object is available as a read-only property of the flash object (`fl.Math`). |
| Matrix object | The Matrix object represents a transformation matrix. |
| OutputPanel object | The OutputPanel object represents the Output panel, which displays troubleshooting information such as syntax errors. It is a property of the flash object (`fl.outputPanel`). |
| Oval object | The Oval object is a shape that is drawn using the Oval tool. To determine if an item is an Oval object, use `shape.isOvalObject`. |
| Parameter object | The Parameter object type is accessed from the screen.parameters array (which corresponds to the screen Property inspector in the Animate authoring tool) or by the componentInstance.parameters array (which corresponds to the component Property inspector in the authoring tool). |
| Path object | The Path object defines a sequence of line segments (straight, curved, or both), which you typically use when creating extensible tools. |
| PresetItem object | The PresetItem object represents an item (preset or folder) in the Motion Presets panel. |
| PresetPanel object | The PresetPanel object represents the Motion Presets panel (Window > Motion Presets). It is a property of the flash object (`fl.presetPanel`). |
| Rectangle object | The Rectangle object is a shape that is drawn using the Rectangle tool. To determine if an item is a Rectangle object, use shape.isRectangleObject. |
| Screen object | The Screen object represents a single screen in a slide or form document. |
| ScreenOutline object | The ScreenOutline object represents the group of screens in a slide or form document. |
| Shape object | The Shape object is a subclass of the Element object. The Shape object provides more precise control than the drawing APIs for manipulating or creating geometry on the Stage. |
| SoundItem object | The SoundItem object is a subclass of the Item object. It represents a library item used to create a sound. |
| Stroke object | The Stroke object contains all the settings for a stroke, including the custom settings. |
| SwfPanel object | The SwfPanel object represents a Windows SWF panel. Windows SWF panels are SWF files that implement applications you can run from the Animate authoring environment. The array of SwfPanel objects is a property of the flash object (`fl.swfPanels`). |
| SymbolInstance object | The SymbolInstance object is a subclass of the Instance object and represents a symbol in a frame. |
| SymbolItem object | The SymbolItem object is a subclass of the Item object. |
| Text object | The Text object represents a single text item in a document. |
| TextAttrs object | The TextAttrs object contains all the properties of text that can be applied to a subselection. This object is a subclass of the Text object. |
| TextRun object | The TextRun object represents a run of characters that have attributes that match all of the properties in the TextAttrs object. |
| Timeline object | The Timeline object represents the Animate timeline, which can be accessed for the current document by `fl.getDocumentDOM().getTimeline()`. |
| ToolObj object | A ToolObj object represents an individual tool in the Tools panel. |
| Tools object | The Tools object is accessible from the Flash object (`fl.tools`). |
| Vertex object | The Vertex object is the part of the shape data structure that holds the coordinate data. |
| VideoItem object | The VideoItem object is a subclass of the Item object. |
| XMLUI object | The XMLUI object provides the ability to get and set properties of an XMLUI dialog box, and accept or cancel out of one. |

#### The Animate Document Object Model

The Animate Document Object Model (DOM) for the Animate JavaScript API consists of a set of top-level functions (see ["Top-Level Functions and Methods"](./Top-level_functions_and_methods/Top_summary.md)) and two top-level objects—the FLfile object and the flash object (an or fl). Each object is guaranteed to be available to a script because it always exists when the Animate authoring environment is open. For more information, see [FLfile object](./FLfile_object/FLfile_summary.md) and [Flash object (fl)](./Flash_object/Flash_summary.md).
When referring to the flash object, you can use flash or an or fl. For example, to close all open FLA files, you can use either of the following statements:

```javascript
fl.closeAll();
flash.closeAll();
an.closeAll();
animate.closeAll();
```

The flash object contains the following *child objects*:

| **Object** | **How to access** |
| --- | --- |
| ActionsPanel object | Use `fl.actionsPanel` to access the ActionsPanel object. This object corresponds to the Actions panel in the Animate authoring environment. |
| CompilerErrors object | Use `fl.compilerErrors` to access the CompilerErrors object. This object corresponds to the Compiler Errors panel in the Animate authoring environment. |
| ComponentsPanel object | Use `fl.componentsPanel` to access the ComponentsPanel object. This object corresponds to the Components panel in the Animate authoring environment. |
| Document object | Use `fl.documents` to retrieve an array of all the open documents; use `fl.documents[index]` to access a particular document; use `fl.getDocumentDOM()` to access the current document (the one with focus). |
| DrawingLayer object | Use `fl.drawingLayer` to access the DrawingLayer object. |
| Math object | Use `fl.Math` to access the Math object. |
| OutputPanel object | Use `fl.outputPanel` to access the OutputPanel object. This object corresponds to the Output panel in the Animate authoring environment. |
| PresetPanel object | Use `fl.presetPanel` to access the PresetPanel object. This object corresponds to the Motion Presets panel (Window > Motion Presets). |
| SwfPanel object | Use `fl.swfPanels` to access an array of SwfPanel objects. These objects correspond to Window SWF panels. |
| Tools object | Use `fl.tools` to access an array of Tools objects. |
| XMLUI object | Use `fl.xmlui` to access an XML User Interface (XMLUI) object. The XMLUI object provides the ability to get and set properties of an XMLUI dialog box. |

#### The Document object

An important property of the top-level flash object is the [Flash.documents](./Flash_object/Flash20.md) property. This property contains an array of Document objects, each of which represents one of the FLA files currently open in the authoring environment. The properties of each Document object represent most of the elements that a FLA file can contain. Therefore, a large portion of the DOM is composed of child objects and properties of the Document object. For more information, see [Document object](./Document_object/Document_summary.md).

To refer to the first open document, for example, use the statement ```flash.documents[0]``` or ```fl.documents[0]```. The first document is the first Animate document that was opened during the current session in the authoring environment. When the first opened document is closed, the indexes of the other open documents are decremented.

To find a particular document’s index, use ```flash.findDocumentIndex(nameOfDocument)``` or ```fl.findDocumentIndex(nameOfDocument)```. See [Flash.findDocumentIndex()](./Flash_object/Flash26.md).

To access the document that is currently focused, use the statement ```flash.getDocumentDOM()``` or ```fl.getDocumentDOM()```. See [Flash.getDocumentDOM()](./Flash_object/Flash31.md). The latter is the syntax used in most of the examples in this document.

To find a particular document in the fl.documents array, iterate through the array and test each document for its
```Document.name``` property. See [Flash.documents](./Flash_object/Flash20.md) and [Document.name](./Document_object/Document170.md).

All the objects in the DOM that aren’t listed in the previous table (see ["The Animate Document Object Model"](#the-animate-document-object-model)) are accessed from the Document object. For example, to access the library of a document, you use the ```Document.library``` property, which retrieves a library object:

```fl.getDocumentDOM().library```

To access the array of items in the library, you use the ```library.items``` property; each element in the array is an Item object:

```fl.getDocumentDOM().library.items```

To access a particular item in the library, you specify a member of the library.items array:

```fl.getDocumentDOM().library.items[0]```

In other words, the library object is a child of the Document object, and the Item object is a child of the library object. For more information, see [Document.library](./Document_object/Document98.md), [Library object](./Library_object/Library_summary.md), [Library.items](./Library_object/Library10.md) and [Item object](./Item_object/Item_summary.md).

#### Specifying the target of an action

Unless otherwise specified, methods affect the current focus or selection. For example, the following script doubles the size of the current selection because no particular object is specified:

```fl.getDocumentDOM().scaleSelection(2, 2);```

In some cases, you might want an action to specifically target the currently selected item in the Animate document. To do this, use the array that the ```Document.selection``` property contains (see [Document.selection](./Document_object/Document430.md)). The first element in the array represents the currently selected item, as shown in the following example:

```var accDescription = fl.getDocumentDOM().selection[0].description;```

The following script doubles the size of the first element on the Stage that is stored in the element array, instead of the current selection:

```javascript
var element = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
if (element) {
    element.width = element.width * 2; 
    element.height = element.height * 2;
}
```

You can also do something such as loop through all the elements on the Stage and increase the width and height by a specified amount, as shown in the following example:

```javascript
var elementArray = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements;
for (var i = 0; i < elementArray.length; i++) {
    var offset = 10;
    elementArray[i].width += offset;
    elementArray[i].height += offset;
}
```

#### Summary of the DOM structure

The following list displays the DOM structure in outline format. Numbers at the beginning of each line represent the level of an object. For example, an object preceded by "03" is a child of next highest "02" object, which, in turn, is a child of the next highest "01" object.

In some cases, an object is available by specifying a property of its parent object. For example, the ```Document.timelines``` property contains an array of Timeline objects. These properties are noted in the following outline.

Some objects are subclasses of other objects, rather than being children of other objects. An object that is a subclass of another object has methods and/or properties of its own in addition to the methods and properties of the parent object (the superclass). Subclasses share the same level in the hierarchy as their superclass. For example, the Item object is a superclass of the BitmapItem object. These relationships are illustrated in the following outline:

```text
01 Top-Level Functions and Methods 
01 FLfile object
01 Flash object (fl)
    02 CompilerErrors object
    02 ComponentsPanel object
    02 Document object (fl.documents array) 
        03 Filter object
        03 Matrix object
        03 Fill object
        03 Stroke object
        03 Library object
            04 Item object (library.items array)
            04 BitmapItem object (subclass of Item object) 
            04 folderItem object (subclass of Item object) 
            04 fontItem object (subclass of Item object) 
            04 SoundItem object (subclass of Item object) 
            04 SymbolItem object (subclass of Item object) 
            04 VideoItem object (subclass of Item object)
        03 Timeline object (document.timelines array) 
            04 Layer object (timeline.layers array)
                05 Frame object (layer.frames array)
                    06 Element object (frame.elements array) 
                        07 Matrix object (element.matrix)
                    06 Instance object (abstract class, subclass of Element object) 
                    06 BitmapInstance object (subclass of Instance object)
                    06 CompiledClipInstance object (subclass of Instance object)
                    06 ComponentInstance object (subclass of SymbolInstance object) 
                        07 Parameter object (componentInstance.parameters array)
                    06 SymbolInstance object (subclass of Instance object) 
                    06 Text object (subclass of Element object)
                        07 TextRun object (text.textRuns array)
                            08 TextAttrs object (textRun.textAttrs array) 
                    06 Shape object (subclass of Element object)
                        07 Oval object
                        07 Rectangle object
                        07 Contour object (shape.contours array) 
                            08 HalfEdge object
                                09 Vertex object
                                09 Edge object
                        07 Edge object (shape.edges array) 
                            08 HalfEdge object
                                09 Vertex object
                                09 Edge object
                        07 Vertex object(shape.vertices array)
                            08 HalfEdge object
                                09 Vertex object
                                09 Edge object
                05 Parameter object (screen.parameters array) 
    02 DrawingLayer object
        03 Path object
            04 Contour object
    02 Math object
    02 OutputPanel object
    02 PresetPanel object
        03 PresetItem object(PresetPanel.items array) 
    02 swfPanel object
    02 Tools object (fl.tools array)
        03 ToolObj object (Tools.toolObjs array) 
    02 XMLUI object
```

### Sample implementations

Several sample JSFL implementations are available for Adobe Animate. You can review and install these files to familiarize yourself with the JavaScript API. The samples are in a folder named Samples.

#### Sample Shape command

A sample JavaScript API script named Shape.jsfl is located in the Shape folder (see "Sample implementations" above). This script displays information about the contours of the shape in the Output panel.

##### To install and run the Shape script

1. Copy the Shape.jsfl file to the Configuration > Commands folder (see ["Saving JSFL files"](./Introduction/Working_with_the_JavaScript_API.md#saving-jsfl-files)).

2. In a Animate document (FLA file), select a shape object.

3. Select Commands > Shape to run the script.

#### Sample get and set filters command

A sample JavaScript API script named filtersGetSet.jsfl is located in the filtersGetSet folder (see "Sample implementations" above). This script adds filters to a selected object and displays information about the filters being added in the Output panel.

##### To install and run the filtersGetSet script

1. Copy the filtersGetSet.jsfl file to the Configuration/Commands folder (see ["Saving JSFL files"](./Introduction/Working_with_the_JavaScript_API.md#saving-jsfl-files)).

2. In a Animate document (FLA file), select a text, movie clip, or button object.

3. Select Commands > filtersGetSet to run the script.

#### Sample PolyStar tool

A sample JavaScript API script named PolyStar.jsfl is located in the PolyStar folder (see "Sample implementations" above).
The PolyStar.jsfl replicates the PolyStar tool that can be found in the Animate Tools panel. The script demonstrates how to build the PolyStar tool using the JavaScript API and includes detailed comments describing what the code is doing. Read this file to gain a better understanding of how the JavaScript API can be used. You should also read the PolyStar.xml file in the Tools directory to learn more about how to build your own tool.

#### Sample Trace Bitmap panel

A set of files named TraceBitmap.fla and TraceBitmap.swf are located in the TraceBitmapPanel folder (see "Sample implementations" above). These files illustrate how to design and build a panel to control the functions of Animate. They also show the use of the MMExecute() function to call JavaScript commands from an ActionScript script.

##### To run the TraceBitmap sample

1. If Animate is running, exit from Animate.

2. Copy the TraceBitmap.swf file to the WindowSWF folder, which is a subdirectory of the Configuration folder (see ["Saving JSFL files"](./Introduction/Working_with_the_JavaScript_API.md#saving-jsfl-files)). For example, on Windows 10, the folder is in *boot drive*\\Users\\*username*\\AppData\\Local\\Adobe\\Animate 2020\\*language*\\Configuration\\WindowSWF.

3. Start Animate.

4. Create or open a Animate document (FLA file), and import a bitmap or JPEG image into the file.

You can use the flower.jpg file provided in the TraceBitmapPanel folder or another image of your choice.

1. With the imported image selected, select Window > Other Panels > TraceBitmap.

2. Click Submit.

The image is converted into a group of shapes.

#### Sample DLL

A sample DLL implementation is located in the dllSampleComputeSum folder (see "Sample implementations" above). For more information about building DLLs, see["C-Level Extensibility"](./C-Level_Extensibility/About_extensibility.md).

### Top-level summary

#### About this section

This section describes the top-level functions and methods that are available when you use the Adobe Flash JavaScript application programming interface (JavaScript API). For information about where to store JavaScript API files, see ["Saving JSFL files"](./Introduction/Working_with_the_JavaScript_API.md#saving-jsfl-files).

#### Global methods

The following methods can be called from any JavaScript API script:

- [alert()](./Top-level_functions_and_methods/alert.md)
- [confirm()](./Top-level_functions_and_methods/confirm.md)
- [prompt()](./Top-level_functions_and_methods/prompt.md)

#### Extensible tools

The following functions are available in scripts that create extensible tools:

- [activate()](./Top-level_functions_and_methods/activate.md)
- [configureTool()](./Top-level_functions_and_methods/configureTool.md)
- [deactivate()](./Top-level_functions_and_methods/deactivate.md)
- [keyDown()](./Top-level_functions_and_methods/keyDown.md)
- [keyUp()](./Top-level_functions_and_methods/keyUp.md)
- [mouseDoubleClick()](./Top-level_functions_and_methods/mouseDoubleClick.md)
- [mouseDown()](./Top-level_functions_and_methods/mouseDown.md)
- [mouseMove()](./Top-level_functions_and_methods/mouseMove.md)
- [mouseUp()](./Top-level_functions_and_methods/mouseUp.md)
- [notifySettingsChanged()](./Top-level_functions_and_methods/notifySettingsChanged.md)
- [setCursor()](./Top-level_functions_and_methods/setCursor.md)

### ActionsPanel summary

#### Availability

Flash CS3 Professional.

#### Description

The ActionsPanel object represents the currently displayed Actions panel.

It is a property of the [Flash object](./Flash_object/Flash_summary.md) and can be accessed by [Flash.actionsPanel](./Flash_object/Flash.md).

#### Method summary

The following methods can be used with the ActionsPanel object:

| **Method** | **Description** |
| --- | --- |
| [ActionsPanel.getClassForObject() - dropped](./ActionsPanel_object/ActionsPanel.md) | Dropped in Adobe Animate. |
| [ActionsPanel.getScriptAssistMode() - dropped](./ActionsPanel_object/ActionsPanel1.md) | Dropped in Adobe Animate. |
| [ActionsPanel.getSelectedText()](./ActionsPanel_object/ActionsPanel2.md) | Returns the text that is currently selected in the Actions panel. |
| [ActionsPanel.getText()](./ActionsPanel_object/ActionsPanel3.md) | Returns the text in the Actions panel. |
| [ActionsPanel.hasSelection()](./ActionsPanel_object/ActionsPanel4.md) | Specifies whether any text is currently selected in the Actions panel. |
| [ActionsPanel.replaceSelectedText()](./ActionsPanel_object/ActionsPanel5.md) | Replaces the currently selected text with specified text. |
| [ActionsPanel.setScriptAssistMode() - dropped](./ActionsPanel_object/ActionsPanel6.md) | Dropped in Adobe Animate. |
| [ActionsPanel.setSelection()](./ActionsPanel_object/ActionsPanel7.md) | Selects a specified set of characters in the Actions panel. |
| [ActionsPanel.setText()](./ActionsPanel_object/ActionsPanel8.md) | Clears any text in the Actions panel and then adds specified text. |

### BitmapInstance summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > [Instance object](./Instance_object/Instance_summary.md) > BitmapInstance object

#### Availability

Flash MX 2004.

#### Description

The BitmapInstance object is a subclass of the [Instance object](./Instance_object/Instance_summary.md) and represents a bitmap in a frame.

#### Method summary

In addition to the [Instance object](./Instance_object/Instance_summary.md) methods, you can use the following methods with the BitmapInstance object:

| **Method** | **Description** |
| --- | --- |
| [BitmapInstance.getBits()](./BitmapInstance_object/BitmapInstance.md) | Lets you create bitmap effects by getting the bits out of the bitmap, manipulating them, and then returning them to Animate. |
| [BitmapInstance.setBits()](./BitmapInstance_object/BitmapInstance2.md) | Sets the bits of an existing bitmap element. |

#### Property summary

In addition to the [Instance object](./Instance_object/Instance_summary.md) properties, you can use the following properties with the BitmapInstance object:

| **Property** | **Description** |
| --- | --- |
| [BitmapInstance.hPixels](./BitmapInstance_object/BitmapInstance1.md) | Read-only; an integer that represents the width of the bitmap, in pixels. |
| [BitmapInstance.vPixels](./BitmapInstance_object/BitmapInstance3.md) | Read-only; an integer that represents the height of the bitmap, in pixels. |

### BitmapItem summary

**Inheritance** [Item object](./Item_object/Item_summary.md) > BitmapItem object

#### Availability

Flash MX 2004.

#### Description

A BitmapItem object refers to a bitmap in the library of a document. The BitmapItem object is a subclass of the [Item object](./Item_object/Item_summary.md).

#### Property summary

In addition to the [Item object](./Item_object/Item_summary.md) properties, the BitmapItem object has following properties:

| **Property** | **Description** |
| --- | --- |
| [BitmapItem.allowSmoothing](./BitmapItem_object/BitmapItem.md) | A Boolean value that specifies whether to allow smoothing of a bitmap. |
| [BitmapItem.compressionType](./BitmapItem_object/BitmapItem1.md) | A string that determines the type of image compression applied to the bitmap. |
| [BitmapItem.fileLastModifiedDate](./BitmapItem_object/BitmapItem3.md) | The number of seconds that have elapsed between January 1, 1970 and the modification date of the original file. |
| [BitmapItem.hasValidAlphaLayer](./BitmapItem_object/BitmapItem4.md) | A Boolean value indicating whether the bitmap has an alpha channel. |
| [BitmapItem.hPixels](./BitmapItem_object/BitmapItem5.md) | Specifies the width of the bitmap, in pixels. |
| [BitmapItem.lastModifiedDate](./BitmapItem_object/BitmapItem6.md) | The modification date of the bitmap item in the Library. |
| [BitmapItem.originalCompressionType](./BitmapItem_object/BitmapItem7.md) | Specifies whether the item was imported as an jpeg file. |
| [BitmapItem.sourceFileExists](./BitmapItem_object/BitmapItem9.md) | Specifies whether the file that was imported to the Library still exists in the location from where it was imported. |
| [BitmapItem.sourceFileIsCurrent](./BitmapItem_object/BitmapItem10.md) | Specifies whether the file modification date of the Library item is the same as the modification date on disk of the file that was imported. |
| [BitmapItem.sourceFilePath](./BitmapItem_object/BitmapItem11.md) | The path and name of the file that was imported into the Library. |
| [BitmapItem.useDeblocking](./BitmapItem_object/BitmapItem12.md) | Specifies whether deblocking is enabled. |
| [BitmapItem.useImportedJPEGQuality](./BitmapItem_object/BitmapItem13.md) | A Boolean value that specifies whether to use the default imported JPEG quality. |
| [BitmapItem.vPixels](./BitmapItem_object/BitmapItem14.md) | Specifies the height of the bitmap, in pixels. |

#### Method summary

In addition to the [Item object](./Item_object/Item_summary.md) properties, the BitmapItem object has following methods:

| **Method** | **Description** |
| --- | --- |
| [BitmapItem.exportToFile()](./BitmapItem_object/BitmapItem2.md) | Exports the specified item to a PNG or JPG file. |

### Camera summary

#### Availability

Adobe Animate 2019

#### Description

The Camera object provides animators with the ability to control and manipulate the camera's properties at any frame in the timeline. This allows for dynamic storytelling and enhanced visual effects, similar to techniques used in motion films.

Key features include:

1. Panning to follow the subject within the frame.
2. Zooming in on an object of interest to create a dramatic effect.
3. Zooming out to reveal a broader perspective or context.
4. Adjusting the focal point to shift the viewer's attention between subjects.
5. Rotating the camera to achieve unique angles or perspectives.
6. Applying color tints or filters to enhance the mood or atmosphere of a scene.

#### Method summary

The following methods can be used with the Camera object:

| **Method** | **Description** |
| --- | --- |
| [Camera.getZDepth()](./Camera_object/Camera.md) | Return current Z Depth value of camera. |
| [Camera.getZoom()](./Camera_object/Camera1.md) | Return the current zoom value of camera. Default is 100%. |
| [Camera.getRotation()](./Camera_object/Camera2.md) | Return current angle of camera. |
| [Camera.getPosition()](./Camera_object/Camera3.md) | Return object with x,y, and z properties that specify current location of camera. |
| [Camera.getTint()](./Camera_object/Camera4.md) | Return object with two properties: ‘percent’ & ‘color’. |
| [Camera.getColorFilter()](./Camera_object/Camera5.md) | Get camera color filter. |
| [Camera.setZDepth()](./Camera_object/Camera6.md) | Set camera's Z Depth value. |
| [Camera.setZoom()](./Camera_object/Camera7.md) | Zoom camera to absolute value given by input parameter in percentage. |
| [Camera.setRotation()](./Camera_object/Camera8.md) | Rotate camera by absolute angle given as input parameters. |
| [Camera.setTint()](./Camera_object/Camera9.md) | Set camera tint using tint color(RGB) & tint percent (percentage of tint). |
| [Camera.setColorFilter()](./Camera_object/Camera10.md) | Set camera color filter using decomposed values of (Brightness,Contrast,saturation,hue). |
| [Camera.resetZoom()](./Camera_object/Camera11.md) | Reset camera zoom to it's default zoom value i.e 100%. |
| [Camera.resetRotation()](./Camera_object/Camera12.md) | Reset camera angle to zero. |
| [Camera.resetPosition()](./Camera_object/Camera13.md) | Reset camera position to the original position i.e (0,0,0). |
| [Camera.resetTint()](./Camera_object/Camera14.md) | Remove camera tint. |
| [Camera.resetColorFilter()](./Camera_object/Camera15.md) | Remove color filter. |
| [Camera.reset()](./Camera_object/Camera16.md) | Reset all camera properties to default. |

#### Property summary

The following properties can be used with the Camera object:

| **Property** | **Description** |
| --- | --- |
| [Camera.cameraEnabled](./Camera_object/Camera17.md) | Enable/Disable camera |
| [Camera.colorFilterEnabled](./Camera_object/Camera19.md) | Enable/Disable camera's color Filter |
| [Camera.tintEnabled](./Camera_object/Camera18.md) | Enable/Disable tint |

### CompiledClipInstance summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > [Instance object](./Instance_object/Instance_summary.md) > CompiledClipInstance object

#### Availability

Flash MX 2004.

#### Description

The CompiledClipInstance object is a subclass of the [Instance object](./Instance_object/Instance_summary.md). It is essentially an instance of a movie clip that has been converted to a compiled clip library item.

#### Property summary

In addition to the properties of the [Instance object](./Instance_object/Instance_summary.md), the CompiledClipInstance object has the following properties:

| **Property** | **Description** |
| --- | --- |
| [CompiledClipInstance.accName](./CompiledClipInstance_object/CompiledClipInstance.md) | A string that is equivalent to the Name field in the Accessibility panel. |
| [CompiledClipInstance.actionScript - dropped](./CompiledClipInstance_object/CompiledClipInstance1.md) | Dropped in Adobe Animate. |
| [CompiledClipInstance.backgroundColor](./CompiledClipInstance_object/CompiledClipInstance2.md) | A string that specifies the matte color when Opaque is selected. |
| [CompiledClipInstance.description](./CompiledClipInstance_object/CompiledClipInstance15.md) | A string that is equivalent to the Description field in the Accessibility panel. |
| [CompiledClipInstance.blendMode](./CompiledClipInstance_object/CompiledClipInstance3.md) | A string that specifies the blend mode. |
| [CompiledClipInstance.brightness](./CompiledClipInstance_object/CompiledClipInstance4.md) | An int that contains the value set in the Color Effect Property Inspector for brightness. |
| [CompiledClipInstance.cacheAsBitmap](./CompiledClipInstance_object/CompiledClipInstance5.md) | A boolean that indicates whether to cache bitmaps. |
| [CompiledClipInstance.colorAlphaAmount](./CompiledClipInstance_object/CompiledClipInstance6.md) | An int that reduces or increases the tint and alpha values by a constant amount. |
| [CompiledClipInstance.colorAlphaPercent](./CompiledClipInstance_object/CompiledClipInstance7.md) | An int that reduces the tint and alpha values by a specified percentage. |
| [CompiledClipInstance.colorBlueAmount](./CompiledClipInstance_object/CompiledClipInstance8.md) | An int that reduces or increases the blue tint value by a constant amount. |
| [CompiledClipInstance.colorBluePercent](./CompiledClipInstance_object/CompiledClipInstance9.md) | An int that reduces the blue tint value by a specified percentage. |
| [CompiledClipInstance.colorGreenAmount](./CompiledClipInstance_object/CompiledClipInstance10.md) | An int that reduces or increases the green tint value by a constant amount. |
| [CompiledClipInstance.colorGreenPercent](./CompiledClipInstance_object/CompiledClipInstance11.md) | An int that reduces the green tint value by a specified percentage. |
| [CompiledClipInstance.colorMode](./CompiledClipInstance_object/CompiledClipInstance12.md) | A string that specifies the color mode, as identified in the Symbol Properties dialog. |
| [CompiledClipInstance.colorRedAmount](./CompiledClipInstance_object/CompiledClipInstance13.md) | An int that reduces or increases the red tint value by a constant amount. |
| [CompiledClipInstance.colorRedPercent](./CompiledClipInstance_object/CompiledClipInstance14.md) | An int that reduces the green tint value by a specified percentage. |
| [CompiledClipInstance.description](./CompiledClipInstance_object/CompiledClipInstance15.md) | A string that is equivalent to the Description field in the Accessibility panel. |
| [CompiledClipInstance.filters](./CompiledClipInstance_object/CompiledClipInstance16.md) | An array of Filter objects. |
| [CompiledClipInstance.forceSimple](./CompiledClipInstance_object/CompiledClipInstance17.md) | A Boolean value that enables and disables the children of the object to be accessible. |
| [CompiledClipInstance.shortcut](./CompiledClipInstance_object/CompiledClipInstance18.md) | A string that is equivalent to the Shortcut field in the Accessibility panel. |
| [CompiledClipInstance.silent](./CompiledClipInstance_object/CompiledClipInstance19.md) | A Boolean value that enables or disables the accessibility of the object; equivalent to the inverse logic of the Make Object Accessible setting in the Accessibility panel. |
| [CompiledClipInstance.tabIndex](./CompiledClipInstance_object/CompiledClipInstance20.md) | An integer that is equivalent to the Tab Index field in the Accessibility panel. |
| [CompiledClipInstance.tintColor](./CompiledClipInstance_object/CompiledClipInstance21.md) | Aa Color object that, when the Color Effect Property Inspector is using style tint, returns the color applied to the tint. |
| [CompiledClipInstance.tintPercent](./CompiledClipInstance_object/CompiledClipInstance22.md) | A string that, when the Color Effect Property Inspector is using style tint, returns the tint percentage. |
| [CompiledClipInstance.useBackgroundColor](./CompiledClipInstance_object/CompiledClipInstance23.md) | A boolean that sets the background color. |
| [CompiledClipInstance.visible](./CompiledClipInstance_object/CompiledClipInstance24.md) | A boolean that sets visibility. |

### CompilerErrors summary

#### Availability

Flash CS3 Professional.

#### Description

The CompilerErrors object represents the Compiler Errors panel.

It is a property of the [Flash object (fl)](./Flash_object/Flash_summary.md) and can be accessed by [Flash.compilerErrors](./Flash_object/Flash10.md).

#### Method summary

The following methods can be used with the CompilerErrors object:

| **Method** | **Description** |
| --- | --- |
| [CompilerErrors.clear()](./CompilerErrors_object/CompilerErrors.md) | Clears the contents of the Compiler Errors panel. |
| [CompilerErrors.save()](./CompilerErrors_object/CompilerErrors1.md) | Saves the contents of the Compiler Errors panel to a local text file. |

### ComponentInstance summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > [Instance object](./Instance_object/Instance_summary.md) > [SymbolInstance object](./SymbolInstance_object/SymbolInstance_summary.md) > ComponentInstance object

#### Availability

Flash MX 2004.

#### Description

The ComponentInstance object is a subclass of the [SymbolInstance object](./SymbolInstance_object/SymbolInstance_summary.md) and represents a component in a frame.

#### Property summary

In addition to all the properties of the [SymbolInstance object](./SymbolInstance_object/SymbolInstance_summary.md), the ComponentInstance object has the following property:

| **Property** | **Description** |
| --- | --- |
| [ComponentInstance.parameters](./ComponentInstance_object/ComponentInstance.md) | Read-only; an array of ActionScript 2.0 properties that are accessible from the component Property inspector. |

### ComponentsPanel summary

#### Availability

Flash MX 2004.

#### Description

The ComponentsPanel object represents the Components panel.

It is a property of the [Flash object (fl)](./Flash_object/Flash_summary.md) and can be accessed by [Flash.componentsPanel](./Flash_object/Flash11.md).

#### Method summary

You can use the following methods with the ComponentsPanel object:

| **Method** | **Description** |
| --- | --- |
| [ComponentsPanel.addItemToDocument()](./ComponentsPanel_object/ComponentsPanel.md) | Adds the specified component to the document at the specified position. |
| [ComponentsPanel.reload()](./ComponentsPanel_object/ComponentsPanel1.md) | Refreshes the Components panel's list of components. |

### Contour summary

#### Availability

Flash MX 2004.

#### Description

A Contour object represents a closed path of half edges on the boundary of a shape.

#### Method summary

You can use the following method with the Contour object:

| **Method** | **Description** |
| --- | --- |
| [Contour.getHalfEdge()](./Contour_object/Contour1.md) | Returns a [HalfEdge object](./HalfEdge_object/HalfEdge_summary.md) on the contour of the selection. |

#### Property summary

You can use the following properties with the Contour object:

| **Property** | **Description** |
| --- | --- |
| [Contour.fill](./Contour_object/Contour.md) | A [Fill object](./Fill_object/Fill_summary.md). |
| [Contour.interior](./Contour_object/Contour2.md) | Read-only; the value is true if the contour encloses an area; false otherwise. |
| [Contour.orientation](./Contour_object/Contour3.md) | Read-only; an integer indicating the orientation of the contour. |

### Document summary

#### Availability

Flash MX 2004.

#### Description

The Document object represents the Stage. That is, only FLA files are considered documents. To return the Document object for the current document, use [Flash.getDocumentDOM()](./Flash_object/Flash31.md)

#### Method summary

You can use the following methods with the Document object:

| **Method** | **Description** |
| --- | --- |
| [Document.addDataToDocument()](./Document_object/Document1.md) | Stores specified data with a document. |
| [Document.addDataToSelection()](./Document_object/Document2.md) | Stores specified data with the selected objects. |
| [Document.addFilter()](./Document_object/Document3.md) | Applies a filter to the selected objects. |
| [Document.addItem()](./Document_object/Document4.md) | Adds an item from any open document or library to the specified Document object. |
| [Document.addNewLine()](./Document_object/Document5.md) | Adds a new path between two points. |
| [Document.addNewOval()](./Document_object/Document6.md) | Adds a new Oval object in the specified bounding rectangle. |
| [Document.addNewPrimitiveOval()](./Document_object/Document7.md) | Adds a new oval primitive fitting into the specified bounds. |
| [Document.addNewPrimitiveRectangle()](./Document_object/Document8.md) | Adds a new rectangle primitive fitting into the specified bounds. |
| [Document.addNewPublishProfile()](./Document_object/Document9.md) | Adds a new publish profile and makes it the current one. |
| [Document.addNewRectangle()](./Document_object/Document10.md) | Adds a new rectangle or rounded rectangle, fitting it into the specified bounds. |
| [Document.addNewScene()](./Document_object/Document11.md) | Adds a new scene ([Timeline object](./Timeline_object/Timeline_summary.md)) as the next scene after the currently selected scene and makes the new scene the currently selected scene. |
| [Document.addNewText()](./Document_object/Document12.md) | Inserts a new empty text field. |
| [Document.addTaggedSwatch()](./Document_object/Document6058.md) | To add new tagged swatch. |
| [Document.addTaggedSwatchWithColor()](./Document_object/Document6059.md) | To add new tagged swatch with the given color string. |
| [Document.align()](./Document_object/Document13.md) | Aligns the selection. |
| [Document.allowScreens() - dropped](./Document_object/Document14.md) | Dropped in Adobe Animate. |
| [Document.arrange()](./Document_object/Document15.md) | Arranges the selection on the Stage. |
| [Document.breakApart()](./Document_object/Document24.md) | Performs a break-apart operation on the current selection. |
| [Document.canEditSymbol()](./Document_object/Document25.md) | Indicates whether the Edit Symbols menu and functionality are enabled. |
| [Document.canRevert()](./Document_object/Document26.md) | Determines whether you can use the [Document.revert()](./Document_object/Document340.md), [Flash.revertDocument()](./Flash_object/Flash61.md) |
| [Document.canTestMovie()](./Document_object/Document27.md) | Determines whether you can use the [Document.testMovie()](./Document_object/Document5948.md) |
| [Document.canTestScene()](./Document_object/Document28.md) | Determines whether you can use the [Document.testScene()](./Document_object/Document5979.md) |
| [Document.changeFilterOrder()](./Document_object/Document29.md) | Changes the index of the filter in the Filters list. |
| [Document.clipCopy()](./Document_object/Document30.md) | Copies the current selection from the document to the Clipboard. |
| [Document.clipCut()](./Document_object/Document31.md) | Cuts the current selection from the document and writes it to the Clipboard. |
| [Document.clipPaste()](./Document_object/Document32.md) | Pastes the contents of the Clipboard into the document. |
| [Document.close()](./Document_object/Document33.md) | Closes the specified document. |
| [Document.convertLinesToFills()](./Document_object/Document34.md) | Converts lines to fills on the selected objects. |
| [Document.convertSelectionToBitmap()](./Document_object/Document35.md) | Converts selected objects in the current frame to a bitmap and inserts the bitmap into the library. |
| [Document.convertToDoc()](./Document_object/Document6069.md) | Converts a document to expected document type. |
| [Document.convertToSymbol()](./Document_object/Document36.md) | Converts the selected Stage items to a new symbol. |
| [Document.crop()](./Document_object/Document37.md) | Uses the top selected drawing object to crop all selected drawing objects underneath it. |
| [Document.debugMovie()](./Document_object/Document40.md) | Initiates a debug session with the document. |
| [Document.deleteEnvelope()](./Document_object/Document41.md) | Deletes the envelope (bounding box that contains one or more objects) from the selected object. |
| [Document.deletePublishProfile()](./Document_object/Document42.md) | Deletes the currently active profile, if there is more than one. |
| [Document.deleteScene()](./Document_object/Document43.md) | Deletes the current scene ([Timeline object](./Timeline_object/Timeline_summary.md)), and if the deleted scene was not the last one, sets the next scene as the current Timeline object. |
| [Document.deleteSelection()](./Document_object/Document44.md) | Deletes the current selection on the Stage. |
| [Document.deleteTaggedSwatchAtIndex()](./Document_object/Document6065.md) | Deletes tagged swatch with given index. |
| [Document.deleteTaggedSwatchByName()](./Document_object/Document6066.md) | Deletes tagged swatch with given name. |
| [Document.disableAllFilters()](./Document_object/Document46.md) | Disables all filters on the selected objects. |
| [Document.disableFilter()](./Document_object/Document47.md) | Disables the specified filter in the Filters list. |
| [Document.disableOtherFilters()](./Document_object/Document48.md) | Disables all filters except the one at the specified position in the Filters list. |
| [Document.distribute()](./Document_object/Document49.md) | Distributes the selection. |
| [Document.distributeToKeyframes()](./Document_object/Document50.md) | Performs a distribute-to-keyframes operation on the current selection; equivalent to selecting Distriute to Keyframes. |
| [Document.distributeToLayers()](./Document_object/Document51.md) | Performs a distribute-to-layers operation on the current selection; equivalent to selecting Distribute to Layers. |
| [Document.documentHasData()](./Document_object/Document53.md) | Checks the document for persistent data with the specified name. |
| [Document.duplicatePublishProfile()](./Document_object/Document54.md) | Duplicates the currently active profile and gives the duplicate version focus. |
| [Document.duplicateScene()](./Document_object/Document55.md) | Makes a copy of the currently selected scene, giving the new scene a unique name and making it the current scene. |
| [Document.duplicateSelection()](./Document_object/Document56.md) | Duplicates the selection on the Stage. |
| [Document.editScene()](./Document_object/Document57.md) | Makes the specified scene the currently selected scene for editing. |
| [Document.enableAllFilters()](./Document_object/Document58.md) | Enables all the filters on the Filters list for the selected objects. |
| [Document.enableFilter()](./Document_object/Document59.md) | Enables the specified filter for the selected objects. |
| [Document.enterEditMode()](./Document_object/Document60.md) | Switches the authoring tool into the editing mode specified by the parameter. |
| [Document.exitEditMode()](./Document_object/Document61.md) | Exits from symbol-editing mode and returns focus to the next level up from the editing mode. |
| [Document.exportCanvasPublishTemplate()](./Document_object/Document6070.md) | Exports the HTML5 Canvas Publishing Template for given document,at the specified location. |
| [Document.exportInstanceToLibrary()](./Document_object/Document62.md) | Export a selected movie clip, graphic, or button instance on the Stage to a new bitmap in the Library. |
| [Document.exportInstanceToPNGSequence()](./Document_object/Document63.md) | Export a selected movie clip, graphic, or button instance on the Stage to a series of PNG files on disk. |
| [Document.exportMedia()](./Document_object/Document6072.md) | Generates the required media from the document. |
| [Document.exportPNG()](./Document_object/Document64.md) | Exports the document as one or more PNG files. |
| [Document.exportPublishProfile()](./Document_object/Document65.md) | Exports the currently active profile to an XML file. |
| [Document.exportPublishProfileString()](./Document_object/Document66.md) | Returns a string that specifies, in XML format, the specified profile. |
| [Document.exportSVG()](./Document_object/Document6074.md) | Exports the document in SVG format. |
| [Document.exportSWF()](./Document_object/Document67.md) | Exports the document in the Flash SWF format. |
| [Document.exportVideo()](./Document_object/Document68.md) | Exports a video from the document and optionally sends it to Adobe Media Encoder to convert the video. |
| [Document.getAlignToDocument()](./Document_object/Document72.md) | Identical to retrieving the value of the To Stage button in the Align panel. |
| [Document.getBlendMode()](./Document_object/Document73.md) | Returns a string that specifies the blending mode for the selected objects. |
| [Document.getCustomFill()](./Document_object/Document74.md) | Retrieves the fill object of the selected shape, or the Tools panel and Property inspector if specified. |
| [Document.getCustomStroke()](./Document_object/Document75.md) | Returns the stroke object of the selected shape, or the Tools panel and Property inspector if specified. |
| [Document.getDataFromDocument()](./Document_object/Document76.md) | Retrieves the value of the specified data. |
| [Document.getElementProperty()](./Document_object/Document77.md) | Gets the specified Element property for the current selection. |
| [Document.getElementTextAttr()](./Document_object/Document78.md) | Gets a specified TextAttrs property of the selected Text objects. |
| [Document.getFilters()](./Document_object/Document79.md) | Returns an array that contains the list of filters applied to the currently selected objects. |
| [Document.getIndexForTaggedSwatchesPalette()](./Document_object/Document6060.md) | To get the Tagged Swatches palette index for given palette name. |
| [Document.getMetadata()](./Document_object/Document80.md) | Returns a string containing the XML metadata associated with the document. |
| [Document.getMobileSettings()](./Document_object/Document81.md) | Returns the string passed to document.setMobileSettings(). |
| [Document.getPlayerVersion()](./Document_object/Document82.md) | Returns a string that represents the targeted player version for the specified document. |
| [Document.getPublishDocumentData()](./Document_object/Document83.md) | Indicates whether publishing of the specified persistent data is enabled for the specified format in the document. |
| [Document.getSelectionRect()](./Document_object/Document84.md) | Gets the bounding rectangle of the current selection. |
| [Document.getSWFPathFromProfile()](./Document_object/Document85.md) | Gets the full path to the SWF file that is set in the current Publish profile. |
| [Document.getTaggedSwatchAtIndex()](./Document_object/Document6061.md) | Returns the Tagged Swatch with the given index. |
| [Document.getTaggedSwatchByName()](./Document_object/Document6062.md) | Returns the Tagged Swatch with the given name. |
| [Document.getTaggedSwatches()](./Document_object/Document6064.md) | Returns array of tagged swatch objects. |
| [Document.getTaggedSwatchesPaletteList()](./Document_object/Document6063.md) | To get the array of Tagged Swatches palette name list. |
| [Document.getTelemetryForSwf()](./Document_object/Document86.md) | Indicates whether the "Enable detailed telemetry" checkbox is selected in the Publish Settings dialog. |
| [Document.getTextString()](./Document_object/Document87.md) | Gets the currently selected text. |
| [Document.getTimeline()](./Document_object/Document88.md) | Retrieves the current [Timeline object](./Timeline_object/Timeline_summary.md) in the document. |
| [Document.getTransformationPoint()](./Document_object/Document89.md) | Gets the location of the transformation point of the current selection. |
| [Document.group()](./Document_object/Document90.md) | Converts the current selection to a group. |
| [Document.importCanvasPublishTemplate()](./Document_object/Document6071.md) | Imports and sets the HTML5 Canvas Publishing Template for given document, from the specified location pathURI. |
| [Document.importFile()](./Document_object/Document93.md) | Imports a file into the document. |
| [Document.importPublishProfile()](./Document_object/Document94.md) | Imports a profile from a file. |
| [Document.importPublishProfileString()](./Document_object/Document95.md) | Imports an XML string that represents a publish profile and sets it as the current profile. |
| [Document.importSWF() - dropped](./Document_object/Document96.md) | Dropped in Adobe Animate. |
| [Document.intersect()](./Document_object/Document97.md) | Creates an intersection drawing object from all selected drawing objects. |
| [Document.loadCuepointXML() - dropped](./Document_object/Document110.md) | Dropped in Adobe Animate. |
| [Document.match()](./Document_object/Document120.md) | Makes the size of the selected objects the same. |
| [Document.mouseClick()](./Document_object/Document130.md) | Performs a mouse click from the Selection tool. |
| [Document.mouseDblClk()](./Document_object/Document140.md) | Performs a double mouse click from the Selection tool. |
| [Document.moveSelectedBezierPointsBy()](./Document_object/Document150.md) | If the selection contains at least one path with at least one Bézier point selected, this method moves all selected Bézier points on all selected paths by the specified amount. |
| [Document.moveSelectionBy()](./Document_object/Document160.md) | Moves selected objects by a specified distance. |
| [Document.optimizeCurves()](./Document_object/Document180.md) | Optimizes smoothing for the current selection, allowing multiple passes, if specified, for optimal smoothing; equivalent to selecting Modify >Shape >Optimize. |
| [Document.publish()](./Document_object/Document210.md) | Publishes the document according to the active publish settings (File >Publish Settings); equivalent to selecting File >Publish. |
| [Document.punch()](./Document_object/Document230.md) | Uses the top selected drawing object to punch through all selected drawing objects underneath it. |
| [Document.removeAllFilters()](./Document_object/Document240.md) | Removes all filters from the selected objects. |
| [Document.removeDataFromDocument()](./Document_object/Document250.md) | Removes persistent data with the specified name that has been attached to the document. |
| [Document.removeDataFromSelection()](./Document_object/Document260.md) | Removes persistent data with the specified name that has been attached to the selection. |
| [Document.removeFilter()](./Document_object/Document270.md) | Removes the specified filter from the Filters list of the selected objects. |
| [Document.renamePublishProfile()](./Document_object/Document280.md) | Renames the current profile. |
| [Document.renameScene()](./Document_object/Document290.md) | Renames the currently selected scene in the Scenes panel. |
| [Document.reorderScene()](./Document_object/Document300.md) | Moves the specified scene before another specified scene. |
| [Document.resetOvalObject()](./Document_object/Document310.md) | Sets all values in the Property inspector to default Oval object settings. |
| [Document.resetRectangleObject()](./Document_object/Document320.md) | Sets all values in the Property inspector to default Rectangle object settings. |
| [Document.resetTransformation()](./Document_object/Document330.md) | Resets the transformation matrix; equivalent to selecting Modify >Transform >Remove Transform. |
| [Document.revert()](./Document_object/Document340.md) | Reverts the specified document to its previously saved version; equivalent to selecting File >Revert. |
| [Document.rotate3DSelection()](./Document_object/Document350.md) | Applies a 3D rotation to the selection. |
| [Document.rotateSelection()](./Document_object/Document360.md) | Rotates the selection by a specified number of degrees. |
| [Document.save()](./Document_object/Document370.md) | Saves the document in its default location; equivalent to selecting File >Save. |
| [Document.saveAsCopy()](./Document_object/Document390.md) | Saves a copy of the document to a specified location. |
| [Document.saveAndCompact() - dropped](./Document_object/Document380.md) | Dropped in Adobe Animate. |
| [Document.scaleSelection()](./Document_object/Document400.md) | Scales the selection by a specified amount; equivalent to using the Free Transform tool to scale the object. |
| [Document.selectAll()](./Document_object/Document420.md) | Selects all items on the Stage; equivalent to pressing Control+A (Windows) or Command+A (Macintosh) or selecting Edit >Select All. |
| [Document.selectNone()](./Document_object/Document440.md) | Deselects any selected items. |
| [Document.setAlignToDocument()](./Document_object/Document450.md) | Sets the preferences for [Document.align()](./Document_object/Document13.md), [Document.distribute()](./Document_object/Document49.md), [Document.match()](./Document_object/Document120.md), and [Document.space()](./Document_object/Document67.md) to act on the document; equivalent to enabling the To Stage button in the Align panel. |
| [Document.setBlendMode()](./Document_object/Document460.md) | Sets the blending mode for the selected objects. |
| [Document.setCustomFill()](./Document_object/Document470.md) | Sets the fill settings for the Tools panel, Property inspector, and any selected shapes. |
| [Document.setCustomStroke()](./Document_object/Document480.md) | Sets the stroke settings for the Tools panel, Property inspector, and any selected shapes. |
| [Document.setElementProperty()](./Document_object/Document490.md) | Sets the specified Element property on selected objects in the document. |
| [Document.setElementTextAttr()](./Document_object/Document500.md) | Sets the specified TextAttrs property of the selected text items to the specified value. |
| [Document.setFillColor()](./Document_object/Document510.md) | Changes the selection and the tools panel to the specified color. |
| [Document.setFilterProperty()](./Document_object/Document520.md) | Sets a specified filter property for the currently selected objects. |
| [Document.setFilters()](./Document_object/Document530.md) | Applies filters to the selected objects. |
| [Document.setInstanceAlpha()](./Document_object/Document540.md) | Sets the opacity of the instance. |
| [Document.setInstanceBrightness()](./Document_object/Document550.md) | Sets the brightness for the instance. |
| [Document.setInstanceTint()](./Document_object/Document560.md) | Sets the tint for the instance. |
| [Document.setMetadata()](./Document_object/Document570.md) | Sets the XML metadata for the specified document, overwriting any existing metadata. |
| [Document.setMobileSettings()](./Document_object/Document580.md) | Sets the value of an XML settings string in a mobile FLA file. |
| [Document.setOvalObjectProperty()](./Document_object/Document590.md) | Specifies a value for a specified property of primitive Oval objects. |
| [Document.setPlayerVersion()](./Document_object/Document600.md) | Sets the version of the Flash Player targeted by the specified document. |
| [Document.setRectangleObjectProperty()](./Document_object/Document9643.md) | Specifies a value for a specified property of primitive Rectangle objects. |
| [Document.setSelectionBounds()](./Document_object/Document9658.md) | Moves and resizes the selection in a single operation. |
| [Document.setSelectionRect()](./Document_object/Document9689.md) | Draws a rectangular selection marquee relative to the Stage, using the specified coordinates. |
| [Document.setStageVanishingPoint()](./Document_object/Document9705.md) | Specifies the vanishing point for viewing 3D objects. |
| [Document.setStageViewAngle()](./Document_object/Document9721.md) | Specifies the perspective angle for viewing 3D objects. |
| [Document.setStroke()](./Document_object/Document9752.md) | Sets the color, width, and style of the selected strokes. |
| [Document.setStrokeColor()](./Document_object/Document9768.md) | Changes the stroke color of the selection to the specified color. |
| [Document.setStrokeSize()](./Document_object/Document9799.md) | Changes the stroke size of the selection to the specified size. |
| [Document.setStrokeStyle()](./Document_object/Document9814.md) | Changes the stroke style of the selection to the specified style. |
| [Document.setTaggedSwatchAtIndex()](./Document_object/Document6067.md) | Replace the tagged swatch with the given index to the given new swatch object. |
| [Document.setTaggedSwatchByName()](./Document_object/Document6068.md) | Replace the tagged swatch with the given name to the given new swatch object |
| [Document.setTextRectangle()](./Document_object/Document9846.md) | Changes the bounding rectangle for the selected text item to the specified size. |
| [Document.setTextSelection()](./Document_object/Document9861.md) | Sets the text selection of the currently selected text field to the values specified by the ***startIndex*** and ***endIndex*** values. |
| [Document.setTextString()](./Document_object/Document9908.md) | Inserts a string of text. |
| [Document.setTransformationPoint()](./Document_object/Document9939.md) | Moves the transformation point of the current selection. |
| [Document.skewSelection()](./Document_object/Document5.md) | Skews the selection by a specified amount. |
| [Document.smoothSelection()](./Document_object/Document21.md) | Smooths the curve of each selected fill outline or curved line. |
| [Document.space()](./Document_object/Document67.md) | Spaces the objects in the selection evenly. |
| [Document.straightenSelection()](./Document_object/Document83.md) | Straightens the currently selected strokes; equivalent to using the Straighten button in the Tools panel. |
| [Document.swapElement()](./Document_object/Document114.md) | Swaps the current selection with the specified one. |
| [Document.swapStrokeAndFill()](./Document_object/Document5901.md) | Swaps the Stroke and Fill colors. |
| [Document.testMovie()](./Document_object/Document5948.md) | Executes a Test Movie operation on the document. |
| [Document.testScene()](./Document_object/Document5979.md) | Executes a Test Scene operation on the current scene of the document. |
| [Document.traceBitmap()](./Document_object/Document6010.md) | Performs a trace bitmap on the current selection; equivalent to selecting Modify>Bitmap>Trace Bitmap. |
| [Document.transformSelection()](./Document_object/Document6073.md) | Performs a general transformation on the current selection by applying the matrix specified in the arguments. |
| [Document.translate3DCenter()](./Document_object/Document6042.md) | Sets the XYZ position around which the selection is translated or rotated. |
| [Document.translate3DSelection()](./Document_object/Document6057.md) | Applies a 3D translation to the selection. |
| [Document.unGroup()](./Document_object/Document6104.md) | Ungroups the current selection. |
| [Document.union()](./Document_object/Document6120.md) | Combines all selected shapes into a drawing object. |
| [Document.unlockAllElements()](./Document_object/Document6135.md) | Unlocks all locked elements on the currently selected frame. |
| [Document.xmlPanel()](./Document_object/Document6198.md) | Posts a XMLUI dialog box. |

#### Property summary

You can use the following properties with the Document object.

| **Property** | **Description** |
| --- | --- |
| [Document.accName](./Document_object/Document.md) | A string that is equivalent to the Name field in the Accessibility panel. |
| [Document.as3AutoDeclare](./Document_object/Document16.md) | A Boolean value that describes whether the instances placed on the Stage are automatically added to user-defined timeline classes. |
| [Document.as3Dialect](./Document_object/Document17.md) | A string that describes the ActionScript 3.0 "dialect" being used in the specified document. |
| [Document.as3ExportFrame](./Document_object/Document18.md) | An integer that specifies in which frame to export ActionScript 3.0 classes. |
| [Document.as3StrictMode](./Document_object/Document19.md) | A Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Strict Mode option turned on or off. |
| [Document.as3WarningsMode](./Document_object/Document20.md) | A Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Warnings Mode option turned on or off. |
| [Document.asVersion](./Document_object/Document21.md) | An integer that specifies which version of ActionScript is being used in the specified file. |
| [Document.autoLabel](./Document_object/Document22.md) | A Boolean value that is equivalent to the Auto Label check box in the Accessibility panel. |
| [Document.backgroundColor](./Document_object/Document23.md) | A string, hexadecimal value, or integer that represents the background color. |
| [Document.currentPublishProfile](./Document_object/Document38.md) | A string that specifies the name of the active publish profile for the specified document. |
| [Document.currentTimeline](./Document_object/Document39.md) | An integer that specifies the index of the active timeline. |
| [Document.description](./Document_object/Document45.md) | A string that is equivalent to the Description field in the Accessibility panel. |
| [Document.docClass](./Document_object/Document52.md) | Specifies the top-level ActionScript 3.0 class associated with the document. |
| [Document.externalLibraryPath](./Document_object/Document69.md) | A string that contains a list of items in the document’s ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. |
| [Document.forceSimple](./Document_object/Document70.md) | A Boolean value that specifies whether the children of the specified object are accessible. |
| [Document.frameRate](./Document_object/Document71.md) | A float value that specifies the number of frames displayed per second when the SWF file plays; the default is 12. |
| [Document.height](./Document_object/Document91.md) | An integer that specifies the height of the document (Stage) in pixels. |
| [Document.id](./Document_object/Document92.md) | A unique integer (assigned automatically) that identifies a document during a Flash session. |
| [Document.library](./Document_object/Document98.md) | Read-only; the [Library object](./Library_object/Library_summary.md) for a document. |
| [Document.libraryPath](./Document_object/Document99.md) | A string that contains a list of items in the document’s ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. |
| [Document.livePreview](./Document_object/Document100.md) | A Boolean value that specifies whether Live Preview is enabled. |
| [Document.name](./Document_object/Document170.md) | Read-only; a string that represents the name of a document (FLA file). |
| [Document.path](./Document_object/Document190.md) | Read-only; a string that represents the path of the document, in a platform-specific format. |
| [Document.pathURI](./Document_object/Document200.md) | Read-only; a string that represents the path of the document, expressed as a file:/// URI. |
| [Document.publishProfiles](./Document_object/Document220.md) | Read-only; an array of the publish profile names for the document. |
| [Document.screenOutline - dropped](./Document_object/Document410.md) | Dropped in Adobe Animate. |
| [Document.selection](./Document_object/Document430.md) | An array of the selected objects in the document. |
| [Document.silent](./Document_object/Document9971.md) | A Boolean value that specifies whether the object is accessible. |
| [Document.sourcePath](./Document_object/Document36.md) | A string that contains a list of items in the document’s ActionScript 3.0 Source path, which specifies the location of ActionScript class files. |
| [Document.swfJPEGQuality](./Document_object/Document5932.md) | An integer that returns the JPEG Quality setting from the current Publish Profile in the document. |
| [Document.timelines](./Document_object/Document5995.md) | Read-only; an array of Timeline objects (see [Timeline object](./Timeline_object/Timeline_summary.md)). |
| [Document.viewMatrix](./Document_object/Document6167.md) | Read-only; a [Matrix object](./Matrix_object/Matrix_summary.md). |
| [Document.width](./Document_object/Document6182.md) | An integer that specifies the width of the document (Stage) in pixels. |
| [Document.zoomFactor](./Document_object/Document6229.md) | Specifies the zoom percent of the Stage at authoring time. |

### DrawingLayer summary

#### Availability

Flash MX 2004.

#### Description

The DrawingLayer object is accessible from JavaScript as a child of the [Flash object](./Flash_object/Flash_summary.md).

It is used for extensible tools when the user wants to temporarily draw while dragging. For example, when creating a selection marquee. You should call [DrawingLayer.beginFrame()](./DrawingLayer_object/DrawingLayer1.md) before you call any other Its methods.

#### Method summary

The following methods are available for the drawingLayer object:

| **Method** | **Description** |
| --- | --- |
| [DrawingLayer.beginDraw()](./DrawingLayer_object/DrawingLayer.md) | Puts Flash in drawing mode. |
| [DrawingLayer.beginFrame()](./DrawingLayer_object/DrawingLayer1.md) | Erases what was previously drawn using the drawingLayer and prepares for more drawing commands. |
| [DrawingLayer.cubicCurveTo()](./DrawingLayer_object/DrawingLayer2.md) | Draws a cubic curve from the current pen location using the parameters as the coordinates of the cubic segment. |
| [DrawingLayer.curveTo()](./DrawingLayer_object/DrawingLayer3.md) | Draws a quadratic curve segment starting at the current drawing position and ending at a specified point. |
| [DrawingLayer.drawPath()](./DrawingLayer_object/DrawingLayer4.md) | Draws the specified path. |
| [DrawingLayer.endDraw()](./DrawingLayer_object/DrawingLayer5.md) | Exits drawing mode. |
| [DrawingLayer.endFrame()](./DrawingLayer_object/DrawingLayer6.md) | Signals the end of a group of drawing commands. |
| [DrawingLayer.lineTo()](./DrawingLayer_object/DrawingLayer7.md) | Draws a line from the current drawing position to the point (*x,y*). |
| [DrawingLayer.moveTo()](./DrawingLayer_object/DrawingLayer8.md) | Sets the current drawing position. |
| [DrawingLayer.newPath()](./DrawingLayer_object/DrawingLayer9.md) | Returns a new [Path object](./Path_object/Path_summary.md). |
| [DrawingLayer.setColor()](./DrawingLayer_object/DrawingLayer10.md) | Sets the color of subsequently drawn data. |
| [DrawingLayer.setFill()](./DrawingLayer_object/DrawingLayer11.md) | This method is not available. |
| [DrawingLayer.setStroke()](./DrawingLayer_object/DrawingLayer12.md) | This method is not available. |

### Edge summary

#### Availability

Flash MX 2004.

#### Description

The Edge object represents an edge of a shape on the Stage.

#### Method summary

The following methods are available for the Edge object:

| **Method** | **Description** |
| --- | --- |
| [Edge.getControl()](./Edge_object/Edge1.md) | Gets a point object set to the location of the specified control point of the edge. |
| [Edge.getHalfEdge()](./Edge_object/Edge2.md) | Returns a [HalfEdge object](./HalfEdge_object/HalfEdge_summary.md). |
| [Edge.setControl()](./Edge_object/Edge5.md) | Sets the position of the control point of the edge. |
| [Edge.splitEdge()](./Edge_object/Edge6.md) | Splits the edge into two pieces. |

#### Property summary

The following properties are available for the Edge object:

| **Property** | **Description** |
| --- | --- |
| [Edge.cubicSegmentIndex](./Edge_object/Edge.md) | An integer that specifies the index value of a cubic segment of the edge. |
| [Edge.id](./Edge_object/Edge3.md) | Read-only; an integer that represents a unique identifier for the edge. |
| [Edge.isLine](./Edge_object/Edge4.md) | Read-only; an integer with a value of 0 or 1. |
| [Edge.stroke](./Edge_object/Edge7.md) | A [Stroke object](./Stroke_object/Stroke_summary.md). |

### Element summary

#### Availability

Flash MX 2004.

#### Description

Everything that appears on the Stage is of the type Element. The following code example lets you select an element:

```javascript
var el = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
```

#### Method summary

The following methods are available for the Element object:

| **Method** | **Description** |
| --- | --- |
| [Element.getPersistentData()](./Element_object/Element2.md) | Retrieves the value of the data specified by the ***name*** parameter. |
| [Element.getPublishPersistentData()](./Element_object/Element3.md) | *True* if the specified persistent data is enable for the specified format; otherwise *False*. |
| [Element.getTransformationPoint()](./Element_object/Element4.md) | Gets the value of the specified element’s transformation point. |
| [Element.hasPersistentData()](./Element_object/Element5.md) | Determines whether the specified data has been attached to the specified element. |
| [Element.removePersistentData()](./Element_object/Element12.md) | Removes any persistent data with the specified name that has been attached to the object. |
| [Element.setPersistentData()](./Element_object/Element17.md) | Stores data with an element. |
| [Element.setPublishPersistentData()](./Element_object/Element18.md) | Enables or disables publishing of persistent data for a specified format. |
| [Element.setTransformationPoint()](./Element_object/Element19.md) | Sets the position of the element’s transformation point. |

#### Property summary

The following properties are available for the Element object:

| **Property** | **Description** |
| --- | --- |
| [Element.depth](./Element_object/Element.md) | Read-only; an integer that has a value greater than 0 for the depth of the object in the view. |
| [Element.elementType](./Element_object/Element1.md) | Read-only; a string that represents the type of the specified element. |
| [Element.height](./Element_object/Element6.md) | A float value that specifies the height of the element in pixels. |
| [Element.layer](./Element_object/Element7.md) | Read-only; represents the [Layer object](./Layer_object/Layer_summary.md) on which the element is located. |
| [Element.left](./Element_object/Element8.md) | Read-only; a float value that represents the left side of the element. |
| [Element.locked](./Element_object/Element9.md) | A Boolean value: true if the element is locked; false otherwise. |
| [Element.matrix](./Element_object/Element10.md) | A [Matrix object](./Matrix_object/Matrix_summary.md). The matrix has properties *a, b, c, d, tx,* and *ty. a, b, c,* and *d* are floating- point values; tx and ty are coordinates. |
| [Element.name](./Element_object/Element11.md) | A string that specifies the name of the element, normally referred to as the Instance name. |
| [Element.rotation](./Element_object/Element13.md) | An integer or float value between -180 and 180 that specifies the object’s clockwise rotation, in degrees. |
| [Element.scaleX](./Element_object/Element14.md) | A float value that specifies the *x* scale value of symbols, drawing objects, and primitive rectangles and ovals. |
| [Element.scaleY](./Element_object/Element15.md) | A float value that specifies the *y* scale value of symbols, drawing objects, and primitive rectangles and ovals. |
| [Element.selected](./Element_object/Element16.md) | A Boolean value that specifies whether the element is selected or not. |
| [Element.skewX](./Element_object/Element20.md) | A float value between -180 and 180 that specifies the *x* skew value of symbols, drawing objects, and primitive rectangles and ovals. |
| [Element.skewY](./Element_object/Element21.md) | A float value between -180 and 180 that specifies the *y* skew value of symbols, drawing objects, and primitive rectangles and ovals. |
| [Element.top](./Element_object/Element22.md) | Read-only; top side of the element. |
| [Element.transformX](./Element_object/Element23.md) | A floating-point number that specifies the *x* value of the selected element’s transformation point, within the coordinate system of the element's parent. |
| [Element.transformY](./Element_object/Element24.md) | A floating-point number that specifies the *y* value of the selected element’s transformation point, within the coordinate system of the element's parent. |
| [Element.width](./Element_object/Element25.md) | A float value that specifies the width of the element in pixels. |
| [Element.x](./Element_object/Element26.md) | A float value that specifies the *x* value of the selected element’s registration point. |
| [Element.y](./Element_object/Element27.md) | A float value that specifies the *y* value of the selected element’s registration point. |

### Fill summary

#### Availability

Flash MX 2004.

#### Description

The Fill object contains all the properties of the Fill color setting of the Tools panel or of a selected shape. To retrieve a Fill object, use [Document.getCustomFill()](./Document_object/Document74.md).

#### Property summary

The following properties are available for the Fill object:

| **Property** | **Description** |
| --- | --- |
| [Fill.bitmapIsClipped](./Fill_object/Fill.md) | A Boolean value that specifies whether the bitmap fill for a shape that is larger than the bitmap is clipped or repeated. |
| [Fill.bitmapPath](./Fill_object/Fill1.md) | A string that specifies the path and name of the bitmap fill in the Library. |
| [Fill.color](./Fill_object/Fill2.md) | A string, hexadecimal value, or integer that represents the fill color. |
| [Fill.colorArray](./Fill_object/Fill3.md) | An array of colors in gradient. |
| [Fill.focalPoint](./Fill_object/Fill4.md) | An integer that specifies the gradient focal point horizontal offset from the transformation point. |
| [Fill.linearRGB](./Fill_object/Fill5.md) | A Boolean value that specifies whether to render the fill as a linear or radial RGB gradient. |
| [Fill.matrix](./Fill_object/Fill6.md) | A [Matrix object](./Matrix_object/Matrix_summary.md) that defines the placement, orientation, and scales for gradient fills. |
| [Fill.overflow](./Fill_object/Fill7.md) | A string that specifies the behavior of a gradient’s overflow. |
| [Fill.posArray](./Fill_object/Fill8.md) | An array of integers, each in the range of zero to 255, indicating the position of the corresponding color. |
| [Fill.style](./Fill_object/Fill9.md) | A string that specifies the fill style. |

### Filter summary

#### Availability

Flash 8.

#### Description

The Filter object contains all the properties for all filters. The [Filter.name](./Filter_object/Filter13.md) property specifies the type of filter, and determines which properties are applicable to each filter.

To return the filter list for an object or objects, use document.getFilters(). To apply filters to an object or objects, use `Document.setFilters()`. See [Document.getFilters()](./Document_object/Document79.md) and [Document.setFilters()](./Document_object/Document530.md).

#### Property summary

The following properties can be used with the Filter object:

| **Property** | **Description** |
| --- | --- |
| [Filter.angle](./Filter_object/Filter.md) | A float value that specifies the angle of the shadow or highlight color, in degrees. |
| [Filter.blurX](./Filter_object/Filter1.md) | A float value that specifies the amount to blur in the x direction, in pixels. |
| [Filter.blurY](./Filter_object/Filter2.md) | A float value that specifies the amount to blur in the y direction. |
| [Filter.brightness](./Filter_object/Filter3.md) | A float value that specifies the brightness of the filter. |
| [Filter.color](./Filter_object/Filter4.md) | A string, hexadecimal value, or integer that represents the filter color. |
| [Filter.contrast](./Filter_object/Filter5.md) | A float value that specifies the contrast value of the filter. |
| [Filter.distance](./Filter_object/Filter6.md) | A float value that specifies the distance between the filter’s effect and an object, in pixels. |
| [Filter.enabled](./Filter_object/Filter7.md) | A Boolean value that specifies whether the specified filter is enabled. |
| [Filter.hideObject](./Filter_object/Filter8.md) | A Boolean value that specifies whether the source image is hidden. |
| [Filter.highlightColor](./Filter_object/Filter9.md) | A string, hexadecimal value, or integer that represents the highlight color. |
| [Filter.hue](./Filter_object/Filter10.md) | A float value that specifies the hue of the filter. |
| [Filter.inner](./Filter_object/Filter11.md) | A Boolean value that specifies whether the shadow is an inner shadow. |
| [Filter.knockout](./Filter_object/Filter12.md) | A Boolean value that specifies whether the filter is a knockout filter. |
| [Filter.name](./Filter_object/Filter13.md) | Read-only; a string that specifies the type of filter. |
| [Filter.quality](./Filter_object/Filter14.md) | A string that specifies the blur quality. |
| [Filter.saturation](./Filter_object/Filter15.md) | A float value that specifies the saturation value of the filter. |
| [Filter.shadowColor](./Filter_object/Filter16.md) | A string, hexadecimal value, or integer that represents the shadow color. |
| [Filter.strength](./Filter_object/Filter17.md) | An integer that specifies the percentage strength of the filter. |
| [Filter.type](./Filter_object/Filter18.md) | A string that specifies the type of bevel or glow. |

### Flash summary

#### Availability

Flash MX 2004.

#### Description

The Flash object represents the Flash application.

You can refer to this object using `flash` or `fl`. Starting with Adobe Animate, you can also use `animate` or `an`.

In this documentation, `fl` is used in code samples because it is concise and widely used in scripting, making the code easier to read and write compared to other aliases such as `flash` or `animate`.

#### Method summary

The following methods can be used with the Flash object:

| **Method** | **Description** |
| --- | --- |
| [Flash.addEventListener()](./Flash_object/Flash1.md) | Registers a function to be called when a specific event is received. |
| [Flash.addToolInToolbar()](./Flash_object/Flash1.md) | Add the specified tool from master toolbar to main toolbar, appends in the last. |
| [Flash.browseForFileURL()](./Flash_object/Flash3.md) | Opens a File Open or File Save system dialog box and lets the user specify a file to be opened or saved. |
| [Flash.browseForFolderURL()](./Flash_object/Flash4.md) | Displays a Browse for Folder dialog box and lets the user select a folder. |
| [Flash.clearPublishCache()](./Flash_object/Flash5.md) | Clears the publish cache. |
| [Flash.clipCopyString()](./Flash_object/Flash6.md) | Copies the specified string to the Clipboard. |
| [Flash.closeAll()](./Flash_object/Flash7.md) | Closes all open documents, displaying the Save As dialog box for any documents that were not previously saved. |
| [Flash.closeAllPlayerDocuments()](./Flash_object/Flash8.md) | Closes all the SWF files that were opened with Control > Test Movie. |
| [Flash.closeDocument()](./Flash_object/Flash9.md) | Closes the specified document. |
| [Flash.copyLibraryItem()](./Flash_object/Flash15.md) | Silently copies a library item from a document without exposing the item in the Flash Pro user interface. |
| [Flash.createDocument()](./Flash_object/Flash16.md) | Opens a new document and selects it. |
| [Flash.exportPublishProfileString()](./Flash_object/Flash22.md) | Uniform Resource Identifier (URI) from which to export publish settings. |
| [Flash.fileExists()](./Flash_object/Flash24.md) | Checks whether a file already exists on disk. |
| [Flash.findDocumentDOM()](./Flash_object/Flash25.md) | Lets you target a specific file by using its unique identifier. |
| [Flash.findDocumentIndex()](./Flash_object/Flash26.md) | Returns an array of integers that represent the position of a document in the fl.documents array. |
| [Flash.findObjectInDocByName()](./Flash_object/Flash27.md) | Exposes elements with instance names that match specified text. |
| [Flash.findObjectInDocByType()](./Flash_object/Flash28.md) | Exposes elements of a specified element type in a document. |
| [Flash.getAppMemoryInfo()](./Flash_object/Flash30.md) | Returns an integer that represents the number of bytes being used in a specified area of Flash.exe memory. |
| [Flash.getDocumentDOM()](./Flash_object/Flash31.md) | Retrieves the DOM ([Document object](./Document_object/Document_summary.md)) of the currently active document. |
| [Flash.getSwfPanel()](./Flash_object/Flash35.md) | Returns the SWFPanel object based on the panel's localized name or its SWF filename. |
| [Flash.getThemeColor()](./Flash_object/Flash32.md) | Retrieves a theme color that matches the parameter specified theme parameter name. |
| [Flash.getThemeColorParameters()](./Flash_object/Flash33.md) | Retrieves an array of theme parameter names. |
| [Flash.getThemeFontInfo()](./Flash_object/Flash34.md) | Return either the font style or the font size that is used to draw the UI of the specified size. |
| [Flash.isFontInstalled()](./Flash_object/Flash37.md) | Determines whether a specified font is installed. |
| [Flash.mapPlayerURL()](./Flash_object/Flash40.md) | Maps an escaped Unicode URL to a UTF-8 or MBCS URL. |
| [Flash.openDocument()](./Flash_object/Flash45.md) | Opens a Flash (FLA) document for editing in a new Flash Document window and gives it focus. |
| [Flash.openScript()](./Flash_object/Flash46.md) | Opens a script (JSFL, AS, ASC) or other file (XML, TXT) in the Flash text editor. |
| [Flash.quit()](./Flash_object/Flash55.md) | Quits Flash, prompting the user to save any changed documents. |
| [Flash.reloadEffects() - dropped](./Flash_object/Flash56.md) | Dropped in Adobe Animate. |
| [Flash.reloadTools()](./Flash_object/Flash57.md) | Rebuilds the Tools panel from the toolconfig.xml file. |
| [Flash.removeEventListener()](./Flash_object/Flash58.md) | Unregisters a function that was registered using fl.addEventListener(). |
| [Flash.resetAS3PackagePaths()](./Flash_object/Flash59.md) | Resets the global Classpath setting in the ActionScript 3.0 Settings dialog box to the default value. |
| [Flash.resetPackagePaths() - dropped](./Flash_object/Flash60.md) | Dropped in Adobe Animate. |
| [Flash.runScript()](./Flash_object/Flash62.md) | Executes a JavaScript file. |
| [Flash.saveAll()](./Flash_object/Flash63.md) | Saves all open documents, displaying the Save As dialog box for any documents that were not previously saved. |
| [Flash.saveDocument()](./Flash_object/Flash64.md) | Saves the specified document as a FLA document. |
| [Flash.saveDocumentAs()](./Flash_object/Flash65.md) | Displays the Save As dialog box for the specified document. |
| [Flash.selectElement()](./Flash_object/Flash67.md) | Enables selection or editing of an element. |
| [Flash.selectTool()](./Flash_object/Flash68.md) | Selects the specified tool in the Tools panel. |
| [Flash.setActiveWindow()](./Flash_object/Flash69.md) | Sets the active window to be the specified document. |
| [Flash.setPrefBoolean()](./Flash_object/Flash71.md) | Sets a boolean preference value. |
| [Flash.showIdleMessage()](./Flash_object/Flash70.md) | Lets you disable the warning about a script running too long. |
| [Flash.toggleBreakpoint()](./Flash_object/Flash75.md) | Toggles a breakpoint for the given .as file at the given line. |
| [Flash.trace()](./Flash_object/Flash77.md) | Sends a text string to the Output panel. |
| [Flash.xmlPanel()](./Flash_object/Flash79.md) | Launches the XML To UI dialog from a URI that points to an XML-format file. |
| [Flash.xmlPanelFromString()](./Flash_object/Flash80.md) | Launches the XML To UI dialog from an XML-format string. |

#### Property summary

The following properties can be used with the Flash object.

| **Property** | **Description** |
| --- | --- |
| [Flash.actionsPanel](./Flash_object/Flash.md) | Read-only; an [ActionsPanel object](./ActionsPanel_object/ActionsPanel_summary.md). |
| [Flash.as3PackagePaths](./Flash_object/Flash2.md) | A string that corresponds to the global Classpath setting in the ActionScript 3.0 Settings dialog box. |
| [Flash.compilerErrors](./Flash_object/Flash10.md) | Read-only; a [CompilerErrors object](./CompilerErrors_object/CompilerErrors_summary.md). |
| [Flash.componentsPanel](./Flash_object/Flash11.md) | Read-only; a [ComponentsPanel object](./ComponentsPanel_object/ComponentsPanel_summary.md), which represents the Components panel. |
| [Flash.configDirectory](./Flash_object/Flash12.md) | Read-only; a string that specifies the full path for the local user’s Configuration folder as a platform-specific path. |
| [Flash.configURI](./Flash_object/Flash13.md) | Read-only; a string that specifies the full path for the local user’s Configuration directory as a file:/// URI. |
| [Flash.contactSensitiveSelection](./Flash_object/Flash14.md) | A Boolean value that specifies whether Contact Sensitive selection mode is enabled. |
| [Flash.createNewDocList](./Flash_object/Flash17.md) | Read-only; an array of strings that represent the various types of documents that can be created. |
| [Flash.createNewDocListType](./Flash_object/Flash18.md) | Read-only; an array of strings that represent the file extensions of the types of documents that can be created. |
| [Flash.createNewTemplateList](./Flash_object/Flash19.md) | Read-only; an array of strings that represent the various types of templates that can be created. |
| [Flash.documents](./Flash_object/Flash20.md) | Read-only; an array of Document objects (see [Document object](./Document_object/Document_summary.md)) that represent the documents (FLA files) that are currently open for editing. |
| [Flash.drawingLayer](./Flash_object/Flash21.md) | The drawingLayer object that an extensible tool should use when the user wants to temporarily draw while dragging. |
| [Flash.externalLibraryPath](./Flash_object/Flash23.md) | A string that contains a list of items in the global ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries. |
| [Flash.flexSDKPath](./Flash_object/Flash29.md) | A string that specifies the path to the Flex SDK folder, which contains bin, frameworks, lib, and other folders. |
| [Flash.installedPlayers](./Flash_object/Flash36.md) | Returns an array of generic objects corresponding to the list of installed Flash Players in the document Property inspector. |
| [Flash.languageCode](./Flash_object/Flash38.md) | Returns the five character code identifying the locale of the application’s user interface. |
| [Flash.libraryPath](./Flash_object/Flash39.md) | A string that contains a list of items in the global ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files. |
| [Flash.Math](./Flash_object/Flash41.md) | Read-only; the [Math object](./Math_object/Math_summary.md), which provides methods for matrix and point operations. |
| [Flash.mruRecentFileList](./Flash_object/Flash42.md) | Read-only; an array of the complete filenames in the Most Recently Used (MRU) list that the Flash authoring tool manages. |
| [Flash.mruRecentFileListType](./Flash_object/Flash43.md) | Read-only; an array of the file types in the MRU list that the Flash authoring tool manages. |
| [Flash.packagePaths - dropped](./Flash_object/Flash48.md) | Dropped in Adobe Animate. |
| [Flash.publishCacheDiskSizeMax](./Flash_object/Flash50.md) | An integer that sets the disk cache size limit preference. |
| [Flash.publishCacheEnabled](./Flash_object/Flash51.md) | A boolean value that sets whether publish cache is enabled. |
| [Flash.publishCacheMemoryEntrySizeLimit](./Flash_object/Flash52.md) | An integer property that sets the maximum size for the memory cache entry preference. |
| [Flash.publishCacheMemorySizeMax](./Flash_object/Flash53.md) | An integer that sets the memory cache size limit preference. |
| [Flash.objectDrawingMode](./Flash_object/Flash44.md) | An integer that represents the object drawing mode that is enabled. |
| [Flash.outputPanel](./Flash_object/Flash47.md) | Read-only; reference to the [OutputPanel object](./OutputPanel_object/OutputPanel_summary.md). |
| [Flash.presetPanel](./Flash_object/Flash49.md) | Read-only; a [PresetPanel object](./PresetPanel_object/PresetPanel_summary.md). |
| [Flash.scriptURI](./Flash_object/Flash66.md) | Read-only; a string that represents the path of the currently running JSFL script, expressed as a file:/// URI. |
| [Flash.sourcePath](./Flash_object/Flash72.md) | A string that contains a list of items in the global ActionScript 3.0 Source path, which specifies the location of ActionScript class files. |
| [Flash.spriteSheetExporter](./Flash_object/Flash73.md) | Returns an instance of SpriteSheetExporter object. |
| [Flash.swfPanels](./Flash_object/Flash74.md) | An array of registered swfPanel objects (see [SwfPanel object](./SwfPanel_object/SwfPanel_summary.md)). |
| [Flash.tools](./Flash_object/Flash76.md) | Read-only; an array of Tools objects. |
| [Flash.version](./Flash_object/Flash78.md) | Read-only; the long string version of the Flash authoring tool, including platform. |
| [Flash.xmlui](./Flash_object/Flash81.md) | Read-only; an [XMLUI object](./XMLUI_object/XMLUI_summary.md). |

### FLfile summary

#### Availability

Flash MX 2004 7.2.

#### Description

The FLfile object lets you write Flash extensions that can access, modify, and remove files and folders on the local file system. The FLfile API is provided in the form of an extension to the JavaScript API. This extension is called a *shared library* and is located in the following folder:

- Windows 7 and 8:

*boot drive*\\Users\\*username*\\AppData\\Local\\Adobe\\Flash CC\\*language*\\Configuration\\External Libraries\\FLfile.dll

- Mac OS X:

Macintosh HD/Users/*username*/Library/Application Support/Adobe/Flash CC/*language*/Configuration/External Libraries/FLfile.dll

***Note:** Don't confuse the shared libraries that contain symbols in your Flash documents with the JavaScript API shared libraries. They are two different things.*

The FLfile methods work with files or folders (directories) on disk. Therefore, each method takes one or more parameters to specify the location of a file or folder. The location of the file or folder is expressed as a string in a form very similar to a website URL. It is called a file URI (Uniform Resource Identifier) and is formatted as shown here (including the quote marks):

*"file:///drive\|/folder 1/folder 2/.../filename"*

For example, if you want to create a folder on the C drive called config and place it in the Program Files/MyApp folder, use the following command:

```javascript
FLfile.createFolder("file:///C\|/Program Files/MyApp/config");
```

If you then want to place a file called config.ini in that folder, use the following command:

```javascript
FLfile.write("file:///C\|/Program Files/MyApp/config/config.ini", "");
```

To create a folder on the Macintosh, you could use the following command:

```javascript
FLfile.createFolder("file:///Macintosh/MyApp/config");
```

#### Method summary

The following methods can be used with the FLfile object:

| **Method** | **Description** |
| --- | --- |
| [FLfile.copy()](./FLfile_object/FLfile.md) | Copies a file. |
| [FLfile.createFolder()](./FLfile_object/FLfile1.md) | Creates one or more folders. |
| [FLfile.exists()](./FLfile_object/FLfile2.md) | Determines the existence of a file or folder. |
| [FLfile.getAttributes()](./FLfile_object/FLfile3.md) | Finds out whether a file is writable, read-only, hidden, visible, or a system folder. |
| [FLfile.getCreationDate()](./FLfile_object/FLfile4.md) | Specifies how many seconds have passed between January 1, 1970 and the time the file or folder was created. |
| [FLfile.getCreationDateObj()](./FLfile_object/FLfile5.md) | Gets the date a file or folder was created. |
| [FLfile.getModificationDate()](./FLfile_object/FLfile6.md) | Specifies how many seconds have passed between January 1, 1970 and the time the file or folder was last modified. |
| [FLfile.getModificationDateObj()](./FLfile_object/FLfile7.md) | Gets the date a file or folder was last modified. |
| [FLfile.getSize()](./FLfile_object/FLfile8.md) | Gets the size of a file. |
| [FLfile.listFolder()](./FLfile_object/FLfile9.md) | Lists the contents of a folder. |
| [FLfile.platformPathToURI()](./FLfile_object/FLfile10.md) | Converts a filename in a platform-specific format to a file:/// URI. |
| [FLfile.read()](./FLfile_object/FLfile11.md) | Reads the contents of a file. |
| [FLfile.remove()](./FLfile_object/FLfile12.md) | Deletes a file or folder. |
| [FLfile.setAttributes()](./FLfile_object/FLfile13.md) | Makes a file or folder read-only, writable, hidden, or visible. |
| [FLfile.uriToPlatformPath()](./FLfile_object/FLfile14.md) | Converts a filename expressed as a file:/// URI to a platform- specific format. |
| [FLfile.write()](./FLfile_object/FLfile15.md) | Creates, writes to, or appends to a file. |

### FolderItem summary

**Inheritance** [Item object](./Item_object/Item_summary.md) > FolderItem object

#### Availability

Flash MX 2004.

#### Description

The FolderItem object is a subclass of the [Item object](./Item_object/Item_summary.md). There are no unique methods or properties for FolderItem.

### FontItem summary

**Inheritance** [Item object](./Item_object/Item_summary.md) > FontItem object

#### Availability

Flash MX 2004.

#### Description

The FontItem object is a subclass of the [Item object](./Item_object/Item_summary.md).

#### Property summary

In addition to the Item object properties, the following properties are available for the FontItem object:

| **Property** | **Description** |
| --- | --- |
| [FontItem.bitmap](./FontItem_object/FontItem.md) | Specifies whether the Font item is bitmapped. |
| [FontItem.bold](./FontItem_object/FontItem1.md) | Specifies whether the Font item is bold. |
| [FontItem.embeddedCharacters](./FontItem_object/FontItem2.md) | Specifies characters to embed. |
| [FontItem.embedRanges](./FontItem_object/FontItem3.md) | Specifies items that can be selected in the Font Embedding dialog. |
| [FontItem.embedVariantGlyphs](./FontItem_object/FontItem4.md) | Specifies whether variant glyphs should be output in the font when publishing a SWF file. |
| [FontItem.font](./FontItem_object/FontItem5.md) | The name of the device font associated with the Font item. |
| [FontItem.isDefineFont4Symbol](./FontItem_object/FontItem6.md) | Specifies the format of the font that is output when publishing a SWF filem. |
| [FontItem.italic](./FontItem_object/FontItem7.md) | Specifies whether the Font item is italic. |
| [FontItem.size](./FontItem_object/FontItem8.md) | The size of the Font item, in points. |

### Frame summary

#### Availability

Flash MX 2004.

#### Description

The Frame object represents frames in the layer.

#### Method summary

The following methods can be used with the Frame object:

| **Method** | **Description** |
| --- | --- |
| [Frame.convertMotionObjectTo2D()](./Frame_object/Frame.md) | Converts the selected motion object to a 2D motion object. |
| [Frame.convertMotionObjectTo3D()](./Frame_object/Frame1.md) | Converts the selected motion object to a 3D motion object. |
| [Frame.convertToFrameByFrameAnimation()](./Frame_object/Frame2.md) | Converts the current frame to Frame-by-Frame Animation. |
| [Frame.getCustomEase()](./Frame_object/Frame6.md) | Returns an array of JavaScript objects, each of which has an *x* and *y* property. |
| [Frame.getMotionObjectXML()](./Frame_object/Frame7.md) | Returns the motion XML from the selected motion object. |
| [Frame.getSoundEnvelope()](./Frame_object/Frame8.md) | Gets the sound envelope data of any frame. |
| [Frame.getSoundEnvelopeLimits()](./Frame_object/Frame9.md) | Gets the limits (start, end) for a custom Sound envelope that is applied to the frame sound. |
| [Frame.hasMotionPath()](./Frame_object/Frame11.md) | Informs you whether or not the currrent selection has a motion tween. |
| [Frame.is3DMotionObject()](./Frame_object/Frame12.md) | Informs you whether or not the currrent selection is a 3D motion object. |
| [Frame.isEmpty()](./Frame_object/Frame13.md) | Informs you whether the frame contains any elements. |
| [Frame.isMotionObject()](./Frame_object/Frame14.md) | Informs you whether or not the currrent selection is a motion object. |
| [Frame.selectMotionPath()](./Frame_object/Frame23.md) | Selects or deselects the motion path of the current motion object. |
| [Frame.setCustomEase()](./Frame_object/Frame24.md) | Specifies a cubic Bézier curve to be used as a custom ease curve. |
| [Frame.setMotionObjectDuration()](./Frame_object/Frame25.md) | Specifies the duration (the tween span length) of the currently selected motion object. |
| [Frame.setMotionObjectXML()](./Frame_object/Frame26.md) | Applies the specified motion XML to the selected motion object. |
| [Frame.setSoundEnvelope()](./Frame_object/Frame27.md) | Sets the sound envelope data of a frame. |
| [Frame.setSoundEnvelopeLimits()](./Frame_object/Frame28.md) | Sets the sound envelope limits of any frame with a sound file. |

#### Property summary

The following properties can be used with the Frame object:

| **Property** | **Description** |
| --- | --- |
| [Frame.actionScript](./Frame_object/Frame3.md) | A string representing ActionScript code. |
| [Frame.duration](./Frame_object/Frame4.md) | Read-only; an integer that represents the number of frames in a frame sequence. |
| [Frame.elements](./Frame_object/Frame5.md) | Read-only; an array of Element objects (see [Element object](./Element_object/Element_summary.md)). |
| [Frame.hasCustomEase](./Frame_object/Frame10.md) | A Boolean value that specifies whether the frame gets its ease information from the custom ease curve. |
| [Frame.labelType](./Frame_object/Frame15.md) | A string that specifies the type of Frame name. |
| [Frame.motionTweenOrientToPath](./Frame_object/Frame16.md) | A Boolean value that specifies whether or not the tweened element rotates the element as it moves along a path to maintain its angle with respect to each point on the path. |
| [Frame.motionTweenRotate](./Frame_object/Frame17.md) | A string that specifies how the tweened element rotates. |
| [Frame.motionTweenRotateTimes](./Frame_object/Frame18.md) | An integer that specifies the number of times the tweened element rotates between the starting keyframe and the next keyframe. |
| [Frame.motionTweenScale](./Frame_object/Frame19.md) | A Boolean value that specifies whether the tweened element scales to the size of the object in the following keyframe, increasing its size with each frame in the tween (true), or doesn’t scale (false). |
| [Frame.motionTweenSnap](./Frame_object/Frame20.md) | A Boolean value that specifies whether the tweened element automatically snaps to the nearest point on the motion guide layer associated with this frame’s layer (true) or not (false). |
| [Frame.motionTweenSync](./Frame_object/Frame21.md) | A Boolean value that if set to true, synchronizes the animation of the tweened object with the main timeline. |
| [Frame.name](./Frame_object/Frame22.md) | A string that specifies the name of the frame. |
| [Frame.shapeTweenBlend](./Frame_object/Frame29.md) | A string that specifies how a shape tween is blended between the shape in the keyframe at the start of the tween and the shape in the following keyframe. |
| [Frame.soundEffect](./Frame_object/Frame30.md) | A string that specifies effects for a sound that is attached directly to a frame ([Frame.soundLibraryItem](./Frame_object/Frame31.md)). |
| [Frame.soundLibraryItem](./Frame_object/Frame31.md) | A library item (see [SoundItem object](./SoundItem_object/SoundItem_summary.md)) used to create a sound. |
| [Frame.soundLoop](./Frame_object/Frame32.md) | An integer value that specifies the number of times a sound that is attached directly to a frame ([Frame.soundLibraryItem](./Frame_object/Frame31.md)) plays. |
| [Frame.soundLoopMode](./Frame_object/Frame33.md) | A string that specifies whether a sound that is attached directly to a frame ([Frame.soundLibraryItem](./Frame_object/Frame31.md)) should play a specific number of times or loop indefinitely. |
| [Frame.soundName](./Frame_object/Frame34.md) | A string that specifies the name of a sound that is attached directly to a frame ([Frame.soundLibraryItem](./Frame_object/Frame31.md)), as stored in the library. |
| [Frame.soundSync](./Frame_object/Frame35.md) | A string that specifies the sync behavior of a sound that is attached directly to a frame ([Frame.soundLibraryItem](./Frame_object/Frame31.md)). |
| [Frame.startFrame](./Frame_object/Frame36.md) | Read-only; the index of the first frame in a sequence. |
| [Frame.tweenEasing](./Frame_object/Frame37.md) | An integer that specifies the amount of easing that should be applied to the tweened object. |
| [Frame.tweenInstanceName](./Frame_object/Frame38.md) | Assings an instance name to the specified motion object. |
| [Frame.tweenType](./Frame_object/Frame39.md) | A string that specifies the type of tween. |
| [Frame.useSingleEaseCurve](./Frame_object/Frame40.md) | A Boolean value that specifies whether a single custom ease curve is used for easing information for all properties. |

### HalfEdge summary

#### Availability

Flash MX 2004.

#### Description

The HalfEdge object is the directed side of the edge of a [Shape object](./Shape_object/Shape_summary.md). An edge has two half edges. You can transverse the contours of a shape by "walking around" these half edges. For example, starting from a half edge, you can trace all the half edges around a contour of a shape, and return to the original half edge.
Half edges are ordered. One half edge represents one side of the edge; the other half edge represents the other side.

#### Method summary

The following methods are available for the HalfEdge object:

| **Method** | **Description** |
| --- | --- |
| [HalfEdge.getEdge()](./HalfEdge_object/HalfEdge.md) | Gets the [Edge object](./Edge_object/Edge_summary.md) for the HalfEdge object. |
| [HalfEdge.getNext()](./HalfEdge_object/HalfEdge1.md) | Gets the next half edge on the current contour. |
| [HalfEdge.getOppositeHalfEdge()](./HalfEdge_object/HalfEdge2.md) | Gets the HalfEdge object on the other side of the edge. |
| [HalfEdge.getPrev()](./HalfEdge_object/HalfEdge3.md) | Gets the preceding HalfEdge object on the current contour. |
| [HalfEdge.getVertex()](./HalfEdge_object/HalfEdge4.md) | Gets the [Vertex object](./Vertex_object/Vertex_summary.md) at the head of the HalfEdge object. |

#### Property summary

The following properties are available for the HalfEdge object:

| **Property** | **Description** |
| --- | --- |
| [HalfEdge.id](./HalfEdge_object/HalfEdge5.md) | Read-only; a unique integer identifier for the HalfEdge object. |

### Instance summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > Instance object

#### Availability

Flash MX 2004.

#### Description

Instance is a subclass of the [Element object](./Element_object/Element_summary.md).

#### Property summary

In addition to all of the Element object properties, Instance has the following properties:

| **Property** | **Description** |
| --- | --- |
| [Instance.instanceType](./Instance_object/Instance.md) | Read-only; a string that represents the type of instance. |
| [Instance.libraryItem](./Instance_object/Instance1.md) | Library item used to instantiate this instance. |

### Item summary

#### Availability

Flash MX 2004.

#### Description

The Item object is an abstract base class. Anything in the library derives from Item. See also [Library object](./Library_object/Library_summary.md).

#### Method summary

The following methods are available for the Item object:

| **Method** | **Description** |
| --- | --- |
| [Item.addData()](./Item_object/Item.md) | Adds specified data to a library item. |
| [Item.getData()](./Item_object/Item1.md) | Retrieves the value of the specified data. |
| [Item.getPublishData()](./Item_object/Item2.md) | Indicates whether publishing of the specified persistent data is enabled for the specified format on a specified library item. |
| [Item.hasData()](./Item_object/Item3.md) | Determines whether the library item has the named data. |
| [Item.removeData()](./Item_object/Item14.md) | Removes persistent data from the library item. |
| [Item.setPublishData()](./Item_object/Item15.md) | Enables publishing of persistent data for a library item. |

#### Property summary

The following properties are available for the Item object:

| **Property** | **Description** |
| --- | --- |
| [Item.itemType](./Item_object/Item4.md) | Read-only; a string that specifies the type of element. |
| [Item.linkageBaseClass](./Item_object/Item5.md) | A string that specifies the ActionScript 3.0 class that will be associated with the symbol. |
| [Item.linkageClassName](./Item_object/Item6.md) | A string that specifies the ActionScript 2.0 class that will be associated with the symbol. |
| [Item.linkageExportForAS](./Item_object/Item7.md) | A Boolean value. If true, the item is exported for ActionScript. |
| [Item.linkageExportForRS](./Item_object/Item8.md) | A Boolean value. If true, the item is exported for run-time sharing. |
| [Item.linkageExportInFirstFrame](./Item_object/Item9.md) | A Boolean value. If true, the item is exported in the first frame. |
| [Item.linkageIdentifier](./Item_object/Item10.md) | A string that specifies the name Animate will use to identify the asset when linking to the destination SWF file. |
| [Item.linkageImportForRS](./Item_object/Item11.md) | A Boolean value. If true, the item is imported for run-time sharing. |
| [Item.linkageURL](./Item_object/Item12.md) | A string that specifies the URL where the SWF file containing the shared asset is located. |
| [Item.name](./Item_object/Item13.md) | A string that specifies the name of the library item, which includes the folder structure. |

### Layer summary

#### Availability

Flash MX 2004.

#### Description

The Layer object represents a layer in the timeline. The [Timeline.layers](./Timeline_object/Timeline31.md) property contains an array of Layer objects, which can be accessed by `fl.getDocumentDOM().getTimeline().layers`.

#### Method summary

The following methods are available for the Item object:

| **Method** | **Description** |
| --- | --- |
| [Layer.getBlendModeAtFrame()](./Layer_object/Layer13.md) | A string value that specifies the blend mode at frame. |
| [Layer.getColorTransformAtFrame()](./Layer_object/Layer14.md) | Based on the mode, the paramters will be updated here. For example, if tint is present, the value corresponding to tint only will be present along with the color matrix values.. |
| [Layer.getFiltersAtFrame()](./Layer_object/Layer15.md) | An array that contains a list of filters applied to the frame at frameIndex. |
| [Layer.getZDepthAtFrame()](./Layer_object/Layer11.md) | An integer value that specifies the ZDepth valur at the frame. |
| [Layer.setBlendModeAtFrame()](./Layer_object/Layer16.md) | FrameNumber :frame index,  ZVal:int. |
| [Layer.setColorTransformAtFrame()](./Layer_object/Layer17.md) | frameIndex – int, cxFormObject - The cxform to be set . |
| [Layer. setFiltersAtFrame()](./Layer_object/Layer18.md) | frameIndex – int, filterArray - The array of filters to be set. |
| [Layer.setZDepthAtFrame()](./Layer_object/Layer12.md) | Enables to set ZDepth value at the frame. |

#### Property summary

The following properties are available for the Layer object:

| **Property** | **Description** |
| --- | --- |
| [Layer.animationType](./Layer_object/Layer.md) | The layer type: "none", "motion object", or "IK pose". |
| [Layer.color](./Layer_object/Layer1.md) | A string, hexadecimal value, or integer that specifies the color assigned to outline the layer. |
| [Layer.frameCount](./Layer_object/Layer2.md) | Read-only; an integer that specifies the number of frames in the layer. |
| [Layer.frames](./Layer_object/Layer3.md) | Read-only; an array of Frame objects. |
| [Layer.height](./Layer_object/Layer4.md) | An integer that specifies the percentage layer height; equivalent to the Layer height value in the Layer Properties dialog box. |
| [Layer.layerType](./Layer_object/Layer5.md) | A string that specifies the current use of the layer; equivalent to the Type setting in the Layer Properties dialog box. |
| [Layer.locked](./Layer_object/Layer6.md) | A Boolean value that specifies the locked status of the layer. |
| [Layer.name](./Layer_object/Layer7.md) | A string that specifies the name of the layer. |
| [Layer.outline](./Layer_object/Layer8.md) | A Boolean value that specifies the status of outlines for all objects in the layer. |
| [Layer.parentLayer](./Layer_object/Layer9.md) | A Layer object that represents the layer’s containing folder, guiding, or masking layer. |
| [Layer.visible](./Layer_object/Layer10.md) | A Boolean value that specifies whether the layer’s objects on the Stage are shown or hidden. |

### LayerParenting summary

#### Availability

Adobe Animate 2020.

#### Method summary

You can use the following methods with the layer object:

| **Method** | **Usage** |
| --- | --- |
| [Layer.getRigMatrixAtFrame()](./Layer_Parenting_Object/LayerParenting3.md) | layer.getRigMatrixAtFrame(frameIndex) |
| [Layer.getRigParentAtFrame()](./Layer_Parenting_Object/LayerParenting1.md) | layer.getRigParentAtFrame(frameIndex) |
| [Layer.setRigParentAtFrame()](./Layer_Parenting_Object/LayerParenting2.md) | layer.setRigParentAtFrame(frameIndex, layer) |

### Library summary

#### Availability

Flash MX 2004.

#### Description

The Library object represents the Library panel. It is a property of the Document object and can be accessed by [Document.library](./Document_object/Document98.md).

The Library object contains an array of items of different types, including symbols, bitmaps, sounds, and video.

#### Method summary

The following methods are available for the Library object:

| **Method** | **Description** |
| --- | --- |
| [Library.addItemToDocument()](./Library_object/Library.md) | Adds the current or specified item to the Stage at the specified position. |
| [Library.addNewItem()](./Library_object/Library1.md) | Creates a new item of the specified type in the Library panel and sets the new item to the currently selected item. |
| [Library.deleteItem()](./Library_object/Library2.md) | Deletes the current items or a specified item from the Library panel. |
| [Library.duplicateItem()](./Library_object/Library3.md) | Makes a copy of the currently selected or specified item. |
| [Library.editItem()](./Library_object/Library4.md) | Opens the currently selected or specified item in Edit mode. |
| [Library.findItemIndex()](./Library_object/Library5.md) | Returns the library item’s index value (zero-based). |
| [Library.getItemProperty()](./Library_object/Library6.md) | Gets the property for the selected item. |
| [Library.getItemType()](./Library_object/Library7.md) | Gets the type of object currently selected or specified by a library path. |
| [Library.getSelectedItems()](./Library_object/Library8.md) | Gets the array of all currently selected items in the library. |
| [Library.itemExists()](./Library_object/Library9.md) | Checks to see if a specified item exists in the library. |
| [Library.moveToFolder()](./Library_object/Library11.md) | Moves the currently selected or specified library item to a specified folder. |
| [Library.newFolder()](./Library_object/Library12.md) | Creates a new folder with the specified name, or a default name (*"untitled folder \#"*) if no folderName parameter is provided, in the currently selected folder. |
| [Library.renameItem()](./Library_object/Library13.md) | Renames the currently selected library item in the Library panel. |
| [Library.selectAll()](./Library_object/Library14.md) | Selects or deselects all items in the library. |
| [Library.selectItem()](./Library_object/Library15.md) | Selects a specified library item. |
| [Library.selectNone()](./Library_object/Library16.md) | Deselects all the library items. |
| [Library.setItemProperty()](./Library_object/Library17.md) | Sets the property for all selected library items (ignoring folders). |
| [Library.updateItem()](./Library_object/Library19.md) | Updates the specified item. |

#### Property summary

The following property is available for the Library object:

| **Property** | **Description** |
| --- | --- |
| [Library.items](./Library_object/Library10.md) | An array of Item objects in the library. |
| [Library.unusedItems](./Library_object/Library18.md) | An array of library Items that are not used in the document. |

### Math summary

#### Availability

Flash MX 2004.

#### Description

The Math object is available as a read-only property of the [Flash object](./Flash_object/Flash_summary.md); see [Flash.Math](./Flash_object/Flash41.md). This object provides methods that perform common mathematical operations.

#### Method summary

The following methods are available for the Math object:

| **Method** | **Description** |
| --- | --- |
| [Math.concatMatrix()](./Math_object/Math.md) | Performs a matrix concatenation and returns the result. |
| [Math.invertMatrix()](./Math_object/Math1.md) | Returns the inverse of the specified matrix. |
| [Math.pointDistance()](./Math_object/Math2.md) | Computes the distance between two points. |
| [Math.transformPoint()](./Math_object/Math3.md) | Applies a matrix to a point. |

### Matrix summary

#### Availability

Flash MX 2004.

#### Description

The Matrix object represents a transformation matrix.

#### Property summary

The following properties are available for the Matrix object:

| **Property** | **Description** |
| --- | --- |
| [Matrix.a](./Matrix_object/Matrix.md) | A floating-point value that specifies the (0,0) element in the transformation matrix. |
| [Matrix.b](./Matrix_object/Matrix1.md) | A floating-point value that specifies the (0,1) element in the matrix. |
| [Matrix.c](./Matrix_object/Matrix2.md) | A floating-point value that specifies the (1,0) element in the matrix. |
| [Matrix.d](./Matrix_object/Matrix3.md) | A floating-point value that specifies the (1,1) element in the matrix. |
| [Matrix.tx](./Matrix_object/Matrix4.md) | A floating-point value that specifies the *x*-axis location of a symbol’s registration point or the center of a shape. |
| [Matrix.ty](./Matrix_object/Matrix5.md) | A floating-point value that specifies the *y*-axis location of a symbol’s registration point or the center of a shape. |

### OutputPanel summary

#### Availability

Flash MX 2004.

#### Description

This object represents the Output panel, which displays troubleshooting information such as syntax errors. To access this object, use [Flash.outputPanel](./Flash_object/Flash47.md).

#### Method summary

The outputPanel object uses the following methods:

| **Method** | **Description** |
| --- | --- |
| [OutputPanel.clear()](./OutputPanel_object/OutputPanel.md) | Clears the contents of the Output panel. |
| [OutputPanel.save()](./OutputPanel_object/OutputPanel1.md) | Saves the contents of the Output panel to a local text file. |
| [OutputPanel.trace()](./OutputPanel_object/OutputPanel2.md) | Adds a line to the contents of the Output panel, terminated by a new line. |

### OvalObject summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > [Shape object](./Shape_object/Shape_summary.md) > Oval object

#### Availability

Flash CS3 Professional.

#### Description

The Oval object is a shape that is drawn using the Oval Primitive tool. To determine if an item is an Oval object, use
[Shape.isOvalObject](./Shape_object/Shape9.md).

#### Property summary

In addition to the [Shape object](./Shape_object/Shape_summary.md) properties, you can use the following properties with the Oval object. To set the properties of an Oval object, use [Document.setOvalObjectProperty()](./Document_object/Document590.md).

| **Property** | **Description** |
| --- | --- |
| [OvalObject.closePath](./OvalObject_object/OvalObject.md) | Read-only; a Boolean value that specifies whether the Close Path check box in the Property inspector is selected. |
| [OvalObject.endAngle](./OvalObject_object/OvalObject1.md) | Read-only; a float value that specifies the end angle of the Oval object. |
| [OvalObject.innerRadius](./OvalObject_object/OvalObject2.md) | Read-only; a float value that specifies the inner radius of the Oval object as a percentage. |
| [OvalObject.startAngle](./OvalObject_object/OvalObject3.md) | Read-only; a float value that specifies the start angle of the Oval object. |

### Parameter summary

#### Availability

Flash MX 2004.

#### Description

The Parameter object type is accessed from the [ComponentInstance.parameters](./ComponentInstance_object/ComponentInstance.md) array (which corresponds to the component Property inspector in the authoring tool).

#### Method summary

The following methods are available for the Parameter object:

| **Method** | **Description** |
| --- | --- |
| [Parameter.insertItem()](./Parameter_object/Parameter1.md) | Inserts an item into an object or array. |
| [Parameter.removeItem()](./Parameter_object/Parameter4.md) | Removes an element of the object or array type of a screen or component parameter. |

#### Property summary

The following properties are available for the Parameter object:

| **Property** | **Description** |
| --- | --- |
| [Parameter.category](./Parameter_object/Parameter.md) | A string that specifies the category property for the screen parameter or componentInstance parameter. |
| [Parameter.listIndex](./Parameter_object/Parameter2.md) | An integer that specifies the value of the selected list item. |
| [Parameter.name](./Parameter_object/Parameter3.md) | Read-only; a string that specifies the name of the parameter. |
| [Parameter.value](./Parameter_object/Parameter5.md) | Corresponds to the Value field in the Parameters tab of the Component inspector, the Parameters tab of the Property inspector, or the screen Property inspector. |
| [Parameter.valueType](./Parameter_object/Parameter6.md) | Read-only; a string that indicates the type of the screen or component parameter. |
| [Parameter.verbose](./Parameter_object/Parameter7.md) | Specifies where the parameter is displayed. |

### Path summary

#### Availability

Flash MX 2004.

#### Description

The Path object defines a sequence of line segments (straight, curved, or both), which you typically use when creating extensible tools.

The following example shows an instance of a Path object being returned from the [Flash object](./Flash_object/Flash_summary.md):

```javascript
var path = fl.drawingLayer.newPath();
```

See also the [DrawingLayer object](./DrawingLayer_object/DrawingLayer_summary.md).

#### Method summary

The following methods are available for the Path object:

| **Method** | **Description** |
| --- | --- |
| [Path.addCubicCurve()](./Path_object/Path.md) | Appends a cubic Bézier curve segment to the path. |
| [Path.addCurve()](./Path_object/Path1.md) | Appends a quadratic Bézier segment to the path. |
| [Path.addPoint()](./Path_object/Path2.md) | Adds a point to the path. |
| [Path.clear()](./Path_object/Path3.md) | Removes all points from the path. |
| [Path.close()](./Path_object/Path4.md) | Appends a point at the location of the first point of the path and extends the path to that point, which closes the path. |
| [Path.makeShape()](./Path_object/Path5.md) | Creates a shape on the Stage by using the current stroke and fill settings. |
| [Path.newContour()](./Path_object/Path6.md) | Starts a new contour in the path. |

#### Property summary

The following properties are available for the Path object:

| **Property** | **Description** |
| --- | --- |
| [Path.nPts](./Path_object/Path7.md) | Read-only; an integer representing the number of points in the path. |

### PresetItem summary

#### Availability

Flash CS4 Professional.

#### Description

The PresetItem object represents an item (preset or folder) in the Motion Presets panel (Window > Motion Presets). The array of PresetItem objects is a property of the PresetPanel object ([PresetPanel.items](./PresetPanel_object/PresetPanel9.md)).

All properties of the PresetItem object are read only. To perform tasks such as deleting, renaming, or moving items, use the methods of the [PresetPanel object](./PresetPanel_object/PresetPanel_summary.md).

#### Property summary

You can use the following properties with the PresetItem object:

| **Property** | **Description** |
| --- | --- |
| [PresetItem.isDefault](./PresetItem_object/PresetItem.md) | Specifies whether the item is installed along with Flash or is a custom item that you or someone else has created. |
| [PresetItem.isFolder](./PresetItem_object/PresetItem1.md) | Specifies whether the item in the Motion Presets panel is a folder or a preset. |
| [PresetItem.level](./PresetItem_object/PresetItem2.md) | The level of the item in the folder structure of the Motion Presets panel. |
| [PresetItem.name](./PresetItem_object/PresetItem3.md) | The name of the preset or folder, without path information. |
| [PresetItem.open](./PresetItem_object/PresetItem4.md) | Specifies whether a folder in the Motion Presets panel is currently expanded. |
| [PresetItem.path](./PresetItem_object/PresetItem5.md) | The path to the item in the Motion Presets panel folder tree, and the item name. |

### PresetPanel summary

#### Availability

Flash CS4 Professional.

#### Description

The PresetPanel object represents the Motion Presets panel (Window > Motion Presets).

It is a property of the [Flash object](./Flash_object/Flash_summary.md) and can be accessed by [Flash.presetPanel](./Flash_object/Flash49.md).

#### Method summary

You can use the following methods with the PresetPanel object:

| **Method** | **Description** |
| --- | --- |
| [PresetPanel.addNewItem()](./PresetPanel_object/PresetPanel.md) | If a single motion tween is currently selected on the Stage, adds that motion to the Motion Presets panel. |
| [PresetPanel.applyPreset()](./PresetPanel_object/PresetPanel1.md) | Applies the specified or currently selected preset to the currently selected item on the Stage. |
| [PresetPanel.deleteFolder()](./PresetPanel_object/PresetPanel2.md) | Deletes the specified folder and any of its subfolders from the folder tree of the Motion Presets panel. |
| [PresetPanel.deleteItem()](./PresetPanel_object/PresetPanel3.md) | Deletes the specified preset from the Motion Presets panel. |
| [PresetPanel.expandFolder()](./PresetPanel_object/PresetPanel4.md) | Expands or collapses the currently selected folder or folders in the Motion Presets panel. |
| [PresetPanel.exportItem()](./PresetPanel_object/PresetPanel5.md) | Exports the currently selected or the specified preset to an XML file. |
| [PresetPanel.findItemIndex()](./PresetPanel_object/PresetPanel6.md) | Returns an integer that represents the index location of an item in the Motion Presets panel. |
| [PresetPanel.getSelectedItems()](./PresetPanel_object/PresetPanel7.md) | Returns an array of presetItem objects corresponding to the currently selected items in the Motion Presets panel. |
| [PresetPanel.importItem()](./PresetPanel_object/PresetPanel8.md) | Adds a preset to the Motion Presets panel from a specified XML file. |
| [PresetPanel.moveToFolder()](./PresetPanel_object/PresetPanel10.md) | Moves the specified item to the specified folder. |
| [PresetPanel.newFolder()](./PresetPanel_object/PresetPanel11.md) | Creates a folder in the folder tree of the Motion Presets panel. |
| [PresetPanel.renameItem()](./PresetPanel_object/PresetPanel12.md) | Renames the currently selected preset or folder to a specified name. |
| [PresetPanel.selectItem()](./PresetPanel_object/PresetPanel13.md) | Selects or deselects an item in the Motion Presets panel. |

#### Property summary

You can use the following property with the presetPanel object:

| **Property** | **Description** |
| --- | --- |
| [PresetPanel.items](./PresetPanel_object/PresetPanel9.md) | An array of presetItem objects in the Motion Presets panel. |

### RectangleObject summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > [Shape object](./Shape_object/Shape_summary.md) > Rectangle object

#### Availability

Flash CS3 Professional.

#### Description

The Rectangle object is a shape that is drawn using the Rectangle Primitive tool. To determine if an item is a Rectangle object, use [Shape.isRectangleObject](./Shape_object/Shape10.md).

#### Property summary

In addition to the [Shape object](./Shape_object/Shape_summary.md) properties, you can use the following properties with the Rectangle object. To set the properties of a Rectangle object, use [Document.setRectangleObjectProperty()](./Document_object/Document9643.md).

| **Property** | **Description** |
| --- | --- |
| [RectangleObject.bottomLeftRadius](./RectangleObject_object/RectangleObject.md) | Read-only; a float value that sets the radius of the bottom-left corner of the Rectangle object. |
| [RectangleObject.bottomRightRadius](./RectangleObject_object/RectangleObject1.md) | Read-only; a float value that sets the radius of the bottom-right corner of the Rectangle object. |
| [RectangleObject.lockFlag](./RectangleObject_object/RectangleObject2.md) | Read-only; a Boolean value that determines whether different corners of the rectangle can have different radius values. |
| [RectangleObject.topLeftRadius](./RectangleObject_object/RectangleObject3.md) | Read-only; a float value that sets the radius of all corners of the rectangle or that sets only the radius of the top-left corner of the Rectangle object. |
| [RectangleObject.topRightRadius](./RectangleObject_object/RectangleObject4.md) | Read-only; a float value that sets the radius of the top-right corner of the Rectangle object. |

### Shape summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > Shape object

#### Availability

Flash MX 2004.

#### Description

The Shape object is a subclass of the [Element object](./Element_object/Element_summary.md). The Shape object provides more precise control than the drawing APIs when manipulating or creating geometry on the Stage. This control is necessary so that scripts can create useful effects and other drawing commands.

All Shape methods and properties that change a shape or any of its subordinate parts must be placed between [Shape.beginEdit()](./Shape_object/Shape.md) and [Shape.endEdit()](./Shape_object/Shape4.md) calls to function correctly.

#### Method summary

In addition to the Element object methods, you can use the following methods with the Shape object:

| **Method** | **Description** |
| --- | --- |
| [Shape.getCubicSegmentPoints()](./Shape_object/Shape5.md) | Returns an array of points that define a cubic curve. |
| [Shape.beginEdit()](./Shape_object/Shape.md) | Defines the start of an edit session. |
| [Shape.deleteEdge()](./Shape_object/Shape2.md) | Deletes the specified edge. |
| [Shape.endEdit()](./Shape_object/Shape4.md) | Defines the end of an edit session for the shape. |

#### Property summary

In addition to the Element object properties, the following properties are available for the Shape object:

| **Property** | **Description** |
| --- | --- |
| [Shape.contours](./Shape_object/Shape1.md) | Read-only; an array of Contour objects for the shape (see [Contour object](./Contour_object/Contour_summary.md)). |
| [Shape.edges](./Shape_object/Shape3.md) | Read-only; an array of Edge objects (see [Edge object](./Edge_object/Edge_summary.md)). |
| [Shape.isDrawingObject](./Shape_object/Shape6.md) | Read-only; if true, the shape is a drawing object. |
| [Shape.isFloating](./Shape_object/Shape7.md) | Read-only; if true, the shape is floating above the parent frame's (or group's) shape. |
| [Shape.isGroup](./Shape_object/Shape8.md) | Read-only; if true, the shape is a group. |
| [Shape.isOvalObject](./Shape_object/Shape9.md) | Read-only; if true, the shape is a primitive Oval object (was created using the Oval tool). |
| [Shape.isRectangleObject](./Shape_object/Shape10.md) | Read-only; if true, the shape is a primitive Rectangle object (was created using the Rectangle tool). |
| [Shape.members](./Shape_object/Shape11.md) | An array of objects in the currently selected group. |
| [Shape.numCubicSegments](./Shape_object/Shape12.md) | Read-only; the number of cubic segments in the shape. |
| [Shape.vertices](./Shape_object/Shape13.md) | Read-only; an array of Vertex objects (see [Vertex object](./Vertex_object/Vertex_summary.md)). |

### SoundItem summary

**Inheritance** [Item object](./Item_object/Item_summary.md) > SoundItem object

#### Availability

Flash MX 2004.

#### Description

The SoundItem object is a subclass of the [Item object](./Item_object/Item_summary.md). It represents a library item used to create a sound (see also [Frame.soundLibraryItem](./Frame_object/Frame31.md)).

#### Method summary

In addition to the Item object methods, the SoundItem object has the following method:

| **Method** | **Description** |
| --- | --- |
| [SoundItem.exportToFile()](./SoundItem_object/SoundItem4.md) | Exports the specified item to an MP3 or WAV file (Macintosh and Windows). |

#### Property summary

In addition to the Item object properties, the following properties are available for the SoundItem object:

| **Property** | **Description** |
| --- | --- |
| [SoundItem.bitRate](./SoundItem_object/SoundItem.md) | A string that specifies the bit rate of a sound in the library. Available only for the MP3 compression type. |
| [SoundItem.bits](./SoundItem_object/SoundItem1.md) | A string that specifies the bits value for a sound in the library that has ADPCM compression. |
| [SoundItem.compressionType](./SoundItem_object/SoundItem2.md) | A string that specifies the compression type for a sound in the library. |
| [SoundItem.convertStereoToMono](./SoundItem_object/SoundItem3.md) | A Boolean value available only for MP3 and Raw compression types. |
| [SoundItem.fileLastModifiedDate](./SoundItem_object/SoundItem5.md) | Read-only; a string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970, and the modification date of the original file (on disk) at the time the file was imported to the library. |
| [SoundItem.lastModifiedDate](./SoundItem_object/SoundItem6.md) | Read-only; the modification date of the sound item in the Library. |
| [SoundItem.originalCompressionType](./SoundItem_object/SoundItem7.md) | Read-only; a string that specifies whether the specified item was imported as an MP3 file. |
| [SoundItem.quality](./SoundItem_object/SoundItem8.md) | A string that specifies the playback quality of a sound in the library. Available only for the MP3 compression type. |
| [SoundItem.sampleRate](./SoundItem_object/SoundItem9.md) | A string that specifies the sample rate for the audio clip. |
| [SoundItem.sourceFileExists](./SoundItem_object/SoundItem10.md) | Read-only; a Boolean value that specifies whether the file that was imported to the Library still exists in the location from where it was imported. |
| [SoundItem.sourceFileIsCurrent](./SoundItem_object/SoundItem11.md) | Read-only; a Boolean value that specifies whether the file modification date of the Library item is the same as the modification date on disk of the file that was imported. |
| [SoundItem.sourceFilePath](./SoundItem_object/SoundItem12.md) | Read-only; a string, expressed as a file:/// URI, that represents the path and name of the file that was imported into the Library. |
| [SoundItem.useImportedMP3Quality](./SoundItem_object/SoundItem13.md) | A Boolean value; if true, all other properties are ignored, and the imported MP3 quality is used. |

### SpriteSheetExporter summary

**Inheritance** [Item object](./Item_object/Item_summary.md) > SpriteSheetExporter object

#### Availability

Flash Pro CS6.

#### Description

The SpriteSheetExporter object is a subclass of the [Item object](./Item_object/Item_summary.md).

#### Method summary

In addition to the Item object methods, you can use the following methods with the SpriteSheetExporter object:

| **Method** | **Description** |
| --- | --- |
| [SpriteSheetExporter.addBitmap()](./SpriteSheetExporter_object/SpriteSheetExporter.md) | Adds a bitmap or bitmapItem to the sprite sheet. |
| [SpriteSheetExporter.addSymbol()](./SpriteSheetExporter_object/SpriteSheetExporter1.md) | Adds a symbol to be used to generate the sprite sheet. |
| [SpriteSheetExporter.beginExport()](./SpriteSheetExporter_object/SpriteSheetExporter7.md) | Initializes the SpriteSheetExporter to create a new sprite sheet. |
| [SpriteSheetExporter.changeSymbol()](./SpriteSheetExporter_object/SpriteSheetExporter14.md) | Changes which symbol frames will be added to the sprite sheet. |
| [SpriteSheetExporter.exportSpriteSheet()](./SpriteSheetExporter_object/SpriteSheetExporter15.md) | Export the sprite sheet into a an image file. |
| [SpriteSheetExporter.removeBitmap()](./SpriteSheetExporter_object/SpriteSheetExporter22.md) | Remove a bitmap object from the sprite sheet. |
| [SpriteSheetExporter.removeSymbol()](./SpriteSheetExporter_object/SpriteSheetExporter23.md) | Remove a symbol from the sprite sheet. |

#### Property summary

In addition to the Item object properties, the following properties are available for the SpriteSheetExporter object:

| **Property** | **Description** |
| --- | --- |
| [SpriteSheetExporter.algorithm](./SpriteSheetExporter_object/SpriteSheetExporter2.md) | Sets the encoding algorithm for the sprite sheet. |
| [SpriteSheetExporter.allowRotate](./SpriteSheetExporter_object/SpriteSheetExporter3.md) | Allows sprites to be rotated when added to the sprite sheet. |
| [SpriteSheetExporter.allowTrimming](./SpriteSheetExporter_object/SpriteSheetExporter4.md) | Allows trimming of whitespace around sprites. |
| [SpriteSheetExporter.app](./SpriteSheetExporter_object/SpriteSheetExporter5.md) | A string indicating the name of the application generating the sprite sheet. |
| [SpriteSheetExporter.autoSize](./SpriteSheetExporter_object/SpriteSheetExporter6.md) | Automatically size the sprite sheet to fit all sprites. |
| [SpriteSheetExporter.borderPadding](./SpriteSheetExporter_object/SpriteSheetExporter8.md) | The amount of padding around the sprite sheet borders, in pixels. |
| [SpriteSheetExporter.canBorderPad](./SpriteSheetExporter_object/SpriteSheetExporter9.md) | A Boolean value indicating whether border padding is supported by the framework specified by the layoutFormat property. |
| [SpriteSheetExporter.canRotate](./SpriteSheetExporter_object/SpriteSheetExporter10.md) | A Boolean value indicating whether sprite rotation is supported by the framework specified by the layoutFormat property. |
| [SpriteSheetExporter.canShapePad](./SpriteSheetExporter_object/SpriteSheetExporter12.md) | A Boolean value indicating whether shape padding is supported by the framework specified by the layoutFormat property. |
| [SpriteSheetExporter.canStackDuplicateFrames](./SpriteSheetExporter_object/SpriteSheetExporter13.md) | A Boolean value indicating whether sprite stacking is supported by the framework specified by the layoutFormat property. |
| [SpriteSheetExporter.canTrim](./SpriteSheetExporter_object/SpriteSheetExporter11.md) | A Boolean value indicating whether shape trimming is supported by the framework specified by the layoutFormat property. |
| [SpriteSheetExporter.format](./SpriteSheetExporter_object/SpriteSheetExporter16.md) | The format of the sprite sheet image file. |
| [SpriteSheetExporter.image](./SpriteSheetExporter_object/SpriteSheetExporter17.md) | The name of the image file of the sprite sheet. |
| [SpriteSheetExporter.layoutFormat](./SpriteSheetExporter_object/SpriteSheetExporter18.md) | The format of the sprite sheet metadata. |
| [SpriteSheetExporter.maxSheetHeight](./SpriteSheetExporter_object/SpriteSheetExporter19.md) | Controls the maximum height of the generated sprite sheet when autoSize = true, clipped to a maximum value of 8192. |
| [SpriteSheetExporter.maxSheetWidth](./SpriteSheetExporter_object/SpriteSheetExporter20.md) | Controls the maximum width of the generated sprite sheet when autoSize = true, clipped to a maximum value of 8192. |
| [SpriteSheetExporter.overflowed](./SpriteSheetExporter_object/SpriteSheetExporter21.md) | A Boolean value indicating whether all the specified frames can fit in the specified sprite sheet size. |
| [SpriteSheetExporter.shapePadding](./SpriteSheetExporter_object/SpriteSheetExporter24.md) | The amount of padding around each sprite, in pixels. |
| [SpriteSheetExporter.sheetHeight](./SpriteSheetExporter_object/SpriteSheetExporter25.md) | The height of the sprite sheet, in pixels. |
| [SpriteSheetExporter.sheetWidth](./SpriteSheetExporter_object/SpriteSheetExporter26.md) | The width of the sprite sheet, in pixels. |
| [SpriteSheetExporter.stackDuplicate](./SpriteSheetExporter_object/SpriteSheetExporter27.md) | A Boolean value indicating whether to stack identical symbol frames in the sprite sheet. |
| [SpriteSheetExporter.version](./SpriteSheetExporter_object/SpriteSheetExporter28.md) | The version number of the application creating the sprite sheet. |

### Stroke summary

#### Availability

Flash MX 2004.

#### Description

The Stroke object contains all the settings for a stroke, including the custom settings. This object represents the information contained in the Property inspector. Using the Stroke object together with the [Document.setCustomStroke()](./Document_object/Document480.md) method, you can change the stroke settings for the Tools panel, the Property inspector, and the current selection.

You can also get the stroke settings of the Tools panel and Property inspector, or of the current selection, by using the [Document.getCustomStroke()](./Document_object/Document75.md) method.

This object always has the following four properties: style, thickness, color, and breakAtCorners. (In Flash CS3, the breakAtCorners property was deprecated in favor of [Stroke.joinType](./Stroke_object/Stroke11.md).) Other properties can be set, depending on the value of the [Stroke.style](./Stroke_object/Stroke20.md) property.

#### Property summary

The following properties are available for the Stroke object:

| **Property** | **Description** |
| --- | --- |
| [Stroke.breakAtCorners](./Stroke_object/Stroke.md) | A Boolean value, same as the Sharp Corners setting in the custom Stroke Style dialog box. |
| [Stroke.capType](./Stroke_object/Stroke1.md) | A string that specifies the type of cap for the stroke. |
| [Stroke.color](./Stroke_object/Stroke2.md) | A string, hexadecimal value, or integer that represents the stroke color. |
| [Stroke.curve](./Stroke_object/Stroke3.md) | A string that specifies the type of hatching for the stroke. |
| [Stroke.dash1](./Stroke_object/Stroke4.md) | An integer that specifies the lengths of the solid part of a dashed line. |
| [Stroke.dash2](./Stroke_object/Stroke5.md) | An integer that specifies the lengths of the blank part of a dashed line. |
| [Stroke.density](./Stroke_object/Stroke6.md) | A string that specifies the density of a stippled line. |
| [Stroke.dotSize](./Stroke_object/Stroke7.md) | A string that specifies the dot size of a stippled line. |
| [Stroke.dotSpace](./Stroke_object/Stroke8.md) | An integer that specifies the spacing between dots in a dotted line. |
| [Stroke.hatchThickness](./Stroke_object/Stroke9.md) | A string that specifies the thickness of a hatch line. |
| [Stroke.jiggle](./Stroke_object/Stroke10.md) | A string that specifies the jiggle property of a hatched line. |
| [Stroke.joinType](./Stroke_object/Stroke11.md) | A string that specifies the type of join for the stroke. |
| [Stroke.length](./Stroke_object/Stroke12.md) | A string that specifies the length of a hatch line. |
| [Stroke.miterLimit](./Stroke_object/Stroke13.md) | A float value that specifies the angle above which the tip of the miter will be truncated by a segment. |
| [Stroke.pattern](./Stroke_object/Stroke14.md) | A string that specifies the pattern of a ragged line. |
| [Stroke.rotate](./Stroke_object/Stroke15.md) | A string that specifies the rotation of a hatch line. |
| [Stroke.scaleType](./Stroke_object/Stroke16.md) | A string that specifies the type of scale to be applied to the stroke. |
| [Stroke.shapeFill](./Stroke_object/Stroke17.md) | A [Fill object](./Fill_object/Fill_summary.md) that represents the fill settings of the stroke. |
| [Stroke.space](./Stroke_object/Stroke18.md) | A string that specifies the spacing of a hatched line. |
| [Stroke.strokeHinting](./Stroke_object/Stroke19.md) | A Boolean value that specifies whether stroke hinting is set on the stroke. |
| [Stroke.style](./Stroke_object/Stroke20.md) | A string that describes the stroke style. |
| [Stroke.thickness](./Stroke_object/Stroke21.md) | An integer that specifies the stroke size. |
| [Stroke.variation](./Stroke_object/Stroke22.md) | A string that specifies the variation of a stippled line. |
| [Stroke.waveHeight](./Stroke_object/Stroke23.md) | A string that specifies the wave height of a ragged line. |
| [Stroke.waveLength](./Stroke_object/Stroke24.md) | A string that specifies the wave length of a ragged line. |

### SwfPanel summary

#### Availability

Flash CS4 Professional.

#### Description

The SwfPanel object represents a Window SWF panel. Window SWF panels are SWF files that implement applications you can run from the Flash authoring environment; they are available from the Window > Other Panels menu. By default, Window SWF panels are stored in a subfolder of the Configuration folder (see ["Saving JSFL files"](./Introduction/Working_with_the_JavaScript_API.md#saving-jsfl-files)).

For example, on Windows XP, the folder is in *boot drive*\\Documents and Settings\\*user*\\Local Settings\\Application Data\\Adobe\\Flash CS4\\*language*\\Configuration\\WindowSWF.

A sample Window SWF panel is available; see ["Sample Trace Bitmap panel"](./Introduction/Sample_implementations.md#sample-trace-bitmap-panel). The array of registered Window SWF panels is stored in the [Flash.swfPanels](./Flash_object/Flash74.md) property.

#### Method summary

You can use the following method with the SwfPanel object:

| **Method** | **Description** |
| --- | --- |
| [SwfPanel.call()](./SwfPanel_object/SwfPanel.md) | Works in conjunction with the ActionScript ExternalInterface.addCallback() and MMExecute() methods to communicate with the SWF panel from the authoring environment. |
| [SwfPanel.reload()](./SwfPanel_object/SwfPanel5.md) | Reloads content in the SWF panel. |
| [SwfPanel.setFocus()](./SwfPanel_object/SwfPanel6.md) | Sets the keyboard focus to the specified SWF panel. |

#### Property summary

You can use the following properties with the SwfPanel object:

| **Property** | **Description** |
| --- | --- |
| [SwfPanel.dpiScaleFactorX](./SwfPanel_object/SwfPanel1.md) | A string that contains the DPI scale factor (scaleX) for SwfPanel. |
| [SwfPanel.dpiScaleFactorY](./SwfPanel_object/SwfPanel2.md) | A string that contains the DPI scale factor (scaleY) for SwfPanel. |
| [SwfPanel.name](./SwfPanel_object/SwfPanel3.md) | Read-only; a string that represents the name of the specified Window SWF panel. |
| [SwfPanel.path](./SwfPanel_object/SwfPanel4.md) | Read-only; a string that represents the path to the SWF file used in the specified Window SWF panel. |

### SymbolInstance summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > [Instance object](./Instance_object/Instance_summary.md) > SymbolInstance object

#### Availability

Flash MX 2004.

#### Description

SymbolInstance is a subclass of the [Instance object](./Instance_object/Instance_summary.md) and represents a symbol in a frame.

#### Property summary

In addition to the Instance object properties, the SymbolInstance object has the following properties:

| **Property** | **Description** |
| --- | --- |
| [SymbolInstance.accName](./SymbolInstance_object/SymbolInstance.md) | A string that is equivalent to the Name field in the Accessibility panel. |
| [SymbolInstance.actionScript -dropped](./SymbolInstance_object/SymbolInstance1.md) | Dropped in Adobe Animate. |
| [SymbolInstance.backgroundColor](./SymbolInstance_object/SymbolInstance2.md) | A string specifying the matte color when Opaque is selected. |
| [SymbolInstance.bitmapRenderMode](./SymbolInstance_object/SymbolInstance3.md) | A string specifying the display type for a symbol instance. |
| [SymbolInstance.blendMode](./SymbolInstance_object/SymbolInstance4.md) | A string that specifies the blending mode to be applied to a movie clip symbol. |
| [SymbolInstance.brightness](./SymbolInstance_object/SymbolInstance5.md) | An integer that returns the value set in the color effect Property Inspector for brightness (percentage between -100 and 100) when colorMode == 'brightness'. |
| [SymbolInstance.buttonTracking](./SymbolInstance_object/SymbolInstance6.md) | A string (button symbols only) that sets the same property as the pop-up menu for Track as Button or Track As Menu Item in the Property inspector. |
| [SymbolInstance.cacheAsBitmap](./SymbolInstance_object/SymbolInstance7.md) | A Boolean value that specifies whether run-time bitmap caching is enabled. |
| [SymbolInstance.colorAlphaAmount](./SymbolInstance_object/SymbolInstance8.md) | An integer that is part of the color transformation for the instance, specifying the Advanced Effect Alpha settings; equivalent to using the Color > Advanced setting in the Property inspector and adjusting the controls on the right of the dialog box. |
| [SymbolInstance.colorAlphaPercent](./SymbolInstance_object/SymbolInstance9.md) | An integer that specifies part of the color transformation for the instance; equivalent to using the Color > Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). |
| [SymbolInstance.colorBlueAmount](./SymbolInstance_object/SymbolInstance10.md) | An integer that is part of the color transformation for the instance; equivalent to using the Color > Advanced setting in the instance Property inspector. |
| [SymbolInstance.colorBluePercent](./SymbolInstance_object/SymbolInstance11.md) | An integer that is part of the color transformation for the instance; equivalent to using the Color > Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). |
| [SymbolInstance.colorGreenAmount](./SymbolInstance_object/SymbolInstance12.md) | An integer that is part of the color transformation for the instance; equivalent to using the Color>Advanced setting in the instance Property inspector. Allowable values are from -255 to 255. |
| [SymbolInstance.colorGreenPercent](./SymbolInstance_object/SymbolInstance13.md) | Part of the color transformation for the instance;equivalent to using the Color>Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). |
| [SymbolInstance.colorMode](./SymbolInstance_object/SymbolInstance14.md) | A string that specifies the color mode as identified in the symbol Property inspector Color pop-up menu. |
| [SymbolInstance.colorRedAmount](./SymbolInstance_object/SymbolInstance15.md) | An integer that is part of the color transformation for the instance, equivalent to using the Color>Advanced setting in the instance Property inspector. |
| [SymbolInstance.colorRedPercent](./SymbolInstance_object/SymbolInstance16.md) | Part of the color transformation for the instance;equivalent to using the Color\>Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). |
| [SymbolInstance.description](./SymbolInstance_object/SymbolInstance17.md) | A string that is equivalent to the Description field in the Accessibility panel. |
| [SymbolInstance.filters](./SymbolInstance_object/SymbolInstance18.md) | An array of Filter objects (see [Filter object](./Filter_object/Filter_summary.md)). |
| [SymbolInstance.firstFrame](./SymbolInstance_object/SymbolInstance19.md) | A zero-based integer that specifies the first frame to appear in the timeline of the graphic. |
| [SymbolInstance.forceSimple](./SymbolInstance_object/SymbolInstance20.md) | A Boolean value that enables and disables the accessibility of the object’s children; equivalent to the inverse logic of the Make Child Objects Accessible setting in the Accessibility panel. |
| [SymbolInstance.is3D](./SymbolInstance_object/SymbolInstance21.md) | A Boolean value indicating whether the instance contains any 3D transforms. |
| [SymbolInstance.loop](./SymbolInstance_object/SymbolInstance22.md) | A string that, for graphic symbols, sets the same property as the Loop pop-up menu in the Property inspector. |
| [SymbolInstance.shortcut](./SymbolInstance_object/SymbolInstance23.md) | A string that is equivalent to the shortcut key associated with the symbol; equivalent to the Shortcut field in the Accessibility panel. |
| [SymbolInstance.silent](./SymbolInstance_object/SymbolInstance24.md) | A Boolean value that enables or disables the accessibility of the object; equivalent to the inverse logic of the Make Object Accessible setting in the Accessibility panel. |
| [SymbolInstance.symbolType](./SymbolInstance_object/SymbolInstance25.md) | A string that specifies the type of symbol; equivalent to the value for Behavior in the Create New Symbol and Convert To Symbol dialog boxes. |
| [SymbolInstance.tabIndex](./SymbolInstance_object/SymbolInstance26.md) | An integer that is equivalent to the Tab index field in the Accessibility panel. |
| [SymbolInstance.tintColor](./SymbolInstance_object/SymbolInstance27.md) | When the Color Effect Property Inspector is using style tint (colorMode == 'tint'), return the color applied to the tint. |
| [SymbolInstance.tintPercent](./SymbolInstance_object/SymbolInstance28.md) | When the color effect Property Inspector is using style tint (colorMode == 'tint') then return the applied to the tint percentage from -100 to 100. |
| [SymbolInstance.useBackgroundColor](./SymbolInstance_object/SymbolInstance29.md) | A boolean value that specifies whether to use 24 bit mode or 32 bit mode with alpha for the instance. |
| [SymbolInstance.visible](./SymbolInstance_object/SymbolInstance30.md) | A boolean value specifying whether the instance is visible or not. |

### SymbolItem summary

**Inheritance** [Item object](./Item_object/Item_summary.md) > SymbolItem object

#### Availability

Flash MX 2004.

#### Description

The SymbolItem object is a subclass of the [Item object](./Item_object/Item_summary.md).

#### Method summary

In addition to the Item object methods, you can use the following methods with the SymbolItem object:

| **Method** | **Description** |
| --- | --- |
| [SymbolItem.convertToCompiledClip()](./SymbolItem_object/SymbolItem.md) | Converts a symbol item in the library to a compiled movie clip. |
| [SymbolItem.exportSWC()](./SymbolItem_object/SymbolItem1.md) | Exports the symbol item to a SWC file. |
| [SymbolItem.exportSWF()](./SymbolItem_object/SymbolItem2.md) | Exports the symbol item to a SWF file. |
| [SymbolItem.exportToLibrary()](./SymbolItem_object/SymbolItem3.md) | Export an instance to a new bitmap in the Library. |
| [SymbolItem.exportToPNGSequence()](./SymbolItem_object/SymbolItem4.md) | Export a symbol to a sequence of PNG files. |

#### Property summary

In addition to the Item object properties, the following properties are available for the SymbolItem object:

| **Property** | **Description** |
| --- | --- |
| [SymbolItem.lastModifiedDate](./SymbolItem_object/SymbolItem5.md) | A string hexadecimal value that indicates the modification date of the symbol. |
| [SymbolItem.scalingGrid](./SymbolItem_object/SymbolItem6.md) | A Boolean value that specifies whether 9-slice scaling is enabled for the item. |
| [SymbolItem.scalingGridRect](./SymbolItem_object/SymbolItem7.md) | A Rectangle object that specifies the locations of the four 9-slice guides. |
| [SymbolItem.sourceAutoUpdate](./SymbolItem_object/SymbolItem8.md) | A Boolean value that specifies whether the item is updated when the FLA file is published. |
| [SymbolItem.sourceFilePath](./SymbolItem_object/SymbolItem9.md) | A string that specifies the path for the source FLA file as a file:/// URI. |
| [SymbolItem.sourceLibraryName](./SymbolItem_object/SymbolItem10.md) | A string that specifies the name of the item in the source file library. |
| [SymbolItem.symbolType](./SymbolItem_object/SymbolItem11.md) | A string that specifies the type of symbol. |
| [SymbolItem.timeline](./SymbolItem_object/SymbolItem12.md) | Read-only; a [Timeline object](./Timeline_object/Timeline_summary.md). |

### TextAttrs summary

#### Availability

Flash MX 2004.

#### Description

The TextAttrs object contains all the properties of text that can be applied to a subselection. This object is a property of the TextRun object ([TextRun.textAttrs](./TextRun_object/TextRun.md)).

#### Property summary

The following properties are available for the TextAttrs object:

| **Property** | **Description** |
| --- | --- |
| [TextAttrs.aliasText](./TextAttrs_object/TextAttrs.md) | A Boolean value that specifies that Flash should draw the text using a method optimized for increasing the legibility of small text. |
| [TextAttrs.alignment](./TextAttrs_object/TextAttrs1.md) | A string that specifies paragraph justification. Acceptable values are "left", "center", "right", and "justify". |
| [TextAttrs.autoKern](./TextAttrs_object/TextAttrs2.md) | A Boolean value that determines whether Flash uses (true) or ignores (false) pair kerning information in the font(s) to kern the text. |
| [TextAttrs.bold](./TextAttrs_object/TextAttrs3.md) | A Boolean value. A value of true causes text to appear with the bold version of the font. |
| [TextAttrs.characterPosition](./TextAttrs_object/TextAttrs4.md) | A string that determines the baseline for the text. |
| [TextAttrs.characterSpacing](./TextAttrs_object/TextAttrs5.md) | Deprecated in favor of [TextAttrs.letterSpacing](./TextAttrs_object/TextAttrs11.md). An integer that represents the space between characters. |
| [TextAttrs.face](./TextAttrs_object/TextAttrs6.md) | A string that represents the name of the font, such as "Arial". |
| [TextAttrs.fillColor](./TextAttrs_object/TextAttrs7.md) | A string, hexadecimal value, or integer that represents the fill color. |
| [TextAttrs.indent](./TextAttrs_object/TextAttrs8.md) | An integer that specifies paragraph indentation. |
| [TextAttrs.italic](./TextAttrs_object/TextAttrs9.md) | A Boolean value. A value of true causes text to appear with the italic version of the font. |
| [TextAttrs.leftMargin](./TextAttrs_object/TextAttrs10.md) | An integer that specifies the paragraph’s left margin. |
| [TextAttrs.letterSpacing](./TextAttrs_object/TextAttrs11.md) | An integer that represents the space between characters. |
| [TextAttrs.lineSpacing](./TextAttrs_object/TextAttrs12.md) | An integer that specifies the line spacing (leading) of the paragraph |
| [TextAttrs.rightMargin](./TextAttrs_object/TextAttrs13.md) | An integer that specifies the paragraph’s right margin. |
| [TextAttrs.rotation](./TextAttrs_object/TextAttrs14.md) | A Boolean value. A value of true causes Flash to rotate the characters of the text 90°. The default value is false. |
| [TextAttrs.size](./TextAttrs_object/TextAttrs15.md) | An integer that specifies the size of the font. |
| [TextAttrs.target](./TextAttrs_object/TextAttrs16.md) | A string that represents the target property of the text field. |
| [TextAttrs.url](./TextAttrs_object/TextAttrs17.md) | A string that represents the URL property of the text field. |

### TextRun summary

#### Availability

Flash MX 2004.

#### Description

The TextRun object represents a run of characters that have attributes that match all of the properties in the [TextAttrs object](./TextAttrs_object/TextAttrs_summary.md). This object is a property of the Text object ([Text.textRuns](./Text_object/Text27.md)).

#### Property summary

In addition to the properties available for use with the Text object, the TextRun object provides the following properties:

| **Property** | **Description** |
| --- | --- |
| [TextRun.characters](./TextRun_object/TextRun1.md) | A string that represents the text contained in the TextRun object. |
| [TextRun.textAttrs](./TextRun_object/TextRun.md) | The TextAttrs object containing the attributes of the run of text. |

### TextureAtlasExporter summary

**Inheritance** [Item object](./Item_object/Item_summary.md) > TextureAtlasExporter object

#### Availability

Animate 2020.

#### Description

The TextureAtlasExporter object is a subclass of the [Item object](./Item_object/Item_summary.md).

#### Method summary

In addition to the Item object methods, you can use the following methods with the TextureAtlasExporter object:

| **Method** | **Description** |
| --- | --- |
| [TextureAtlasExporter.exportTextureAtlas()](./TextureAtlasExporter_object/TextureAtlasExporter.md) | Exports the texture atlas for the selected symbol. |

#### Property summary

In addition to the Item object properties, the following properties are available for the SpriteSheetExporter object:

| **Property** | **Description** |
| --- | --- |
| [TextureAtlasExporter.algorithm](./TextureAtlasExporter_object/TextureAtlasExporter1.md) | Sets the encoding algorithm for the TextureAtlas |
| [TextureAtlasExporter.allowRotate](./TextureAtlasExporter_object/TextureAtlasExporter2.md) | Allows sprites to be rotated when added to the TextureAtlas |
| [TextureAtlasExporter.app](./TextureAtlasExporter_object/TextureAtlasExporter3.md) | A string indicating the name of the application that is generating the TextureAtlas. |
| [TextureAtlasExporter.autoSize](./TextureAtlasExporter_object/TextureAtlasExporter4.md) | A boolean value indicating whether the TextureAtlasExporter should calculate the overall size of TextureAtlas on its own. |
| [TextureAtlasExporter.borderPadding](./TextureAtlasExporter_object/TextureAtlasExporter5.md) | An integer indicating the number of pixels of padding to add around each texture in the texture atlas. |
| [TextureAtlasExporter.canRotate](./TextureAtlasExporter_object/TextureAtlasExporter6.md) | A boolean value indicating whether the framework specified by the TextureAtlasExporter.layoutFormat property may rotate textures when adding them to the texture atlas. |
| [TextureAtlasExporter.filePath](./TextureAtlasExporter_object/TextureAtlasExporter7.md) | It's the location where the texture atlas files needs to be exported. |
| [TextureAtlasExporter.flattenSkewObject](./TextureAtlasExporter_object/TextureAtlasExporter8.md) | It's the location where the texture atlas files needs to be exported. |
| [TextureAtlasExporter.imageFormat](./TextureAtlasExporter_object/TextureAtlasExporter9.md) | Boolean value which indicates whether skewed assets needs to be flattened to the texture atlas.. |
| [TextureAtlasExporter.optimizeBitmap](./TextureAtlasExporter_object/TextureAtlasExporter10.md) | Boolean value which indicates whether texture atlas bitmaps needs to be optimized by removing extra spaces. |
| [TextureAtlasExporter.optimizeJson](./TextureAtlasExporter_object/TextureAtlasExporter11.md) | Boolean value which indicates whether animation.json needs to be optimized by removing indentation, decomposed matrix and use shortened names. |
| [TextureAtlasExporter.overflowed](./TextureAtlasExporter_object/TextureAtlasExporter12.md) | Read-only property; Boolean value which indicates, if any assets are remaining after packing into texture atlas. |
| [TextureAtlasExporter.resolution](./TextureAtlasExporter_object/TextureAtlasExporter13.md) | Floating value which indicates in which resolution the textures needs to be exported. |
| [TextureAtlasExporter.shapePadding](./TextureAtlasExporter_object/TextureAtlasExporter14.md) | An integer value indicating how many pixels of padding should be added to each exported symbol frame when adding it to the TextureAtlas. |
| [TextureAtlasExporter.sheetHeight](./TextureAtlasExporter_object/TextureAtlasExporter15.md) | An integer value specifying the height of the texture atlas. This value is read-only if TextureAtlasExporter.autoSize is set to true.. |
| [TextureAtlasExporter.sheetWidth](./TextureAtlasExporter_object/TextureAtlasExporter16.md) | An integer value specifying the width of the texture atlas. This value is read-only if TextureAtlasExporter.autoSize is set to true. |
| [TextureAtlasExporter.version](./TextureAtlasExporter_object/TextureAtlasExporter17.md) | Read-only property; A stinrg indicating the version number of the Animate application. This property is provided for use by texture atlas plugins. |

### Text summary

**Inheritance** [Element object](./Element_object/Element_summary.md) > Text object

#### Availability

Flash MX 2004.

#### Description

The Text object represents a single text item in a document. All properties of the text pertain to the entire text block.

To set properties of a text run within the text field, see the Property summary for the [TextAttrs object](./TextAttrs_object/TextAttrs_summary.md). To change properties of a selection within a text field, you can use [Document.setElementTextAttr()](./Document_object/Document500.md) and specify a range of text, or use the current selection.

To set generic properties of the selected text field, use [Document.setElementProperty()](./Document_object/Document490.md). The following example sets the x value of the selected text field's registration point to 50:

```javascript
fl.getDocumentDOM().setElementProperty("x", 50);
```

#### Method summary

In addition to the Element object methods, the following methods are available for the Text object:

| **Method** | **Description** |
| --- | --- |
| [Text.getTextAttr()](./Text_object/Text11.md) | Retrieves the specified attribute for the text identified by the optional ***startIndex*** and ***endIndex*** parameters. |
| [Text.getTextString()](./Text_object/Text12.md) | Retrieves the specified range of text. |
| [Text.setTextAttr()](./Text_object/Text22.md) | Sets the specified attribute associated with the text identified by ***startIndex*** and ***endIndex***. |
| [Text.setTextString()](./Text_object/Text23.md) | Changes the text string within this Text object. |

#### Property summary

In addition to the Element object properties, the following properties are available for the Text object:

| **Property** | **Description** |
| --- | --- |
| [Text.accName](./Text_object/Text.md) | A string that is equivalent to the Name field in the Accessibility panel. |
| [Text.antiAliasSharpness](./Text_object/Text1.md) | A float value that specifies the anti-aliasing sharpness of the text. |
| [Text.antiAliasThickness](./Text_object/Text2.md) | A float value that specifies the anti-aliasing thickness of the text. |
| [Text.autoExpand](./Text_object/Text3.md) | A Boolean value that controls the expansion of the bounding width for static text fields or the bounding width and height for dynamic or input text. |
| [Text.border](./Text_object/Text4.md) | A Boolean value that controls whether Flash shows (true) or hides (false) a border around dynamic or input text. |
| [Text.description](./Text_object/Text5.md) | A string that is equivalent to the Description field in the Accessibility panel. |
| [Text.embeddedCharacters](./Text_object/Text6.md) | A string that specifies characters to embed. This is equivalent to entering text in the Character Embedding dialog box. |
| [Text.embedRanges](./Text_object/Text7.md) | A string that consists of delimited integers that correspond to the items that can be selected in the Character Embedding dialog box. |
| [Text.embedVariantGlyphs](./Text_object/Text8.md) | A Boolean value that specifies whether to enable the embedding of variant glyphs. |
| [Text.filters](./Text_object/Text9.md) | An array of filters applied to the text element |
| [Text.fontRenderingMode](./Text_object/Text10.md) | A string that specifies the rendering mode for the text. |
| [Text.length](./Text_object/Text13.md) | Read-only; an integer that represents the number of characters in the Text object. |
| [Text.lineType](./Text_object/Text14.md) | A string that sets the line type to "single line", "multiline", "multiline no wrap", or "password". |
| [Text.maxCharacters](./Text_object/Text15.md) | An integer that specifies the maximum characters the user can enter into this Text object. |
| [Text.orientation](./Text_object/Text16.md) | A string that specifies the orientation of the text field. |
| [Text.renderAsHTML](./Text_object/Text17.md) | A Boolean value that controls whether Flash draws the text as HTML and interprets embedded HTML tags. |
| [Text.scrollable](./Text_object/Text18.md) | A Boolean value that controls whether the text can (true) or cannot (false) be scrolled. |
| [Text.selectable](./Text_object/Text19.md) | A Boolean value that controls whether the text can (true) or cannot (false) be selected. Input text is always selectable. |
| [Text.selectionEnd](./Text_object/Text20.md) | A zero-based integer that specifies the offset of the end of a text subselection. |
| [Text.selectionStart](./Text_object/Text21.md) | A zero-based integer that specifies the offset of the beginning of a text subselection. |
| [Text.shortcut](./Text_object/Text24.md) | A string that is equivalent to the Shortcut field in the Accessibility panel. |
| [Text.silent](./Text_object/Text25.md) | A Boolean value that specifies whether the object is accessible. |
| [Text.tabIndex](./Text_object/Text26.md) | An integer that is equivalent to the Tab Index field in the Accessibility panel. |
| [Text.textRuns](./Text_object/Text27.md) | Read-only; an array of TextRun objects. |
| [Text.textType](./Text_object/Text28.md) | A string that specifies the type of text field. Acceptable values are "static", "dynamic", and "input". |
| [Text.useDeviceFonts](./Text_object/Text29.md) | A Boolean value. A value of true causes Flash to draw text using device fonts. |
| [Text.variableName](./Text_object/Text30.md) | A string that contains the contents of the Text object. |

### Timeline summary

#### Availability

Flash MX 2004.

#### Description

The Timeline object represents the Animate timeline, which can be accessed for the current document by using `fl.getDocumentDOM().getTimeline()`. This method returns the timeline of the current scene or symbol that is being edited.

When you work with scenes, each scene’s timeline has an index value, and can be accessed for the current document by `fl.getDocumentDOM().timelines[i]`. (In this example, `i` is the index of the value of the timeline.)

When you work with frames by using the methods and properties of the Timeline object, remember that the frame value is a zero-based index (not the actual frame number in the sequence of frames in the timeline). That is, the first frame has a frame index of 0.

#### Method summary

The following methods are available for the Timeline object:

| **Method** | **Description** |
| --- | --- |
| [Timeline.addMotionGuide()](./Timeline_object/Timeline.md) | Adds a motion guide layer above the current layer and attaches the current layer to the newly added guide layer. |
| [Timeline.addNewLayer()](./Timeline_object/Timeline1.md) | Adds a new layer to the document and makes it the current layer. |
| [Timeline.clearFrames()](./Timeline_object/Timeline2.md) | Deletes all the contents from a frame or range of frames on the current layer. |
| [Timeline.clearKeyframes()](./Timeline_object/Timeline3.md) | Converts a keyframe to a regular frame and deletes its contents on the current layer. |
| [Timeline.convertToBlankKeyframes()](./Timeline_object/Timeline4.md) | Converts frames to blank keyframes on the current layer. |
| [Timeline.convertToKeyframes()](./Timeline_object/Timeline5.md) | Converts a range of frames to keyframes (or converts the selection if no frames are specified) on the current layer. |
| [Timeline.copyFrames()](./Timeline_object/Timeline6.md) | Copies a range of frames on the current layer to the clipboard. |
| [Timeline.copyLayers()](./Timeline_object/Timeline7.md) | Copies a range of Timeline layers to the clipboard. |
| [Timeline.copyMotion()](./Timeline_object/Timeline8.md) | Copies motion on selected frames, either from a motion tween or from frame-by-frame animation, so it can be applied to other frames. |
| [Timeline.copyMotionAsAS3()](./Timeline_object/Timeline9.md) | Copies motion on selected frames, either from a motion tween or from frame-by-frame animation, to the clipboard as ActionScript 3.0 code. |
| [Timeline.createMotionObject()](./Timeline_object/Timeline10.md) | Creates a new motion object at a designated start and end frame. |
| [Timeline.createMotionTween()](./Timeline_object/Timeline11.md) | Sets the [Frame.tweenType](./Frame_object/Frame39.md) property to motion for each selected keyframe on the current layer, and converts each frame’s contents to a single symbol instance if necessary. |
| [Timeline.cutFrames()](./Timeline_object/Timeline14.md) | Cuts a range of frames on the current layer from the timeline and saves them to the clipboard. |
| [Timeline.cutLayers()](./Timeline_object/Timeline15.md) | Cuts a range of Timeline layers and saves them to the clipboard. |
| [Timeline.deleteLayer()](./Timeline_object/Timeline16.md) | Deletes a layer. |
| [Timeline.duplicateLayers()](./Timeline_object/Timeline17.md) | Duplicates the selected layers or specified layers. |
| [Timeline.expandFolder()](./Timeline_object/Timeline18.md) | Expands or collapses the specified folder or folders. |
| [Timeline.findLayerIndex()](./Timeline_object/Timeline19.md) | Finds an array of indexes for the layers with the given name. |
| [Timeline.getBounds()](./Timeline_object/Timeline21.md) | Returns the bounding rectangle for all elements on all layers on the Timeline, for a given frame. |
| [Timeline.getFrameProperty()](./Timeline_object/Timeline22.md) | Retrieves the specified property’s value for the selected frames. |
| [Timeline.getGuidelines()](./Timeline_object/Timeline23.md) | Returns an XML string that represents the current positions of the horizontal and vertical guide lines for a timeline (View > Guides > Show Guides). |
| [Timeline.getLayerProperty()](./Timeline_object/Timeline24.md) | Retrieves the specified property’s value for the selected layers. |
| [Timeline.getSelectedFrames()](./Timeline_object/Timeline25.md) | Retrieves the currently selected frames in an array. |
| [Timeline.getSelectedLayers()](./Timeline_object/Timeline26.md) | Retrieves the zero-based index values of the currently selected layers. |
| [Timeline.insertBlankKeyframe()](./Timeline_object/Timeline27.md) | Inserts a blank keyframe at the specified frame index; if the index is not specified, inserts the blank keyframe by using the playhead/selection. |
| [Timeline.insertFrames()](./Timeline_object/Timeline28.md) | Inserts the specified number of frames at the given frame number. |
| [Timeline.insertKeyframe()](./Timeline_object/Timeline29.md) | Inserts a keyframe at the specified frame. |
| [Timeline.mergeLayers()](./Timeline_object/Timeline51.md) | Merge the layers within a specified range of indexes. |
| [Timeline.pasteFrames()](./Timeline_object/Timeline34.md) | Pastes the range of frames from the clipboard into the specified frames. |
| [Timeline.pasteLayers()](./Timeline_object/Timeline35.md) | Pastes copied layers to the Timeline above the specified layer index. |
| [Timeline.pasteMotion()](./Timeline_object/Timeline36.md) | Pastes the range of motion frames retrieved by timeline.copyMotion() to the Timeline. |
| [Timeline.pasteMotionSpecial()](./Timeline_object/Timeline37.md) | Pastes motion on selected frames, displaying a dialog box that lets the user choose which parts of a classic tween to paste. |
| [Timeline.removeFrames()](./Timeline_object/Timeline38.md) | Deletes the frame. |
| [Timeline.removeMotionObject()](./Timeline_object/Timeline39.md) | Removes the motion object created with timeline.createMotionObject(), and converts the frame(s) to static frames. |
| [Timeline.reorderLayer()](./Timeline_object/Timeline40.md) | Moves the first specified layer before or after the second specified layer. |
| [Timeline.reverseFrames()](./Timeline_object/Timeline41.md) | Reverses a range of frames. |
| [Timeline.selectAllFrames()](./Timeline_object/Timeline42.md) | Selects all the frames in the current timeline. |
| [Timeline.setFrameProperty()](./Timeline_object/Timeline43.md) | Sets the property of the Frame object for the selected frames. |
| [Timeline.setGuidelines()](./Timeline_object/Timeline44.md) | Replaces the guide lines for the timeline with the information specified. |
| [Timeline.setLayerProperty()](./Timeline_object/Timeline45.md) | Sets the specified property on all the selected layers to a specified value. |
| [Timeline.setSelectedFrames()](./Timeline_object/Timeline46.md) | Selects a range of frames in the current layer or sets the selected frames to the selection array passed into this method. |
| [Timeline.setSelectedLayers()](./Timeline_object/Timeline47.md) | Sets the layer to be selected; also makes the specified layer the current layer. |
| [Timeline.showLayerMasking()](./Timeline_object/Timeline48.md) | Shows the layer masking during authoring by locking the mask and masked layers. |
| [Timeline.startPlayback()](./Timeline_object/Timeline49.md) | Starts automatic playback of the timeline if it is not currently playing. |
| [Timeline.stopPlayback()](./Timeline_object/Timeline50.md) | Stops autoumatic playback of the timeline if it is currently playing. |

#### Property summary

The following properties are available for the Timeline object:

| **Property** | **Description** |
| --- | --- |
| [Timeline.advancedLayersEnabled](./Timeline_object/Timeline52.md) | Enable / disable advanced layers mode. |
| [Timeline.currentFrame](./Timeline_object/Timeline12.md) | A zero-based index for the frame at the current playhead location. |
| [Timeline.currentLayer](./Timeline_object/Timeline13.md) | A zero-based index for the currently active layer. |
| [Timeline.frameCount](./Timeline_object/Timeline20.md) | Read-only; an integer that represents the number of frames in this timeline’s longest layer. |
| [Timeline.layerCount](./Timeline_object/Timeline30.md) | Read-only; an integer that represents the number of layers in the specified timeline. |
| [Timeline.layers](./Timeline_object/Timeline31.md) | Read-only; an array of layer objects. |
| [Timeline.libraryItem](./Timeline_object/Timeline32.md) | Read-only property; indicates whether the timeline belongs to a scene. |
| [Timeline.name](./Timeline_object/Timeline33.md) | A string that represents the name of the current timeline. |

### ToolObj summary

#### Availability

Flash MX 2004.

#### Description

A ToolObj object represents an individual tool in the Tools panel. To access a ToolObj object, use properties of the [Tools object](./Tools_object/Tools_summary.md): either the [Tools.toolObjs](./Tools_object/Tools11.md) array or [Tools.activeTool](./Tools_object/Tools.md).

#### Method summary

The following methods are available for the ToolObj object.

***Note:** The following methods are used only when creating extensible tools.*

| **Method** | **Description** |
| --- | --- |
| [ToolObj.enablePIControl()](./ToolObj_object/ToolObj1.md) | Enables or disables the specified control in a Property inspector. Used only when creating extensible tools. |
| [ToolObj.setIcon()](./ToolObj_object/ToolObj4.md) | Identifies a PNG file to use as a tool icon in the Flash Tools panel. |
| [ToolObj.setMenuString()](./ToolObj_object/ToolObj5.md) | Sets the string that appears in the pop-up menu as the name for the tool. |
| [ToolObj.setOptionsFile()](./ToolObj_object/ToolObj6.md) | Associates an XML file with the tool. |
| [ToolObj.setPI()](./ToolObj_object/ToolObj7.md) | Sets a particular Property inspector to be used when the tool is activated. |
| [ToolObj.setToolName()](./ToolObj_object/ToolObj8.md) | Assigns a name to the tool for the configuration of the Tools panel. |
| [ToolObj.setToolTip()](./ToolObj_object/ToolObj9.md) | Sets the tooltip that appears when the mouse is held over the tool icon. |
| [ToolObj.showPIControl()](./ToolObj_object/ToolObj10.md) | Shows or hides a control in the Property inspector. |
| [ToolObj.showTransformHandles()](./ToolObj_object/ToolObj11.md) | Called in the [ConfigureTool()](./Top-level_functions_and_methods/configureTool.md) method of an extensible tool’s JavaScript file to indicate that the free transform handles should appear when the tool is active. |

#### Property summary

The following properties are available for the ToolObj object:

| **Property** | **Description** |
| --- | --- |
| [ToolObj.depth](./ToolObj_object/ToolObj.md) | An integer that specifies the depth of the tool in the pop-up menu in the Tools panel. |
| [ToolObj.iconID](./ToolObj_object/ToolObj2.md) | An integer that specifies the resource ID of the tool. |
| [ToolObj.position](./ToolObj_object/ToolObj3.md) | Read-only; an integer specifying the position of the tool in the Tools panel. |

### Tools summary

#### Availability

Flash MX 2004.

#### Description

The Tools object is accessible from the flash object ([Flash.tools](./Flash_object/Flash76.md)). The [Tools.toolObjs](./Tools_object/Tools11.md) property contains an array of ToolObj objects, and the [Tools.activeTool](./Tools_object/Tools.md) property returns the ToolObj object for the currently active tool. (See also [ToolObj object](./ToolObj_object/ToolObj_summary.md) and the list of Extensible tools in ["Top-Level Functions and Methods"](./Top-level_functions_and_methods/Top.md).)

***Note:** The following methods and properties are used only when creating extensible tools.*

#### Method summary

The following methods are available for the Tools object:

| **Method** | **Description** |
| --- | --- |
| [Tools.constrainPoint()](./Tools_object/Tools2.md) | Takes two points and returns a new adjusted or *constrained* point. |
| [Tools.getKeyDown()](./Tools_object/Tools4.md) | Returns the most recently pressed key. |
| [Tools.setCursor()](./Tools_object/Tools8.md) | Sets the pointer to a specified appearance. |
| [Tools.snapPoint()](./Tools_object/Tools10.md) | Takes a point as input and returns a new point that may be adjusted or *snapped* to the nearest geometric object. |

#### Property summary

The following properties are available for the Tools object:

| **Property** | **Description** |
| --- | --- |
| [Tools.activeTool](./Tools_object/Tools.md) | Read-only; returns the [ToolObj object](./ToolObj_object/ToolObj_summary.md) for the currently active tool. |
| [Tools.altIsDown](./Tools_object/Tools1.md) | Read-only; a Boolean value that identifies if the Alt key is being pressed. |
| [Tools.ctlIsDown](./Tools_object/Tools3.md) | Read-only; a Boolean value that identifies if the Control key is being pressed. |
| [Tools.mouseIsDown](./Tools_object/Tools5.md) | Read-only; a Boolean value that identifies if the left mouse button is currently pressed. |
| [Tools.penDownLoc](./Tools_object/Tools6.md) | Read-only; a point that represents the position of the last mouse-down event on the Stage. |
| [Tools.penLoc](./Tools_object/Tools7.md) | Read-only; a point that represents the current location of the mouse. |
| [Tools.shiftIsDown](./Tools_object/Tools9.md) | Read-only; a Boolean value that identifies if the Shift key is being pressed. |
| [Tools.toolObjs](./Tools_object/Tools11.md) | Read-only; an array of ToolObj objects. |

### Tween summary

#### Availability

Flash Pro CC.

#### Description

The Tween object can be used to access interpolated properties of tweens. Accessing properties for a non-tween frame throws errors.

#### Method Summary

You can use the following methods with the Tween object class:

| **Method** | **Description** |
| --- | --- |
| [Tween.getColorTransform()](./Tween_object/Tween.md) | Returns color transformation data between frames. |
| [Tween.getFilters()](./Tween_object/Tween1.md) | Returns filters data of a selected frame from a tween span. |
| [Tween.getGeometricTransform()](./Tween_object/Tween2.md) | Returns Matrix object that represents geometric transformation of a tween within a user-defined range (from offset to a selected frame). |
| [Tween.getShape()](./Tween_object/Tween3.md) | Returns interpolated shape of a selected frame within a tween-span. |

#### Properties Summary

You can use the following properties within methods of Tween object class:

| **Property** | **Description** |
| --- | --- |
| [Tween.duration](./Tween_object/Tween4.md) | Duration of a tween span that is equal to number of frames in a tween. |
| [Tween.startFrame](./Tween_object/Tween5.md) | Start frame of a tween. |
| [Tween.tweenType](./Tween_object/Tween6.md) | Specifies the type of tween. For example, Motion or Shape. |

#### Usage

```javascript
var doc = fl.getDocumentDOM();
var timeline = doc.getTimeline();
var frame = timeline.layers[0].frames[0];
var tweenObj = frame.tweenObj;

fl.outputPanel.clear();
fl.trace("Tween duration = " + tweenObj.duration);

for (var i = 0; i < tweenObj.duration; i++) {
    var colors = tweenObj.getColorTransform(i);
    fl.trace("\nFrame " + i + ":")
    fl.trace(
        "\nMatrix: a = " + matrix.a
        + ", b = " + matrix.b
        + ", c = " + matrix.c
        + ", d =" + matrix.d
        + ", tx = " + matrix.tx
        + ", ty = " + matrix.ty
    );
    fl.trace(
        "\nColor transform:\nalpha: amount = " + colors.colorAlphaAmount
        + " percent = " + colors.colorAlphaPercent
        + "\nred: amount = " + colors.colorRedAmount
        + " percent = " + colors.colorRedPercent
        + "\ngreen: amount = " + colors.colorGreenAmount
        + " percent = " + colors.colorGreenPercent
        + "\nblue: amount = " + colors.colorBlueAmount
        + " percent = " + colors.colorBluePercent
    );
}
```

### Vertex summary

#### Availability

Flash MX 2004.

#### Description

The Vertex object is the part of the shape data structure that holds the coordinate data.

#### Method summary

You can use the following methods with the Vertex object:

| **Method** | **Description** |
| --- | --- |
| [Vertex.getHalfEdge()](./Vertex_object/Vertex.md) | Gets a [HalfEdge object](./HalfEdge_object/HalfEdge_summary.md) that shares this vertex. |
| [Vertex.setLocation()](./Vertex_object/Vertex1.md) | Sets the location of the vertex. |

#### Property summary

The following properties are available for the Vertex object:

| **Property** | **Description** |
| --- | --- |
| [Vertex.x](./Vertex_object/Vertex2.md) | Read-only; the *x* location of the vertex in pixels. |
| [Vertex.y](./Vertex_object/Vertex3.md) | Read-only; the *y* location of the vertex in pixels. |

### VideoItem summary

**Inheritance** [Item object](./Item_object/Item_summary.md) > VideoItem object

#### Availability

Flash MX 2004.

#### Description

The VideoItem object is a subclass of the [Item object](./Item_object/Item_summary.md).

#### Method summary

In addition to the Item object methods, the VideoItem object has the following method:

| **Method** | **Description** |
| --- | --- |
| [VideoItem.exportToFLV()](./VideoItem_object/VideoItem.md) | Exports the specified item to an FLV file. |

#### Property summary

In addition to the Item object properties, you can use the following properties with the VideoItem object:

| **Property** | **Description** |
| --- | --- |
| [VideoItem.fileLastModifiedDate](./VideoItem_object/VideoItem1.md) | Read-only; a string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970, and the modification date of the original file (on disk) at the time the file was imported to the library. |
| [VideoItem.lastModifiedDate](./VideoItem_object/VideoItem2.md) | Read-only; the modification date of the video item in the Library. |
| [VideoItem.sourceFileExists](./VideoItem_object/VideoItem3.md) | Read-only; a Boolean value that specifies whether the file that was imported to the Library still exists in the location from where it was imported. |
| [VideoItem.sourceFileIsCurrent](./VideoItem_object/VideoItem4.md) | Read-only; a Boolean value that specifies whether the file modification date of the Library item is the same as the modification date (on disk) of the file that was imported. |
| [VideoItem.sourceFilePath](./VideoItem_object/VideoItem5.md) | Read-only; a string that specifies the path to the video item. |
| [VideoItem.videoType](./VideoItem_object/VideoItem6.md) | Read-only; a string that specifies the type of video the item represents. |

### XMLUI summary

#### Availability

Flash MX 2004.

#### Description

Flash 8 supports custom dialog boxes written in a subset of the XML User Interface Language (XUL). An XML User Interface (XMLUI) dialog box can be used by several Flash features, such as commands and behaviors, to provide a user interface for features that you build using extensibility.

The XMLUI object provides the ability to get and set properties of an XMLUI dialog box, and accept or cancel out of one. The XMLUI methods can be used in callbacks, such as *oncommand* handlers in buttons.

You can write a dialog.xml file and invoke it from the JavaScript API using the [Document.xmlPanel()](./Document_object/Document6198.md) method. To retrieve an object representing the current XMLUI dialog box, use [Flash.xmlui](./Flash_object/Flash81.md).

#### Method summary

The following methods are available for the XMLUI object:

| **Method** | **Description** |
| --- | --- |
| [XMLUI.accept()](./XMLUI_object/XMLUI.md) | Closes the current XMLUI dialog box with an accept state. |
| [XMLUI.cancel()](./XMLUI_object/XMLUI1.md) | Closes the current XMLUI dialog box with a cancel state. |
| [XMLUI.get()](./XMLUI_object/XMLUI2.md) | Retrieves the value of the specified property of the current XMLUI dialog box. |
| [XMLUI.getControlItemElement()](./XMLUI_object/XMLUI3.md) | Returns the current control item for the specified control. |
| [XMLUI.getEnabled()](./XMLUI_object/XMLUI4.md) | Returns a Boolean value that specifies whether the control is enabled or disabled (dimmed). |
| [XMLUI.getVisible()](./XMLUI_object/XMLUI5.md) | Returns a Boolean value that specifies whether the control is visible or hidden. |
| [XMLUI.set()](./XMLUI_object/XMLUI6.md) | Modifies the value of the specified property of the current XMLUI dialog box. |
| [XMLUI.setControlItemElement()](./XMLUI_object/XMLUI7.md) | Sets the label and value for the current item. |
| [XMLUI.setControlItemElements()](./XMLUI_object/XMLUI8.md) | Sets the label, value pairs of the current item. |
| [XMLUI.setEnabled()](./XMLUI_object/XMLUI9.md) | Enables or disables (dims) a control. |
| [XMLUI.setVisible()](./XMLUI_object/XMLUI10.md) | Shows or hides a control. |

## C-Level_Extensibility

### About extensibility

This chapter describes the C-level extensibility mechanism, which lets you implement Adobe Animate extensibility files using a combination of JavaScript and custom C code.

***Note:** Adobe Animate runs on 64-bit operating systems only. All C extensions for this release must be built (or rebuilt) for 64 bit support.*

To implement extensibility, you define functions using C, bundle them in a dynamic linked library (DLL) or a shared library, save the library in the appropriate directory, and then call the functions from JavaScript using the Adobe Animate JavaScript API.
For example, you might want to define a function that performs intense calculations more efficiently than JavaScript does, which improves performance, or when you want to create more advanced tools or effects.
This extensibility mechanism is a subset of the Adobe Dreamweaver API. If you are familiar with that API, you might recognize the functions in the C-level extensibility mechanism API. However, this API differs from the Dreamweaver API in the following ways:

- This API does not contain all the commands in the Dreamweaver API.

- All declarations of type *wchar_t* and char in the Dreamweaver API are implemented as unsigned short declarations in this API, to support Unicode when strings are passed.

- The [JSVal JS_BytesToValue()](./C-Level_Extensibility/The_C.md) function in this API is not part of the Dreamweaver API.

- The location in which the DLL or shared library files must be stored is different (see ["Integrating C functions"](./C-Level_Extensibility/Integrating_C_functions.md)).
