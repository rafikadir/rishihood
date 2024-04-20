import successBg from '../assets/success_bg.png';
import Button from '../components/Button';
import Navbar from '../shared/Navbar';

const Success = () => {
    return (
        <>
            <Navbar/>
            <section className="bg-cover h-screen flex justify-center items-center" style={{backgroundImage: `url(${successBg})`}} id="home">
                <div className='text-center backdrop-blur-lg md:p-10 p-5 rounded-md md:max-w-[550px] max-w-[300px]'>
                    <h2 className='text-white font-garamond md:text-[60px] text-[30px] mb-2'>
                        Congratulations!
                    </h2>
                    <p className='text-white font-garamond md:text-[30px] text-[18px] mb-8'>Registration successful. Looking forward to seeing you soon!</p>
                    
                    <div className='flex gap-3'>
                        <Button 
                            text="Read Our Blogs"
                            link="https://edept.co/blog/"
                        />

                        <Button 
                            text="Download Brochure"
                            transparent={true}
                        />
                    </div>
            </div>
        </section>
        </>
    );
};

export default Success;