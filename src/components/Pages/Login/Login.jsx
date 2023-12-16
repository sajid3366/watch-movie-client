import '../Shared/Navbar/navbar.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from 'react-router-dom';
import bgImage from '../../../../public/image/bgimage.jpg'

const Login = () => {
    return (
        <div   className="text-white  text-center">
            <img src={bgImage} className='h-screen w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]' alt="" />
            <div  className="w-[380px] bg-[#131720] px-12 py-8 rounded-lg pt-10  left-[600px] top-[60px] absolute">
                <div className="flex justify-center mb-8"><img src="http://flixtv.volkovdesign.com/main/img/logo.svg" alt="" /></div>
                <form>
                    <div ><input className="bg-[#151f30] mb-5 w-full rounded-2xl h-12 px-5" type="email" name="email" placeholder='Email'/></div>
                    <div><input className="bg-[#151f30] mb-5 w-full rounded-2xl h-12 px-5" type="password" name="password" id="" placeholder='Password' /></div>
                    <div className="text-left"><input className="text-white mr-2" type="checkbox" defaultChecked name="rememberme" id="" />Remember me</div>
                    <div><input className="btn btn-primary w-full rounded-2xl uppercase mt-5 mb-3 hover:bg-slate-100 hover:text-black color " type="submit" value="Login" /></div>
                </form>
                <div>
                    <p>or</p>
                    <div className='flex gap-x-5 justify-between text-2xl mt-3'>
                        <div className='bg-[#3b5999] w-full flex justify-center rounded-2xl py-2 color hover:bg-slate-100'><FaFacebookF /></div>
                        <div className='bg-[#df4a32] w-full flex justify-center rounded-2xl py-2 color hover:bg-slate-100'><FaGoogle /></div>
                        <div className='bg-[#1da1f2] w-full flex justify-center rounded-2xl py-2 color hover:bg-slate-100'><IoLogoTwitter /></div>
                    </div>
                    <div>
                        <h2 className='mt-5'>Don't have an account? <Link to="/signup" className='text-[#2f80ed] '>SIgn up!</Link></h2>
                        <Link to="/"><h2 className='text-[#2f80ed] mt-3'>Forget Password?</h2></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;