## Layer summary

#### Availability

Flash MX 2004.

#### Description

The Layer object represents a layer in the timeline. The [Timeline.layers](../Timeline_object/Timeline31.md) property contains an array of Layer objects, which can be accessed by `fl.getDocumentDOM().getTimeline().layers`.

#### Method summary

The following methods are available for the Item object:

| **Method** | **Description** |
| --- | --- |
| [Layer.getBlendModeAtFrame()](../Layer_object/Layer13.md) | A string value that specifies the blend mode at frame. |
| [Layer.getColorTransformAtFrame()](../Layer_object/Layer14.md) | Based on the mode, the paramters will be updated here. For example, if tint is present, the value corresponding to tint only will be present along with the color matrix values.. |
| [Layer.getFiltersAtFrame()](../Layer_object/Layer15.md) | An array that contains a list of filters applied to the frame at frameIndex. |
| [Layer.getZDepthAtFrame()](../Layer_object/Layer11.md) | An integer value that specifies the ZDepth valur at the frame. |
| [Layer.setBlendModeAtFrame()](../Layer_object/Layer16.md) | FrameNumber :frame index,  ZVal:int. |
| [Layer.setColorTransformAtFrame()](../Layer_object/Layer17.md) | frameIndex – int, cxFormObject - The cxform to be set . |
| [Layer. setFiltersAtFrame()](../Layer_object/Layer18.md) | frameIndex – int, filterArray - The array of filters to be set. |
| [Layer.setZDepthAtFrame()](../Layer_object/Layer12.md) | Enables to set ZDepth value at the frame. |

#### Property summary

The following properties are available for the Layer object:

| **Property** | **Description** |
| --- | --- |
| [Layer.animationType](../Layer_object/Layer.md) | The layer type: "none", "motion object", or "IK pose". |
| [Layer.color](../Layer_object/Layer1.md) | A string, hexadecimal value, or integer that specifies the color assigned to outline the layer. |
| [Layer.frameCount](../Layer_object/Layer2.md) | Read-only; an integer that specifies the number of frames in the layer. |
| [Layer.frames](../Layer_object/Layer3.md) | Read-only; an array of Frame objects. |
| [Layer.height](../Layer_object/Layer4.md) | An integer that specifies the percentage layer height; equivalent to the Layer height value in the Layer Properties dialog box. |
| [Layer.layerType](../Layer_object/Layer5.md) | A string that specifies the current use of the layer; equivalent to the Type setting in the Layer Properties dialog box. |
| [Layer.locked](../Layer_object/Layer6.md) | A Boolean value that specifies the locked status of the layer. |
| [Layer.name](../Layer_object/Layer7.md) | A string that specifies the name of the layer. |
| [Layer.outline](../Layer_object/Layer8.md) | A Boolean value that specifies the status of outlines for all objects in the layer. |
| [Layer.parentLayer](../Layer_object/Layer9.md) | A Layer object that represents the layer’s containing folder, guiding, or masking layer. |
| [Layer.visible](../Layer_object/Layer10.md) | A Boolean value that specifies whether the layer’s objects on the Stage are shown or hidden. |
