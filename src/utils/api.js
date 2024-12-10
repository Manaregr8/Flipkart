import axios from "axios";

export const predictImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  // Send the form data to the FastAPI endpoint
  const response = await axios.post(
    "/api/predict", // Vercel will treat this as a serverless function at the /api endpoint
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
