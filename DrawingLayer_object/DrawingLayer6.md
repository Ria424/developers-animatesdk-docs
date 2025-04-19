## DrawingLayer.endFrame()

#### Availability

Flash MX 2004.

#### Usage

DrawingLayer.endFrame()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; Signals the end of a group of drawing commands. A group of drawing commands refers to everything drawn between [DrawingLayer.beginFrame()](../DrawingLayer_object/DrawingLayer1.md) and `DrawingLayer.endFrame()`. The next call to [DrawingLayer.beginFrame()](../DrawingLayer_object/DrawingLayer1.md) will erase whatever was drawn in this group of drawing commands. You typically use this method only when creating extensible tools.
