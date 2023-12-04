import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true
    },
    imageURL: {
      type: String,
      required: true
    },
    // You can add more fields as needed for your images
    // For example: imageDescription, createdAt, etc.
  });

  const Image = mongoose.model('Image', imageSchema);

 export default Image;

