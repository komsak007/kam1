import { Schema, Document, model } from 'mongoose';

export interface ITodo extends Document {
  name: string;
} //กำหนด type ตอนเรียกใช้หรือส่งข้อมูล

const TodoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true, //จำเป็นต้องใส่
    },
  },
  {
    timestamps: true,
  }
); //รูปแบบของฐานข้อมูลว่ามีอะไรบ้าง

export default model<ITodo>('Todo', TodoSchema);
