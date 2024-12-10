from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO
from PIL import Image
import torch
from torchvision import transforms

# Load your PyTorch model (replace with your own model path)
model = torch.load("freshness.pt", map_location=torch.device("cpu"))
model.eval()

# Define transformations for input image
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# Create FastAPI app
app = FastAPI()

# CORS configuration to allow requests from your frontend domain
origins = [
    "http://localhost:3000",  # Localhost for development
    "https://your-nextjs-app.vercel.app",  # Replace with your production frontend URL
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow specific domains (localhost and production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define the prediction endpoint
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        # Convert uploaded file into an image
        image_data = await file.read()
        image = Image.open(BytesIO(image_data)).convert("RGB")
        
        # Apply transformations
        input_tensor = transform(image).unsqueeze(0)
        
        # Make prediction
        with torch.no_grad():
            output = model(input_tensor)
        
        # Get the predicted class (change based on your model's output)
        _, predicted_class = torch.max(output, 1)
        
        return {"predicted_class": predicted_class.item()}
    
    except Exception as e:
        return {"error": str(e)}
