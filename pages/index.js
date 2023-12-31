import Head from 'next/head';
import linked from '../public/linklogo.png';
import checked from '../public/checkmark.png';
import dl from '../public/dllogo.png';
import gitlogo from '../public/gitlogo.png';
import mail from '../public/mail.png';
import shark from '../public/sharkdraw.jpg';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sharina's Portfolio</title>
        <meta name='description' content='Generated by create next app'/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="bg-white">
        <section className="min-h-screen">
          <div className="static bg-layer h-80 w-full">
              <div className="flex justify-center pt-10 pb-yspace z-50">
                  <div className=" flex justify-center p-6 bg-white w-contact h-28 border-black border-t-[5px] border-b-[10px]  border-r-[10px] border-l-[5px] rounded-[20px]">
                    <div className="font-patua-one text-5xl text-center">
                    <Typewriter
                            options={{
                            strings: ['Welcome!', 'I am a...', 'Palamunin', 'Front-End Dev'],
                            autoStart: true,
                            loop: true,
                            }}
                    />
                    </div>                   
                  </div>
              </div>

            <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ">
              <Image src={shark} className="object-fill h-60 w-60 border-black border-t-[5px] border-b-[10px]  border-r-[10px] border-l-[5px] rounded-[20px]"/>       
            </div>
          </div>
          <div className="flex items-end justify-center z-50">
            <div><h1 className="font-patua-one text-5xl text-center pt-32 pr-yspace">Sharina Leigh Nojas</h1></div>     
            <Image src={checked} className="object-contain h-12 w-12 sm:shrink-0"/>         
          </div>
          <div className="flex items-center justify-center z-50">
            <p className="font-patua-one text-lg text-center pt-yspace pb-yspace px-24 sm:px-5 lg:px-40">I am a Palamunin with experience in Mobile Development and Web Development. Frameworks like, Flutter, React, Tailwind and Next.js. Languages like dart, HTML, CSS, JavaScript and C#. I also had experience with using PostgreSQL and Figma for UI/UX design. I also drink a lot of coffee</p>                  
          </div>
          <div className="justify-center inline-flex space-x-8 w-full z-50">
            <a href="https://www.linkedin.com/in/sharina-leigh-nojas/" >
              <div className="bg-white hover:bg-violet-600 w-32 h-32 border-black border-t-[5px] border-b-[10px]  border-r-[10px] border-l-[5px] rounded-[20px]">
                <div className="justify-center p-5">
                  <Image src={linked} className="object-contain h-12 w-12 mx-auto"/>
                  <div className="font-patua-one text-xl text-center">Linkedin</div>
                </div>             
              </div>
            </a>       
            <a href="https://github.com/bingotbalot" >
              <div className="bg-white hover:bg-violet-600 w-32 h-32 border-black border-t-[5px] border-b-[10px]  border-r-[10px] border-l-[5px] rounded-[20px]">
                <div className="justify-center p-5">
                  <Image src={gitlogo} className="object-contain h-12 w-12 mx-auto"/>
                  <div className="font-patua-one text-xl text-center">GitHub</div>
                </div>             
              </div>
            </a> 
            <a href="https://www.linkedin.com/in/sharina-leigh-nojas/" >
              <div className="bg-white hover:bg-violet-600 w-32 h-32 border-black border-t-[5px] border-b-[10px]  border-r-[10px] border-l-[5px] rounded-[20px]">
                <div className="justify-center p-5">
                  <Image src={dl} className="object-contain h-12 w-12 mx-auto"/>
                  <div className="font-patua-one text-xl text-center">Resume</div>
                </div>             
              </div>
            </a> 
          </div>
          <div className="flex justify-center pt-yspace pb-yspace z-50">
            <div className=" flex justify-center p-6 bg-violet-600 hover:bg-white w-contact h-28 border-black border-t-[5px] border-b-[10px]  border-r-[10px] border-l-[5px] rounded-[20px]">
              <div><h1 className="font-patua-one text-5xl text-center pr-yspace">Contact Me</h1></div>             
              <Image src={mail} className="object-fill h-11 w-16"/>  
            </div>
          </div>
          
        </section>

      </main>
    </div>
  );
};
