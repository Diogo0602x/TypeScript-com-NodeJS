import { Document, Schema, Model, model } from 'mongoose'
import { UserInterface } from '../interfaces/user'

const UserSchema = new Schema({
    id: String,
    email: String,
    name: String,
    password: String,
    age: Number,
    celular: Number,
    avatar: String
}, {
  timestamps: true
})

export default model('User', UserSchema)