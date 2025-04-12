## SwfPanel summary

#### Availability

Flash CS4 Professional.

#### Description

The swfPanel object represents a Window SWF panel. Window SWF panels are SWF files that implement applications you can run from the Flash authoring environment; they are available from the Window > Other Panels menu. By default, Window SWF panels are stored in a subfolder of the Configuration folder (see ["Saving JSFL files"](../Introduction/Working_with_the_JavaScript_API.md#saving-jsfl-files)). For example, on Windows XP, the folder is in *boot drive*\\Documents and Settings\\*user*\\Local Settings\\Application Data\\Adobe\\Flash CS4\\*language*\\Configuration\\WindowSWF. A sample Window SWF panel is available; see ["Sample Trace Bitmap panel"](../Introduction/Sample_implementations.md#sample-trace-bitmap-panel). The array of registered Window SWF panels is stored in the [Flash.swfPanels](../Flash_object/Flash74.md) property.

#### Method summary

You can use the following method with the swfPanel object:

| **Method** | **Description** |
| --- | --- |
| [SwfPanel.call()](../SwfPanel_object/SwfPanel.md) | Works in conjunction with the ActionScript ExternalInterface.addCallback() and MMExecute() methods to communicate with the SWF panel from the authoring environment. |
| [SwfPanel.reload()](../SwfPanel_object/SwfPanel5.md) | Reloads content in the SWF panel. |
| [SwfPanel.setFocus()](../SwfPanel_object/SwfPanel6.md) | Sets the keyboard focus to the specified SWF panel. |

#### Property summary

You can use the following properties with the swfPanel object:

| **Property** | **Description** |
| --- | --- |
| [SwfPanel.dpiScaleFactorX](../SwfPanel_object/SwfPanel1.md) | A string that contains the DPI scale factor (scaleX) for swfPanel. |
| [SwfPanel.dpiScaleFactorY](../SwfPanel_object/SwfPanel2.md) | A string that contains the DPI scale factor (scaleY) for swfPanel. |
| [SwfPanel.name](../SwfPanel_object/SwfPanel3.md) | Read-only; a string that represents the name of the specified Window SWF panel. |
| [SwfPanel.path](../SwfPanel_object/SwfPanel4.md) | Read-only; a string that represents the path to the SWF file used in the specified Window SWF panel. |
