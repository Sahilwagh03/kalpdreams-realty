'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../Card/CardComponets';
import Input from '../Input/Input';
import Button from '../Button/Button';

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        // Clear the error for the field being updated
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formState.name) newErrors.name = 'Name is required';
        if (!formState.email) newErrors.email = 'Email is required';
        if (!formState.phone) newErrors.phone = 'Phone number is required';
        if (!formState.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            // Handle form submission logic here
            console.log("Submitting form with:", formState);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Card className="max-w-md min-w-[350px] w-full !bg-white">
                <CardHeader className='!mb-4 flex items-start '>
                    <h1 className="text-2xl font-bold text-black dark:text-white text-left ">Form</h1>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-col gap-4">
                        <Input
                            type="text"
                            placeholder="Your Name"
                            className='!bg-transparent !dark:bg-transparent rounded-md h-10 px-3'
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                        
                        <Input
                            type="email"
                            placeholder="Your Email"
                            className='!bg-transparent !dark:bg-transparent rounded-md h-10 px-3'
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        
                        <Input
                            type="tel"
                            placeholder="Your Phone Number"
                            className='!bg-transparent !dark:bg-transparent rounded-md h-10 px-3'
                            name="phone"
                            value={formState.phone}
                            onChange={handleInputChange}
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                        
                        <textarea
                            placeholder="Your Message"
                            className='!bg-transparent !dark:bg-transparent rounded-md h-28 resize-none p-3 border-2 '
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                        />
                        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                    </div>
                </CardBody>
                <CardFooter className="pt-4">
                    <Button className="w-full bg-green-600 text-white dark:bg-white dark:text-black h-10" onClick={handleSubmit}>
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ContactForm;
