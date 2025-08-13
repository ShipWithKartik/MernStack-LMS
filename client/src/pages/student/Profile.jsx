import NavBar from '@/components/NavBar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React, { useState } from 'react';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('https://github.com/shadcn.png');
  const [preview, setPreview] = useState('https://github.com/shadcn.png');
  
  const user = {
    name,
    email: 'john.doe@example.com',
    role: 'Student',
    avatar: preview
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      // FileReader allows web apps to read the content of files from user's system.Browser cannot directly access our local file system for security reasons.The FileReader API is the safe way to read file in JS without uploading them to a server
      // reader is an instance of FileReader class.It contains methods and properties to read files as well as event handlers

      reader.onloadend = () => {
        setPreview(reader.result);
      };
      // reader.onloadend is an event handler that is called when the file reading is complete
      // reader.result will hold the contents of the file in the format we wanted (here we used readAsDataURL)
      reader.readAsDataURL(file);
      // Take the file object and convert it to a Base64String
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the user's profile
    setAvatar(preview);
    setIsOpen(false);
  };
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
            
            {/* Edit Profile Button and Dialog */}
            <div className='pt-4 border-t border-border'>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className='w-full'>
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='name'>Name</Label>
                      <Input
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter your name'
                      />
                    </div>
                    
                    <div className='space-y-2'>
                      <Label htmlFor='avatar'>Profile Picture</Label>
                      <div className='flex items-center gap-4'>
                        <div className='h-16 w-16 rounded-full overflow-hidden'>
                          <img 
                            src={preview} 
                            alt='Preview' 
                            className='h-full w-full object-cover'
                          />
                        </div>
                        <div>
                          <Input
                            id='avatar'
                            type='file'
                            accept='image/*'
                            onChange={handleImageChange}
                            className='cursor-pointer'
                          />
                          <p className='text-sm text-muted-foreground mt-1'>
                            JPG, PNG, or GIF (max 5MB)
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className='flex justify-end gap-2 pt-4'>
                      <Button 
                        type='button' 
                        variant='outline' 
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type='submit'>Save Changes</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;


/*
Two Common ways to preview Images in the Browser-:

-> FileReader.readAsDataURL(file):
Reads the entire file and encodes it as Base64String
This is not a pointer , it's the actual file data embedded directly in the string 


-> URL.createObjectURL(file):
Instead of reading and encoding , it creates a temporary URL that points to the file's location in the browser's memory
It does not copy the file it just references it in RAM
We must manually release it with:
URL.revokeObjectURL(objectUrl)
*/
