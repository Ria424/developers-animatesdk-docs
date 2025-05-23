# JavaScript API objects

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

## The Animate Document Object Model

The Animate Document Object Model (DOM) for the Animate JavaScript API consists of a set of top-level functions (see ["Top-Level Functions and Methods"](../Top-level_functions_and_methods/Top_summary.md)) and two top-level objects—the FLfile object and the flash object (an or fl). Each object is guaranteed to be available to a script because it always exists when the Animate authoring environment is open. For more information, see [FLfile object](../FLfile_object/FLfile_summary.md) and [Flash object (fl)](../Flash_object/Flash_summary.md).
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

## The Document object

An important property of the top-level flash object is the [Flash.documents](../Flash_object/Flash20.md) property. This property contains an array of Document objects, each of which represents one of the FLA files currently open in the authoring environment. The properties of each Document object represent most of the elements that a FLA file can contain. Therefore, a large portion of the DOM is composed of child objects and properties of the Document object. For more information, see [Document object](../Document_object/Document_summary.md).

To refer to the first open document, for example, use the statement ```flash.documents[0]``` or ```fl.documents[0]```. The first document is the first Animate document that was opened during the current session in the authoring environment. When the first opened document is closed, the indexes of the other open documents are decremented.

To find a particular document’s index, use ```flash.findDocumentIndex(nameOfDocument)``` or ```fl.findDocumentIndex(nameOfDocument)```. See [Flash.findDocumentIndex()](../Flash_object/Flash26.md).

To access the document that is currently focused, use the statement ```flash.getDocumentDOM()``` or ```fl.getDocumentDOM()```. See [Flash.getDocumentDOM()](../Flash_object/Flash31.md). The latter is the syntax used in most of the examples in this document.

To find a particular document in the fl.documents array, iterate through the array and test each document for its
```Document.name``` property. See [Flash.documents](../Flash_object/Flash20.md) and [Document.name](../Document_object/Document170.md).

All the objects in the DOM that aren’t listed in the previous table (see ["The Animate Document Object Model"](#the-animate-document-object-model)) are accessed from the Document object. For example, to access the library of a document, you use the ```Document.library``` property, which retrieves a library object:

```fl.getDocumentDOM().library```

To access the array of items in the library, you use the ```library.items``` property; each element in the array is an Item object:

```fl.getDocumentDOM().library.items```

To access a particular item in the library, you specify a member of the library.items array:

```fl.getDocumentDOM().library.items[0]```

In other words, the library object is a child of the Document object, and the Item object is a child of the library object. For more information, see [Document.library](../Document_object/Document98.md), [Library object](../Library_object/Library_summary.md), [Library.items](../Library_object/Library10.md) and [Item object](../Item_object/Item_summary.md).

## Specifying the target of an action

Unless otherwise specified, methods affect the current focus or selection. For example, the following script doubles the size of the current selection because no particular object is specified:

```fl.getDocumentDOM().scaleSelection(2, 2);```

In some cases, you might want an action to specifically target the currently selected item in the Animate document. To do this, use the array that the ```Document.selection``` property contains (see [Document.selection](../Document_object/Document430.md)). The first element in the array represents the currently selected item, as shown in the following example:

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

## Summary of the DOM structure

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
