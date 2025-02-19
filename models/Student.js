import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    StudentID: {
        type: String,
        required: true,
        unique: true
     },
    FirstName: {
        type: String,
        required: true
    },
    SurName: {
        type: String,
        required: true
    },
    DateOfBirth: {
        type: Date,
        required: true
    },
    Gender: {
        type: String,
        enum: ['M', 'F', 'Other'], // You can adjust this according to your needs
        required: true
    },
    EnrollmentDate: {
        type: Date,
        required: true
    },
    SchoolID: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: '' // Default to an empty string if no image URL is provided
    },
    RecordDate: {
        type: Date,
        required: true
    },
    CreatedBy: {
        type: String,
        default: ''
    },
    ModifiedAt: {
        type: Date,
        default: Date.now
    },
    ModifiedBy: {
        type: String,
        default: ''
    }
});

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

export default Student;