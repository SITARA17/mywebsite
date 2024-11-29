from gtts import gTTS
import os

# Define the text to be converted to speech
text = "help?"  # You can change this text as needed

# Choose the language (for English, use 'en')
language = 'en'

# Create a gTTS object
tts = gTTS(text=text, lang=language, slow=False)

# Save the audio to a file
audio_file = "output_audio.mp3"
tts.save(audio_file)

# Optionally, play the audio (for Windows)
os.system(f"start {audio_file}")
