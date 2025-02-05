import User from '../model/userModel.js'
const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({ mes: "user data is not found" });
        }
        const savedData = await userData.save()
        res.status(201).json(savedData)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
export default create

export const getAll = async (req, res) => {
    try {
        const userData = await User.find()
        if (!userData) {
            res.status(404).json({ mes: "users not found" })
        }
        res.status(201).json(userData)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
export const getOne = async (req, res) => {
    try {
       const id=req.params.id;
       const userExist=await User.findById(id)
       if(!userExist){
        res.status(404).json({mes:"user Not found"});
       }
       res.status(201).json(userExist)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
export const update=async(req,res)=>{
    try {
       const id=req.params.id;
       const existUser=await User.findById(id)
       if(!existUser){
        res.status(404).json({mes:"user not found"})
       } 
       const updatedData=await User.findByIdAndUpdate(id,req.body,{new:true})
       res.status(201).json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
export const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const existUser=await User.findById(id)
        if(!existUser){
            res.status(404).json({mes:"user not exist"})
        }
        await User.findByIdAndDelete(id)
        res.status(201).json({mes:"user deleted Successfully"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}