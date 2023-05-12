import express, { Application, NextFunction, Request,Response, urlencoded } from 'express'
import cors from 'cors'
import { Schema, model } from 'mongoose'

const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended: true}))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // res.send('Hello World!')
    // next()

    // Creating an interface
    interface IUser{
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string,
            middleName?: string,
            lastName: string
        }
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string
    }
    // Creating a schema using interface
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true, 
            unique: true
        },
        role:{
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true
            }
        },
        dateOfBirth: {
            type: String
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        email: {
            type: String,
        },
        contactNo: {
            type: String,
            required: true
        },
        emergencyContactNo: {
            type: String,
            required: true
        },
        presentAddress: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        }
    })
});





export default app;