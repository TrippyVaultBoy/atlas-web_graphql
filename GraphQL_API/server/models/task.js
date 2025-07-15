const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    title: String,
    weight: Number,
    description: String
});

module.exports = mongoose.model('Task', taskSchema);