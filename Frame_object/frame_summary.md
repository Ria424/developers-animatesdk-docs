## Frame summary

#### Availability

Flash MX 2004.

#### Description

The Frame object represents frames in the layer.

#### Method summary

The following methods can be used with the Frame object:

| **Method** | **Description** |
| --- | --- |
| [frame.convertMotionObjectTo2D()](../Frame_object/frame.md) | Converts the selected motion object to a 2D motion object. |
| [frame.convertMotionObjectTo3D()](../Frame_object/frame1.md) | Converts the selected motion object to a 3D motion object. |
| [frame.convertToFrameByFrameAnimation()](../Frame_object/frame2.md) | Converts the current frame to Frame-by-Frame Animation. |
| [frame.getCustomEase()](../Frame_object/frame6.md) | Returns an array of JavaScript objects, each of which has an _xy_ property. |
| [frame.getMotionObjectXML()](../Frame_object/frame7.md) | Returns the motion XML from the selected motion object. |
| [frame.getSoundEnvelope()](../Frame_object/frame8.md) | Gets the sound envelope data of any frame. |
| [frame.getSoundEnvelopeLimits()](../Frame_object/frame9.md) | Gets the limits (start, end) for a custom Sound envelope that is applied to the frame sound. |
| [frame.hasMotionPath()](../Frame_object/frame11.md) | Informs you whether or not the currrent selection has a motion tween. |
| [frame.is3DMotionObject()](../Frame_object/frame12.md) | Informs you whether or not the currrent selection is a 3D motion object. |
| [frame.isEmpty()](../Frame_object/frame13.md) | Informs you whether the frame contains any elements. |
| [frame.isMotionObject()](../Frame_object/frame14.md) | Informs you whether or not the currrent selection is a motion object. |
| [frame.selectMotionPath()](../Frame_object/frame23.md) | Selects or deselects the motion path of the current motion object. |
| [frame.setCustomEase()](../Frame_object/frame24.md) | Specifies a cubic Bézier curve to be used as a custom ease curve. |
| [frame.setMotionObjectDuration()](../Frame_object/frame25.md) | Specifies the duration (the tween span length) of the currently selected motion object. |
| [frame.setMotionObjectXML()](../Frame_object/frame26.md) | Applies the specified motion XML to the selected motion object. |
| [frame.setSoundEnvelope()](../Frame_object/frame27.md) | Sets the sound envelope data of a frame. |
| [frame.setSoundEnvelopeLimits()](../Frame_object/frame28.md) | Sets the sound envelope limits of any frame with a sound file. |

#### Property summary

The following properties can be used with the Frame object:

| **Property** | **Description** |
| --- | --- |
| [frame.actionScript](../Frame_object/frame3.md) | A string representing ActionScript code. |
| [frame.duration](../Frame_object/frame4.md) | Read-only; an integer that represents the number of frames in a frame sequence. |
| [frame.elements](../Frame_object/frame5.md) | Read-only; an array of Element objects (see [Element object](../Element_object/element_summary.md)). |
| [frame.hasCustomEase](../Frame_object/frame10.md) | A Boolean value that specifies whether the frame gets its ease information from the custom ease curve. |
| [frame.labelType](../Frame_object/frame15.md) | A string that specifies the type of Frame name. |
| [frame.motionTweenOrientToPath](../Frame_object/frame16.md) | A Boolean value that specifies whether or not the tweened element rotates the element as it moves along a path to maintain its angle with respect to each point on the path. |
| [frame.motionTweenRotate](../Frame_object/frame17.md) | A string that specifies how the tweened element rotates. |
| [frame.motionTweenRotateTimes](../Frame_object/frame18.md) | An integer that specifies the number of times the tweened element rotates between the starting keyframe and the next keyframe. |
| [frame.motionTweenScale](../Frame_object/frame19.md) | A Boolean value that specifies whether the tweened element scales to the size of the object in the following keyframe, increasing its size with each frame in the tween (true), or doesn’t scale (false). |
| [frame.motionTweenSnap](../Frame_object/frame20.md) | A Boolean value that specifies whether the tweened element automatically snaps to the nearest point on the motion guide layer associated with this frame’s layer (true) or not (false). |
| [frame.motionTweenSync](../Frame_object/frame21.md) | A Boolean value that if set to true, synchronizes the animation of the tweened object with the main timeline. |
| [frame.name](../Frame_object/frame22.md) | A string that specifies the name of the frame. |
| [frame.shapeTweenBlend](../Frame_object/frame29.md) | A string that specifies how a shape tween is blended between the shape in the keyframe at the start of the tween and the shape in the following keyframe. |
| [frame.soundEffect](../Frame_object/frame30.md) | A string that specifies effects for a sound that is attached directly to a frame ([frame.soundLibraryItem](../Frame_object/frame31.md)). |
| [frame.soundLibraryItem](../Frame_object/frame31.md) | A library item (see [SoundItem object](../SoundItem_object/soundItem_summary.md)) used to create a sound. |
| [frame.soundLoop](../Frame_object/frame32.md) | An integer value that specifies the number of times a sound that is attached directly to a frame ([frame.soundLibraryItem](../Frame_object/frame31.md)) plays. |
| [frame.soundLoopMode](../Frame_object/frame33.md) | A string that specifies whether a sound that is attached directly to a frame ([frame.soundLibraryItem](../Frame_object/frame31.md)) should play a specific number of times or loop indefinitely. |
| [frame.soundName](../Frame_object/frame34.md) | A string that specifies the name of a sound that is attached directly to a frame ([frame.soundLibraryItem](../Frame_object/frame31.md)), as stored in the library. |
| [frame.soundSync](../Frame_object/frame35.md) | A string that specifies the sync behavior of a sound that is attached directly to a frame ([frame.soundLibraryItem](../Frame_object/frame31.md)). |
| [frame.startFrame](../Frame_object/frame36.md) | Read-only; the index of the first frame in a sequence. |
| [frame.tweenEasing](../Frame_object/frame37.md) | An integer that specifies the amount of easing that should be applied to the tweened object. |
| [frame.tweenInstanceName](../Frame_object/frame38.md) | Assings an instance name to the specified motion object. |
| [frame.tweenType](../Frame_object/frame39.md) | A string that specifies the type of tween. |
| [frame.useSingleEaseCurve](../Frame_object/frame40.md) | A Boolean value that specifies whether a single custom ease curve is used for easing information for all properties. |
