## Frame summary

#### Availability

Flash MX 2004.

#### Description

The Frame object represents frames in the layer.

#### Method summary

The following methods can be used with the Frame object:

| **Method** | **Description** |
| --- | --- |
| [Frame.convertMotionObjectTo2D()](../Frame_object/Frame.md) | Converts the selected motion object to a 2D motion object. |
| [Frame.convertMotionObjectTo3D()](../Frame_object/Frame1.md) | Converts the selected motion object to a 3D motion object. |
| [Frame.convertToFrameByFrameAnimation()](../Frame_object/Frame2.md) | Converts the current frame to Frame-by-Frame Animation. |
| [Frame.getCustomEase()](../Frame_object/Frame6.md) | Returns an array of JavaScript objects, each of which has an _xy_ property. |
| [Frame.getMotionObjectXML()](../Frame_object/Frame7.md) | Returns the motion XML from the selected motion object. |
| [Frame.getSoundEnvelope()](../Frame_object/Frame8.md) | Gets the sound envelope data of any frame. |
| [Frame.getSoundEnvelopeLimits()](../Frame_object/Frame9.md) | Gets the limits (start, end) for a custom Sound envelope that is applied to the frame sound. |
| [Frame.hasMotionPath()](../Frame_object/Frame11.md) | Informs you whether or not the currrent selection has a motion tween. |
| [Frame.is3DMotionObject()](../Frame_object/Frame12.md) | Informs you whether or not the currrent selection is a 3D motion object. |
| [Frame.isEmpty()](../Frame_object/Frame13.md) | Informs you whether the frame contains any elements. |
| [Frame.isMotionObject()](../Frame_object/Frame14.md) | Informs you whether or not the currrent selection is a motion object. |
| [Frame.selectMotionPath()](../Frame_object/Frame23.md) | Selects or deselects the motion path of the current motion object. |
| [Frame.setCustomEase()](../Frame_object/Frame24.md) | Specifies a cubic Bézier curve to be used as a custom ease curve. |
| [Frame.setMotionObjectDuration()](../Frame_object/Frame25.md) | Specifies the duration (the tween span length) of the currently selected motion object. |
| [Frame.setMotionObjectXML()](../Frame_object/Frame26.md) | Applies the specified motion XML to the selected motion object. |
| [Frame.setSoundEnvelope()](../Frame_object/Frame27.md) | Sets the sound envelope data of a frame. |
| [Frame.setSoundEnvelopeLimits()](../Frame_object/Frame28.md) | Sets the sound envelope limits of any frame with a sound file. |

#### Property summary

The following properties can be used with the Frame object:

| **Property** | **Description** |
| --- | --- |
| [Frame.actionScript](../Frame_object/Frame3.md) | A string representing ActionScript code. |
| [Frame.duration](../Frame_object/Frame4.md) | Read-only; an integer that represents the number of frames in a frame sequence. |
| [Frame.elements](../Frame_object/Frame5.md) | Read-only; an array of Element objects (see [Element object](../Element_object/Element_summary.md)). |
| [Frame.hasCustomEase](../Frame_object/Frame10.md) | A Boolean value that specifies whether the frame gets its ease information from the custom ease curve. |
| [Frame.labelType](../Frame_object/Frame15.md) | A string that specifies the type of Frame name. |
| [Frame.motionTweenOrientToPath](../Frame_object/Frame16.md) | A Boolean value that specifies whether or not the tweened element rotates the element as it moves along a path to maintain its angle with respect to each point on the path. |
| [Frame.motionTweenRotate](../Frame_object/Frame17.md) | A string that specifies how the tweened element rotates. |
| [Frame.motionTweenRotateTimes](../Frame_object/Frame18.md) | An integer that specifies the number of times the tweened element rotates between the starting keyframe and the next keyframe. |
| [Frame.motionTweenScale](../Frame_object/Frame19.md) | A Boolean value that specifies whether the tweened element scales to the size of the object in the following keyframe, increasing its size with each frame in the tween (true), or doesn’t scale (false). |
| [Frame.motionTweenSnap](../Frame_object/Frame20.md) | A Boolean value that specifies whether the tweened element automatically snaps to the nearest point on the motion guide layer associated with this frame’s layer (true) or not (false). |
| [Frame.motionTweenSync](../Frame_object/Frame21.md) | A Boolean value that if set to true, synchronizes the animation of the tweened object with the main timeline. |
| [Frame.name](../Frame_object/Frame22.md) | A string that specifies the name of the frame. |
| [Frame.shapeTweenBlend](../Frame_object/Frame29.md) | A string that specifies how a shape tween is blended between the shape in the keyframe at the start of the tween and the shape in the following keyframe. |
| [Frame.soundEffect](../Frame_object/Frame30.md) | A string that specifies effects for a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)). |
| [Frame.soundLibraryItem](../Frame_object/Frame31.md) | A library item (see [SoundItem object](../SoundItem_object/SoundItem_summary.md)) used to create a sound. |
| [Frame.soundLoop](../Frame_object/Frame32.md) | An integer value that specifies the number of times a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)) plays. |
| [Frame.soundLoopMode](../Frame_object/Frame33.md) | A string that specifies whether a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)) should play a specific number of times or loop indefinitely. |
| [Frame.soundName](../Frame_object/Frame34.md) | A string that specifies the name of a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)), as stored in the library. |
| [Frame.soundSync](../Frame_object/Frame35.md) | A string that specifies the sync behavior of a sound that is attached directly to a frame ([Frame.soundLibraryItem](../Frame_object/Frame31.md)). |
| [Frame.startFrame](../Frame_object/Frame36.md) | Read-only; the index of the first frame in a sequence. |
| [Frame.tweenEasing](../Frame_object/Frame37.md) | An integer that specifies the amount of easing that should be applied to the tweened object. |
| [Frame.tweenInstanceName](../Frame_object/Frame38.md) | Assings an instance name to the specified motion object. |
| [Frame.tweenType](../Frame_object/Frame39.md) | A string that specifies the type of tween. |
| [Frame.useSingleEaseCurve](../Frame_object/Frame40.md) | A Boolean value that specifies whether a single custom ease curve is used for easing information for all properties. |
