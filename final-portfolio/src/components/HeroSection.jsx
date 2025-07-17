import React from 'react'

const HeroSection = () => {
  return (
    <section 
     id='hero' 
     className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
        <div className='container max-w-2xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> Folawiyo</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Alabi</span>
                </h1>

                <p className='text-lg md:text-xl text-muted-foreground animate-fade-in-delay-3'>
                    I create stellar web experiences with modern technologies.
                    Specializing in front-end development, I build interfaces that are
                    both beautiful and functional.
                </p>
            </div>
        </div>
    </section>
  )
}

export default HeroSection