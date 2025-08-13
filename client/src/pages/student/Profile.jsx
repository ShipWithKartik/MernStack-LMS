import NavBar from '@/components/NavBar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const Profile = () => {
    const user = {
        name:'John Doe',
        email:'john.doe@example.com',
        role:'Student',
        avatar:'https://github.com/shadcn.png'
    }
  return (
    <>
      <NavBar />
      <div className='max-w-4xl mx-auto my-12 px-4 py-8'>
        <h1 className='text-3xl font-bold text-center mb-12 text-foreground'>
          PROFILE
        </h1>
        
        <div className='flex flex-col md:flex-row items-center md:items-start gap-8 bg-card p-8 rounded-lg shadow-sm border'>
          {/* Left Side - Avatar */}
          <div className='flex-shrink-0'>
            <Avatar className='h-40 w-40 border-4 border-primary/20'>
              <AvatarImage 
                src={user.avatar} 
                alt={user.name}
                className='object-cover'
              />
              <AvatarFallback className='text-4xl'>
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Right Side - User Info */}
          <div className='space-y-6 w-full'>
            <div className='space-y-1'>
              <h2 className='text-sm font-medium text-muted-foreground'>Name</h2>
              <p className='text-lg'>{user.name}</p>
            </div>
            
            <div className='space-y-1'>
              <h2 className='text-sm font-medium text-muted-foreground'>Email</h2>
              <p className='text-lg'>{user.email}</p>
            </div>
            
            <div className='space-y-1'>
              <h2 className='text-sm font-medium text-muted-foreground'>Role</h2>
              <p className='text-lg'>{user.role}</p>
            </div>
            
            {/* Edit Profile Button */}
            <div className='pt-4 border-t border-border'>
              <button 
                className='w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors'
                onClick={() => console.log('Edit profile clicked')}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;