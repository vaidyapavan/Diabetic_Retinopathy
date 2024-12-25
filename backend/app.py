from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import json

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for communication with React frontend

# Load the model
MODEL_PATH = 'diabetic_retinopathy_model.h5'
model = load_model(MODEL_PATH)

# Load class names from JSON
CLASS_NAMES_PATH = 'class_names.json'
try:
    with open(CLASS_NAMES_PATH, 'r') as file:
        class_names = json.load(file)
        if not isinstance(class_names, list):
            raise ValueError("class_names.json should contain a list of class names.")
except Exception as e:
    print(f"Error loading class names: {e}")
    exit(1)

@app.route('/classify', methods=['POST', 'GET'])
def classify_image():
    if request.method == 'POST':
        """Handle image classification requests."""
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400

        file = request.files['file']
        if file:
            try:
                # Preprocess the uploaded image
                image = Image.open(file)
                image = image.resize((224, 224))  # Resize to model input size
                image_array = np.array(image) / 255.0  # Normalize to 0-1
                image_array = np.expand_dims(image_array, axis=0)   # Add batch dimension
                print("Model input shape:", model.input_shape)

                # Perform prediction
                predictions = model.predict(image_array)
                predicted_index = np.argmax(predictions)
                predicted_class = class_names[predicted_index]
                confidence = float(predictions[0][predicted_index])
                print(f"Predictions: {predictions}")
                print(f"Predicted class: {predicted_class}, Confidence: {confidence:.2%}")

                return jsonify({'result': predicted_class, 'confidence': confidence}), 200
            except Exception as e:
                return jsonify({'error': str(e)}), 500

        return jsonify({'error': 'Invalid file'}), 400

    elif request.method == 'GET':
        # Provide information about the classify endpoint
        return jsonify({
            'message': 'Welcome to the classify endpoint. Please use POST with an image file to get predictions.',
            'example_usage': 'POST an image file with the key "file" to this endpoint for classification.',
            'model_info': {
                'input_shape': model.input_shape,
                'classes': class_names,
            }
        }), 200

@app.route('/')
def home():
    return "Flask Backend is Running"

if __name__ == '__main__':
    app.run(debug=True)
