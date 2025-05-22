import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name must contain at least 3 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Last name must contain at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email address",
    },
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minLength: [11, "Phone number must contain exactly 11 digits"],
    maxLength: [11, "Phone number must contain exactly 11 digits"],
  },
  nic: {
    type: String,
    required: [true, "NIC is required"],
    minLength: [13, "NIC must contain exactly 13 digits"],
    maxLength: [13, "NIC must contain exactly 13 digits"],
  },
  dob: {
    type: Date,
    required: [true, "Date of birth is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must contain at least 8 characters"],
    select: false,
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["Male", "Female"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["Admin", "Patient", "Doctor"],
  },
  docDepartment: {
    type: String,
    default: null, // Only relevant for doctors
  },
  docAvatar: {
    public_id: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
  },
});

// Hashing the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JSON Web Token
userSchema.methods.generateWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
