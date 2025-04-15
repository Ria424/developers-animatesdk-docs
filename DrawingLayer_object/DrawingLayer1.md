## DrawingLayer.beginFrame()

#### Availability

Flash MX 2004.

#### Usage

drawingLayer.beginFrame()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; Erases what was previously drawn using the DrawingLayer and prepares for more drawing commands. Should be called after `DrawingLayer.beginDraw()`. Everything drawn between `DrawingLayer.beginFrame()` and an `DrawingLayer.endFrame()` remains on the Stage until you call the next `DrawingLayer.beginFrame()` and `DrawingLayer.endFrame()`. (In this context, *frame* refers to where you start and end drawing; it does not refer to timeline frames.) You typically use this method only when creating extensible tools. See [DrawingLayer.beginDraw()](../DrawingLayer_object/DrawingLayer.md).
