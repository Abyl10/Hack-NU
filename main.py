import tensorflow as tf
import librosa
import numpy as np
from fastapi import FastAPI, HTTPException

app = FastAPI()

dict = {0:'airconditioner', 
        1:'carhorn', 
        2:'children_playing', 
        3:'dog_bark',
        4:'drilling',
        5:'engine_idling',
        6:'gun_shot',
        7:'jackhammer',
        8:'siren',
        9:'street_music',
        10:'screaming', 
        11:'fire_alarm', 
        12:'crying', 
        13:'traffic_noise'
}

@app.get("/sound")
def get_predict_sound(): 
        new_model = tf.keras.models.load_model('audio_classification_final.hdf5')
        filename="dog-barking.wav"
        audio, sample_rate = librosa.load(filename, sr=16000, res_type='kaiser_fast') 
        mels = np.mean(librosa.feature.melspectrogram(y=audio, sr=sample_rate).T,axis=0)
        mels = mels.transpose()
        mels = mels.reshape(1, 16, 8, 1)
        print(mels.shape)
        predicted_label = np.argmax(new_model.predict(mels), axis=-1)
        print(dict[predicted_label[0]])
        return {"Predicted sound": dict[predicted_label[0]]}
    
@app.post("/sound")
def predict_sound(filename: str):
        new_model = tf.keras.models.load_model('audio_classification_final.hdf5')
        audio, sample_rate = librosa.load(filename, sr=16000, res_type='kaiser_fast') 
        mels = np.mean(librosa.feature.melspectrogram(y=audio, sr=sample_rate).T,axis=0)
        mels = mels.transpose()
        mels = mels.reshape(1, 16, 8, 1)
        print(mels.shape)
        predicted_label = np.argmax(new_model.predict(mels), axis=-1)
        print(dict[predicted_label[0]])
        return {"Predicted sound": dict[predicted_label[0]]}