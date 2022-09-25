import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Recording } from "expo-av/build/Audio";
import { addRecord } from "../../store/RecordAction";
import RecorderBoxFeedback from "../RecorderBoxFeedback";
import Player from "../Player";
import {
  RecorderIconWrapper,
  BottomBar,
  IconWrapper,
  Label,
  RecorderWrapper,
} from "./styles";

const RecorderButton = () => {
  const [recording, setRecording] = useState(null);
  const [audioUri, setAudioUri] = useState("");
  const [isRecorded, setIsRecorded] = useState(false);
  const dispatch = useDispatch();

  async function startRecording() {
    setIsRecorded(false);
    try {
      console.log("Starting recording");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );

      setRecording(recording);
      dispatch(
        addRecord({
          status: "RECORDING",
          uri: recording._uri,
        })
      );
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording");
    recording
      .getStatusAsync()
      .then((res) => console.log("res => ", res))
      .catch((err) => console.log("err => ", err));

    setRecording(undefined);

    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setAudioUri(uri);
    console.log("Recording stopped and stored at", uri);
    setIsRecorded(true);
  }

  return (
    <>
      {isRecorded && <Player uri={audioUri} />}
      {recording && (
        <RecorderBoxFeedback
          backgroundColor={recording ? blue : red}
        />
      )}
      <BottomBar>
        {recording && (
          <IconWrapper backgroundColor={recording ? red : grey}>
            <FontAwesome name="trash-o" size={24} color={white} />
          </IconWrapper>
        )}

        <RecorderWrapper>
          <TouchableWithoutFeedback
            onPressIn={startRecording}
            onPressOut={stopRecording}
          >
            <RecorderIconWrapper
              color={recording ? red : blue}
            >
              <FontAwesome5 name="microphone" size={24} color={white} />
            </RecorderIconWrapper>
          </TouchableWithoutFeedback>
          <Label>Hold to record</Label>
        </RecorderWrapper>

        {recording && (
          <IconWrapper backgroundColor={grey}>
            <FontAwesome name="lock" size={24} color={white} />
          </IconWrapper>
        )}
      </BottomBar>
    </>
  );
};

export default RecorderButton;