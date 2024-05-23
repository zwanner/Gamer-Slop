const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        body: {
            type: String,
            required: true,
            trim: true
        },
        user: {
            type: Number
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
