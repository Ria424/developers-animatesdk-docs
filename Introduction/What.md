## What's new in the JavaScript API

The following section lists new objects, methods, and properties in Animate. It also lists changes in Flash CC, CS6, CS5.5, and CS5.
If you have not used the JavaScript API before, you might want to skip this section and go directly to [JavaScript API objects](../Introduction/JavaScript_API_objects.md).

### New methods and properties in Animate 2020

The following methods and properties for existing objects are new in Animate 2020:

- [Document object](../Document_object/Document_summary.md)

  - [Document.getTaggedSwatches()](../Document_object/Document6064.md)

  - [Document.getTaggedSwatchByName()](../Document_object/Document6062.md)

  - [Document.getTaggedSwatchAtIndex()](../Document_object/Document6061.md)

  - [Document.setTaggedSwatchByName()](../Document_object/Document6068.md)

  - [Document.setTaggedSwatchAtIndex()](../Document_object/Document6067.md)

  - [Document.addTaggedSwatch()](../Document_object/Document6058.md)

  - [Document.addTaggedSwatchWithColor()](../Document_object/Document6059.md)

  - [Document.deleteTaggedSwatchByName()](../Document_object/Document6066.md)

  - [Document.deleteTaggedSwatchAtIndex()](../Document_object/Document6065.md)

  - [Document.getTaggedSwatchesPaletteList()](../Document_object/Document6063.md)

  - [Document.getIndexForTaggedSwatchesPalette()](../Document_object/Document6060.md)

  - [Document.convertToDoc()](../Document_object/Document6069.md)

  - [Document.exportCanvasPublishTemplate()](../Document_object/Document6070.md)

  - [Document.importCanvasPublishTemplate()](../Document_object/Document6071.md)

  - [Document.exportMedia()](../Document_object/Document6072.md)

  - [Document.exportSVG()](../Document_object/Document6074.md)

- [Layer object](../Layer_object/Layer_summary.md)

  - [Layer.getZDepthAtFrame()](../Layer_object/Layer11.md)

  - [Layer.setZDepthAtFrame()](../Layer_object/Layer12.md)

  - [Layer.getRigParentAtFrame()](../Layer_Parenting_Object/LayerParenting1.md)

  - [Layer.setRigParentAtFrame()](../Layer_Parenting_Object/LayerParenting2.md)

  - [Layer.getRigMatrixAtFrame()](../Layer_Parenting_Object/LayerParenting3.md)

  - [Layer.getFiltersAtFrame()](../Layer_object/Layer15.md)

  - [Layer. setFiltersAtFrame()](../Layer_object/Layer18.md)

  - [Layer.getColorTransformAtFrame()](../Layer_object/Layer14.md)

  - [Layer.setColorTransformAtFrame()](../Layer_object/Layer17.md)

  - [Layer.getBlendModeAtFrame()](../Layer_object/Layer13.md)

  - [Layer.setBlendModeAtFrame()](../Layer_object/Layer16.md)

- [Timeline object](../Timeline_object/Timeline_summary.md)

  - [Timeline.advancedLayersEnabled](../Timeline_object/Timeline52.md)

  - [Timeline.mergeLayers()](../Timeline_object/Timeline51.md)

- [Flash object (fl)](../Flash_object/Flash_summary.md)

  - [Flash.addToolInToolbar()](../Flash_object/Flash82.md)

### New objects in Animate 2020

The following object is new in Flash CS6:

- [TextureAtlasExporter object](../TextureAtlasExporter_object/TextureAtlasExporter_summary.md)

- [Camera object](../Camera_object/Camera_Summary.md)

### New methods and properties in Flash CC

The following methods and properties for existing objects are new in Flash Profesional CC:

- [Tween Object](../Tween_Object/Tween_summary.md)

  - Tween.getColorTransform()

  - Tween.getFilters()

  - Tween.getGeometricTransform()

  - Tween.getShape()

  - Tween.duration

  - Tween.startFrame

  - Tween.tweenType

- [CompiledClipInstance object](../CompiledClipInstance_object/CompiledClipInstance_summary.md)

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

- [Document object](../Document_object/Document_summary.md)

  - Document.convertSelectionToBitmap()

  - Document.distributeToKeyframes()

  - Document.exportVideo()

  - Document.getPublishDocumentData()

  - Document.getTelemetryForSwf()

  - Document.importFile() showDialog and showImporterUI properties

  - Document.setPublishDocumenData()

- [Element object](../Element_object/Element_summary.md)

  - Element.getPublishPersistentData()

  - Element.setPublishPersistentData()

- [Flash object (fl)](../Flash_object/Flash_summary.md)

  - Flash.addEventListener() prePublish, postPublish, selectionChanged, and dpiChanged events

  - Flash.getThemeColor()

  - Flash.getThemeColorParameters()

  - Flash.getThemeFontInfo()

  - Flash.setPrefBoolean()

  - Flash.toggleBreakPoint()

  - Flash.xmlPanel()

  - Flash.xmlPanelFromString()

- [Frame object](../Frame_object/Frame_summary.md)

  - Frame.convertToFrameByFrameAnimation()

  - Frame.getSoundEnvelope()

  - Frame.getSoundEnvelopeLimits()

  - Frame.setSoundEnvelope()

  - Frame.setSoundEnvelopeLimits()

  - Frame.isEmpty()

- [Item object](../Item_object/Item_summary.md)

  - Item.getPublishData()

  - Item.setPublishData()

- [Library object](../library_object/Library_summary.md)

  - Library.unusedItems

- [SwfPanel object](../swfPanel_object/SwfPanel_summary.md)

  - SwfPanel.dpiScaleFactorX

  - SwfPanel.dpiScaleFactorY

  - SwfPanel.reload()

- [SymbolInstance object](../SymbolInstance_object/SymbolInstance_summary.md)

  - SymbolInstance.brightness

  - SymbolInstance.tintColor

  - SymbolInstance.tintPercent

- [Timeline object](../Timeline_object/Timeline_summary.md)

  - Timeline.getBounds()

### Dropped methods and properties in Flash CC

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

### New objects in Flash CS6

The following object is new in Flash CS6:

- [SpriteSheetExporter object](../SpriteSheetExporter_object/SpriteSheetExporter_summary.md)

### New methods and properties in Flash CS6

The following methods and properties for existing objects are new in Flash Pro CS6:

- [BitmapItem object](../BitmapItem_object/BitmapItem_summary.md)

  - BitmapItem.exportToFile()quality parameter

  - BitmapItem.hasValidAlphaLayer

  - BitmapItem.lastModifiedDate

- [Document object](../Document_object/Document_summary.md)

  - Document.exportInstanceToLibrary()

  - Document.exportInstanceToPNGSequence()

  - Document.getSWFPathFromProfile()

  - Document.saveAsCopy()

  - Document.swfJPEGQuality

- [Flash object (fl)](../Flash_object/Flash_summary.md)

  - Flash.spriteSheetExporter

- [Layer object](../Layer_object/Layer_summary.md)

  - Layer.animationType

- [Math object](../Math_object/Math_summary.md)

  - Math.transformPoint()

- [Shape object](../Shape_object/Shape_summary.md)

  - Shape.isFloating

- [SoundItem object](../SoundItem_object/SoundItem_summary.md)

  - SoundItem.lastModifiedDate

- [SymbolInstance object](../SymbolInstance_object/SymbolInstance_summary.md)

  - SymbolInstance.is3D

- [SymbolItem object](../SymbolItem_object/SymbolItem_summary.md)

  - SymbolItem.exportToLibrary()

  - SymbolItem.exportToPNGSequence()

  - SymbolItem.lastModifiedDate

- [Text object](../Text_object/Text_summary.md)

  - Text.filters

- [VideoItem object](../VideoItem_object/VideoItem_summary.md)

  - VideoItem.lastModifiedDate

### New methods and properties in Flash CS5 and CS5.5

The following methods and properties for existing objects are new in Flash Pro CS5:

- [Document object](../Document_object/Document_summary.md)

  - Document.debugMovie()

  - Document.loadCuepointXML()

- [Flash object (fl)](../Flash_object/Flash_summary.md)

  - Flash.languageCode

  - Flash.toggleBreakpoint

- [Frame object](../Frame_object/Frame_summary.md)

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

- [Timeline object](../Timeline_object/Timeline_summary.md)

  - Timeline.createMotionObject()

  - Timeline.libraryItem

  - Timeline.removeMotionObject()

  - Timeline.startPlayback

  - Timeline.stopPlayback

The following methods and properties for existing objects are new in Flash Pro CS5.5:

- [SymbolInstance object](../SymbolInstance_object/SymbolInstance_summary.md)

  - symbolInstance.bitmapRenderMode

  - symbolInstance.backgroundColor

  - symbolInstance.usesBackgroundColor

  - symbolInstance.visible

- [Timeline object](../Timeline_object/Timeline_summary.md)

  - Timeline.copyLayers()

  - Timeline.cutLayers()

  - Timeline.duplicateLayers()

  - Timeline.pasteLayers()

- [Flash object (fl)](../Flash_object/Flash_summary.md)

  - Flash.getSwfPanel()

  - Flash.installedPlayers()

  - Flash.publishCacheEnabled

  - Flash.publishCacheDiskSizeMax

  - Flash.publishCacheMemorySizeMax

  - Flash.publishCacheMemoryEntrySizeLimit

  - Flash.clearPublishCache()

- [SwfPanel object](../swfPanel_object/SwfPanel_summary.md)

  - SwfPanel.setFocus()

### Other changes in Flash CS5 and CS5.5

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
