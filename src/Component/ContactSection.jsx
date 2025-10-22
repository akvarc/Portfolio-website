import { Instagram, Linkedin, LinkedinIcon, LucideLinkedin, Mail, MapPin, Phone, Send, Twitter, Youtube } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/util'
import { useToast } from '../hooks/use-toast'


const ContactSection = () => {
    const [isSubmittig,setIsSubmitting] = useState(false);
    function handleSubmit(e){
        
        e.preventDefault()
     setIsSubmitting(true);
        setTimeout(()=> {
          toast({
            title:"Message sent!",
            description: "Thank you for your message. I'll get back to you soon."
          })
          setIsSubmitting(false);
        },1500)
        
    }
    const { toast } = useToast();
  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get In <span className='text-primary'>
            Touch
            </span>
        </h2>
       <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
        Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.

       </p>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>
               Contact Information 
            </h3>
            <div className='space-y-6 justify-center'>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                    <Mail className='h-6 w-6 text-primary'/>

                    </div>
                    <div>
                        <h4  className='font-medium'> Email </h4>
                        <a target='__blank' href="mailto:@babluvemra636813@gmail.com" className='text-muted-foreground hover:text-primary transition-colors '>
                           babluvemra636813@gmail.com
                        </a>
                    </div>

                </div>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                    <Phone className='h-6 w-6 text-primary'/>

                    </div>
                    <div>
                        <h4  className='font-medium'> Phone </h4>
                        <a target='__blank' href="tel:+919302814027" className='text-muted-foreground hover:text-primary transition-colors '>
                           +91 9302814027
                        </a>
                    </div>

                </div>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                    <MapPin className='h-6 w-6 text-primary'/>

                    </div>
                    <div>
                        <h4  className='font-medium'>Location </h4>
                        <a target='__blank'  className='text-muted-foreground hover:text-primary transition-colors '>
                           Bhopal,Madhya Pradesh,India
                        </a>
                    </div>

                </div>
              
            </div>
            <div className='pt-8'>
                <h4 className='font-medium mb-4'>
                    Connect With Me
                </h4>
                <div className='flex space-x-4 justify-center'>
                <a href="https://www.linkedin.com/in/amitverma04/" target='__blank'>
                    <LucideLinkedin/>
                </a>
                <a href="#" target='__blank'>
                    <Twitter/>
                </a>
                <a href="#" target='__blank'>
                    <Instagram/>
                </a>
                <a href="# " target='__blank'>
                    <Youtube/>
                </a>
                </div>

            </div>
        </div>
        <div className='bg-card p-8 rounded-lg shadow-xs '>
            <h3 className='text-2xl font-semibold mb-6'>
            Send a Message
            </h3>
            <form className='space-y-6'  onSubmit={handleSubmit}>
             <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                <input type="text" id='name' name='name' required 
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                placeholder='Amit Kumar verma......' />
             </div>
             <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                <input type="email" id='email' name='email' required 
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                placeholder='Example@gmail.com' />
             </div>
             <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                <textarea  id='message' name='message' required 
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' 
                placeholder='Enter your message here....' />
             </div>
            <button type='submit' disabled={isSubmittig} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

             )}>
               {isSubmittig ? "Submitting" : "Send Message"}
             <Send size={16}/>
             </button>
            </form>


        </div>

       </div>

        </div>


    </section>
  )
}
 
export default ContactSection