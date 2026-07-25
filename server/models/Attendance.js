import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    employeeId: {type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true},
    date: {type: Date, required: true},
    checkIn: {type: Date, default: null},
    checkOut: {type: Date, default: null},
    status: {type: String, enum: ["PRESENT", "ABSENT", "LATE"], default: "PRESENT"},
    workingHours: {type: Number, default: null},
    dayType:{type: String, enum: ["Full Day", "Three Quarter Day", "Half Day", "Short Day", null], default: null}
   
}, {timestamps: true})

attedanceSchema.index({employeeId: 1, date: 1,}, {unique: true})


const User = mongoose.models.User || mongoose.model("User", userSchema)


export default User;



