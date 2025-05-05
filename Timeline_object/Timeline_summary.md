## Timeline summary

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
| [Timeline.addMotionGuide()](../Timeline_object/Timeline.md) | Adds a motion guide layer above the current layer and attaches the current layer to the newly added guide layer. |
| [Timeline.addNewLayer()](../Timeline_object/Timeline1.md) | Adds a new layer to the document and makes it the current layer. |
| [Timeline.clearFrames()](../Timeline_object/Timeline2.md) | Deletes all the contents from a frame or range of frames on the current layer. |
| [Timeline.clearKeyframes()](../Timeline_object/Timeline3.md) | Converts a keyframe to a regular frame and deletes its contents on the current layer. |
| [Timeline.convertToBlankKeyframes()](../Timeline_object/Timeline4.md) | Converts frames to blank keyframes on the current layer. |
| [Timeline.convertToKeyframes()](../Timeline_object/Timeline5.md) | Converts a range of frames to keyframes (or converts the selection if no frames are specified) on the current layer. |
| [Timeline.copyFrames()](../Timeline_object/Timeline6.md) | Copies a range of frames on the current layer to the clipboard. |
| [Timeline.copyLayers()](../Timeline_object/Timeline7.md) | Copies a range of Timeline layers to the clipboard. |
| [Timeline.copyMotion()](../Timeline_object/Timeline8.md) | Copies motion on selected frames, either from a motion tween or from frame-by-frame animation, so it can be applied to other frames. |
| [Timeline.copyMotionAsAS3()](../Timeline_object/Timeline9.md) | Copies motion on selected frames, either from a motion tween or from frame-by-frame animation, to the clipboard as ActionScript 3.0 code. |
| [Timeline.createMotionObject()](../Timeline_object/Timeline10.md) | Creates a new motion object at a designated start and end frame. |
| [Timeline.createMotionTween()](../Timeline_object/Timeline11.md) | Sets the [Frame.tweenType](../Frame_object/Frame39.md) property to motion for each selected keyframe on the current layer, and converts each frame’s contents to a single symbol instance if necessary. |
| [Timeline.cutFrames()](../Timeline_object/Timeline14.md) | Cuts a range of frames on the current layer from the timeline and saves them to the clipboard. |
| [Timeline.cutLayers()](../Timeline_object/Timeline15.md) | Cuts a range of Timeline layers and saves them to the clipboard. |
| [Timeline.deleteLayer()](../Timeline_object/Timeline16.md) | Deletes a layer. |
| [Timeline.duplicateLayers()](../Timeline_object/Timeline17.md) | Duplicates the selected layers or specified layers. |
| [Timeline.expandFolder()](../Timeline_object/Timeline18.md) | Expands or collapses the specified folder or folders. |
| [Timeline.findLayerIndex()](../Timeline_object/Timeline19.md) | Finds an array of indexes for the layers with the given name. |
| [Timeline.getBounds()](../Timeline_object/Timeline21.md) | Returns the bounding rectangle for all elements on all layers on the Timeline, for a given frame. |
| [Timeline.getFrameProperty()](../Timeline_object/Timeline22.md) | Retrieves the specified property’s value for the selected frames. |
| [Timeline.getGuidelines()](../Timeline_object/Timeline23.md) | Returns an XML string that represents the current positions of the horizontal and vertical guide lines for a timeline (View > Guides > Show Guides). |
| [Timeline.getLayerProperty()](../Timeline_object/Timeline24.md) | Retrieves the specified property’s value for the selected layers. |
| [Timeline.getSelectedFrames()](../Timeline_object/Timeline25.md) | Retrieves the currently selected frames in an array. |
| [Timeline.getSelectedLayers()](../Timeline_object/Timeline26.md) | Retrieves the zero-based index values of the currently selected layers. |
| [Timeline.insertBlankKeyframe()](../Timeline_object/Timeline27.md) | Inserts a blank keyframe at the specified frame index; if the index is not specified, inserts the blank keyframe by using the playhead/selection. |
| [Timeline.insertFrames()](../Timeline_object/Timeline28.md) | Inserts the specified number of frames at the given frame number. |
| [Timeline.insertKeyframe()](../Timeline_object/Timeline29.md) | Inserts a keyframe at the specified frame. |
| [Timeline.mergeLayers()](../Timeline_object/Timeline51.md) | Merge the layers within a specified range of indexes. |
| [Timeline.pasteFrames()](../Timeline_object/Timeline34.md) | Pastes the range of frames from the clipboard into the specified frames. |
| [Timeline.pasteLayers()](../Timeline_object/Timeline35.md) | Pastes copied layers to the Timeline above the specified layer index. |
| [Timeline.pasteMotion()](../Timeline_object/Timeline36.md) | Pastes the range of motion frames retrieved by timeline.copyMotion() to the Timeline. |
| [Timeline.pasteMotionSpecial()](../Timeline_object/Timeline37.md) | Pastes motion on selected frames, displaying a dialog box that lets the user choose which parts of a classic tween to paste. |
| [Timeline.removeFrames()](../Timeline_object/Timeline38.md) | Deletes the frame. |
| [Timeline.removeMotionObject()](../Timeline_object/Timeline39.md) | Removes the motion object created with timeline.createMotionObject(), and converts the frame(s) to static frames. |
| [Timeline.reorderLayer()](../Timeline_object/Timeline40.md) | Moves the first specified layer before or after the second specified layer. |
| [Timeline.reverseFrames()](../Timeline_object/Timeline41.md) | Reverses a range of frames. |
| [Timeline.selectAllFrames()](../Timeline_object/Timeline42.md) | Selects all the frames in the current timeline. |
| [Timeline.setFrameProperty()](../Timeline_object/Timeline43.md) | Sets the property of the Frame object for the selected frames. |
| [Timeline.setGuidelines()](../Timeline_object/Timeline44.md) | Replaces the guide lines for the timeline with the information specified. |
| [Timeline.setLayerProperty()](../Timeline_object/Timeline45.md) | Sets the specified property on all the selected layers to a specified value. |
| [Timeline.setSelectedFrames()](../Timeline_object/Timeline46.md) | Selects a range of frames in the current layer or sets the selected frames to the selection array passed into this method. |
| [Timeline.setSelectedLayers()](../Timeline_object/Timeline47.md) | Sets the layer to be selected; also makes the specified layer the current layer. |
| [Timeline.showLayerMasking()](../Timeline_object/Timeline48.md) | Shows the layer masking during authoring by locking the mask and masked layers. |
| [Timeline.startPlayback()](../Timeline_object/Timeline49.md) | Starts automatic playback of the timeline if it is not currently playing. |
| [Timeline.stopPlayback()](../Timeline_object/Timeline50.md) | Stops autoumatic playback of the timeline if it is currently playing. |

#### Property summary

The following properties are available for the Timeline object:

| **Property** | **Description** |
| --- | --- |
| [Timeline.advancedLayersEnabled](../Timeline_object/Timeline52.md) | Enable / disable advanced layers mode. |
| [Timeline.currentFrame](../Timeline_object/Timeline12.md) | A zero-based index for the frame at the current playhead location. |
| [Timeline.currentLayer](../Timeline_object/Timeline13.md) | A zero-based index for the currently active layer. |
| [Timeline.frameCount](../Timeline_object/Timeline20.md) | Read-only; an integer that represents the number of frames in this timeline’s longest layer. |
| [Timeline.layerCount](../Timeline_object/Timeline30.md) | Read-only; an integer that represents the number of layers in the specified timeline. |
| [Timeline.layers](../Timeline_object/Timeline31.md) | Read-only; an array of layer objects. |
| [Timeline.libraryItem](../Timeline_object/Timeline32.md) | Read-only property; indicates whether the timeline belongs to a scene. |
| [Timeline.name](../Timeline_object/Timeline33.md) | A string that represents the name of the current timeline. |
