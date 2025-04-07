## timeline summary

#### Availability

Flash MX 2004.

#### Description

The Timeline object represents the Animate timeline, which can be accessed for the current document by using fl.getDocumentDOM().getTimeline(). This method returns the timeline of the current scene or symbol that is being edited.
When you work with scenes, each scene’s timeline has an index value, and can be accessed for the current document by fl.getDocumentDOM().timelines[i]. (In this example, i is the index of the value of the timeline.)
When you work with frames by using the methods and properties of the Timeline object, remember that the frame value is a zero-based index (not the actual frame number in the sequence of frames in the timeline). That is, the first frame has a frame index of 0.

#### Method summary

The following methods are available for the Timeline object:

| **Method** | **Description** |
| --- | --- |
| [timeline.addMotionGuide()](../Timeline_object/timeline.md) | Adds a motion guide layer above the current layer and attaches the current layer to the newly added guide layer. |
| [timeline.addNewLayer()](../Timeline_object/timelin1.md) | Adds a new layer to the document and makes it the current layer. |
| [timeline.clearFrames()](../Timeline_object/timelin2.md) | Deletes all the contents from a frame or range of frames on the current layer. |
| [timeline.clearKeyframes()](../Timeline_object/timelin3.md) | Converts a keyframe to a regular frame and deletes its contents on the current layer. |
| [timeline.convertToBlankKeyframes()](../Timeline_object/timelin4.md) | Converts frames to blank keyframes on the current layer. |
| [timeline.convertToKeyframes()](../Timeline_object/timelin5.md) | Converts a range of frames to keyframes (or converts the selection if no frames are specified) on the current layer. |
| [timeline.copyFrames()](../Timeline_object/timelin6.md) | Copies a range of frames on the current layer to the clipboard. |
| [timeline.copyLayers()](../Timeline_object/timelin7.md) | Copies a range of Timeline layers to the clipboard. |
| [timeline.copyMotion()](../Timeline_object/timelin8.md) | Copies motion on selected frames, either from a motion tween or from frame-by-frame animation, so it can be applied to other frames. |
| [timeline.copyMotionAsAS3()](../Timeline_object/timelin9.md) | Copies motion on selected frames, either from a motion tween or from frame-by-frame animation, to the clipboard as ActionScript 3.0 code. |
| [timeline.createMotionObject()](../Timeline_object/timeli10.md) | Creates a new motion object at a designated start and end frame. |
| [timeline.createMotionTween()](../Timeline_object/timeli11.md) | Sets the [frame.tweenType](../Frame_object/frame39.md) property to motion for each selected keyframe on the current layer, and converts each frame’s contents to a single symbol instance if necessary. |

| **Method** | **Description** |
| --- | --- |
| [timeline.cutFrames()](../Timeline_object/timeli14.md) | Cuts a range of frames on the current layer from the timeline and saves them to the clipboard. |
| [timeline.cutLayers()](../Timeline_object/timeli15.md) | Cuts a range of Timeline layers and saves them to the clipboard. |
| [timeline.deleteLayer()](../Timeline_object/timeli16.md) | Deletes a layer. |
| [timeline.duplicateLayers()](../Timeline_object/timeli17.md) | Duplicates the selected layers or specified layers. |
| [timeline.expandFolder()](../Timeline_object/timeli18.md) | Expands or collapses the specified folder or folders. |
| [timeline.findLayerIndex()](../Timeline_object/timeli19.md) | Finds an array of indexes for the layers with the given name. |
| [timeline.getBounds()](../Timeline_object/timeli21.md) | Returns the bounding rectangle for all elements on all layers on the Timeline, for a given frame. |
| [timeline.getFrameProperty()](../Timeline_object/timeli22.md) | Retrieves the specified property’s value for the selected frames. |
| [timeline.getGuidelines()](../Timeline_object/timeli23.md) | Returns an XML string that represents the current positions of the horizontal and vertical guide lines for a timeline (View > Guides > Show Guides). |
| [timeline.getLayerProperty()](../Timeline_object/timeli24.md) | Retrieves the specified property’s value for the selected layers. |
| [timeline.getSelectedFrames()](../Timeline_object/timeli25.md) | Retrieves the currently selected frames in an array. |
| [timeline.getSelectedLayers()](../Timeline_object/timeli26.md) | Retrieves the zero-based index values of the currently selected layers. |
| [timeline.insertBlankKeyframe()](../Timeline_object/timeli27.md) | Inserts a blank keyframe at the specified frame index; if the index is not specified, inserts the blank keyframe by using the playhead/selection. |
| [timeline.insertFrames()](../Timeline_object/timeli28.md) | Inserts the specified number of frames at the given frame number. |
| [timeline.insertKeyframe()](../Timeline_object/timeli29.md) | Inserts a keyframe at the specified frame. |
| [timeline.mergeLayers()](../Timeline_object/timeli51.md) | Merge the layers within a specified range of indexes. |
| [timeline.pasteFrames()](../Timeline_object/timeli34.md) | Pastes the range of frames from the clipboard into the specified frames. |
| [timeline.pasteLayers()](../Timeline_object/timeli35.md) | Pastes copied layers to the Timeline above the specified layer index. |
| [timeline.pasteMotion()](../Timeline_object/timeli36.md) | Pastes the range of motion frames retrieved by timeline.copyMotion() to the Timeline. |
| [timeline.pasteMotionSpecial()](../Timeline_object/timeli37.md) | Pastes motion on selected frames, displaying a dialog box that lets the user choose which parts of a classic tween to paste. |
| [timeline.removeFrames()](../Timeline_object/timeli38.md) | Deletes the frame. |
| [timeline.removeMotionObject()](../Timeline_object/timeli39.md) | Removes the motion object created with timeline.createMotionObject(), and converts the frame(s) to static frames. |
| [timeline.reorderLayer()](../Timeline_object/timeli40.md) | Moves the first specified layer before or after the second specified layer. |
| [timeline.reverseFrames()](../Timeline_object/timeli41.md) | Reverses a range of frames. |
| [timeline.selectAllFrames()](../Timeline_object/timeli42.md) | Selects all the frames in the current timeline. |
| [timeline.setFrameProperty()](../Timeline_object/timeli43.md) | Sets the property of the Frame object for the selected frames. |
| [timeline.setGuidelines()](../Timeline_object/timeli44.md) | Replaces the guide lines for the timeline with the information specified. |
| [timeline.setLayerProperty()](../Timeline_object/timeli45.md) | Sets the specified property on all the selected layers to a specified value. |
| [timeline.setSelectedFrames()](../Timeline_object/timeli46.md) | Selects a range of frames in the current layer or sets the selected frames to the selection array passed into this method. |

| **Method** | **Description** |
| --- | --- |
| [timeline.setSelectedLayers()](../Timeline_object/timeli47.md) | Sets the layer to be selected; also makes the specified layer the current layer. |
| [timeline.showLayerMasking()](../Timeline_object/timeli48.md) | Shows the layer masking during authoring by locking the mask and masked layers. |
| [timeline.startPlayback()](../Timeline_object/timeli49.md) | Starts automatic playback of the timeline if it is not currently playing. |
| [timeline.stopPlayback()](../Timeline_object/timeli50.md) | Stops autoumatic playback of the timeline if it is currently playing. |

#### Property summary

The following properties are available for the Timeline object:

| **Property** | **Description** |
| --- | --- |
| [timeline.advancedLayersEnabled](../Timeline_object/timeli52.md) | Enable / disable advanced layers mode. |
| [timeline.currentFrame](../Timeline_object/timeli12.md) | A zero-based index for the frame at the current playhead location. |
| [timeline.currentLayer](../Timeline_object/timeli13.md) | A zero-based index for the currently active layer. |
| [timeline.frameCount](../Timeline_object/timeli20.md) | Read-only; an integer that represents the number of frames in this timeline’s longest layer. |
| [timeline.layerCount](../Timeline_object/timeli30.md) | Read-only; an integer that represents the number of layers in the specified timeline. |
| [timeline.layers](../Timeline_object/timeli31.md) | Read-only; an array of layer objects. |
| [timeline.libraryItem](../Timeline_object/timeli32.md) | Read-only property; indicates whether the timeline belongs to a scene. |
| [timeline.name](../Timeline_object/timeli33.md) | A string that represents the name of the current timeline. |
